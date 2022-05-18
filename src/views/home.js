import React from 'react';

import AppHero from '../components/home/hero';
import AppAbout from '../components/home/about';
import AppInfluenceurs from '../components/home/influenceurs';
import AppContact from '../components/home/contact';
import AppPartenaires from '../components/home/partenaires';
import AppHeader from "../components/common/header";
//import AppFooter from "../components/common/footer";
 




function AppHome() {
  return (
    <div className="main">
      <AppHeader/>
      <AppHero/>
      <AppAbout/>
      <AppInfluenceurs/>
      <AppPartenaires/>
      <AppContact/>
      {/* <AppFooter/> */}
    </div>
  );
}

export default AppHome;