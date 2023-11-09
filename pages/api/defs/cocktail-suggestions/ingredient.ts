// models/Ingredient.ts
import { CocktailSuggestion } from "./cocktail-suggestions";

export class Ingredient {
  id: number;
  name: string;
  // Not including the relationship in the class itself, but you can if it's needed for your logic
  // cocktailSuggestions: CocktailSuggestion[];

  constructor({ id, name }: { id: number; name: string }) {
    this.id = id;
    this.name = name;
  }

  // You can add additional methods here as needed
}
