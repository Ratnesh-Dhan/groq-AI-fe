import axios from 'axios';
import Groq from 'groq-sdk';
import React, { useState } from 'react'

const index = () => {
  const [input,  setInput] = React.useState('');
  const [promt, setPromt] = useState("");
  const key = "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";
 

  const handleClick = () => {


    // Make a POST request using axios
    axios.post('http://localhost:3001/submit', {
      email: input,
      prompt: promt
    })
    .then(response => {
      console.log('Response:', response.data);
      // Handle the response here
    })
    .catch(error => {
      console.error('Error:', error);
    })
    
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-4xl text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Our AI-Powered Platform</h1>
        <p className="text-xl text-gray-600">Harness the power of AI to transform your ideas into reality. Enter your email and prompt below to get started.</p>
      </div>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
          placeholder='Email'
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
          placeholder='Prompt'
          onChange={(e) => setPromt(e.target.value)}
          value={promt}
          rows={4}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          onClick={handleClick}
        >
          Ask Groq
        </button>
      </div>
    </div>
  )
}



export default index

