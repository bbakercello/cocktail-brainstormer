import React, { useState } from 'react';
import { useAtom } from 'jotai';
import { gptResponseAtom } from '../../jotai/gptResponseAtom';
import { axiosRequest } from '../utils/axios-connect';

import * as dotenv from 'dotenv';
dotenv.config();

const CocktailSuggestions = () => {
  const [gptResponse] = useAtom(gptResponseAtom);
  const [cocktails, setCocktails] = useState<any[]>([]); // Assuming the structure of cocktail data
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null); // Error can be a string or null

  const apiHost = process.env.NEXT_PUBLIC_X_RAPIDAPI_HOST;
  const apiKey = process.env.NEXT_PUBLIC_X_RAPIDAPI_KEY;
  
  const getMultiIngred = async () => {
    setIsLoading(true);
    setError(null);
    let type = typeof(gptResponse)
    console.log(`gpt response: ${type}`)
    // Split the string into an array based on commas
    const params = { i: gptResponse };
    const options = {
      method: 'GET',
      url: 'https://the-cocktail-db.p.rapidapi.com/filter.php',
      params: params,
      headers: {
        'X-RapidAPI-Key': apiKey,
        'X-RapidAPI-Host': apiHost
      }
    };

    try {
      const response = await axiosRequest(options);
      setCocktails(response);
    } catch (err) {
      setError('Failed to fetch cocktail suggestions'); // Now it's correctly typed
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <button onClick={getMultiIngred} disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Get Cocktail Suggestions'}
      </button>
      {error && <p>Error: {error}</p>}
      <ul>
        {cocktails.map((cocktail, index) => (
          <li key={index}>{cocktail.name}</li> // Adjust according to your data structure
        ))}
      </ul>
    </div>
  );
};

export default CocktailSuggestions;
