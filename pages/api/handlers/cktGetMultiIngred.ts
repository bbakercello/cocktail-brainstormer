// services/getCocktailSuggestions.js
import { axiosRequest } from "../utils/axios-connect";

export const getMultiIngred = async (): Promise<any[]> => {
    const convertArrayToString = (array: any[]) => array.join(', ');

    const ingredients = ['Dry Vermouth', 'Gin', 'Anis'];
    const paramString = convertArrayToString(ingredients);
    const params = { i: paramString };
    
    const options = {
        method: 'GET',
        url: 'https://the-cocktail-db.p.rapidapi.com/filter.php',
        params: params,
        headers: {
            'X-RapidAPI-Key': '991e79e7e6msh7d055065a1d1f6dp1056d0jsnbb3ac970d78b',
            'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
        }
    };

    return axiosRequest(options);
};
