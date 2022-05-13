import React from 'react';
//import { Redirect } from 'react-router-dom';
//import { Anchor} from 'antd';


import image1 from '../../assets/images/photo23.jpg';
import image2 from '../../assets/images/photo16.jpg';
import image3 from '../../assets/images/photo25.jpg';


import { Row, Col } from 'antd';
import { Card } from 'antd';
const { Meta } = Card;



function AppInfluenceurs() {

 //let navigate = useNavigate();

  const handleClick = () => {
    console.log("Youpiiiiii");
  }
   
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
                  onClick={handleClick}
                >
                <Meta title="dddddddddddddddddddd" />
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
        </Row>
        <Row gutter={[16, 16]}>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
                  hoverable
                  cover={<img alt="Modern Design" src={image1} height='430'/>}
                  id="a"
                >
                <Meta title="dddddddddddddddddddd" />
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
        </Row>
      </div>
    </div>
  );
}

export default AppInfluenceurs;