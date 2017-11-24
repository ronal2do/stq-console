/**
 * React Static Boilerplate
 * Copyright (c) 2015-present Kriasoft. All rights reserved.
 */

/* @flow */

import React from 'react';
import styled from 'styled-components';
import { graphql, createFragmentContainer } from 'react-relay';
import type { Home_users } from './__generated__/Home_users.graphql';
import { Page, Card } from '../components';
import Link from '../Link';

const UserList = styled.ul`padding: 0;`;

const User = styled.li`
  padding-bottom: 0.5em;
  list-style: none;
`;

class Home extends React.Component {
  props: {
    users: Home_users,
  };

  render() {
    return (
      <Page
        title="Welcome to React Static Boilerplate"
        subHeading="Welcome to React Static Boilerplate"
        action={() => console.log('home action')}
        actionTitle="+ ADD MODULE"
      >
        <div>
          <Card>
            <UserList>
              {this.props.users &&
                this.props.users.edges.map(({ node: user }) => (
                  <User key={user.id}>
                    <Link href={`/user-${user.id}`}>{user.name}</Link>
                  </User>
                ))}
            </UserList>
          </Card>
        </div>
      </Page>
    );
  }
}

export default createFragmentContainer(
  Home,
  graphql`
    fragment Home_users on UserConnection {
      count
      edges {
        node {
          id
          name
        }
      }
    }
  `,
);
