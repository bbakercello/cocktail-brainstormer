// models/User.ts

import { CocktailSuggestion } from "../cocktail-suggestions/cocktail-suggestions";
import { UserInput } from "../inputs/userInput";

export class User {
  id: number;
  email: string;
  name: string | null;
  image: string | null;
  oauthProvider: string;
  oauthId: string;
  createdAt: Date;
  updatedAt: Date;
  // Assuming you have corresponding TypeScript types for UserInput and CocktailSuggestion
  userInputs: UserInput[];
  cocktailSuggestions: CocktailSuggestion[];

  constructor({ 
    id, email, name, image, oauthProvider, oauthId, 
    createdAt, updatedAt, userInputs, cocktailSuggestions 
  }: {
    id: number; 
    email: string; 
    name: string | null; 
    image: string | null; 
    oauthProvider: string; 
    oauthId: string; 
    createdAt: Date; 
    updatedAt: Date; 
    userInputs: UserInput[]; 
    cocktailSuggestions: CocktailSuggestion[];
  }) {
    this.id = id;
    this.email = email;
    this.name = name;
    this.image = image;
    this.oauthProvider = oauthProvider;
    this.oauthId = oauthId;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.userInputs = userInputs;
    this.cocktailSuggestions = cocktailSuggestions;
  }

  // Additional methods and logic can be added here
}
