import React from 'react';
import { Field, Label, Input } from './editField.styled';

const EditField = ({ editId, id, label, value, onChange, readOnly }) => (
  <Field>
    <Label htmlFor={editId}>{label}</Label>
    <Input
      type="text"
      id={editId}
      onChange={(e) => onChange(id, e.target.value)}
      value={value}
      // Transmet la prop readOnly au composant Input styled
      readOnly={readOnly} // Rend l'input en lecture seule si 'readOnly' est vrai
    />
  </Field>
);

export default EditField;