'use client'
import React, { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="text-3xl gap-8 flex items-center">
      <button
        onClick={() => setCount(count + 1)}
        className="border-2 border-black p-4 rounded-lg hover:bg-black hover:text-white duration-300"
      >
        ➕
      </button>

      <span>{count}</span>

      <button
        onClick={() => setCount(count - 1)}
        className="border-2 border-black p-4 rounded-lg hover:bg-black hover:text-white duration-300"
      >
        ➖
      </button>
    </div>
  )
}

export default Counter
