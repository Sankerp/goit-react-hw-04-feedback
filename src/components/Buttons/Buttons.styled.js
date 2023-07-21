import styled from 'styled-components';

export const StyledBtn = styled.button`
  margin: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 6px 12px;
  background-color: #ccc;
  color: black;
  font-size: 20px;
  cursor: pointer;
  scale: 1;
  &:hover,
  &:focus {
    background-color: #fff;
    color: #000;
    border: 1px solid #ccc;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 12px,
      rgba(0, 0, 0, 0.12) 0px 5px 5px;
    scale: 1.05;
    transition: all 0.3s ease-in-out;
  }
`;
