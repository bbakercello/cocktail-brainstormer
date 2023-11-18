import { atom } from 'jotai';

// Atom to store an array of strings
export const gptResponseAtom = atom<string[]>([]);