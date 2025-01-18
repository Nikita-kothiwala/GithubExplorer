import axios from 'axios';

const BASE_URL = 'https://api.github.com';

export const searchRepositories = async (query, page = 1) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/search/repositories?q=${query}&per_page=10&page=${page}`
    );
    return response.data.items;
  } catch (error) {
    // Handle network error
    if (!error.response) {
      throw new Error('Network error. Please check your internet connection.');
    }
    throw error;
  }
};
