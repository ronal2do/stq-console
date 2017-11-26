/* @flow */

import React from 'react';
import styled from 'styled-components';

const H2 = styled.h2`
  margin: 0;
  padding: 0;
  font-size: ${props => (props.size ? props.size : 18)}px;
  color: ${props => (props.color ? props.color : props.theme.main)};
`;

const Title = ({ children, color, size }) => (
  <H2 color={color} size={size}>
    {children}
  </H2>
);

export default Title;
