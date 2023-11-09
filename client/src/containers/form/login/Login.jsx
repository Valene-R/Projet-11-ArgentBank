import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { ROUTES } from "../../../router/routes";
import { useNavigate } from "react-router-dom";

import { callApiLogin } from "../../../services/api";
import { saveToken } from "../../../reducers/token";
import { clearError, startLoading, stopLoading } from '../../../reducers/user';

import { Root, SignInContent, UserIcon, StyledForm, Button, Loading, Error } from './login.styled';
import Field from '../../../components/field/Field';
import RememberMe from '../../../components/rememberMe/RememberMe';

const FormLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // Initialise le hook de formulaire pour la validation et la manipulation des données du formulaire
  const { register, handleSubmit, formState: { errors }, clearErrors } = useForm();

  // Etat initial du message d'erreur
  const [errorMessage, setErrorMessage] = useState(null);

  // Utilise useSelector pour accéder à l'état du store Redux
  const isLoading = useSelector((state) => state.user.isLoading);
  const userErrors = useSelector((state) => state.user.errors);

  // Gère la soumission du formulaire
  const onSubmit = async (data) => {
    const { email, password } = data;
    dispatch(startLoading()); //  Commence le chargement

    try {
      // Effectue la demande d'appel à l'API de la route login
      const token = await callApiLogin(email, password);
       // Demande à sauvegarder le token dans redux
      dispatch(saveToken(token));
      // Redirige vers la page profile
      navigate(ROUTES.USER);

    } catch (error) {
      // En cas d'erreur, affiche un message d'erreur
      setErrorMessage("Invalid credentials");

    } finally {
      // Arrête l'indicateur de chargement
      dispatch(stopLoading()); 
    }
  };


  // Gère le focus sur les champs du formulaire
  const handleFocus = (fieldName) => {
    // Efface les erreurs spécifiques du champ du store Redux et du state local
    if (userErrors && userErrors[fieldName]) {
      dispatch(clearError(fieldName));
    }
    if (errorMessage) {
      setErrorMessage(null);
    }
    // Utilise clearErrors de React Hook Form
    clearErrors(fieldName);
  };

  return (
    <Root>
      <SignInContent>
        <UserIcon className="fa fa-user-circle" />
        <h1>Sign In</h1>
        {isLoading && <Loading>Loading...</Loading>}
        {errorMessage && <Error>{errorMessage}</Error>}
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <Field 
            type="email" 
            id="email" 
            label="Email" 
            register={register}
            validation={{
              required: 'Email is required'
            }}
            errorMessage={errors.email && errors.email.message}
          />
          <Field  
            type="password" 
            id="password" 
            label="Password" 
            register={register}
            validation={{ 
              required: 'Password is required'
            }}
            onFocus={() => handleFocus('password')} // Efface l'erreur pour le champ Password
            errorMessage={errors.password && errors.password.message}
          />
          <RememberMe register={register} />
          <Button type="submit">Sign In</Button>
        </StyledForm>
      </SignInContent>
    </Root>
  );
};

export default FormLogin;