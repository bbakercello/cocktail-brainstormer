import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { SetStateAction, useEffect, useState } from 'react';
import handleGetCompletion from './api/handlers/gptHandleGetCompletion';
import { getMultiIngred } from './api/handlers/cktGetMultiIngred';



function MyApp({ Component, pageProps }: AppProps) {
  // State for the input value
  const [inputValue, setValue] = useState('');

// Function to handle input changes
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setValue(e.target.value);
};

// Function to handle setting a value in Redis
const handleSetRedisValue = async () => {
  await fetch('/api/redis', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ key: 'userInput', value: inputValue }),
  });
};

// Function to handle getting a value from Redis
const handleGetRedisValue = async () => {
  const response = await fetch(`/api/redis?key=userInput`);
  const data = await response.json();
  console.log(data.value); // The value from Redis
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
      <button className="text-zinc-200" onClick={handleSetRedisValue}>
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
