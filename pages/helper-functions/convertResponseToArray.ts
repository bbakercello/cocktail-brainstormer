
export  default  function extractArrayFromString(str: string) {
    const jsonString = str.replace("Response: ", "").trim();
    const validJsonString = jsonString.replace(/'/g, '"');
    
    try {
      const array = JSON.parse(validJsonString);
      return array;
    } catch (error) {
      console.error('Error parsing string to array:', error);
      return []; // Return an empty array in case of error
    }
  }
  