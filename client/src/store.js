import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/rootReducer';


const store = configureStore({
  reducer: rootReducer, 
  devTools: process.env.NODE_ENV !== 'production', // Active les outils de développement (DevTools) uniquement en mode développement
});

export default store;
