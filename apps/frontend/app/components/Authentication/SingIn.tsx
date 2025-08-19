"use client";
import { FormEvent, useEffect, useState } from "react";
import Input from "../InputBoxes/Input";
import { FcGoogle } from "react-icons/fc";
import PrimaryButton from "../buttons/PrimaryButton";
import { ArrowLeft, X, Check } from "lucide-react";
// import axios from "axios";
import { useRouter } from "next/navigation";
import { getSession, signIn } from "next-auth/react";
import axios from "axios";
import toast from "react-hot-toast";
import ToastNotification from "@/app/ui/Notification";

export default function SingIn() {
  const [email, setEmail] = useState("");
  const [login, setLogin] = useState(false);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [nextField, setNextField] = useState(false);
  const [password, setPassword] = useState("");
  const router = useRouter();

  // Validation states
  const [validations, setValidations] = useState({
    length: false,
    hasLetter: false,
    consecutiveChars: false,
  });

  const [errors, setErrors] = useState({
    email: "",
    firstname: "",
    lastname: "",
  });

  // Email validation function
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Validate password in real-time
  useEffect(() => {
    const validatePassword = (pwd: string) => {
      if (pwd.length === 0) {
        setValidations({
          length: false,
          hasLetter: false,
          consecutiveChars: false,
        });
        return;
      }

      // Check length (at least 12 characters)
      const lengthValid = pwd.length >= 12;

      // Check if contains at least one letter
      const hasLetterValid = /[a-zA-Z]/.test(pwd);

      // Check consecutive characters rule
      let consecutiveCharsValid = true;
      if (pwd.length < 20) {
        // For passwords under 20 characters, check for more than 2 consecutive identical characters
        for (let i = 0; i < pwd.length - 2; i++) {
          if (pwd[i] === pwd[i + 1] && pwd[i + 1] === pwd[i + 2]) {
            consecutiveCharsValid = false;
            break;
          }
        }
      }

      setValidations({
        length: lengthValid,
        hasLetter: hasLetterValid,
        consecutiveChars: consecutiveCharsValid,
      });
    };

    validatePassword(password);
  }, [password]);

  // Validate fields in real-time
  useEffect(() => {
    const newErrors = { email: "", firstname: "", lastname: "" };

    if (email && !validateEmail(email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!login && firstname.trim() === "" && firstname !== "") {
      newErrors.firstname = "First name is required";
    }

    if (!login && lastname.trim() === "" && lastname !== "") {
      newErrors.lastname = "Last name is required";
    }

    setErrors(newErrors);
  }, [email, firstname, lastname, login]);

  // Check if first step is valid
  const isFirstStepValid = () => {
    if (!email || !validateEmail(email)) return false;
    if (!login && (!firstname.trim() || !lastname.trim())) return false;
    return true;
  };

  // Check if password step is valid
  const isPasswordStepValid = () => {
    if (!password.trim()) return false;
    if (
      !login &&
      (!validations.length ||
        !validations.hasLetter ||
        !validations.consecutiveChars)
    ) {
      return false;
    }
    return true;
  };

  async function handleOnSubmit(e: FormEvent) {
    e.preventDefault();

    if (!nextField) {
      // Validate first step fields
      if (!email || !validateEmail(email)) {
        setErrors((prev) => ({ ...prev, email: "Enter a valid email" }));
        return;
      }

      if (!login) {
        if (!firstname.trim()) {
          setErrors((prev) => ({
            ...prev,
            firstname: "First name is required",
          }));
          return;
        }
        if (!lastname.trim()) {
          setErrors((prev) => ({ ...prev, lastname: "Last name is required" }));
          return;
        }
      }

      setNextField(true);
      return;
    }

    // Validate password step
    if (!login) {
      if (
        !validations.length ||
        !validations.hasLetter ||
        !validations.consecutiveChars
      ) {
        return; // Don't proceed if password validation fails
      }
    }

    if (!password.trim()) {
      return; // Don't proceed if password is empty
    }

    if (!login) {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/auth/signup`,
        {
          email: email,
          firstname: firstname,
          lastname: lastname,
          password: password,
        },
        {
          withCredentials: true,
        },
      );
      if (response.data.success === false) {
        toast.custom((t) => (
          <ToastNotification type="error" t={t}>
            <div className="text-red-500 flex items-center gap-2   ">
              {response.data.msg}
            </div>
          </ToastNotification>
        ));
        return;
      }
      if (response.status !== 200) return;
      if (!response.data.user) return;
    }
    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (result?.ok) {
      const session = await getSession();
      if (!session?.user.backendToken) return;
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/auth/set-cookie`,
        {
          token: session.user.backendToken,
        },
        {
          withCredentials: true,
        },
      );
      if (response.status !== 200) return;
      if (!response.data.msg) return;
      console.log("Cookie set", response.data.msg);
      router.push("/zap/dashboard");
    }

    try {
      // Additional error handling if needed
    } catch (error) {
      console.error("Axios error:", error);
    }
  }

  async function handleGoogleSignUp() {
    const result = await signIn("google");
    console.log("Google sign in result", result);
    if (result?.ok) {
      const session = await getSession();
      if (!session?.user.backendToken) return;
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/auth/set-cookie`,
        {
          token: session.user.backendToken,
        },
        {
          withCredentials: true,
        },
      );
      router.push("/zap/dashboard");
    }
  }

  return (
    <div className="max-w-[450px] border border-black/10 p-6 transition-all duration-500">
      <form className="max-w-[390px]" onSubmit={handleOnSubmit}>
        {!nextField ? (
          <div className="flex flex-col gap-4">
            {/* Input Fields */}
            <Input
              value={email}
              onChange={setEmail}
              label="* Work email"
              placeholder=""
            />
            {errors.email && (
              <div className="text-red-500 text-sm -mt-2">{errors.email}</div>
            )}

            {!login && (
              <div className="flex flex-col gap-2">
                <div className="flex gap-2">
                  <div className="flex-1">
                    <Input
                      value={firstname}
                      onChange={setFirstname}
                      label="* First name"
                      placeholder=""
                    />
                    {errors.firstname && (
                      <div className="text-red-500 text-sm mt-1">
                        {errors.firstname}
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <Input
                      value={lastname}
                      onChange={setLastname}
                      label="* Last name"
                      placeholder=""
                    />
                    {errors.lastname && (
                      <div className="text-red-500 text-sm mt-1">
                        {errors.lastname}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Terms */}
            {!login && (
              <div>
                <div className="text-sm">* Indicates a required field.</div>
                <div className="text-sm font-medium">
                  By signing up, you agree to Zapier&apos;s{" "}
                  <a
                    className="text-blue-700 underline"
                    href="https://zapier.com/legal"
                  >
                    terms of service and privacy policy.
                  </a>
                </div>
              </div>
            )}

            {/* Button */}
            <button type="submit" disabled={!isFirstStepValid()}>
              <PrimaryButton
                size="small"
                // @ts-ignore
                disabled={!isFirstStepValid()}
              >
                Get started for free
              </PrimaryButton>
            </button>

            {/* Log In Link */}
            <div className="text-sm font-medium text-center flex justify-center items-center gap-1">
              {login ? "Don't have an account?" : "Already have an account?"}
              {login ? (
                <a
                  className="text-blue-700 underline cursor-pointer"
                  onClick={() => setLogin(false)}
                >
                  Sign up
                </a>
              ) : (
                <a
                  className="text-blue-700 underline cursor-pointer"
                  onClick={() => setLogin(true)}
                >
                  Log in
                </a>
              )}
            </div>
          </div>
        ) : (
          // Show password field when nextField is true
          <div className="flex flex-col gap-4">
            <div
              className="flex gap-1 items-center text-blue-700 hover:cursor-pointer"
              onClick={() => {
                setNextField(false);
              }}
            >
              {/* @ts-ignore */}
              <ArrowLeft /> Back
            </div>
            <div className="flex gap-0.5 text-sm">
              {login
                ? "You&apos;re logging in as"
                : "You&apos;re signing up as"}{" "}
              <div className="font-bold">{email}</div>
            </div>
            <Input
              placeholder=""
              value={password}
              onChange={setPassword}
              label="* Password"
              type="password"
            />
            {!login && (
              <div className="flex flex-col text-sm gap-2">
                <div className="flex gap-2 items-center">
                  <div
                    className={`transition-colors duration-200 ${validations.length ? "text-green-600" : "text-red-500"}`}
                  >
                    {/* @ts-ignore */}
                    {validations.length ? <Check size={16} /> : <X size={16} />}
                  </div>
                  <span
                    className={
                      validations.length ? "text-green-700" : "text-gray-700"
                    }
                  >
                    Must be at least 12 characters
                  </span>
                </div>
                <div className="flex gap-2 items-center">
                  <div
                    className={`transition-colors duration-200 ${validations.hasLetter ? "text-green-600" : "text-red-500"}`}
                  >
                    {/* @ts-ignore */}
                    {validations.hasLetter ? (
                      <Check size={16} />
                    ) : (
                      <X size={16} />
                    )}
                  </div>
                  <span
                    className={
                      validations.hasLetter ? "text-green-700" : "text-gray-700"
                    }
                  >
                    Must contain at least one letter
                  </span>
                </div>
                <div className="flex gap-2 items-start">
                  <div
                    className={`transition-colors duration-200 mt-0.5 ${validations.consecutiveChars ? "text-green-600" : "text-red-500"}`}
                  >
                    {/* @ts-ignore */}
                    {validations.consecutiveChars ? (
                      <Check size={16} />
                    ) : (
                      <X size={16} />
                    )}
                  </div>
                  <span
                    className={
                      validations.consecutiveChars
                        ? "text-green-700"
                        : "text-gray-700"
                    }
                  >
                    If under 20 characters, it can&apos;t have more than 2
                    consecutive identical characters.
                  </span>
                </div>
              </div>
            )}
            {!login && (
              <div>
                <div className="text-sm">* Indicates a required field.</div>
                <div className="text-sm">
                  By signing up, you agree to Zapier&apos;s{" "}
                  <a
                    className="text-blue-700 underline"
                    href="https://zapier.com/legal"
                  >
                    terms of service
                  </a>{" "}
                  and{" "}
                  <a
                    className="text-blue-700 underline"
                    href="https://zapier.com/privacy"
                  >
                    privacy policy.
                  </a>
                </div>
              </div>
            )}
            <button type="submit" disabled={!isPasswordStepValid()}>
              <PrimaryButton
                size="small"
                // @ts-ignore
                disabled={!isPasswordStepValid()}
              >
                Get Started For Free
              </PrimaryButton>
            </button>
            <div className="text-center text-sm">
              Already have an account?{" "}
              <a
                className="text-blue-700 underline cursor-pointer"
                onClick={() => setLogin(true)}
              >
                Log In
              </a>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
