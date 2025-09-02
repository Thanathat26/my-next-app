"use client"; 

import { count } from "console";
import { useState, useEffect } from "react";

const username = () => {
    const [username, setUsername] = useState<string>("");
    const [arr, setArr] = useState<string[]>([]);
    const adduser = () => {
        if (username.trim() === "") return;
        setArr([...arr, username]);
        setUsername(""); 
    };

  return (
    <main>
      <h1>Login </h1>
      <p>name:</p>

      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)} // อัปเดต state
      />
        <button onClick={adduser}>Add</button>
      <p>Current username: {username}</p>
            <h2>User List:</h2>
            
      <ul>
        {arr.map((user, index) => (
          <li key={index}>{user}</li> //arr = list map = loop
        ))}
      </ul>
    </main>
  );
};

export default username;
