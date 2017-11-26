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
  transition: ${props => props.theme.transition};
  cursor: pointer;
  color: ${props => (props.color ? '#fff' : '#000')};

  &:active,
  &:hover {
    box-shadow: none;
    transform: translateY(-2px);
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
