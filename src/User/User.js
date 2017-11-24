/**
 * React Static Boilerplate
 * Copyright (c) 2015-present Kriasoft. All rights reserved.
 */

/* @flow */

import React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';
import type { User_user } from './__generated__/User_user.graphql';

import s from './User.css';

class User extends React.Component {
  props: {
    user: User_user,
  };

  render() {
    const user = this.props.user || {};
    return (
      <article className={s.root}>
        <h1>{user.title}</h1>
        <content>{user.address}</content>
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
