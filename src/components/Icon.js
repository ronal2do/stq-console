/* @flow */

import React, { PureComponent } from 'react';
import styled from 'styled-components';

const Span = styled.span`
  margin: 0;
  padding: 0;
  font-size: ${props => (props.size ? props.size : 18)}px;
`;

const Icon = ({ icon, size }) => (
  <Span className={`lnr lnr-${icon}`} size={size} />
);

export default Icon;
