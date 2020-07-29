import React from 'react';
import { Layout, Row, Col, Divider } from 'antd';
import styled from 'styled-components';
import GitInfo from 'react-git-info/macro';
const { Footer } = Layout;
const gitInfo = GitInfo();
const gitCommitHash = gitInfo.commit.shortHash;

const FooterStyled = styled(Footer)`
width: 100%;
text-align: center;
font-size: 1rem;
color: #f0f0f0;
background-color: #22075e;
padding-left: 0;
padding-right: 0;
padding-top: 0;
a {
  color: #f0f0f0;

  &:hover {
    color: white;
    text-decoration: underline;
  }
}
`;


const HomeFooter = () => (
  <FooterStyled>
    <section id="about">
      <Divider></Divider>
      <Row>
        <Col span={24}>Techseeding PTY LTD. (ABN: 35631597450 / ACN: 631597450)</Col>
        {/* <Col span={24}>Version {gitCommitHash}</Col> */}
      </Row>
    </section>
  </FooterStyled>
);

HomeFooter.propTypes = {};

HomeFooter.defaultProps = {};

export default HomeFooter;
