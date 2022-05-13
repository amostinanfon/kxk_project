import React, { useState } from 'react';

import { Anchor, Drawer, Button , Image } from 'antd';
import image3 from '../../assets/images/kxk.jpg';


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
            <Link href="#hero" title="Accueil"/>
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
              <Link href="#hero" title="Accueil" />
              <Link href="#about" title="Qui sommes-nous" />
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