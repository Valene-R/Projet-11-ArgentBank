import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'; 

// Thunk : gestion de la connexion utilisateur via API
export const loginUser = createAsyncThunk(
  'auth/loginUser', // Identifiant unique pour cette action asynchrone
  async (userData, thunkAPI) => {
    try {
			// Tentative de connexion avec les données de l'utilisateur : requête POST
      const response = await axios.post('http://localhost:3001/api/v1/user/login', userData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
			// Si la réponse n'est pas "200", rejette avec le message d'erreur
      if (response.status !== 200) {
        return thunkAPI.rejectWithValue(response.data.message || "Erreur de connexion.");
      }

      // Stocke le token d'authentification dans le sessionStorage
      sessionStorage.setItem('token', response.data.body.token);

			// Retourne le token pour être traité par le reducer
      return response.data.body.token;

    } catch (error) {
			// Vérifie si erreur spécifique à un utilisateur non trouvé
      if (error.response && error.response.data.message === "Error: User not found!") {
        return thunkAPI.rejectWithValue("Utilisateur non trouvé !");
      }
			// Autres erreurs
      return thunkAPI.rejectWithValue("Une erreur est survenue lors de la connexion.");
    }
  }
);

// Slice pour la gestion de l'état de l'authentification
const authSlice = createSlice({
  name: 'auth', // Nom du slice, utilisé comme préfixe pour les types d'action
	// État initial pour l'authentification
  initialState: {
      isLoading: false, // Indique si une requête de connexion est en cours
      error: null, // Stocke l'erreur si la connexion échoue
      token: null, // Stocke le token si la connexion réussit
  },
	// Reducers pour des actions synchrones
  reducers: {},
	// Reducers pour les actions générées par le thunk
  extraReducers: (builder) => {
      builder
				// En attente de la réponse de l'API
        .addCase(loginUser.pending, (state) => {
          console.log("Action loginUser.pending déclenchée");
            state.isLoading = true; // Active l'indicateur de chargement
            state.error = null; // Réinitialise l'erreur
        })
				// Connexion réussie : stocke le token
        .addCase(loginUser.fulfilled, (state, action) => {
          console.log("Action loginUser.fulfilled déclenchée avec payload:", action.payload);
            state.isLoading = false;
            state.token = action.payload;
        })
				// Connexion échouée : stocke l'erreur
        .addCase(loginUser.rejected, (state, action) => {
          console.log("Action loginUser.rejected déclenchée avec erreur:", action.payload);
            state.isLoading = false; 
            state.error = action.payload; // Stocke l'erreur reçue en réponse
        });
  }
});

// Exporte le reducer pour l'utiliser dans le store
export default authSlice.reducer;