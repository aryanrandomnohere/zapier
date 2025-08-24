"use client";
import { FormEvent, useEffect, useState } from "react";
import Input from "../InputBoxes/Input";
import PrimaryButton from "../buttons/PrimaryButton";
import { ArrowLeft, X, Check } from "lucide-react";
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

  // --- Validation logic (same as your code) ---
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

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
      const lengthValid = pwd.length >= 12;
      const hasLetterValid = /[a-zA-Z]/.test(pwd);
      let consecutiveCharsValid = true;
      if (pwd.length < 20) {
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

  const isFirstStepValid = () => {
    if (!email || !validateEmail(email)) return false;
    if (!login && (!firstname.trim() || !lastname.trim())) return false;
    return true;
  };

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

    // ✅ First step validation
    if (!nextField) {
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

    // ✅ Password step validation
    if (!password.trim()) {
      setErrors((prev) => ({ ...prev, password: "Password is required" }));
      return;
    }

    if (
      !login &&
      (!validations.length ||
        !validations.hasLetter ||
        !validations.consecutiveChars)
    ) {
      setErrors((prev) => ({
        ...prev,
        password: "Password does not meet requirements",
      }));
      return;
    }

    try {
      // ✅ Signup (only if not logging in)
      if (!login) {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/auth/signup`,
          { email, firstname, lastname, password },
          { withCredentials: true },
        );

        if (response.status !== 200 || !response.data.user) {
          toast.custom((t) => (
            <ToastNotification type="error" t={t}>
              <div className="text-red-500 flex items-center gap-2">
                {response.data.msg || "Signup failed"}
              </div>
            </ToastNotification>
          ));
          return;
        }
      }

      // ✅ Login (with credentials)
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (!result?.ok) {
        toast.error("Invalid credentials. Please try again.");
        return;
      }

      // ✅ Fetch session and set cookie
      const session = await getSession();
      if (!session?.user.backendToken) return;

      const cookieRes = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/auth/set-cookie`,
        { token: session.user.backendToken },
        { withCredentials: true },
      );

      if (cookieRes.status === 200 && cookieRes.data.msg) {
        console.log("Cookie set", cookieRes.data.msg);
        router.push("/zap/dashboard");
      }
    } catch (error) {
      console.error("Auth error:", error);
      toast.error("Something went wrong. Please try again.");
    }
  }

  return (
    <div className="w-full max-w-md border border-black/10 rounded-lg p-4 sm:p-6 mx-auto">
      <form className="w-full" onSubmit={handleOnSubmit}>
        {!nextField ? (
          <div className="flex flex-col gap-4">
            {/* Email */}
            <Input
              value={email}
              onChange={setEmail}
              label="* Work email"
              placeholder=""
            />
            {errors.email && (
              <div className="text-red-500 text-sm -mt-2">{errors.email}</div>
            )}

            {/* Name fields only for signup */}
            {!login && (
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="w-full sm:w-1/2">
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
                <div className="w-full sm:w-1/2">
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
            )}

            {/* Terms */}
            {!login && (
              <div className="text-sm">
                <p>* Indicates a required field.</p>
                <p className="font-medium">
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
                    privacy policy
                  </a>
                  .
                </p>
              </div>
            )}

            {/* Button */}
            <button type="submit" disabled={!isFirstStepValid()}>
              <PrimaryButton size="small" disabled={!isFirstStepValid()}>
                {login ? "Login" : "Get started for free"}
              </PrimaryButton>
            </button>

            {/* Log In / Sign Up Toggle */}
            <div className="text-sm font-medium text-center flex justify-center items-center gap-1">
              {login ? "Don't have an account?" : "Already have an account?"}
              <a
                className="text-blue-700 underline cursor-pointer"
                onClick={() => setLogin(!login)}
              >
                {login ? "Sign up" : "Log in"}
              </a>
            </div>
          </div>
        ) : (
          // Password step
          <div className="flex flex-col gap-4">
            <div
              className="flex gap-1 items-center text-blue-700 hover:cursor-pointer"
              onClick={() => setNextField(false)}
            >
              <ArrowLeft size={16} /> Back
            </div>
            <div className="flex gap-0.5 text-sm">
              {login ? "You're logging in as" : "You're signing up as"}{" "}
              <span className="font-bold">{email}</span>
            </div>

            <Input
              placeholder=""
              value={password}
              onChange={setPassword}
              label="* Password"
              type="password"
            />

            {/* Password validation only for signup */}
            {!login && (
              <div className="flex flex-col text-sm gap-2">
                <div className="flex gap-2 items-center">
                  {validations.length ? (
                    <Check size={16} className="text-green-600" />
                  ) : (
                    <X size={16} className="text-red-500" />
                  )}
                  <span
                    className={
                      validations.length ? "text-green-700" : "text-gray-700"
                    }
                  >
                    Must be at least 12 characters
                  </span>
                </div>
                <div className="flex gap-2 items-center">
                  {validations.hasLetter ? (
                    <Check size={16} className="text-green-600" />
                  ) : (
                    <X size={16} className="text-red-500" />
                  )}
                  <span
                    className={
                      validations.hasLetter ? "text-green-700" : "text-gray-700"
                    }
                  >
                    Must contain at least one letter
                  </span>
                </div>
                <div className="flex gap-2 items-start">
                  {validations.consecutiveChars ? (
                    <Check size={16} className="text-green-600 mt-0.5" />
                  ) : (
                    <X size={16} className="text-red-500 mt-0.5" />
                  )}
                  <span
                    className={
                      validations.consecutiveChars
                        ? "text-green-700"
                        : "text-gray-700"
                    }
                  >
                    If under 20 characters, can’t have more than 2 consecutive
                    identical characters.
                  </span>
                </div>
              </div>
            )}

            <button type="submit" disabled={!isPasswordStepValid()}>
              <PrimaryButton size="small" disabled={!isPasswordStepValid()}>
                {login ? "Login" : "Get Started For Free"}
              </PrimaryButton>
            </button>

            <div className="text-center text-sm">
              {login ? "Don't have an account?" : "Already have an account?"}{" "}
              <a
                className="text-blue-700 underline cursor-pointer"
                onClick={() => setLogin(!login)}
              >
                {login ? "Sign up" : "Log in"}
              </a>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
