import React from 'react';

import { List, Card, Button , Image } from 'antd';
import image from '../../assets/images/photo15.jpg'


const data = [
  {
    title: 'Amazone',
    content: [
      {
        price: '£29.99',
        space: '1 GB of space',
        user: '1 user',
        support: '24/7 support',
        backup: 'Safe, reliable backup',
        access: 'Access from anywhere',
        image: image
      }
    ]
  },
  {
    title: 'Microsoft',
    content: [
      {
        price: '£59.99',
        space: '5 GB of space',
        user: '5 users',
        support: '24/7 support',
        backup: 'Safe, reliable backup',
        access: 'Access from anywhere',
        image: image

      }
    ]
  },
  {
    title: 'Google',
    content: [
      {
        price: '£99.99',
        space: 'Unlimited space',
        user: '15 users',
        support: '24/7 support',
        backup: 'Safe, reliable backup',
        access: 'Access from anywhere',
        image: image
      }
    ]
  }
];

function AppPricing() {
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

export default AppPricing;