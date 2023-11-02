// Stocke le token dans localStorage ou sessionStorage
export const storeToken = (token, rememberMe) => {
  if (rememberMe) {
    // Stocke le token dans le localStorage pour des sessions persistantes
    localStorage.setItem('token', token);
    // Définit une date d'expiration pour le token, 24 heures
    const expirationDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
    localStorage.setItem('tokenExpiration', expirationDate.toISOString());
  } else {
    // Stocke le token dans le sessionStorage pour une utilisation en session unique
    sessionStorage.setItem('token', token);
  }
}

// Récupére le token
export const getToken = () => {
  return localStorage.getItem('token') || sessionStorage.getItem('token');
}

// Supprime le token de l'utilisateur et sa date d'expiration
export const removeToken = () => {
	if (localStorage.getItem('token')) {
    localStorage.removeItem('token');
    localStorage.removeItem('tokenExpiration');
  } else {
    sessionStorage.removeItem('token');
  }
}
 
// Vérifie l'expiration du token
export const isTokenValid = () => {
  if (localStorage.getItem('token')) {
    const expirationDate = new Date(localStorage.getItem('tokenExpiration'));
    return (new Date()) < expirationDate;
  } else if (sessionStorage.getItem('token')) {
    return true; // Considére toujours le token dans sessionStorage comme valide
  } else {
    return false;
  }
}