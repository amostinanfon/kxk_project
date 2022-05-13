<<<<<<< HEAD
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



=======
import React from 'react';
import { Link } from 'react-router-dom';

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
            <Link to="/contact" target='_blank'>
              <Card
                hoverable
                cover={<img alt="Modern Design" src={image1} height='430'/>}
              >
                <Meta title="dddddddddddddddddddd" />
              </Card>
            </Link>
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

>>>>>>> test
export default AppInfluenceurs;