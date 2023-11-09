// templates/PromptTemplates.ts
import { UserInput } from "../defs/inputs/userInput";

export class PromptTemplates {
  static feelingsPrompt(userInput: UserInput): string {
    return `Can you take the following statement and return three cocktail ingredients back to me based on the statement: "${userInput.input}" The response should have the following format: Response: ['ingredient 1', 'ingredient 2', 'ingredient 3']`;
  }

  // Add more methods for different prompts as needed
  /*
  static anotherPrompt(userInput: UserInput): string {
    // ... Another prompt format based on userInput
  }
  */

  // ... More methods for other types of prompts
}
