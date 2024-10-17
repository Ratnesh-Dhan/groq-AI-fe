import Navbar from '@/components/Navbar';
import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import Mail from './Mail';

const Index = () => {
  

  return (
    <React.Fragment>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 relative">
      <Navbar />
    <div className="w-full max-w-4xl text-center mb-8 mx-auto">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Our AI-Powered Platform</h1>
      <p className="text-xl text-gray-600">Harness the power of AI to transform your ideas into reality. Explore our platform to learn more about how AI can help you.</p>
    </div>
    </div>
    </React.Fragment>
  )
}

export default Index
