import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import "./sidebar.css";

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get('/categories');
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">เกี่ยวกับเรา</span>
        <img
          src={require('../../components/images/TA-logo.png')} 
          alt=""
        />
        <p>
          Thai-Aus สร้างขึ้นเพื่อช่วยเหลือคนไทยในออสเตรเลีย ในการหางาน 
          หาบ้าน ซื้อ-ขายสินค้า บริการ ข่าวสาร รีวิว รวมถึงพูดคุยแชร์ประสบการณ์ต่างๆ หากมีข้อเสนอแนะ สามารถติดต่อเข้ามาได้
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">แท็ก</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link key={c.name} to={`/tags/?cat=${c.name}`} className='link'>
              <li  className="sidebarListItem">{c.name}</li>
            </Link>  
          ))}
        </ul>  
      </div>
      
      <div className="sidebarItem">
        <span className="sidebarTitle">ติดต่อ</span>
        <p className="email">thaiaus.com@gmail.com</p>
      </div>
      </div>
  );
}