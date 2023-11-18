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

  return (
    <>
      <button className="text-zinc-200" onClick={handleGetCompletion}>
        Chat
      </button>
      <div>
        <input type="text" value={inputValue} placeholder="Type here..." onChange={handleChange} />
      </div>

    <button className="text-zinc-200" onClick={() => getMultiIngred}>
        Gin
      </button><h1 className="text-3xl font-bold underline">
        Hello world!
      </h1><Component {...pageProps} />
      </>
  );
}

export default MyApp;
