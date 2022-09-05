import styled from "styled-components";

export const Button = styled.button `
  background: ${props => props.isOn ? '#000000' : 'gray'};
  border-radius: 10px;
  width: 342px;
  height: 64px;
  color: ${props => props.isOn ? 'white' : '#000000'};;
  border: none;
  font-size: 17px;
  cursor: pointer;
  transition: 0.5s;
`