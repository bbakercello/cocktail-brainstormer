import axios from 'axios';

export const getCocktailSuggestions = async (keywords: string[]): Promise<any[]> => {
    const options = {
        method: 'GET',
        url: 'https://the-cocktail-db.p.rapidapi.com/filter.php',
        params: {i: keywords.join(', ')},  // Adjust this if the API accepts multiple ingredients or keywords differently
        headers: {
            'X-RapidAPI-Key': '8645c095b5msh3031e7a07d29a90p1a2698jsnafb7cda5c560',
            'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
