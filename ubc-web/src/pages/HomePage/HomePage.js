import React from 'react';

import styled from 'styled-components';
import HomeMessageArea from 'components/HomeMessageArea/HomeMessageArea';

// import 'App.css';
import { Layout, Menu, Row, Col, Card, Input, Select, Button } from 'antd';
import { UserOutlined, UserAddOutlined, SmileOutlined } from '@ant-design/icons';
import { Carousel } from 'antd';
import HomeHeader from 'components/HomeHeader/HomeHeader';
import HomeFooter from 'components/HomeFooter/HomeFooter';
import HomeRowArea from 'components/HomeRowArea/HomeRowArea';
import HomeCarouselArea from 'components/HomeCarouselArea/HomeCarouselArea';
import HomeFeatureArea from 'components/HomeFeatureArea/HomeFeatureArea';
import HomeEventArea from 'components/HomeEventArea/HomeEventArea';
const { Header, Content, Footer } = Layout;
const { Meta } = Card;
const { Option } = Select;

const LayoutStyled = styled(Layout)`
  margin: 0 auto 0 auto;
  background-color: #ffffff;
  text-align: 'center'; 
`;

const ContentStyled = styled(Content)`
  margin: 64px auto 0 auto;
  width: 100%;
`;

const HomePage = () => (
  <LayoutStyled>
  <HomeHeader></HomeHeader>
  {/* <BarStyled></BarStyled> */}
  <ContentStyled>
    <HomeCarouselArea></HomeCarouselArea>
    <HomeFeatureArea></HomeFeatureArea>
    <HomeEventArea title="Business" bgColor="#f5f5f5" row={1}></HomeEventArea>
    <HomeEventArea title="Upcoming Events" bgColor="#ffffff" row={1}></HomeEventArea>
    <HomeEventArea title="Gallery" bgColor="#f5f5f5" row={2}></HomeEventArea>
    {/* <HomeMessageArea></HomeMessageArea> */}
  </ContentStyled>
  <HomeFooter></HomeFooter>
</LayoutStyled>
);

HomePage.propTypes = {};

HomePage.defaultProps = {};

export default HomePage;
