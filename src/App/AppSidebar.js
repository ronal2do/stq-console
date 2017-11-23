/* @flow */

import React from 'react';
import styled from 'styled-components';
import { SidebarItem } from '../components';

const Routes = [
  { url: '/', label: 'Dashboard', icon: 'home' },
  { url: '/', label: 'Accounts', icon: 'license' },
  { url: '/', label: 'Saving', icon: 'apartment' },
  { url: '/', label: 'Cards', icon: 'chart-bars' },
  { url: '/', label: 'Loans', icon: 'rocket' },
  { url: '/', label: 'Investiment', icon: 'layers' },
  { url: '/', label: 'Contracts', icon: 'calendar-full' },
];

const Content = styled.div`
  width: 90px;
  color: rgba(255, 255, 255, 0.4);
  background-color: white;
  position: fixed;
  height: calc(100% - 90px);
  box-shadow: 0px 2px 20px 0px rgba(0, 0, 0, 0.1);
`;

const Separator = styled.span`
  padding-right: 0.5em;
  padding-left: 0.5em;
`;

const ExtLink = styled.a`
  &,
  &:hover,
  &:active,
  &:visited {
    color: rgba(255, 255, 255, 0.6);
    text-decoration: none;
  }

  &:hover {
    text-decoration: underline;
  }
`;

class AppSidebar extends React.Component {
  render() {
    return (
      <Content>
        {Routes.map(r => (
          <SidebarItem
            key={r.label}
            label={r.label}
            icon={r.icon}
            url={r.url}
          />
        ))}
      </Content>
    );
  }
}

export default AppSidebar;
