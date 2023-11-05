import axios from 'axios';

export const getKeywordsFromChatGPT = async (inputText: string): Promise<string[]> => {
    const response = await axios.post('https://api.openai.com/v1/engines/davinci/completions', {
        prompt: `Extract keywords from: "${inputText}"`,
        max_tokens: 50
    }, {
        headers: {
            'Authorization': `Bearer YOUR_OPENAI_API_KEY`,
            'Content-Type': 'application/json'
        }
    });

    const outputText: string = response.data.choices[0].text.trim();
    return outputText.split(','); // Assuming ChatGPT returns keywords comma-separated
}
