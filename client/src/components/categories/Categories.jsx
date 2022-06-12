import React from 'react';
import './categories.css'
import BallotOutlinedIcon from '@mui/icons-material/BallotOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import CleaningServicesOutlinedIcon from '@mui/icons-material/CleaningServicesOutlined';
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';
import RateReviewOutlinedIcon from '@mui/icons-material/RateReviewOutlined';

import { Link } from 'react-router-dom';

function Categories() {
 
  return (
    <div className='categories'>
      <div className="catWrap"> 
        <Link to = '/tags'>
          <button 
            className="catItems">
            < BallotOutlinedIcon className='icon'/>  
              รวมโพสต์
          </button>
        </Link>  
        <Link to = '/tags/?cat=หางาน'>
          <button 
            className="catItems">
            < WorkOutlineOutlinedIcon className='icon'/>  
              หางาน
          </button>
        </Link> 
        <Link to = '/tags/?cat=หาบ้าน'>
          <button 
            className="catItems">
            < HomeOutlinedIcon className='icon'/>    
              หาบ้าน
           </button>
        </Link>
        <Link to = '/tags/?cat=ซื้อ-ขาย'>   
          <button 
            className="catItems" >
            < StorefrontOutlinedIcon className='icon'/>   
              ซื้อ-ขาย
          </button>
        </Link>
        <Link to = '/tags/?cat=บริการ'>
          <button 
            className="catItems" >
            < CleaningServicesOutlinedIcon className='icon'/>  
              บริการ
          </button>
        </Link>
        <Link to = '/tags/?cat=ข่าวสาร'>
          <button 
            className="catItems" >
            < NewspaperOutlinedIcon className='icon'/>  
              ข่าวสาร
          </button>
        </Link>  
        <Link to = '/tags/?cat=รีวิว'>
          <button 
            className="catItems" >
            < RateReviewOutlinedIcon className='icon'/>  
              รีวิว
          </button>
        </Link>  
      </div>
    </div>
  )
}

export default Categories;
