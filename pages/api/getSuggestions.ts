import type { NextApiRequest, NextApiResponse } from 'next';
import { getKeywordsFromChatGPT } from '../../utils/getKeyWordsFromChatGPT';
import { getCocktailSuggestions } from '../../utils/getCocktailSuggestions';

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        const userInput: string = req.body.input;
        const keywords = await getKeywordsFromChatGPT(userInput);
        const suggestions = await getCocktailSuggestions(keywords);
        res.status(200).json(suggestions);
    } else {
        res.status(405).end(); // Method Not Allowed
    }
}
