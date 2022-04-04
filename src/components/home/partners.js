import React from 'react';

import { List, Card, Button , Image } from 'antd';
import image from '../../assets/images/photo15.jpg'


const data = [
  {
    title: 'Amazone',
    content: [
      {
        image: image
      }
    ]
  },
  {
    title: 'Microsoft',
    content: [
      {
        image: image

      }
    ]
  },
  {
    title: 'Google',
    content: [
      {
        image: image
      }
    ]
  }
];

function AppPartners() {
  return (
    <div id="pricing" className="block pricingBlock bgGray">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Partenaires</h2>
          <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
        </div>
        <List
          grid={{
            gutter: 16,
            xs: 1,
            sm: 1,
            md: 3,
            lg: 3,
            xl: 3,
            xxl: 3,
          }}
          dataSource={data}
          renderItem={item => (
            <List.Item>
              <Card title={item.title}>
                <><Image src={image} height='300' width='500'/></>
                <Button type="primary" size="large"><i className="fa-solid fa-signal-stream"></i>Decouvrir</Button>
              </Card>
            </List.Item>
          )}
        />
      </div>
    </div>  
  );
}

export default AppPartners;