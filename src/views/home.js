import React from 'react';

import AppHero from '../components/home/hero';
import AppAbout from '../components/home/about';
import AppFeature from '../components/home/influenceurs';
import AppContact from '../components/home/contact';
import AppPartners from '../components/home/partners';




function AppHome() {
  return (
    <div className="main">
      <AppHero/>
      <AppAbout/>
      <AppFeature/>
      <AppPartners/>
      <AppContact/>
    </div>
  );
}

export default AppHome;