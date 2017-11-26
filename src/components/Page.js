/* @flow */

import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import Title from './Title';

const Wrapper = styled.div`
  min-height: calc(100vh - 110px);
  margin: 0;
  padding: 5px 40px 10px;
  overflow-y: scroll;
  background: #f8f8f8;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
`;

const H2 = styled.div`margin-top: 0.83em;`;

const Sub = styled.p`
  font-size: 14px;
  color: #b4b2bd;
  margin-bottom: 24px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Page = ({ title, children, subHeading, action, actionTitle }) => (
  <Wrapper>
    <Container>
      <Header>
        <H2>
          <Title>{title}</Title>
          {subHeading && <Sub>{subHeading}</Sub>}
        </H2>
        {action && (
          <Button color="#922c88" onClick={action}>
            {actionTitle}
          </Button>
        )}
      </Header>
      {children}
    </Container>
  </Wrapper>
);

export default Page;
