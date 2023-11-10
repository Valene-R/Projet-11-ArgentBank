import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  firstname: "",
  lastname: "",
  username: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {

		// Action pour sauvegarder les informations de l'utilisateur
    saveUserInfos: (state, action) => {
      state.firstname = action.payload.firstname;
      state.lastname = action.payload.lastname;
      state.username = action.payload.username;
    },

		// Action pour mettre à jour le nom d'utilisateur
    updateUsername: (state, action) => {
      state.username = action.payload;
    },

		// Action pour déconnecter l'utilisateur
		logoutUser: () => {
      // Réinitialise l'état à l'état initial
      return initialState;
    },
  },
});

export const { saveUserInfos, updateUsername, logoutUser } = userSlice.actions;

export default userSlice.reducer;