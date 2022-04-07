import React from 'react';

import AppHero from '../components/home/hero';
import AppAbout from '../components/home/about';
import AppInfluenceurs from '../components/home/influenceurs';
import AppContact from '../components/home/contact';
import AppPartenaires from '../components/home/partenaires';




function AppHome() {
  return (
    <div className="main">
      <AppHero/>
      <AppAbout/>
      <AppInfluenceurs/>
      <AppPartenaires/>
      <AppContact/>
    </div>
  );
}

export default AppHome;