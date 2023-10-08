import axios from 'axios';

export const getPictures = async (query, page) => {
  try {
    const response = await axios.get(
      `https://pixabay.com/api/?q=${query}&page=${page}&key=38205040-049809ebda30fd63b3b5c73fa&image_type=photo&orientation=horizontal&per_page=12`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
