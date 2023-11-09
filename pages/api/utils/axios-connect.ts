// utils/axiosRequest.js

import axios, { AxiosRequestConfig } from 'axios';

export const axiosRequest = async (options: AxiosRequestConfig): Promise<any> => {
    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            if (error.response) {
                console.error('Response data:', error.response.data);
                console.error('Status:', error.response.status);
                console.error('Headers:', error.response.headers);
            } else if (error.request) {
                console.error('Request:', error.request);
            } else {
                console.error('Error Message:', error.message);
            }
        } else {
            console.error('An unexpected error occurred:', error);
        }
        // Depending on your error handling strategy, you might re-throw the error or not
        throw error;
    }
};
