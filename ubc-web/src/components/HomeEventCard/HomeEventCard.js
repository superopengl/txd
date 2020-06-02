import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Menu, Row, Col, Card, Input, Select, Button } from 'antd';
import styled from 'styled-components';
import { FacebookFilled, GlobalOutlined, TwitterOutlined, AudioOutlined } from '@ant-design/icons';
const { Meta } = Card;


const CardStyled = styled(Card)`
  width: 240px;
  height: 360px;
  margin-bottom: 2rem;
  text-align: center;

  &:hover {
    transform: scale(1.02);
  }
`;

const MetaStyled = styled(Meta)`
  text-align: center;
`;

const CoverImageStyled = styled.div`
  width: 240px;
  height: 200px;
  overflow: hidden;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
border-bottom: 1px solid #f0f0f0;
`;

export class HomeEventCard extends React.Component {
  constructor(props) {
    super(props);
    this.data = this.props.data
  }

  render() {
    return (
      <CardStyled
        hoverable
        cover={<CoverImageStyled style={{backgroundImage: `url("${this.data.path}")`}} />}
      >
        <MetaStyled title={this.data.name} description={this.data.eventDate.format('ddd D MMM YYYY')} />
        <br/>
        <Button type="link" size="small">Details</Button>
      </CardStyled>
    );
  }
}

HomeEventCard.propTypes = {};

HomeEventCard.defaultProps = {};

export default HomeEventCard;
