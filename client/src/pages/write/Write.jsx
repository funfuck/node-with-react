import axios from 'axios';
import React from 'react';
import { useState, useContext } from 'react';
import { Context } from '../../context/Context';
import "./write.css";

export default function Write() {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [file, setFile] = useState(null);
  const [categories, setCategories] = useState('');
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
      file,
      categories,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append('name', filename);
      data.append('file', file);
      newPost.photo = filename;
      try {
        await axios.post('/upload', data);
      } catch (err) { }
    }
    try {
      const res = await axios.post('/posts', newPost);
      window.location.replace('/post/' + res.data._id);
    } catch (err) { }

  };

  return (
    <div className="write">
      {file && (
        <img
          className="writeImg"
          src={URL.createObjectURL(file)}
          alt=""
        />
      )}
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
            เพิ่มรูป
          </label>
          <input
            id="fileInput"
            type="file"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            className="writeInput"
            placeholder="หัวข้อ"
            type="text"
            autoFocus={true}
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <div className="writeFormGroup" >
          <label className='writeTag'>แท็ก</label>
          <select className='tagList' onChange={e => setCategories(e.target.value)}>
            <option type="radio" name="อื่นๆ" id="อื่นๆ" value="อื่นๆ">อื่นๆ</option>
            <option type="radio" name="หางาน" id="หางาน" value="หางาน">หางาน</option>
            <option type="radio" name="หาบ้าน" id="หาบ้าน" value="หาบ้าน">หาบ้าน</option>
            <option type="radio" name="ซื้อ-ขาย" id="ซื้อ-ขาย" value="ซื้อ-ขาย">ซื้อ-ขาย</option>
            <option type="radio" name="บริการ" id="บริการ" value="บริการ">บริการ</option>
            <option type="radio" name="ข่าวสาร" id="ข่าวสาร" value="ข่าวสาร">ข่าวสาร</option>
            <option type="radio" name="รีวิว" id="รีวิว" value="รีวิว">รีวิว</option>
          </select>
        </div>
        <div className="writeFormGroup" >
          <textarea
            className="writeDesc"
            placeholder="รายละเอียด..."
            type="text"
            onChange={e => setDesc(e.target.value)}
          />
        </div>
        <button className="writeSubmit" type="submit" onSubmit={handleSubmit}>
          โพสต์
        </button>
      </form>

    </div>
  );
}