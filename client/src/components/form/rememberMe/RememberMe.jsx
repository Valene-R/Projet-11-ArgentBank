import React from 'react';
import { Root, Checkbox, Label } from './rememberMe.styled';

const RememberMe = () => {
  return (
    <Root>
      <Checkbox type="checkbox" id="remember-me" />   
			<Label htmlFor="remember-me">Remember me</Label>  
    </Root>
  );
};

export default RememberMe;