import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,
};

export const tokenSlice = createSlice({
  name: "token",
  initialState: initialState,
  reducers: {
    saveToken: (state, action) => {
      // Sauvegarde le token et la préférence "Remember me"
      const { token, rememberMe } = action.payload;
      state.token = token;
    
      // Gère la sauvegarde ou la suppression du token dans le localStorage
      if (rememberMe) {
        const expiryDate = new Date();
        expiryDate.setTime(expiryDate.getTime() + 24 * 60 * 60 * 1000); // Expire après 24 heures

        const tokenExpiration = {
          value: token,
          expiry: expiryDate.toISOString(),
        };
        // Si l'utilisateur a coché "Remember me", sauvegarde le token dans localStorage
        localStorage.setItem("token", JSON.stringify(tokenExpiration));
        localStorage.setItem("rememberMe", rememberMe);
      } else {
        // Si l'utilisateur n'a pas coché "Remember me", supprime le token de localStorage
        localStorage.removeItem("token");
        localStorage.removeItem("rememberMe");
      }
    },
    removeToken: (state) => {
      // Supprime dans redux
      state.token = null;

      // Supprime dans le localStorage
      localStorage.removeItem("token");
      localStorage.removeItem("rememberMe");
    },
  },
});

export const { saveToken, removeToken } = tokenSlice.actions;

export default tokenSlice.reducer;