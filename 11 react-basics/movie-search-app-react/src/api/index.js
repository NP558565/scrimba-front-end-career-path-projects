import dotenv from "dotenv";

dotenv.config();

export default (
  baseURL = "https://api.themoviedb.org/3/search/movie",
  key = process.env.REACT_APP_API_KEY
) => ({
  async index(query) {
    try {
      const res = await fetch(
        `${baseURL}?api_key=${key}&query=${query}&page=1&include_adult=false`
      );
      if (res.status > 400) {
        throw new Error(res.status);
      }
      return await res.json();
    } catch (error) {
      return `Currently facing issue with: ${error.message}`;
    }
  },
});
