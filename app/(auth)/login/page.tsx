"use client"; 

import { count } from "console";
import { useState, useEffect } from "react";

const LoginPage = () => {
  const [username, setUsername] = useState<string>("");
  const [mounted, setMounted] = useState<boolean>(false);
  useEffect(() => {
    console.log("LoginPage mounted ✅");
    setMounted(true);
  }, []);

  return (
    <main>
      <h1>Login Page</h1>
      <p>Component mounted: {mounted ? "Yes" : "No"}</p>

      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)} // อัปเดต state
      />

      <p>Current username: {username}</p>
    </main>
  );
};

export default LoginPage;
