"use client"

import axios from "axios"
import { useState } from "react"

export default function Signin() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return <div className="w-screen h-screen flex justify-center items-center">
        <div className="flex flex-col gap-3 min-w-[300px]">
            <h1 className="text-2xl font-bold text-center mb-2">Todo App</h1>
            <h2 className="text-sm text-center mb-4">Sign in to the todo app</h2>
            
            <input 
                type="text" 
                placeholder="username"
                onChange={e => {
                    setUsername(e.target.value);
                }}
                className="px-3 py-2 border border-black focus:outline-none"
            />
            <input 
                type="password" 
                placeholder="password"
                onChange={e => {
                    setPassword(e.target.value);
                }}
                className="px-3 py-2 border border-black focus:outline-none"
            />

            <button 
                onClick={() => {
                    axios.post("http://localhost:3000/api/v1/signin", {
                        username,
                        password
                    })
                }}
                className="bg-white rounded-md text-black px-3 py-2 border border-black cursor-pointer w-fit self-center"
            >
                Sign in
            </button>
        </div>
    </div>
}