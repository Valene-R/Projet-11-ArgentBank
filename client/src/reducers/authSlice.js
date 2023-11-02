import { createSlice } from '@reduxjs/toolkit';
import { loginUser, fetchProfile, logoutUser } from '../reducers/authActions';

// État initial de l'authentification
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoading: false,
    error: null,
    token: null,
    profile: null,
    userName: null,
  },
  // Reducers pour des actions synchrones
  reducers: {
    LOGOUT_USER: (state) => {
      state.token = null;
      state.userName = null;
      state.profile = null;
    },
    CLEAR_ERROR: (state) => {
      state.error = null;
    }
  },
  // Reducers pour des actions asynchrones (gestion des états pending, fulfilled, rejected)
  extraReducers: (builder) => {
    builder
      // Lors de la tentative de connexion d'un utilisateur
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true; // Active de l'indicateur de chargement
        state.error = null; // Réinitialise les erreurs éventuelles
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false; // Désactive de l'indicateur de chargement
        state.token = action.payload.token; // Mise à jour du token
        state.userName = action.payload.userName; // Mise à jour du nom d'utilisateur
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false; 
        state.error = action.payload; // Mise à jour de l'erreur
        state.userName = null; // Réinitialise le nom d'utilisateur
        state.token = null;
      })

      // Lors de la tentative de récupération du profil d'un utilisateur
      .addCase(fetchProfile.pending, (state) => {
        state.isLoading = true;
        state.error = null; // Réinitialise les erreurs éventuelles
      })
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.profile = action.payload; // Mise à jour du profil
      })
      .addCase(fetchProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.token = null; // Réinitialise le token
      })

      // Lors de la déconnexion d'un utilisateur
      .addCase(logoutUser.fulfilled, (state) => {
        state.token = null;
        state.userName = null;
        state.profile = null;
      });
  },
});

export const { LOGOUT_USER, CLEAR_ERROR } = authSlice.actions;
export default authSlice.reducer;