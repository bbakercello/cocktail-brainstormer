// components/CompletionButton.tsx

import axios from 'axios';
import { useState } from 'react';

const handleGetCompletion = async () => {
    try {
      // Here we make a call to the API route
      const response = await fetch('/api/completeStatement', {
        method: 'POST',
      });

      // Parse the JSON returned by the API route
      const data = await response.json();

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