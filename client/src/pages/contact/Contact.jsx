import React from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';
import { useState, useRef } from 'react';

const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false)
  
    const handleSubmit = (e) => {
      e.preventDefault();
      emailjs
        .sendForm(
          "service_10j3a0k",
          "template_co07r7l",
          formRef.current,
          "uK1nnASCI71yo7N1r")
        .then(
          (result) => {
            console.log(result.text);
            setDone(true)
          },
          (error) => {
            console.log(error.text);
          });
    };

  return (
   <div className='contact'>
      <h1 className="mainTitle">ติดต่อเรา</h1>
      <div className="contactWrap"> 
            <form ref={formRef} onSubmit={handleSubmit}>
                <input type="text" placeholder="ชื่อ" name="user_name" />
                <input type="text" placeholder="หัวข้อ" name="user_subject" />
                <input type="text" placeholder="อีเมล" name="user_email" />
                <textarea rows="10" placeholder="ข้อความ" name="message" />
                <button>ยืนยัน</button>
                  <br/>
                    <p className="message">{done && "ส่งข้อความแล้ว..."}</p>
            </form>
    </div>
    </div>
  
  )
}

export default Contact;