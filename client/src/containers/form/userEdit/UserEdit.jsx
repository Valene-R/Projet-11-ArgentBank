import React, { useEffect, useState } from "react"; 
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import { callApiUserUpdateUsername } from "../../../services/api"; 
import { saveUserInfos } from "../../../reducers/user"; 

import EditField from "../../../components/editField/EditField"; 
import { Button, Error, Form, WrapperBtn } from "./userEdit.styled"; 

const FormUserEdit = ({ onSaved, onCanceled }) => {
  // Hooks pour interagir avec Redux
  const dispatch = useDispatch();
  const tokenRedux = useSelector((state) => state.token);
  const userRedux = useSelector((state) => state.user);
  
  const { handleSubmit, register } = useForm();
  
  const [errorMessage, setErrorMessage] = useState(null);
  const [editedUser, setEditedUser] = useState({ ...userRedux });

   // Met à jour l'état édité lorsque le state change
  useEffect(() => {
    setEditedUser(prevUser => ({
      ...prevUser,
      username: userRedux.username
    }));
    }, [userRedux.username]); 
    
  // Gère la soumission du formulaire
  const onSubmit = async (data) => {
     const usernameToSave = data.username

    if (!usernameToSave.trim()) {
      setErrorMessage("Username cannot be empty");
      return;
    }
    try {
      await callApiUserUpdateUsername(tokenRedux.token, usernameToSave.trim());
      // Met à jour le state de Redux avec le nouveau username
      dispatch(saveUserInfos({ ...userRedux, username: usernameToSave.trim() }));
      onSaved();
    } catch (error) {
      setErrorMessage(error.message || "An error occurred");
    }
  };

  // Gère les changements de champ
  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setEditedUser(prevUser => ({
      ...prevUser,
      [name]: value,
    }));
    if (name === 'username') {
      // Réinitialise le message d'erreur lors de la saisie
      setErrorMessage('');
    }
  };
  
  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <EditField 
          id="userName"
          label="User name:"
          value={editedUser.username}
          {...register('username', {
            onChange: handleFieldChange, // Pour supprimer le message d'erreur à la saisie
          })}
        />
        <EditField 
          id="firstName"
          label="First name:"
          value={editedUser.firstname}
          readOnly={true}
        />
        <EditField 
          id="lastName"
          label="Last name:"
          value={editedUser.lastname}
          readOnly={true}
        />
        {errorMessage && <Error>{errorMessage}</Error>}
        <WrapperBtn>
          <Button type="submit">Save</Button>
          <Button type="button" onClick={onCanceled}>Cancel</Button>
        </WrapperBtn>
      </Form>
    </div>
  );
};

export default FormUserEdit;