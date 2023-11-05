import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { getCocktailSuggestions } from './api/getCocktailSuggestions'
import { useState } from 'react';
import handleGetCompletion from './api/handleGetCompletion';
function MyApp({ Component, pageProps }: AppProps) {
  return <div>
    <button className="text-zinc-200"onClick={() => handleGetCompletion()}>Chat</button>
    <h1>test</h1>
    <button className="text-zinc-200"onClick={() => getCocktailSuggestions()}>Gin</button>
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <Component {...pageProps} /></div>
}

export default MyApp
