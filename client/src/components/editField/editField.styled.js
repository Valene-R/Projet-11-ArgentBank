import styled from 'styled-components';

export const Field= styled.div`
  margin: 10px 0;
  display: flex;
  justify-content: center;
  color: #FFF;
  align-items: center;
`;

export const Label = styled.label`
  display: block;
  font-size: 14px;
  margin-bottom: 5px;
  padding-right: 10px;
`;

export const Input = styled.input`
  padding: 8px 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  background-color: ${(props) => (props.readOnly ? '#e7e7e7' : 'white')}; // Grise le fond si readOnly est vrai
  color: ${(props) => (props.readOnly ? '#6c757d' : 'black')}; // Grise le texte si readOnly est vrai
  pointer-events: ${(props) => (props.readOnly ? 'none' : 'auto')}; // Désactive les évènements de la souris si readOnly est vrai
  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;