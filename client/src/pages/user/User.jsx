import React from 'react';
import NavBar from '../../components/navBar/NavBar';
import AccountsUser from '../../components/accountsUser/AccountsUser';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';

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