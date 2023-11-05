import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { getCocktailSuggestions } from '../utils/getCocktailSuggestions'
import { useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  return <div>
    <button onClick={() => getCocktailSuggestions(['sad','depressed','lonely'])}></button>
    <Component {...pageProps} /></div>
}

export default MyApp
