import React from 'react';
import { useAtom } from 'jotai';
import { gptResponseAtom } from '../../jotai/gptResponseAtom';
import extractArrayFromString from '../../helper-functions/convertResponseToArray';
export const GetGPTResponse = () => {
  const [, setGptResponse] = useAtom(gptResponseAtom);

  const handleGetCompletion = async () => {
    try {
      const response = await fetch('/api/handlers/gptCompleteStatement', {
        method: 'POST',
      });

      if (!response.ok) {
        throw new Error(`API route returned an error: ${response.status}`);
      }

      const data = await response.json();
      console.log('Completion:', data.choices[0].message.content);
      let gptResponse = extractArrayFromString(data.choices[0].message.content)
      setGptResponse(gptResponse);
    } catch (error) {
      console.error('Error fetching GPT response:', error);
    }
  };

  return (
    <div>
      <button onClick={handleGetCompletion}>Get Completion</button>
    </div>
  );
};
