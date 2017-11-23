import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Welcome } from '@storybook/react/demo';
import { Card, Button, Page } from '../components';

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
));

storiesOf('Page', module)
  .add('simple', () => <Page title="I`m title" subHeading="I`m sub heading" />)
  .add('with children', () => (
    <Page title="I`m title" subHeading="I`m sub heading">
      <Card>
        <Button onClick={action('clicked')} color="#C047B3" gradient="#952989">
          I`m button
        </Button>
      </Card>
    </Page>
  ))
  .add('with action page', () => (
    <Page
      title="I`m title"
      subHeading="I`m sub heading"
      action={action('clicked')}
      actionTitle="+ ADD MODULE"
    />
  ));

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some gradient', () => (
    <Button color="#C047B3" gradient="#952989" onClick={action('clicked')}>
      Hello Button
    </Button>
  ));

storiesOf('Card', module)
  .add('with text', () => <Card>Hello Card</Card>)
  .add('with button', () => (
    <Card>
      <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
    </Card>
  ))
  .add('with color', () => (
    <Card color="#3498DB">
      <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
    </Card>
  ))
  .add('with gradient', () => (
    <Card color="#C047B3" gradient="#952989">
      <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
    </Card>
  ));
