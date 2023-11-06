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

// API pour mettre à jour le profil de l'utilisateur
export const updateUserApi = async (userData) => {
  const token = getToken();
  // Vérifie la présence du token avant de faire l'appel API
  if (!token) {
    throw new Error("No token available for updating the profile.");
  }

  try {
    console.log("Mise à jour du profil avec ces données:", userData);
    // Requête PUT
    const response = await axios.put('http://localhost:3001/api/v1/user/profile', userData, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
    console.log("Réponse de la mise à jour:", response.data);
    // Retourne les données du profil mises à jour
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la mise à jour:", error);
    // Gère les différents types d'erreurs lors de l'appel API
    if (error.response) {
      // Lorsque le serveur répond avec un statut d'erreur
      throw new Error('Error updating profile');
    } else if (error.request) {
      // Lorsque la requête a été faite mais aucune réponse n'a été reçue
      throw new Error('No response received during profile update');
    } else {
      // Lorsque la préparation de la requête conduit à une erreur
      throw new Error('Error setting up profile update request');
    }
  }
};