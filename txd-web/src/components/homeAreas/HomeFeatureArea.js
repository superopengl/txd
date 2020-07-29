import React from 'react';
import { Typography } from 'antd';
import HomeRowArea from "./HomeRowArea";
import styled from 'styled-components';
import { BulbOutlined, DollarCircleOutlined } from '@ant-design/icons';
import { MailOutlined, PhoneOutlined, WechatOutlined } from '@ant-design/icons';
import { Trans } from 'react-i18next';
import { MdLanguage } from "react-icons/md";


const SubTitle = styled(Typography.Title)`
color: #f0f0f0 !important;
`

const InfoCard = styled.div`
box-sizing: border-box;
width: 100%;
margin-bottom: 2rem;

a {
  color: #f0f0f0;

  &:hover {
    color: white;
    text-decoration: underline;
  }
}
`;

class HomeFeatureArea extends React.Component {
  render() {
    const props = {
      bgColor: '',
      span: {
        xs: 24,
        sm: 24,
        md: 24,
        lg: 8,
        xl: 8,
        xxl: 8
      },
      style: {
        backgroundColor: '#22075e',
        color: '#f0f0f0',
        paddingBottom: 0,
        padding: '5rem 0 3rem'
      }
    }

    return (
      <HomeRowArea {...props}>
        <InfoCard>
          <SubTitle level={3}>
            <Trans i18nKey="home.about_us" />
          </SubTitle>
          <section>
            <Trans i18nKey="home.about_us.content" />
          </section>
        </InfoCard>
        <InfoCard>
          <SubTitle level={3}>
          <Trans i18nKey="home.contact" />
          </SubTitle>
          <section>
          <p level={4} style={{fontSize: '1.2rem'}}><MdLanguage style={{position: 'relative', top: 3}} /> Website : <a href="https://www.techseeding.com.au/" style={{color: 'white'}}>https://www.techseeding.com.au</a></p>

            <p><MailOutlined /> <Trans i18nKey="home.contact.email" /> : <a href="mailto:mr.shaojun@gmail.com">mr.shaojun@gmail.com</a></p>
            <p><PhoneOutlined /> <Trans i18nKey="home.contact.phone" /> : +61 4 0558 1228</p>
            <p><WechatOutlined /> <Trans i18nKey="home.contact.wechat" /> : superopengl</p>
            {/* <p><img src="images/wechat_logo_qr.jpg" alt="wechat account: superopengl" width={160} height="auto" /></p> */}
          </section>

        </InfoCard>
        <InfoCard>
          <SubTitle level={3}>
            <Trans i18nKey="home.why_us" />
          </SubTitle>
          <section>
            <Trans i18nKey="home.why_us.content" />
          </section>
        </InfoCard>
      </HomeRowArea>
    );
  }
}

HomeFeatureArea.propTypes = {};

HomeFeatureArea.defaultProps = {};

export default HomeFeatureArea;
