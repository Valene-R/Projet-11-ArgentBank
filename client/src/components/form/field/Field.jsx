import React from 'react';
import { Root, Label, Input } from './field.styled';

export const Field = ({ type, id, label, register, required, onFocus }) => {
  return (
    <Root>
      <Label htmlFor={id}>{label}</Label>
      {/* Ajoute les props nécessaires avec register pour lier le champ et le valider */}
      {/* onFocus est utile pour initialiser des données */}
      <Input type={type} id={id} {...register(id, { required })} onFocus={onFocus} />
    </Root>
  ); 
}  

export default Field;