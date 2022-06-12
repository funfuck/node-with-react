import React from 'react';
import "./register.css"
import {Link} from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

export default function Register() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post('/auth/register', {
        username,
        email,
        password,
      });
      res.data && window.location.replace('/login');
    } catch(err) {
      setError(true);
    }
    
  };
    return (
        <div className="register">
      <span className="registerTitle">ลงทะเบียน</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input className="registerInput" type="text" placeholder="ชื่อของคุณ..." 
        onChange={e => setUsername(e.target.value)}
        />
        <label>Email</label>
        <input className="registerInput" type="text" placeholder="อีเมล..." 
        onChange={e => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input className="registerInput" type="password" placeholder="รหัสผ่าน..." 
        onChange={e => setPassword(e.target.value)}
        />
        <button className="registerButton" type='submit'>ลงทะเบียน</button>
      </form>
        <button className="registerLoginButton">
        <Link className="link" to="/login">เข้าสู่ระบบ</Link>
        </button>
        {error && <span className='err'>บางอย่างผิดพลาด ชื่อหรืออีเมลอาจซ้ำ</span>}
    </div>
    )
}