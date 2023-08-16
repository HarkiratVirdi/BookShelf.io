import axios from 'axios';

export const fetchBookById = async (bookId) => {
    try {
      const response = await axios.get(`/api/products/book/${bookId}`);
      return response;
    } catch (error) {
      console.error('Error fetching book:', error);
    }
  };