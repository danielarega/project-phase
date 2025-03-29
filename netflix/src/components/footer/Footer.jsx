import React from 'react'
import "./footer.css";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
function Footer() {
  return (
    <div className='footer-outer-container'>
      <div className='footer-inner-container'>
        <div className='footer-icons'>
       <FacebookOutlinedIcon/>
       <InstagramIcon/>
       <YouTubeIcon/>
        </div>
        <div className='footer-data'>
               <div>
                <ul>
                  <li>Audio Description</li>
                  <li>Investor Relation</li>
                  <li>Legal Notice</li>
                </ul>
               </div>
                      <div>
                        <ul>
                          <li>Help center</li>
                          <li>jobs</li>
                          <li>Cookie preferences</li>
                        </ul>
                      </div>
                        <div>
                          <ul>
                            <li>Gift cards </li>
                            <li>Terms of use</li>
                            <li>Corporate information</li>
                          </ul>
                        </div>
                <div>
                  <ul>
                    <li>Media center</li>
                    <li>privacy</li>
                    <li>contact us</li>
                  </ul>
                </div>
        </div>
                  <div className='service-code'>
                    <p>
                      service code
                    </p>
                  </div>
                          <div className='copy-write'>
                           &copy;1997-2025 Netflix, Inc.
                          </div>
      </div>
    </div>
  )
}

export default Footer
