// services/getCocktailSuggestions.js
import { axiosRequest } from "../utils/axios-connect";

export const getCocktailSuggestions = async (): Promise<any[]> => {
    const convertArrayToString = (array: any[]) => array.join(', ');

    const ingredients = ['Dry Vermouth', 'Gin', 'Anis'];
    const paramString = convertArrayToString(ingredients);
    const params = { i: paramString };
    
    const options = {
        method: 'GET',
        url: 'https://the-cocktail-db.p.rapidapi.com/filter.php',
        params: params,
        headers: {
            'X-RapidAPI-Key': 'YOUR_API_KEY',
            'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
        }
    };

    return axiosRequest(options);
};
