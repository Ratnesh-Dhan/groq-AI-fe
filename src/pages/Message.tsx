import Navbar from '@/components/Navbar';
import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';

const Message = () => {
    const [prompt, setPrompt] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async () => {
        if (!prompt.trim()) {
            toast.error("Please enter a prompt");
            return;
        }
        axios.post('http://localhost:3001/message', {
          prompt: prompt,
        }).then((response)=> {
          toast.success("works");
          setMessage(response.data.result);
          console.log(response.data);
        }).catch((e)=>{
          console.log(e.message);
        });
    }

  return (
    <React.Fragment>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 relative">
      <Navbar />
        <div className="w-full max-w-4xl text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Ask AI a Question</h1>
        <p className="text-xl text-gray-600">Enter your prompt below to get started.</p>
      </div>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md mx-auto">
        
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
          placeholder='Prompt'
          onChange={(e) => setPrompt(e.target.value)}
          value={prompt}
          rows={4}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          onClick={handleSubmit}
        >
          Ask AI
        </button>
        </div>
        {message && (
          <div className="mt-4">
            <pre className="text-gray-700 whitespace-pre-wrap md:mx-24 font-bold md:text-lg mb-20 border rounded p-5">{message}</pre>
          </div>
        )}
    </div>
    </React.Fragment>
  )
}

export default Message