import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import { Root, SignInContent, UserIcon, StyledForm, Button, Loading, Error } from './form.styled';
import Field from './field/Field';
import RememberMe from './rememberMe/RememberMe';
import { useNavigate } from 'react-router-dom';
import { loginUser, clearError } from '../../reducers/authActions';

const Form = () => {
  // Utilise useDispatch pour dispatcher des actions
  const dispatch = useDispatch();
  // Initialise react-hook-form
  const { register, handleSubmit, setValue, clearErrors } = useForm();
  // Utilise useNavigate pour la navigation
  const navigate = useNavigate();

  // Utilise useSelector pour accéder à l'état du store Redux
  const isLoading = useSelector(state => state.auth.isLoading);
  const error = useSelector(state => state.auth.error);

  // Lors du montage du composant
  useEffect(() => {
    const rememberedEmail = localStorage.getItem('rememberedEmail');
    if (rememberedEmail) {
      setValue('email', rememberedEmail);
      setValue('rememberMe', true); // Coche la case "Remember me"
    }
  }, [setValue]);

  // Gère le focus sur les champs de formulaire et efface les erreurs spécifiques
  const handleFocus = (fieldName) => {
    console.log(`Focus ${fieldName}`);
    if (error) {
      // Dispatch l'action clearError pour effacer les erreurs d'état globales dans Redux
      dispatch(clearError());
    }
    // Utilise clearErrors de React Hook Form pour effacer les erreurs de validation spécifiques au champ en cours
    clearErrors(fieldName); 
  };

  // Gère la soumission du formulaire
  const onSubmit = data => {
    // Déclenche la connexion de l'utilisateur avec les données du formulaire
    dispatch(loginUser(data))
    .then(actionResult => {
      // Si la connexion réussit, redirige vers la page de profil
      if (loginUser.fulfilled.match(actionResult)) {
        navigate('/profile');
      }
    });
  };

  return (
    <Root>
      <SignInContent>
        <UserIcon className="fa fa-user-circle" />
        <h1>Sign In</h1>
        {isLoading && <Loading>Loading...</Loading>}
        {error && <Error>{error}</Error>}
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <Field 
            type="text" 
            id="email" 
            label="Username" 
            register={register} 
            onFocus={() => handleFocus('email')} // Efface l'erreur pour le champ Username
            required 
          />
          <Field 
            type="password" 
            id="password" 
            label="Password" 
            register={register} 
            onFocus={() => handleFocus('password')} // Efface l'erreur pour le champ Password
            required 
          />
          <RememberMe register={register} />
          <Button type="submit">Sign In</Button>
        </StyledForm>
      </SignInContent>
    </Root>
  );
};
    
export default Form;