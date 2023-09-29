import React from 'react';
import { Root, Icon, Title } from './Item.styled';

const Item = ({ icon, title, children }) => {
  return (
    <Root>
  		<Icon src={icon} alt={`${title} Icon`} />
    	<Title>{title}</Title>
    	{children}
  	</Root>
  );
};

export default Item;