import React from 'react';
import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="announcement">
        THAI-AUS ยินดีต้อนรับ คนไทยในออสเตรเลีย
      </div>

      <div className="headerTitles">
        <span className="headerTitleSm">Thai-Aus</span>
        <span className="headerTitleLg">เว็บคนไทย เพื่อคนไทย</span>
      </div>
      <img 
        className='headerImg'
        src={require('../../components/images/banner1.png')} 
        alt=''
        />
    </div>
  );
}