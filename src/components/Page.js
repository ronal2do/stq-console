/* @flow */

import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const Wrapper = styled.div`
  min-height: calc(100vh - 90px);
  max-height: calc(100vh - 90px);
  margin: 0;
  padding: 5px 40px 10px;
  overflow-y: scroll;
  background: #f8f8f8;
`;

const H2 = styled.h2`
  font-size: 18px;
  color: #922c88;
`;

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
    <Header>
      <div>
        <H2>{title}</H2>
        {subHeading && <Sub>{subHeading}</Sub>}
      </div>
      {action && (
        <Button color="#922c88" onClick={action}>
          {actionTitle}
        </Button>
      )}
    </Header>
    {children}
  </Wrapper>
);

export default Page;
