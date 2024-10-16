import axios from 'axios';
import React, { useState } from 'react'

const Index = () => {
  const [input, setInput] = React.useState('');
  const [prompt, setPrompt] = useState("");

  const handleClick = () => {
    // Make a POST request using axios
    // axios.post(`${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}/submit`, {
    //   email: input,
    //   prompt: prompt
    // }, {
    //   headers: {
    //     'Access-Control-Allow-Origin': '*'
    //   }
    // })
    // .then(response => {
    //   console.log('Response:', response.data);
    //   // Handle the response here
    // })
    // .catch(error => {
    //   console.error('Error:', error);
    // });

    axios.post(`/api/submit`, {
      email: input,
      prompt: prompt
    }, {
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    })
    .then(response => {
      console.log('Response:', response.data);
      // Handle the response here
    })
    .catch(error => {
      console.error('Error:', error);
    });
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
          onChange={(e) => setPrompt(e.target.value)}
          value={prompt}
          rows={4}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          onClick={handleClick}
        >
          Ask AI
        </button>
      </div>
    </div>
  )
}

export default Index
