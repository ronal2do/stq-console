/* @flow */

import React from 'react';
import styled, { withTheme } from 'styled-components';
import { CirclePie } from 'salad-ui';

import Trend from 'react-trend';
import {
  data,
  autoDraw,
  autoDrawDuration,
  autoDrawEasing,
  smooth,
  gradient,
  radius,
  strokeWidth,
  strokeLinecap,
} from './config';
import Title from '../Title';

const Span = styled.span`
  margin: 0;
  padding: 0;
  font-size: ${props => (props.size ? props.size : 18)}px;
`;

const Container = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
`;

const ChartWidget = ({ title, circle }) => (
  <Container>
    <Title color="rgba(0, 0, 0, 0.5)">{title}</Title>
    <br />
    {circle ? (
      <CirclePie
        width={100}
        height={100}
        strokeWidth={7}
        percent={42}
        strokeColor="rgb(31, 207, 101)"
        fillColor="rgb(31, 207, 101)"
      />
    ) : (
      <Trend
        smooth={smooth}
        autoDraw={autoDraw}
        autoDrawDuration={parseInt(autoDrawDuration, 10)}
        autoDrawEasing={autoDrawEasing}
        height={100}
        width={600}
        data={data}
        gradient={gradient}
        radius={parseInt(radius, 10)}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLinecap}
      />
    )}
    <br />
    <Title size={15} color="rgba(0, 0, 0, 0.8)">
      {title}
    </Title>
  </Container>
);

export default withTheme(ChartWidget);
