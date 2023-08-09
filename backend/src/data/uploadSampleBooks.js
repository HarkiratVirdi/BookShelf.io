const fs = require('fs');
const axios = require('axios');
const path = require('path');
const FormData = require('form-data');

const sampleBooks = require('./books');

const BASE_URL = 'http://localhost:3001/api/products';

async function uploadSampleBooks() {
  try {
    for (const bookData of sampleBooks) {
      const formData = new FormData();
      formData.append('title', bookData.title);
      formData.append('author', bookData.author);
      formData.append('genre', bookData.genre.join(','));
      formData.append('price', bookData.price);
      formData.append('description', bookData.description);

      const imagePath = path.join(__dirname, 'images', bookData.image);
      formData.append('image', fs.createReadStream(imagePath));

      await axios.post(`${BASE_URL}/book`, formData, {
        headers: {
          ...formData.getHeaders(),
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0Y2FjOGM0OWIxNmY2YmMxY2U3M2EwOCIsImlhdCI6MTY5MTAxMTI2OCwiZXhwIjoxNjkzNjAzMjY4fQ.WbCPYaI5ntWxnlxvQlhFPNQr3FGKvJNl6W-S_i2cUvc',
        },
      });

      console.log(`Uploaded book: ${bookData.title}`);
    }
  } catch (error) {
    console.error('Error uploading books:', error);
  }
}

uploadSampleBooks();
