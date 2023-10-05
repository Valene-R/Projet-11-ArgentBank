import React from 'react';
import { useForm } from 'react-hook-form';
import { Root, SignInContent, UserIcon, StyledForm, Button } from './Form.styled';
import Field from './Field/Field';
import RememberMe from './RememberMe/RememberMe';

const Form = () => {
  // Initialise react-hook-form pour gérer les formulaires
  const { register, handleSubmit } = useForm();

  // Fonction pour traiter les données du formulaire lors de sa soumission
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Root>
      <SignInContent>
        <UserIcon className="fa fa-user-circle" />
        <h1>Sign In</h1>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          {/* Le prop "register" est utilisé pour lier les champs à react-hook-form */}
          <Field type="text" id="username" label="Username" register={register} required />
          <Field type="password" id="password" label="Password" register={register} required />
          <RememberMe register={register} />
          <Button type="submit">Sign In</Button>
        </StyledForm>
      </SignInContent>
    </Root>
  );
};

export default Form;