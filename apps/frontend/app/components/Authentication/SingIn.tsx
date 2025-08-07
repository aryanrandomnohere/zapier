"use client";
import { FormEvent, useState } from "react";
import Input from "../InputBoxes/Input";
import { FcGoogle } from "react-icons/fc";
import PrimaryButton from "../buttons/PrimaryButton";
import { IoArrowBack } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
// import axios from "axios";
import { useRouter } from "next/navigation";
import { getSession, signIn } from "next-auth/react";
import axios from "axios";
export default function SingIn() {
  const [email, setEmail] = useState("");
  const [login, setLogin] = useState(false);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [nextField, setNextField] = useState(false);
  const [password, setPassword] = useState("");
  const router = useRouter();
  async function handleOnSubmit(e: FormEvent) {
    e.preventDefault();
    if (!nextField) {
      setNextField(true);
      return;
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
      router.push("/zap/dashboard"); // use router from useRouter()
    }
    //   const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/auth/login`, {
    //     email: email,
    //     password: password,
    //   },{
    //     withCredentials: true,
    //   });
    //   if(!response.data.user) return null;
    //   const user = response.data.user;
    //   const result = await signIn("credentials", {
    //   redirect: false,
    //   email,
    //   id: user.id,
    //   name: user.name,
    //   image: user.image,
    //   userId: user.userId,
    //   zapmail: user.zapmail,
    // });
    try {
      // const response = await axios.post(
      //   `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/signin`,
      //   {
      //     email,
      //     firstname,
      //     lastname,
      //     password,
      //   },
      // );
      // localStorage.setItem("token", response.data.token);
      // router.push("/dashboard");
      // console.log("Response:", response.data);
    } catch (error) {
      //@ts-ignore
      console.error(
        "Axios error:",
        // error.response ? error.response.data : error.message,
      );
    }
  }
  async function handleGoogleSignUp() {
    const result = await signIn("google");
    if (result?.ok) {
      router.push("/zap/dashboard"); // use router from useRouter()
    }
  }
  return (
    <div className="max-w-[450px] border border-black/10 p-6  transition-all duration-500">
      <form className="max-w-[390px]" onSubmit={handleOnSubmit}>
        {!nextField ? (
          <div className="flex flex-col gap-4">
            {/* Google Sign-Up Button */}
            <div
              onClick={handleGoogleSignUp}
              className="flex items-center min-w-[390px] p-2 bg-blue-500/90 rounded hover:bg-blue-600 transition-all duration-500 cursor-pointer w-60 text-center justify-between"
            >
              <div className="bg-white p-0.5 rounded text-sm">
                <div className="text-2xl">
                  {" "}
                  <FcGoogle />
                </div>
              </div>
              <div className="flex items-center gap-2 flex-grow justify-center">
                <div className="text-sm font-extrabold text-white">
                  Sign up with Google
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="flex items-center justify-center">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="mx-2 text-gray-500 font-bold text-sm">OR</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            <div className="text-sm">* Indicates a required field.</div>

            {/* Input Fields */}
            <Input
              value={email}
              onChange={setEmail}
              label="* Work email"
              placeholder=""
            />
            {!login && (
              <div className="flex">
                <Input
                  value={firstname}
                  onChange={setFirstname}
                  label="* First name"
                  placeholder=""
                />
                <Input
                  value={lastname}
                  onChange={setLastname}
                  label="* Last name"
                  placeholder=""
                />
              </div>
            )}

            {/* Terms */}
            {!login && (
              <div className="text-sm font-medium">
                By signing up, you agree to Zapier's{" "}
                <a
                  className="text-blue-700 underline"
                  href="https://zapier.com/legal"
                >
                  terms of service and privacy policy.
                </a>
              </div>
            )}

            {/* Button */}
            <button type="submit">
              <PrimaryButton size="small">Get started for free</PrimaryButton>
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
              <IoArrowBack /> Back
            </div>
            <div className="flex gap-0.5 text-sm ">
              {login ? "You're logging in as" : "You're signing up as"}{" "}
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
              <div className="flex flex-col text-sm">
                <div className="flex gap-1 items-center ">
                  <div className="text-green-700">
                    <RxCross2 />
                  </div>
                  Must be at least 12 characters
                </div>
                <div className="flex gap-1 items-center">
                  <RxCross2 />
                  Must contain at least one letter
                </div>
                <div className="flex gap-1 ">
                  <div className="text-xl">
                    <RxCross2 />
                  </div>
                  If under 20 characters, it can't have more than 2 consecutive
                  identical characters.
                </div>
              </div>
            )}
            {!login && (
              <div className="text-sm">
                By signing up, you agree to Zapier's{" "}
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
            )}
            <button type="submit">
              <PrimaryButton size="small">Get Started For Free</PrimaryButton>
            </button>
            <div className="text-center text-sm">
              Already have an account?{" "}
              <a className="text-blue-700 underline">Log In</a>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
