import React, { useState } from 'react';
import { Link as Linked } from 'react-router-dom';

import { Anchor, Drawer, Button , Image } from 'antd';
import image3 from '../../assets/images/kxk.jpg';

import AppHero from '../home/hero';
import AppAbout from '../home/about';
import AppInfluenceurs from '../home/influenceurs';
import AppContact from '../home/contact';
import AppPartenaires from '../home/partenaires';

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
            <Linked to="/" element={<AppHero/>}>
              <Link href="#hero" title="Accueil"/>
            </Linked>
            <Linked to="/about" element={<AppAbout/>}>
              <Link href="#about" title="Qui sommes-nous"/>
            </Linked>
            <Linked to="/influenceurs" element={<AppInfluenceurs/>}>
              <Link href="#influenceurs" title="Influenceurs"/>
            </Linked>
            <Linked to="/partenaires" element={<AppPartenaires/>}>
              <Link href="#partenaires" title="Partenaires"/>
            </Linked>
            <Linked to="/contact" element={<AppContact/>}>
              <Link href="#contact" title="Contact"/>
            </Linked>
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