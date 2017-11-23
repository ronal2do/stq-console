/* @flow */

import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Icon from './Icon';

const Container = styled.div`
  width: 88px;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 300ms linear;
  cursor: pointer;
  border-right: 2px solid white;
  flex-direction: column;

  ${props => props.hovered && 'border-right: 2px solid #C047B3;'} ${props =>
      props.active && 'border-right: 2px solid #952989;'};
`;

const Link = styled.a`
  color: #9c9c9c;
  font-size: 12px;

  border-radius: 50%;
  height: 45px;
  width: 45px;
  text-transform: uppercase;
  font-weight: 700;
  display: flex;
  transition: all 300ms linear;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${props =>
    props.hovered &&
    `background-color: #C047B3;
    color: #fff;`};
  ${props =>
    props.active &&
    `background-color: #952989;
    color: #fff;`};
`;

const Label = styled.p`
  margin: 0;
  padding: 0;
  color: #9c9c9c;
  font-size: 12px;
`;

class SidebarItem extends PureComponent {
  state = { hovered: false };

  render() {
    const { label, icon, url, action, active } = this.props;
    const { hovered } = this.state;

    return (
      <Container
        hovered={hovered}
        active={active}
        onMouseEnter={() => this.setState({ hovered: true })}
        onMouseLeave={() => this.setState({ hovered: false })}
      >
        <Link hovered={hovered} active={active}>
          <Icon icon={icon} size={26} />
        </Link>
        <Label>{label}</Label>
      </Container>
    );
  }
}

export default SidebarItem;
