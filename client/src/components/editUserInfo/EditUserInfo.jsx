import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';

import EditField from './editField/EditField';
import { updateUserProfile } from '../../reducers/authActions';
import { Button } from './editUserInfo.styled';


const EditUserInfo = ({ user, onSave, onCancel }) => {
  const dispatch = useDispatch();

  const [editedUser, setEditedUser] = React.useState({
    userName: user.userName || '',
    firstName: user.firstName || '',
    lastName: user.lastName || '',
  });

  useEffect(() => {
    console.log("User prop update:", user);
    if (user && user.firstName && user.lastName) {
      setEditedUser({
        userName: user.userName || '',
        firstName: user.firstName || '',
        lastName: user.lastName || '',
      });
    }
  }, [user]);

  const handleFieldChange = (fieldId, value) => {
    console.log(`Changement du champ ${fieldId} avec la valeur:`, value);
    setEditedUser(prev => ({ ...prev, [fieldId]: value }));
  };

  const handleSave = async () => {
    console.log("Tentative de sauvegarde avec ces données:", editedUser);
    try {
      // Dispatch l'action de mise à jour et attend la promesse
      const actionResult = await dispatch(updateUserProfile(editedUser));
      // unwrapResult va extraire le payload de l'action réussie ou propager une erreur si l'action a été rejetée
      const updatedProfile = unwrapResult(actionResult);
  
      if (!updatedProfile.error) {
        console.log("Profil mis à jour avec succès:", updatedProfile);
        onSave && onSave(editedUser); // Si onSave existe, appelle la fonction onSave après une mise à jour réussie
      } else {
        // Gére l'erreur comme s'il s'agissait d'un rejet d'action
        throw new Error(updatedProfile.error);
      }
    } catch (error) {
      // En cas d'erreur lors de la mise à jour, log l'erreur
      console.error("Erreur lors de la mise à jour du profil:", error);
    }
  };

  return (
    <div>
      <EditField 
        id="userName"
        label="User Name:"
        value={editedUser.userName}
        onChange={handleFieldChange}
      />
      <EditField 
        id="firstName"
        label="First Name:"
        value={editedUser.firstName}
        onChange={handleFieldChange}
        readOnly={true}
      />
      <EditField
        id="lastName"
        label="Last Name:"
        value={editedUser.lastName}
        onChange={handleFieldChange}
        readOnly={true}
      />
      <Button onClick={handleSave}>Save</Button>
      <Button onClick={onCancel}>Cancel</Button>
    </div>
  );
}

export default EditUserInfo;