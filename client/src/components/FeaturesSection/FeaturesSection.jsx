import React from 'react';
import { FeaturesSectionStyled, FeatureItem, FeatureIcon, FeatureItemTitle } from './styled-components-FeaturesSection';
import ChatIcon from '../../img/icon-chat.png';
import MoneyIcon from '../../img/icon-money.png';
import SecurityIcon from '../../img/icon-security.png';

const FeaturesSection = () => {
  return (
    <FeaturesSectionStyled>
      <FeatureItem>
        <FeatureIcon src={ChatIcon} alt="Chat Icon" />
        <FeatureItemTitle>You are our #1 priority</FeatureItemTitle>
        <p>
          Need to talk to a representative? You can get in touch through our
          24/7 chat or through a phone call in less than 5 minutes.    
        </p>
      </FeatureItem>
      <FeatureItem>
        <FeatureIcon src={MoneyIcon} alt="Money Icon" />
        <FeatureItemTitle>More savings means higher rates</FeatureItemTitle>
        <p>The more you save with us, the higher your interest rate will be!</p>
      </FeatureItem>
      <FeatureItem>
        <FeatureIcon src={SecurityIcon} alt="Security Icon" />
        <FeatureItemTitle>Security you can trust</FeatureItemTitle>
        <p>We use top of the line encryption to make sure your data and money is always safe.</p>
      </FeatureItem>
    </FeaturesSectionStyled>
  );
};

export default FeaturesSection;