import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProfile, updateUserProfile } from '../../reducers/authActions'; 
import { Root, Title, WelcomeTitle, InvisibleHeader, EditButton } from './header.styled';
import EditUserInfo from '../editUserInfo/EditUserInfo';


const Header = () => {
  const dispatch = useDispatch();
  // Accéde aux données de l'utilisateur dans le store Redux
  const user = useSelector(state => state.auth.profile);
  // État pour le mode édition
  const [isEditing, setIsEditing] = useState(false);
  // État pour stocker une copie temporaire des données de l'utilisateur pendant l'édition
  const [tempUser, setTempUser] = useState(null);

  // Charge le profil 
  useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]
  );

  // Gére le clic sur le bouton d'édition
  const handleEditClick = () => {
    setTempUser({ ...user });
    setIsEditing(true);
  };

  // Gére la sauvegarde après édition
  const handleSave = (editedUser) => {
    dispatch(updateUserProfile(editedUser));
    setTempUser(null);
    setIsEditing(false); // Sort du mode édition
  };

  // Annule les modifications et sort du mode édition
  const handleCancel = () => {
    dispatch(updateUserProfile(tempUser));  
    setTempUser(null);
    setIsEditing(false);
  };


  // Rendu conditionnel basé sur le mode édition
  return (
    <Root>
      {isEditing ? (
        <>
          <Title>Edit User Info</Title>
          <EditUserInfo user={user} onSave={handleSave} onCancel={handleCancel} />
        </>
      ) : (
        <>
          <WelcomeTitle>
            Welcome back<br />
            {user?.userName || `${user?.firstName} ${user?.lastName}`}!
          </WelcomeTitle>
          <EditButton onClick={handleEditClick}>Edit Name</EditButton>
        </>
      )}
      <InvisibleHeader>Accounts</InvisibleHeader>
    </Root>
  );
};

export default Header;