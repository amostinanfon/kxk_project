import React from 'react';
import { Link } from "react-router-dom";
//import { Redirect } from 'react-router-dom';
//import { Anchor} from 'antd';


import image1 from '../../assets/images/photo23.jpg';
import image2 from '../../assets/images/photo16.jpg';
import image3 from '../../assets/images/photo25.jpg';


import { Row, Col } from 'antd';
import { Card } from 'antd';
const { Meta } = Card;



function AppInfluenceurs() {

   
  return (
    <div id="influenceurs" className="block influenceurBlock bgGray">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>KXK AGENCY</h2>
          <p>Lorem dddddddddddddddddddd</p>
        </div>
        <Row gutter={[18, 18]}>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Link to="/first">
              <Card
                    hoverable
                    cover={<img alt="Modern Design" src={image1} height='430'/>}
                  >
                  <Meta title="dddddddddddddddddddd" />
              </Card>
            </Link>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
           <Link to="/first">
            <Card
                hoverable
                cover={<img alt="Test" src={image2} height='430' />}
              >
                <Meta title="xxxxxxxxxxxxxxxxxxxx" />
              </Card>
           </Link>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Link to="/first">
            <Card
              hoverable
              cover={<img alt="Test" src={image3} height='430'/>}
            >
              <Meta title="yyyyyyyyyyyyyyyyyyyyyy" />
            </Card>
            </Link>
          </Col>
        </Row>
        <Row gutter={[18, 18]}>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Link to="/first">
            <Card
                  hoverable
                  cover={<img alt="Modern Design" src={image1} height='430'/>}
                  id="a"
                >
                <Meta title="dddddddddddddddddddd" />
            </Card>
            </Link>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Link to="/first">
              <Card
                hoverable
                cover={<img alt="Test" src={image2} height='430' />}
              >
                <Meta title="xxxxxxxxxxxxxxxxxxxx" />
              </Card>
            </Link>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Link to="/first">
              <Card
                hoverable
                cover={<img alt="Test" src={image3} height='430'/>}
              >
                <Meta title="yyyyyyyyyyyyyyyyyyyyyy" />
              </Card>
            </Link>
          </Col>
        </Row>
      </div>
    </div>
  );
}



export default AppInfluenceurs;