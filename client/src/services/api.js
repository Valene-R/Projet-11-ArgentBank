import axios from 'axios';
import { getToken } from '../services/tokenService';

// API pour se connecter en tant qu'utilisateur
export const loginUserApi = async (userData) => {
  try {
		// Requête POST
    const response = await axios.post('http://localhost:3001/api/v1/user/login', userData, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

		// Vérifie si le statut de réponse est différent de 200
    if (response.status !== 200) {
      throw new Error(response.data.message || "Connection error.");
    }

		// Vérifie la présence du token dans la réponse
    if (!response.data.body || !response.data.body.token) {
      throw new Error("Token missing in the API response");
    }

		// Retourne le token récupéré
  	return response.data.body.token;

  } catch (error) {
		// Gére les erreurs spécifiques à l'utilisateur non trouvé
    if (error.response && error.response.data.message === "Error: User not found !") {
      throw new Error("User not found !");
    }
		// Gére toute autre erreur lors de la connexion
  	throw new Error("An error occurred during connection.");
  }
};

// API pour récupérer le profil de l'utilisateur
export const fetchProfileApi = async () => {
  const token = getToken(); 
    if (!token) {
      throw new Error("No token available to retrieve the profile.");
    }

  try {
		// Requête POST
    const response = await axios.post('http://localhost:3001/api/v1/user/profile', {}, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });

		// Vérifie si le statut de réponse est différent de 200
    if (response.status !== 200) {
      throw new Error(response.data.message || "Error fetching the profile.");
    }

		// Retourne les données du profil
    return response.data.body;

  } catch (error) {
    console.log("Erreur lors de la requête à l'API:", error.response ? error.response.data : error.message); // log ajouté
		// Gére les erreurs spécifiques à une session expirée
    if (error.response && error.response.status === 401) {
      throw new Error("Session expired. Please log in again.");
    }
		// Gére toute autre erreur lors de la récupération du profil
    throw error;
    }
};