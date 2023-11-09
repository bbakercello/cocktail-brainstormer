import * as dotenv from 'dotenv';
dotenv.config();
import type { NextApiRequest, NextApiResponse } from 'next';

import OpenAI from 'openai';
import {PromptTemplates} from './chat-templates/templates'
import { UserInput } from './defs/inputs/userInput';

// Here we will need to call some functionality to run a conditional on which template to use.

// Here we need to pass in the input from the frontend through req.body on a form submit
const userInput: UserInput = {
  input: "I feel like something tropical and refreshing",
};

// establish input as variable to pass to open AI with prompt  
const input = PromptTemplates.feelingsPrompt(userInput);

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
      messages: [{ role: 'user', content: input }],
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
