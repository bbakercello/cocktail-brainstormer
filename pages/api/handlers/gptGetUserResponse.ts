import type { NextApiRequest, NextApiResponse } from 'next';
import { UserInput } from '../defs/inputs/userInput';

export default function chatHandler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    // Assuming you're sending data as a JSON object
    const userInput: UserInput = req.body;
    
    // Do something with userInput.input
    console.log(userInput.input);
    
    res.status(200).json({ message: 'Input received' });
  } else {
    // Handle any other HTTP method
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
