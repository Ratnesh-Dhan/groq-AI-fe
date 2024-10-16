import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
      // Process a POST request
      console.log("requesting...");
      const body = req.body;
      const { email, prompt} = body
      axios.post(`${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}/submit`, {
          email: email,
          prompt: prompt
        }, {
          headers: {
            'Access-Control-Allow-Origin': '*'
          }
        })
        .then(response => {
          console.log('Response:', response.data);
          // Send success response to the client
          res.status(200).json({ message: 'Submission successful', data: response.data });
        })
        .catch(error => {
          console.error('Error:', error);
          res.status(500).json({ message: 'Submission failed', error: error.message });
        });
      
    } else {
      // Handle any other HTTP method
    }
  }