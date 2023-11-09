import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { SetStateAction, useEffect, useState } from 'react';
import handleGetCompletion from './api/handleGetCompletion';
import { getCocktailSuggestions } from './api/getCocktailSuggestions';

function MyApp({ Component, pageProps }: AppProps) {
  // State for the input value
  const [value, setValue] = useState('');

// Function to handle input changes
const handleChange = (e: { target: { value: SetStateAction<string>; }; }) => {
  setValue(e.target.value);
};

// Function to display the value when the button is clicked
const displayValue = () => {
  console.log(value); // Or handle the display however you prefer
};

  return (
    <div>
      <button className="text-zinc-200" onClick={handleGetCompletion}>
        Chat
      </button>
      <div>
        <input type="text" value={value} placeholder="Type here..." onChange={handleChange} />
      </div>
      {/* Button to display the input value */}
      <button className="text-zinc-200" onClick={displayValue}>
        Display Value
      </button>
      <button className="text-zinc-200" onClick={getCocktailSuggestions}>
        Gin
      </button>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
