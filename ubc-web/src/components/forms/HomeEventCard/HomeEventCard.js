import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Menu, Row, Col, Card, Input, Select, Button } from 'antd';
import styled from 'styled-components';
import { FacebookFilled, GlobalOutlined, TwitterOutlined, AudioOutlined } from '@ant-design/icons';
import { getImageUrl } from 'util/getImageUrl';
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
  }

  render() {
    const {title, description, imageId} = this.props.data;

    return (
      <CardStyled
        hoverable
        cover={<CoverImageStyled style={{backgroundImage: `url("${getImageUrl(imageId)}")`}} />}
      >
        <MetaStyled title={title} description={description} />
        <br/>
        <Button type="link" size="small">Details</Button>
      </CardStyled>
    );
  }
}

HomeEventCard.propTypes = {};

HomeEventCard.defaultProps = {};

export default HomeEventCard;
