import React from 'react';
import { Hero, HeroContent, Subtitle, Text } from './styled-components-HeroSection';

const HeroSection = () => {
  return (
    <Hero>
			<HeroContent>
      <h2 className="sr-only">Promoted Content</h2>
      <Subtitle>No fees.</Subtitle>
      <Subtitle>No minimum deposit.</Subtitle>
      <Subtitle>High interest rates.</Subtitle>
      <Text>Open a savings account with Argent Bank today!</Text>
			</HeroContent>      
    </Hero>
  );
};

export default HeroSection;