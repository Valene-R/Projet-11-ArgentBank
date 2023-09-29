import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import HeroSection from '../../components/HeroSection/HeroSection';
import FeaturesSection from '../../components/FeaturesSection/FeaturesSection';


const Home = () => {
  return (
    <>
			<NavBar />
      <main>
        <HeroSection />
        <FeaturesSection />
      </main>
      <Footer />    
    </>
  );
};

export default Home;