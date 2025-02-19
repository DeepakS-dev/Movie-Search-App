import axios from "axios";

const API_BASE_URL = "https://swapi.dev/api";

export const fetchCharacter = async (name) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/people/?search=${name}`);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching character:", error);
    return [];
  }
};

export const fetchPlanets = async (query) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/planets/?search=${query}`
    );
    return response.data.results;
  } catch (error) {
    console.error("Error fetching planets:", error);
    return [];
  }
};
