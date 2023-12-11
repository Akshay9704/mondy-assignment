"use client";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/app/(firebase)/config";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const [user] = useAuthState(auth);
  const router = useRouter();

  useEffect(() => {
    if (!user && typeof window !== 'undefined' && !sessionStorage.getItem('user')) {
      router.push("/login");
    }
  }, [user]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-black">
      <div className="max-w-md p-8 border rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-6">Welcome to Your App</h1>
        <div className="mt-6">
          <button className="w-full py-2 bg-red-500 text-white rounded focus:outline-none hover:bg-red-400">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
