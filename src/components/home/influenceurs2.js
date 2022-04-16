import React from 'react';
import { Anchor} from 'antd';
//import message from './message';


/*import image1 from '../../assets/images/modern-design.jpg';
import image2 from '../../assets/images/clean-design.jpg';
import image3 from '../../assets/images/great-support.jpg';
import image4 from '../../assets/images/easy-customise.jpg';
import image5 from '../../assets/images/unlimited-features.jpg';
import image6 from '../../assets/images/advanced-option.jpg';*/

import image1 from '../../assets/images/photo23.jpg';
import image2 from '../../assets/images/photo16.jpg';
import image3 from '../../assets/images/photo25.jpg';
import image4 from '../../assets/images/photo17.jpg';
import image5 from '../../assets/images/photo18.jpg';
import image6 from '../../assets/images/photo15.jpg';

import { Row, Col } from 'antd';
import { Card } from 'antd';
const { Meta } = Card;

const { Link } = Anchor;

function AppInfluenceurs() {
  return (
    <div id="influenceurs" className="block influenceurBlock bgGray">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>KXK AGENCY</h2>
          <p>Lorem dddddddddddddddddddd</p>
        </div>
        <Row gutter={[16, 16]}>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={<img alt="Modern Design" src={image1} height='430'/>}
            >
              {/* <Meta title="dddddddddddddddddddd" /> */}
              <Anchor>
                <Link href={'#message'} target='_blank' title="dddddddddddddddddddd"/>
              </Anchor>
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={<img alt="Test" src={image2} height='430' />}
            >
              <Meta title="xxxxxxxxxxxxxxxxxxxx" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={<img alt="Test" src={image3} height='430'/>}
            >
              <Meta title="yyyyyyyyyyyyyyyyyyyyyy" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={<img alt="Test" src={image4} height='430'/>}
            >
              <Meta title="zzzzzzzzzzzzzzzzzzzzzzz" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={<img alt="Test" src={image5} height='430' />}
            >
              <Meta title="aaaaaaaaaaaaaaaaaaaaaa" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={<img alt="Test" src={image6} height='430'/>}
            >
              <Meta title="nnnnnnnnnnnnnnnnnnnnnnnnn" />
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default AppInfluenceurs;