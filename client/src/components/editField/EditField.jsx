import React, { forwardRef } from 'react';
import { Field, Label, Input } from './editField.styled';

const EditField = forwardRef(({ id, name, label, value, onChange, readOnly }, ref) => (
  <Field>
    <Label htmlFor={id}>{label}</Label>
    <Input
      type="text"
      id={id}
      name={name}
      onChange={e => onChange(e)}
      defaultValue={value} // Ajout de default pour éviter les conflits
      // Transmet la prop readOnly au composant Input styled
      readOnly={readOnly} // Rend l'input en lecture seule si 'readOnly' est vrai
      ref={ref}
    />
  </Field>
));

export default EditField;