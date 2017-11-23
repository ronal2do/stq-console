/* @flow */

import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
  background: ${props =>
    props.gradient
      ? `linear-gradient(to right, ${props.color} 0%, ${props.gradient}  100%)`
      : props.color ? props.color : '#ffffff'};
  border: 1px solid ${props => (props.color ? props.color : '#f8f8f8')};
  border-radius: 26px;
  padding: 10px 16px;
  height: 34px;
  transition: all 300ms linear;
  cursor: pointer;
  color: ${props => (props.color ? '#fff' : '#000')};

  &:active,
  &:hover {
    box-shadow: none;
    transform: translateY(-2px);
    0px 2px 20px 0px rgba(0,0,0,0.1);
  }

  &:focus,
  &:active,
  &:hover,
  &:visited {
    outline: none !important;
  }
`;

type Props = {
  color: string,
  gradient: string,
  children: React.Element,
};

const Button = ({ color, gradient, children, onClick }) => (
  <ButtonWrapper color={color} gradient={gradient} onClick={onClick}>
    {children}
  </ButtonWrapper>
);

export default Button;
