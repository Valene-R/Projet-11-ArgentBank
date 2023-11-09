import axios from "axios";

/**
 * API de connexion avec l'email et le mot de passe fournis
 */
export const callApiLogin = async (email, password) => {
  return await axios
    .post("http://localhost:3001/api/v1/user/login", {
      email,
      password,
    })
    .then((response) => response.data.body.token)
    .catch((err) => {
      throw new Error(err);
    });
};

/**
 * API de récupèration des données du profil utilisateur en utilisant le token d'authentification 
 */
export const callApiProfile = async (token) => {
  return await axios
    .post(
      "http://localhost:3001/api/v1/user/profile",
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((response) => {
      const { firstName, lastName, userName } = response.data.body;
      return {
        firstname: firstName,
        lastname: lastName,
        username: userName,
      };
    })
    .catch((error) => {
      throw new Error(error);
    });
};

/**
 * API de mise à jour du nom d'utilisateur avec le nouveau nom d'utilisateur sauvegardé
 */
export const callApiUserUpdateUsername = async (token, username) => {
  
  if (!token) {
    throw new Error("No token provided");
  }

  return await axios
    .put(
      "http://localhost:3001/api/v1/user/profile",
      { 
        userName: username 
      },
      { 
        headers: { Authorization: `Bearer ${token}` } 
      },
    )
    .then((response) => {
      const { userName } = response.data.body;
      return { 
        username: userName 
      };
    })
    .catch((error) => {
      //  Vérifie spécifiquement les erreurs d'authentification
      if (error.response && error.response.status === 401) {
        throw new Error("Unauthorized: Invalid or expired token");
      } else {
        throw new Error(error.message || "An error occurred");
      }
    });
};