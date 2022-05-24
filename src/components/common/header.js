import React, { useState } from 'react';
import { Link as Linked } from 'react-router-dom';

import { Anchor, Drawer, Button , Image } from 'antd';
import image3 from '../../assets/images/kxk.jpg';

// import AppHero from '../home/hero';
// import AppAbout from '../home/about';
// import AppInfluenceurs from '../home/influenceurs';
// import AppContact from '../home/contact';
// import AppPartenaires from '../home/partenaires';

const { Link } = Anchor;

function AppHeader() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div className="container-fluid">
      <div className="header">
        <div className="logo">
          <Image src={image3} alt=""/>
        </div>
        <div className="mobileHidden">
          <Anchor targetOffset="65">
            <Linked to="/">
              <Link href="#hero" title="Accueil"/>
            </Linked>
              <Link href="#about" title="Qui sommes-nous"/>
              <Link href="#influenceurs" title="Influenceurs"/>
              <Link href="#partenaires" title="Partenaires"/>
              <Link href="#contact" title="Contact"/> 
          </Anchor>
        </div>
        <div className="mobileVisible">
          <Button type="primary" onClick={showDrawer}>
            <i className="fas fa-bars"></i>
          </Button>
          <Drawer
            placement="right"  
            closable={false}
            onClose={onClose}
            visible={visible}
          >
            <Anchor targetOffset="65">
              <Linked to="/">
                <Link href="#hero" title="Accueil"/>
              </Linked>              <Link href="#about" title="Qui sommes-nous" />
              <Link href="#infleunceurs" title="influenceurs" />
              <Link href="#partenaires" title="Partenaires" />
              <Link href="#contact" title="Contact" />
            </Anchor>
          </Drawer>
        </div>
      </div>
    </div>
  );
}

export default AppHeader;