import React from 'react';
import NavBar from '../../components/navBar/NavBar';
import Footer from '../../components/footer/Footer';
import HeroSection from '../../components/heroSection/HeroSection';
import FeaturesSection from '../../components/featuresSection/FeaturesSection';


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