"use client";
import { useState } from "react";
const RegisterPage = () => {
  const [user,getUser]= useState<string>("");
  const [acc,getAcc]=useState<string[]>([]);
  const [search, setSearch] = useState<string>("");
  const addbotton =() =>{
    if(user.trim() ==="") return;
    getAcc([...acc,user]);
    getUser("");
  
  };
  const filter = acc.filter((u) => {
    return u.toLowerCase().includes(search.toLowerCase())});

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
      <hr />
      <input
        type="text"
        placeholder="Search user..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <h2>User List:</h2>
      <ul>
        {filter.map((u, i) => (
          <li key={i}>{u}</li>
        ))}
      </ul>
    </main>
  )

};

export default RegisterPage;