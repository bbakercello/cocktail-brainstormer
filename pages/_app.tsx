import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { SetStateAction, useEffect, useState } from 'react';
import handleGetCompletion from './api/handlers/gptHandleGetCompletion';
import { getMultiIngred } from './api/handlers/cktGetMultiIngred';
import { createRedisInstance } from '../redis';

const redis = createRedisInstance();



function MyApp({ Component, pageProps }: AppProps) {
  // State for the input value
  const [inputValue, setValue] = useState('');

// Function to handle input changes
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setValue(e.target.value);
};

// Function to cache and display the input value
const handleCacheResponse = async () => {
  await redis.set('userInput', inputValue);
  const value = await redis.get('userInput');
  console.log(value); // Should log the value of 'userInput'
};

  return (
    <div>
      <button className="text-zinc-200" onClick={handleGetCompletion}>
        Chat
      </button>
      <div>
        <input type="text" value={inputValue} placeholder="Type here..." onChange={handleChange} />
      </div>
      {/* Button to display the input value */}
      <button className="text-zinc-200" onClick={handleCacheResponse}>
        Display Value
      </button>
      <button className="text-zinc-200" onClick={getMultiIngred}>
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
