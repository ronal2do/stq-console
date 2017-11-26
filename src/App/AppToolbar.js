/**
 * React Static Boilerplate
 * Copyright (c) 2015-present Kriasoft. All rights reserved.
 */

/* @flow */

import React from 'react';
import styled from 'styled-components';
import { graphql, createFragmentContainer } from 'react-relay';

import { Button, Icon } from '../components';
import Link from '../Link';
import AppLogo from './AppLogo';
import type { AppToolbar_me } from './__generated__/AppToolbar_me.graphql';

const Header = styled.header`
  position: fixed;
  display: flex;
  height: 90px;
  width: 100%;
  box-sizing: border-box;
  color: #fff;
  flex-direction: column;
  background-color: white;
  justify-content: space-between;
  border-bottom: 1px solid #f2f2f2;
  box-shadow: ${props => props.theme.shadow};
`;

const Row = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  box-sizing: border-box;
  align-items: center;
  @media (max-width: 959px) and (orientation: landscape) {
    min-height: 48px;
  }
  @media (max-width: 599px) {
    min-height: 56px;
  }
`;

const Section = styled.section`
  z-index: 1;
  display: inline-flex;
  min-width: 0;
  height: 100%;
  flex: 1;
  align-items: center;
  justify-content: ${props =>
    props.start ? 'flex-start' : props.end ? 'flex-end' : 'center'};
  order: ${props => (props.start ? -1 : props.end ? 1 : null)};
`;

const TitleLink = styled(Link)`
  z-index: 1;
  display: flex;
  padding: 10px;
  font-size: 1em;
  line-height: 1.5rem;
  color: ${props => props.theme.main};
  text-decoration: none;
  text-overflow: ellipsis;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 599px) {
    margin-left: 16px;
  }

  &.title:active,
  &.title:hover,
  &.title:visited {
    color: ${props => props.theme.main};
  }
`;

const Logo = styled(AppLogo)`
  width: 43px;
  height: 43px;
`;

const NavLink = styled(Link)`
  padding-right: 8px;
  padding-left: 8px;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  color: #9e9bab;
  text-decoration: none;
  letter-spacing: 1px;
`;

const NavLinkLast = styled(NavLink)`
  margin-right: 24px;
  display: flex;
  margin-right: 24px;
  align-items: center;
  justify-content: center;

  @media (max-width: 599px) {
    margin-right: 16px;
  }

  > span: {
    margin-bottom: 4px;
    margin-left: 4px;
  }
`;

class AppToolbar extends React.Component {
  props: {
    me: AppToolbar_me,
  };

  render() {
    return (
      <Header>
        <Row>
          <Section start>
            <TitleLink href="/">
              <Logo />
              UNIRELAY
            </TitleLink>
          </Section>
          <Section end>
            <Button color="#392C70">MONEY TRANSFER</Button>
            <NavLink href="/getting-started">Hello, Admin</NavLink>
            <NavLink href="/getting-started">Messages</NavLink>
            <NavLinkLast href="/about">
              Logout{' '}
              <span>
                <Icon icon="power-switch" size={24} />
              </span>
            </NavLinkLast>
          </Section>
        </Row>
      </Header>
    );
  }
}

export default createFragmentContainer(
  AppToolbar,
  graphql`
    fragment AppToolbar_me on User {
      name
    }
  `,
);
