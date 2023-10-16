import { createAsyncThunk } from '@reduxjs/toolkit';
import { loginUserApi, fetchProfileApi } from '../services/api';
import { storeToken, removeToken } from '../services/tokenService';

// Action asynchrone pour connecter un utilisateur
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (userData, thunkAPI) => {
    try {
      // Appelle l'API pour connecter l'utilisateur et récupère le token
      const token = await loginUserApi(userData);

      // Gére le stockage du token (localStorage ou sessionStorage) selon le choix "Remember Me"
      storeToken(token, userData.rememberMe);

      // Récupére les informations de profil une fois connecté
      await thunkAPI.dispatch(fetchProfile());

      // Retourne le token et le nom d'utilisateur pour mettre à jour l'état du store Redux
      return {
        token: token,
        userName: userData.userName
      };

    } catch (error) {
      // Gére les erreurs spécifiques et renvoie l'erreur appropriée
      if (error.message === "User not found !") {
        return thunkAPI.rejectWithValue("User not found !");
      }
      return thunkAPI.rejectWithValue("An error occurred during login.");
    }
  }
);

// Action asynchrone pour récupérer le profil de l'utilisateur
export const fetchProfile = createAsyncThunk(
  'auth/fetchProfile',
  async (_, thunkAPI) => {
    try {
      // Appelle l'API pour récupérer le profil de l'utilisateur
      const userProfile = await fetchProfileApi();
      return userProfile;
    } catch (error) {
      // Si la session est expirée, déconnecte l'utilisateur
      if (error.message === "Session expired. Please log in again.") {
        thunkAPI.dispatch(logoutUser());
      }
      // Renvoie l'erreur pour mettre à jour l'état du store Redux
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Action pour déconnecter l'utilisateur
export const logoutUser = createAsyncThunk(
  'auth/logoutUser',
  async (_, thunkAPI) => {
    // Supprime le token du navigateur (que ce soit du localStorage ou du sessionStorage)
    removeToken();
    // Indique que la déconnexion a réussi
    return true;
  }
);