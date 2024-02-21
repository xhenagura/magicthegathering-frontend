// services/cardService.js
import axios from 'axios';

const BASE_URL = 'https://api.magicthegathering.io/v1';

export const fetchCards = async (count) => {
  try {
    const response = await axios.get(`${BASE_URL}/cards?pageSize=${count}`);
    return response.data.cards;
  } catch (error) {
    console.error('Error fetching cards:', error);
    return [];
  }
};
