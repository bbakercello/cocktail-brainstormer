import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { getCocktailSuggestions } from '../utils/getCocktailSuggestions'
import { useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  return <div>
    <button onClick={() => getCocktailSuggestions(['sad','depressed','lonely'])}></button>
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <Component {...pageProps} /></div>
}

export default MyApp
