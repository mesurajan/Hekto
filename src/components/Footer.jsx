import React from 'react'
import facebook from '../assets/images/fb.png';
import instagram from '../assets/images/insta.png' ;
import twitter from '../assets/images/twitter.png';
import {Link} from 'react-router-dom';

function Footer() {
  return ( 
    <div className='container mt:35 bg-backgroundlite'>
      <div className=''>
        surjanashtestha
      </div>

     <div className='flex flex-row justify-center gap-6 py-4 mt-2'>
      <div className='ml-2 bg-blue'>
        <p>&copy;Hetko -All Right Reserved .</p>
      </div>

        <div className='flex flex-row gap-2 mr-4'>
          <a href="https://www.facebook.com/shrestha.surajan">
            <img src={facebook} alt= "fb-logo" className='w-6 h-6 '/>
          </a>
          
          <a href="https://www.facebook.com/shrestha.surajan">
           <img src={instagram} alt= "insta-logo" className='w-6 h-6 '/>
          </a>

         <a href="https://www.facebook.com/shrestha.surajan">
          <img src={twitter} alt= "twitter-logo" className='w-6 h-6 '/>
         </a>
          
        </div>
   </div>
    
</div>
  )
}

export default Footer