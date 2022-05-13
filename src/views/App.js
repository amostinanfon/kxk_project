import React from 'react';
import './App.less';
//import 'antd/dist/antd.css';

//import AppHeader from './components/common/header';
import AppFooter from './components/common/footer';
import AppHome from './views/home';

import { Layout } from 'antd';
const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout className="mainLayout">
      {/* <Header>
        <AppHeader/>
      </Header> */}
      <Header>
          <p>I love this game</p>
      </Header>
      <Content>
        <AppHome/>
      </Content>
      <Footer>
        <AppFooter/>  
      </Footer>      
    </Layout>
  );
}

export default App;
