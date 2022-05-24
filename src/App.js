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

import AppHome from './views/home'
import AppFirst from './components/redirect/first';
import { Layout } from 'antd';
import AppAbout from './components/home/about';

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
                <Route path='*' element={<AppHome/>}/>
                <Route path='/first' element={<AppFirst/>}/>
                <Route path='/about' element={<AppAbout/>}/>
              </Routes>
            </Content>
            <Footer>
              <AppFooter/>  
            </Footer> 
        </Layout>
      </BrowserRouter>
  );
}

export default App;
