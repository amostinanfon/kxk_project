import React from 'react';
import { Anchor} from 'antd';
import { Carousel  } from 'antd';


import image1 from '../../assets/images/photo23.jpg';
import image2 from '../../assets/images/photo16.jpg';
import image3 from '../../assets/images/photo25.jpg';


import { Row, Col } from 'antd';
import { Card } from 'antd';
const { Meta } = Card;


const items = [
    {
      key: '1',
      title: 'With K will be ok',
      content: 'An vim odio ocurreret consetetur, justo constituto ex mea. Quidam facilisis vituperata pri ne. Id nostrud gubergren urbanitas sed, quo summo animal qualisque ut, cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
    },
    {
      key: '2',
      title: 'With K will be ok',
      content: 'An vim odio ocurreret consetetur, justo constituto ex mea. Quidam facilisis vituperata pri ne. Id nostrud gubergren urbanitas sed, quo summo animal qualisque ut, cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
    },
    {
      key: '3',
      title: 'With K will be ok',
      content: 'An vim odio ocurreret consetetur, justo constituto ex mea. Quidam facilisis vituperata pri ne. Id nostrud gubergren urbanitas sed, quo summo animal qualisque ut, cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
    },
  ]

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
          <div id="hero" className="heroBlock">
            <Carousel>
                {items.map(item => {
                return (
                    <div key={item.key} className="container-fluid">
                        <div className="content">
                            <h3>{item.title}</h3>
                            <p>{item.content}</p>
                        </div>
                    </div>  
                );
                })}
            </Carousel>
        </div>
        </Row>
      </div>
    </div>
  );
}

export default AppInfluenceurs;