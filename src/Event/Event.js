/**
 * React Static Boilerplate
 * Copyright (c) 2015-present Kriasoft. All rights reserved.
 */

/* @flow */

import React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';
import type { Event_event } from './__generated__/Event_event.graphql';

import s from './Event.css';

class Event extends React.Component {
  props: {
    event: Event_event,
  };

  render() {
    const event = this.props.event || {};
    return (
      <article className={s.root}>
        <h1>{event.title}</h1>
        <content>{event.address}</content>
      </article>
    );
  }
}

export default createFragmentContainer(
  Event,
  graphql`
    fragment Event_event on Event {
      id
      title
      address
    }
  `,
);
