import React from 'react';

import { BackTop , Image} from 'antd';
import image from '../../assets/images/kxk.jpg'


function AppFooter() {
  return (
    <div className="container-fluid">
      <div className="footer">
        <div className="logo">
            <Image src={image}/>
        </div>
        <ul className="socials">
          <li><a href="https://www.twitter.com/"><i className="fab fa-twitter"></i></a></li>
          <li><a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a></li>
        </ul>
        <div className="copyright">Copyright &copy; 2022 KXK</div>
        <BackTop>
          <div className="goTop"><i className="fas fa-arrow-circle-up"></i></div>
        </BackTop>
      </div>
    </div>
  );
}

export default AppFooter;