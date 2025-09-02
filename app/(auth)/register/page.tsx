"use client";
import { useState } from "react";
const RegisterPage = () => {
  const [user,getUser]= useState<string>("");
  const [acc,getAcc]=useState<string[]>([]);
  const addbotton =() =>{
    if(user.trim() ==="") return;
    getAcc([...acc,user]);
    getUser("");
  
  };
  return (
    <main>
      <h1>Register Page</h1>
      <p>name:</p>

      <input
        type="text"
        placeholder="Enter username"
        value={user}
        onChange={(e) => getUser(e.target.value)} 
      />
      <button onClick={addbotton}>Add</button>
      <h1> 
        {acc.map((u,i)=>(
          <li key={i}>{u}</li>
        ))}
      </h1>
    </main>
  )

};

export default RegisterPage;