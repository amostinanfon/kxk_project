import React from 'react';
import './App.less';
//import 'antd/dist/antd.css';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import AppHeader from './components/common/header';
import AppFooter from './components/common/footer';
import AppHome from './views/home';

import AppHero from './components/home/hero';
import AppAbout from './components/home/about';
import AppInfluenceurs from './components/home/influenceurs';
import AppContact from './components/home/contact';
import AppPartenaires from './components/home/partenaires';
import AppFirst from './components/redirect/first';
import { Layout } from 'antd';

//import { Layout } from 'antd';
const { Header, Content , Footer } = Layout;




function App() {
  return (
      <BrowserRouter>
        <Layout className="mainLayout">
            <Header>
              <AppHeader/>
            </Header>
            <Content>
              <Routes>
                <Route path='/' element={<AppHome/>}/>
                <Route path='/first' element={<AppFirst/>}/>
                <Route path='/hero' element={<AppHero/>}/>
                <Route path='/contact' element={<AppContact/>} target="_blank"/>
                <Route path='/influenceurs' element={<AppInfluenceurs/>}/>
                <Route path='/about' element={<AppAbout/>}/>
                <Route path='/partenaires' element={<AppPartenaires/>}/>
              </Routes>
            </Content>
            {/* <Footer>
              <AppFooter/>  
            </Footer> */}
        </Layout>
      </BrowserRouter>
  );
}

export default App;
