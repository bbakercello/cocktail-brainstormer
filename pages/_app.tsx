import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { SetStateAction, useEffect, useState } from 'react';
import { GetGPTResponse } from './api/handlers/gptHandleGetCompletion';
import CocktailSuggestions from './api/handlers/cktGetMultiIngred';



function MyApp({ Component, pageProps }: AppProps) {
  // State for the input value
  const [inputValue, setValue] = useState('');

// Function to handle input changes
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setValue(e.target.value);
};

  return (
    <>
    <div className="bg-cyan-400">
      <GetGPTResponse/>
      <div>
        <input type="text" value={inputValue} placeholder="Type here..." onChange={handleChange} />
      </div>
    <CocktailSuggestions/>
      </div>
      </>
  );
}

export default MyApp;
