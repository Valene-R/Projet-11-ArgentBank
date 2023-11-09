import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  firstname: "",
  lastname: "",
  username: "",
	errors: {}, 
	isLoading: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {

		// Action pour sauvegarder les informations de l'utilisateur
    saveUserInfos: (state, action) => {

      console.log(action.payload)
      
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

		// Action pour faire disparaître le message d'erreur
		clearError: (state, action) => {
      const fieldName = action.payload; // le nom du champ à effacer
      if (fieldName) {
				// Efface l'erreur spécifique pour le champ donné en le définissant à une valeur null
				state.errors[fieldName] = null;
      } else {
        // Réinitialise les erreurs
        state.errors = {};
      }
    },

		 // Action pour définir l'état de chargement à vrai
		 startLoading: (state) => {
      state.isLoading = true;
    },

    // Action pour définir l'état de chargement à faux
    stopLoading: (state) => {
      state.isLoading = false;
    },
  },
});

export const { saveUserInfos, updateUsername, logoutUser, clearError, startLoading, stopLoading } = userSlice.actions;

export default userSlice.reducer;