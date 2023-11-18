// services/getCocktailSuggestions.js
import { axiosRequest } from "../utils/axios-connect";
let apiHost = process.env.X_RAPIDAPI
let apiKey = process.env.X_RAPIDAPI_KEY
export const getMultiIngred = async (ingredients: string[]): Promise<any[]> => {
    const convertArrayToString = (array: string[]) => array.join(', ');

    const paramString = convertArrayToString(ingredients);
    const params = { i: paramString };
    
    const options = {
        method: 'GET',
        url: 'https://the-cocktail-db.p.rapidapi.com/filter.php',
        params: params,
        headers: {
            'X-RapidAPI-Key': `${apiKey}`, // Ensure apiKey is defined and accessible
            'X-RapidAPI-Host': `${apiHost}` // Ensure apiHost is defined and accessible
        }
    };

    return axiosRequest(options);
};
