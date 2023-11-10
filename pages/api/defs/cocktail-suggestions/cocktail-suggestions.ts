// models/CocktailSuggestion.ts
import { UserInput } from '../inputs/userInput'; // Assuming you have a UserInput class
import { User } from '../users/User';
import { Ingredient } from './ingredient'; // Assuming you have an Ingredient class

export class CocktailSuggestion {
  id: number;
  ingredients: string; // Assuming JSON or a delimited string
  recipe: string;
  createdAt: Date;
  userInputId?: number | null;
  userInput?: UserInput | null;
  userId: number;
  user: User;
  ingredient?: Ingredient | null;
  ingredientId?: number | null;

  constructor({
    id, ingredients, recipe, createdAt, userInputId, userInput, 
    userId, user, ingredient, ingredientId
  }: {
    id: number;
    ingredients: string;
    recipe: string;
    createdAt: Date;
    userInputId?: number | null;
    userInput?: UserInput | null;
    userId: number;
    user: User;
    ingredient?: Ingredient | null;
    ingredientId?: number | null;
  }) {
    this.id = id;
    this.ingredients = ingredients;
    this.recipe = recipe;
    this.createdAt = createdAt;
    this.userInputId = userInputId;
    this.userInput = userInput;
    this.userId = userId;
    this.user = user;
    this.ingredient = ingredient;
    this.ingredientId = ingredientId;
  }

  // Additional methods and logic can be added here
}
