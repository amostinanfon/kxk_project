import React from 'react';

import AppHero from '../components/home/hero';
import AppAbout from '../components/home/about';
import AppInfluenceurs from '../components/home/influenceurs2';
import AppContact from '../components/home/contact';
import AppPartners from '../components/home/partners';




function AppHome() {
  return (
    <div className="main">
      <AppHero/>
      <AppAbout/>
      <AppInfluenceurs/>
      <AppPartners/>
      <AppContact/>
    </div>
  );
}

export default AppHome;