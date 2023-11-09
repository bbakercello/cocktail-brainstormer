import axios from 'axios';

export const getCocktailSuggestions = async (): Promise<any[]> => {
    const options = {
        method: 'GET',
        url: 'https://the-cocktail-db.p.rapidapi.com/search.php',
        params: {s:'vodka'},  // Adjust this if the API accepts multiple ingredients or keywords differently
        headers: {
            'X-RapidAPI-Key': '991e79e7e6msh7d055065a1d1f6dp1056d0jsnbb3ac970d78b',
            'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        console.log(response.data)
        return response.data;
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            // Now we can access the axios-specific error properties like `error.response`
            if (error.response) {
                console.error('Response data:', error.response.data);
                console.error('Status:', error.response.status);
                console.error('Headers:', error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                console.error('Request:', error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.error('Error Message:', error.message);
            }
        } else {
            // Error is not from axios, handle accordingly
            console.error('An unexpected error occurred:', error);
        }
        // You might still want to re-throw the error or handle it appropriately
        throw error;
    }
}
//i: keywords.join(', ')