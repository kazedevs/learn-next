"use client";

import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!username.trim() || !password.trim()) {
      setError("Username and password are required");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      await axios.post("/api/v1/signup", {
        username,
        password,
      });
      router.push("/signin");
    } catch (error) {
      console.error('Signup failed:', error);
      setError('Failed to sign up. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="flex flex-col gap-3 min-w-[300px]">
        <h1 className="text-2xl font-bold text-center mb-2">Todo App</h1>
        <h2 className="text-sm text-center mb-4">Sign up to the todo app</h2>
        
        {error && (
          <div className="p-2 bg-red-100 text-red-700 text-xs text-center rounded mb-2">
            {error}
          </div>
        )}
        
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="px-3 text-black py-2 border border-black focus:outline-none"
          disabled={isLoading}
        />
        
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="px-3 text-black py-2 border border-black focus:outline-none"
          disabled={isLoading}
        />

        <button
          onClick={handleSubmit}
          disabled={isLoading}
          className="bg-white rounded-md text-black px-3 py-2 border border-black cursor-pointer w-fit self-center"
        >
          {isLoading ? 'Signing up...' : 'Sign up'}
        </button>
      </div>
    </div>
  );
}
