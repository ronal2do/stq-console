/**
 * React Static Boilerplate
 * Copyright (c) 2015-present Kriasoft. All rights reserved.
 */

/* @flow */

import React from 'react';
import styled from 'styled-components';
import { graphql, createFragmentContainer } from 'react-relay';
import type { Home_events } from './__generated__/Home_events.graphql';
import { Page, Card } from '../components';
import Link from '../Link';

const EventList = styled.ul`padding: 0;`;

const Event = styled.li`
  padding-bottom: 0.5em;
  list-style: none;
`;

class Home extends React.Component {
  props: {
    events: Home_events,
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
            <EventList>
              {this.props.events &&
                this.props.events.edges.map(({ node: event }) => (
                  <Event key={event.id}>
                    <Link href={`/event-${event.id}`}>{event.title}</Link>
                  </Event>
                ))}
            </EventList>
          </Card>
        </div>
      </Page>
    );
  }
}

export default createFragmentContainer(
  Home,
  graphql`
    fragment Home_events on EventConnection {
      count
      edges {
        node {
          id
          title
        }
      }
    }
  `,
);
