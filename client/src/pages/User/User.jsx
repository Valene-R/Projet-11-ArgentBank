import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import AccountsUser from '../../components/AccountsUser/AccountsUser';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

const User = () => {
  return (
    <>
      <NavBar />
      <main>
        <Header />
        <AccountsUser />
      </main>
      <Footer />       
    </>
  );
};

export default User;