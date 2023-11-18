// This is a handler that calls the complete statement api endpoint
import { gptResponseAtom } from '../../jotai/mainAtom';
import { useAtom } from 'jotai';


const handleGetCompletion = async () => {
  const [, setGptResponses] = useAtom(gptResponseAtom);
    try {
      // Here we make a call to the API route
      const response = await fetch('/api/handlers/gptCompleteStatement', {
        method: 'POST',
      });

      // Parse the JSON returned by the API route
      const data = await response.json();
      setGptResponses(prev => [...prev, data]);
      
      if (response.ok) {
        // Handle the data as needed
        console.log('Completion:', data);
      } else {
        // Handle errors if the response is not ok
        console.error('API route returned an error', data.error);
      }
    } catch (error) {
      // Handle any other errors during the fetch
      console.error('Fetch error:', error);
    }

    };

export default handleGetCompletion