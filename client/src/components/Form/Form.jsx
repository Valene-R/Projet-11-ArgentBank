import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../reducers/authSlice'; 
import { Root, SignInContent, UserIcon, StyledForm, Button, Loading, Error } from './form.styled';
import Field from './field/Field';
import RememberMe from './rememberMe/RememberMe';
import { useNavigate } from 'react-router-dom';


const Form = () => {
  // Hook Redux pour dispatcher des actions et sélectionner des valeurs du store
  const dispatch = useDispatch();
  // Initialise les méthodes de react-hook-form
  const { register, handleSubmit } = useForm();
  // Hook de navigation pour rediriger l'utilisateur après la connexion
  const navigate = useNavigate();

  // Utilise useSelector pour obtenir l'état de l'authentification depuis le store Redux
  const isLoading = useSelector(state => state.auth.isLoading);
  const error = useSelector(state => state.auth.error);
  const token = useSelector(state => state.auth.token); // Si un token est présent, l'utilisateur est connecté

  // Si un token est obtenu, redirige vers la page de profil
  useEffect(() => {
    if (token) {
      navigate('/profile');
    }
  }, [token, navigate])

  // Gère la soumission du formulaire de connexion
  const onSubmit = async (data) => {
    try {
      const userData = {
        "email": data.email,
        "password": data.password
      };
      // Dispatche l'action de connexion avec les données de l'utilisateur
      dispatch(loginUser(userData));
    } catch (error) {
      console.error("Une erreur s'est produite lors de la connexion :", error);
    }
  };

  return (
    <Root>
      <SignInContent>
        <UserIcon className="fa fa-user-circle" />
        <h1>Sign In</h1>
        {/* Affiche un loader si la connexion est en cours */}
        {isLoading && <Loading>Loading...</Loading>}
        {/* Affiche une erreur si la connexion a échoué */}
        {error && <Error>{error}</Error>}
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <Field type="text" id="email" label="Username" register={register} required />
          <Field type="password" id="password" label="Password" register={register} required />
          <RememberMe register={register} />
          <Button type="submit">Sign In</Button>
        </StyledForm>
      </SignInContent>
    </Root>
  );
};

export default Form;