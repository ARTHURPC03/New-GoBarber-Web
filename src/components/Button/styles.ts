import styled from 'styled-components'
import { shade } from 'polished'

export const Container = styled.button`
  background: #ff9000;
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  color: #312e38;
  width: 100%;
  font-weight: 500;
  margin-top: 16px;
  transition: background-color 0.2s;

  -webkit-box-pack: center;
  justify-content: center;
  transition: border 0.2s ease 0s, transform 0.2s ease 0s;
  border-width: 3px;
  border-style: solid;
  border-color: ${props => props.theme.colors.background};
  border-image: initial;

  &:hover {
    transform: translateY(-7px);
    border-color: ${props => props.theme.colors.text};
  }

  /* &:hover {
    background: ${shade(0.2, '#ff9000')};
  } */
`
