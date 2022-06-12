import React from 'react';
import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";
import { useContext } from 'react';
import {Context} from '../../context/Context';
import { useState } from 'react';
import axios from 'axios';
import { Link} from 'react-router-dom';

export default function Settings() {
  /*const location = useLocation();*/
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false);
  const {user, dispatch} = useContext(Context);
  const PF = 'http://localhost:5000/images/'

  
  /*const handleDelete = async () => {
    try {
      await axios.delete(`/settings/${user._id}`, {
        data: { userId: user._id },
      });
      window.location.replace('/');
    } catch (err) {}
  };*/

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({type: 'UPDATE_START'})
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append('name', filename);
      data.append('file', file);
      updatedUser.profilePic = filename;
      try {
        await axios.post('/upload', data);
      } catch (err) {}
    }
    try {
      const res = await axios.put('/users/' + user._id, updatedUser );
      setSuccess(true);
      dispatch({type: 'UPDATE_SUCCESS', payload: res.data });
    } catch (err) {
      dispatch({type: 'UPDATE_FAILURE'})
    } 
  };
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsTitleUpdate">บัญชีของฉัน</span>
        </div>
          <span className="settingsAllposts">
            โพสต์ทั้งหมดของฉัน : 
            <Link to = {`/tags/?user=${user.username}`} className='link'>
              <b>{user.username}</b>
            </Link>
          </span>
        <form className="settingsForm" onSubmit={handleSubmit}>
          <label>รูปโปรไฟล์</label>
          <div className="settingsPP">
            <img
              src= {file ? URL.createObjectURL(file) : PF + user.profilePic}
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>{" "}
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="settingsPPInput"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <label>ชื่อ</label>
          <input type="text" placeholder={user.username} onChange = {e => setUsername(e.target.value)}/>
          <label>อีเมล</label>
          <input type="email" placeholder={user.email} onChange = {e => setEmail(e.target.value)}/>
          <label>รหัสผ่าน</label>
          <input type="password" onChange = {e => setPassword(e.target.value)}/>
          <p>***กรอกชื่อ อีเมล และรหัสผ่าน ก่อนกดอัพเดต</p>
          <button className="settingsSubmitButton" type="submit">
            อัพเดต
          </button>
          {success && 
            <span style={{color: 'green', textAlign:'center'}}>อัพเดตโปรไฟล์สำเร็จ...</span>}
        </form>
      </div>
      <Sidebar />
    </div>
  );
}