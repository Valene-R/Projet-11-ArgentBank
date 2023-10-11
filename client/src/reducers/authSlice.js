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
      await thunkAPI.dispatch(fetchProfile());

			// Retourne le token pour être traité par le reducer
      return {
        token: response.data.body.token,
        userName: response.data.body.userName 
      };

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

export const fetchProfile = createAsyncThunk(
  'auth/fetchProfile',
  async (_, thunkAPI) => {
    try {
      const token = sessionStorage.getItem('token');  
      const response = await axios.post('http://localhost:3001/api/v1/user/profile', {}, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      console.log("Réponse du serveur:", response.data);
      if (response.status !== 200) {
        return thunkAPI.rejectWithValue(response.data.message || "Erreur lors de la récupération du profil.");
      }
      return response.data.body; // Le body contient les informations du profil
    } catch (error) {
      return thunkAPI.rejectWithValue("Une erreur est survenue lors de la récupération du profil.");
    }
  }
);

export const logoutUser = createAsyncThunk(
  'auth/logoutUser',
  async (_, thunkAPI) => {
    // Supprime le token du sessionStorage
    sessionStorage.removeItem('token');
    return true;  // Renvoi true pour indiquer que la déconnexion a réussi
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
    profile: null,
    userName: null,
  },
	// Reducers pour des actions synchrones
  reducers: {
    LOGOUT_USER: (state) => {
      state.token = null;
      state.userName = null;
      state.profile = null;
    }
  },
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
        state.token = action.payload.token;
        state.userName = action.payload.userName; // Le nom d'utilisateur est retourné
      })
			// Connexion échouée : stocke l'erreur
      .addCase(loginUser.rejected, (state, action) => {
        console.log("Action loginUser.rejected déclenchée avec erreur:", action.payload);
        state.isLoading = false; 
        state.error = action.payload; // Stocke l'erreur reçue en réponse
        state.userName = null;
      })
      // Traitement de la récupération du profil
      .addCase(fetchProfile.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.profile = action.payload;
      })
      .addCase(fetchProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        sessionStorage.removeItem('token'); // Supprime le token invalide
        state.token = null;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.token = null;
        state.userName = null;
        state.profile = null; // Réinitialise l'état
      });
  }
});

// Exporte le reducer pour l'utiliser dans le store
export default authSlice.reducer;