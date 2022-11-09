import axios from "axios"

const APIRequest = async () => {
    try {
      const response = await axios.get('https://api.chucknorris.io/jokes/random');
      return response;
    } catch (error) {
      console.error(error);
    }
  }

  export default APIRequest