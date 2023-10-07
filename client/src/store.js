import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/authSlice';

const store = configureStore({
  reducer: {
    auth: authReducer
  },
  // Active les outils de développement (DevTools) uniquement en mode développement
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;

