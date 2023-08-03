// src/data.js
const url = "https://gist.githubusercontent.com/Beryl1228/52f5e4e375a848bf234fff794751bcbe/raw/609b74eb24151d9888ebc8799507909053802fd2/burgers.json";
const options = {
	method: 'GET',
};



const fetchData = async () => {
  try {
    const response = await fetch(url, options);
    if (response.status !== 200) {
      throw new Error(`Failed to download ${url}, code: ${response.status}`)
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    return null; 
  }
  };
  
  export default fetchData;

