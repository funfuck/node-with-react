import React from 'react';
import "./login.css";
import {Link} from 'react-router-dom';
import { useRef, useContext } from 'react';
import { Context } from '../../context/Context';
import axios from 'axios';
import { useState } from 'react';

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);
  const [error, setError] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type:'LOGIN_START' });

    try {
      const res = await axios.post('/auth/login', {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type:'LOGIN_SUCCESS', payload: res.data });
    } catch(err) {
      dispatch({ type:'LOGIN_FAILURE' });
      setError(true);
    }
  };

  return (
    <div className="login">
      <span className="loginTitle">เข้าสู่ระบบ</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Email</label>
        <input 
            className="loginInput" 
            type="text" 
            placeholder="อีเมล" 
            ref={emailRef}
        />
        <label>Password</label>
        <input 
            className="loginInput" 
            type="password" 
            autoComplete="on"
            placeholder="รหัสผ่าน"
            ref={passwordRef} 
        />
        <button className="loginButton" type="submit" disabled={isFetching}>
          เข้าสู่ระบบ
        </button>
        {error && <span className='err'>อีเมลหรือรหัสผ่านไม่ถูกต้อง</span>}
      </form>
        <button className="loginRegisterButton">
          <Link className="link" to="/register">ลงทะเบียน</Link>
        </button>

    </div>
  );
}