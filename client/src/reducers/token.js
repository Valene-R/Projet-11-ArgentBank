import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,
};

export const tokenSlice = createSlice({
  name: "token",
  initialState: initialState,
  reducers: {
    saveToken: (state, action) => {
      // Sauvegarde dans redux
      state.token = action.payload;

      // Sauvegarde dans le localStorage
      localStorage.setItem("token", action.payload);

    },
    removeToken: (state) => {
      // Supprime dans redux
      state.token = null;

      // Supprime dans le localStorage
      localStorage.removeItem("token");
    },
  },
});

export const { saveToken, removeToken } = tokenSlice.actions;

export default tokenSlice.reducer;