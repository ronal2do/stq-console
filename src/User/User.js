/**
 * React Static Boilerplate
 * Copyright (c) 2015-present Kriasoft. All rights reserved.
 */

/* @flow */

import React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';
import type { User_user } from './__generated__/User_user.graphql';

class User extends React.Component {
  props: {
    user: User_user,
  };

  render() {
    const user = this.props.user || {};
    console.log('user', this.props);
    return (
      <article>
        <h1>{user.id}</h1>
        <h1>{user.name}</h1>
      </article>
    );
  }
}

export default createFragmentContainer(
  User,
  graphql`
    fragment User_user on User {
      id
      name
    }
  `,
);
