"use client";
import React, { useState, ChangeEvent } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/app/(firebase)/config";
import { useRouter } from "next/navigation";

interface SignInProps {}

const SignIn: React.FC<SignInProps> = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const router = useRouter();

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSignIn = async () => {
    try {
      const res = await signInWithEmailAndPassword(email, password);
      console.log(res);
      sessionStorage.setItem("user", String(true));
      setEmail("");
      setPassword("");
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-500">
      <div className="bg-white p-8 rounded-xl shadow-md w-96">
        <h1 className="text-2xl font-semibold text-gray-900 mb-6">Sign In</h1>

        <form className="mb-4">
          <label htmlFor="email" className="text-gray-900 block mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
          />
        </form>
        <form className="mb-4">
          <label htmlFor="password" className="text-gray-900 block mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none"
            placeholder="Enter your password"
            value={password}
            onChange={handlePasswordChange}
          />
        </form>

        <p>Don't have an account? <a href="/Register" className="text-grey-600 font-bold cursor-pointer hover:text-blue-900">Register Here!</a></p>
        <button
          className="w-full mt-3 bg-blue-500 text-white py-2 rounded-lg animate-pulse hover:bg-blue-600 transition-all"
          onClick={handleSignIn}
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default SignIn;
