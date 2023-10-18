import React, { useEffect} from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Root, SignInContent, UserIcon, StyledForm, Button, Loading, Error } from './form.styled';
import Field from './field/Field';
import RememberMe from './rememberMe/RememberMe';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../reducers/authActions'; 

const Form = () => {
  // Utilise useDispatch pour dispatcher des actions
  const dispatch = useDispatch();
  // Initialise react-hook-form
  const { register, handleSubmit, setValue } = useForm();
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

  const onSubmit = (data, event) => {
    event.preventDefault();
    // Prépare les données de l'utilisateur pour la connexion
    const userData = {
      email: data.email,
      password: data.password,
      rememberMe: data.rememberMe
    };
    // Si "Remember Me" est coché, stocke l'email de l'utilisateur dans le localStorage
    if (data.rememberMe) {
      localStorage.setItem('rememberedEmail', data.email);
    // Sinon, supprime l'email du localStorage
    } else {
      localStorage.removeItem('rememberedEmail');
    }
  
    // Dispatche l'action de connexion avec les données de l'utilisateur
    dispatch(loginUser(userData))
      .then(actionResult => {
        // Vérifie si l'action de connexion a été exécutée avec succès
        if (loginUser.fulfilled.match(actionResult)) {
          // Après une connexion réussie, redirige vers /profile
          navigate('/profile');
        }
      }
    );
  };

  return (
    <Root>
      <SignInContent>
        <UserIcon className="fa fa-user-circle" />
        <h1>Sign In</h1>
        {isLoading && <Loading>Loading...</Loading>}
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