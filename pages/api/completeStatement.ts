// pages/api/completeStatement.ts
import * as dotenv from 'dotenv';
dotenv.config();


// pages/api/completeStatement.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';
import feelings from './chat-templates/feelings';

let result = feelings()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Initialize the OpenAI client with your API key
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  // You can perform checks here to make sure it's a POST request, etc.

  try {
    // Perform the OpenAI completion
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: result }],
      model: 'gpt-3.5-turbo',
    });

    // Send the completion data back to the client
    res.status(200).json(chatCompletion);
    console.log(chatCompletion)
  } catch (error) {
    // Handle any errors by sending an error response
    console.error('OpenAI error:', error);
    res.status(500).json({ error: 'Error completing the statement' });
  }
};
