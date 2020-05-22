import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Menu, Row, Col, Card, Input, Select, Button } from 'antd';
import { getVenderData } from '../../services/dataService';
import HomeEventCard from "../HomeEventCard/HomeEventCard";
import HomeRowArea from "../HomeRowArea/HomeRowArea";
import momentRandom from 'moment-random';
import moment from 'moment';
import styled from 'styled-components';
import _ from 'lodash';
import { DownOutlined, UpOutlined, SmileOutlined, AudioOutlined } from '@ant-design/icons';

const { Meta } = Card;

const RowStyled = styled(Row)`
  max-width: 1024px;
  margin: 0 auto 0 auto;
`;


class HomeEventArea extends React.Component {
  constructor(props) {
    super(props);

    const now = moment();
    const start = now.add(1, 'week');
    const end = now.add(3, 'months');

    const data = getVenderData().map((x, i) => Object.assign({}, x, {
      eventName: `${x.name} Event`,
      eventDate: momentRandom(end, start)
    }));

    this.venderData = _.shuffle(data).splice(0, ((+this.props.row || 1) * 4));
    this.state = {
      collapsed: false
    }
  }

  toggle = (value) => {
    this.setState({
      collapsed: value
    })
  }

  render() {
    return (
      <HomeRowArea title={this.props.title} bgColor={this.props.bgColor}>
        <RowStyled>
          {this.venderData.map(f => (
            <Col key={f.file} span={6}>
              <HomeEventCard data={f}>
              </HomeEventCard>
            </Col>
          ))}
        </RowStyled>
        <RowStyled style={{justifyContent: 'center'}}>
          {!this.state.collapsed && <Button size="large" shape="circle" onClick={() => this.toggle(true)}><DownOutlined /></Button>}
          {this.state.collapsed && <Button size="large" shape="circle" onClick={() => this.toggle(false)}><UpOutlined /></Button>}
        </RowStyled>
      </HomeRowArea>
    );
  }
}

HomeEventArea.propTypes = {};

HomeEventArea.defaultProps = {};

export default HomeEventArea;