import React from 'react'
import "../App.css"
import "../all.min.css"
import { Link } from 'react-router-dom'

function Nevbar() {
     return (
          <>
               <div className='container'>
                    <div className='row '>
                         <div className=' colm'>
                              <img className='MyImg' src={"https://yt3.googleusercontent.com/RGyR_lGAq6oyL5sVR5mD81Pwh-kksk3dUcCDkMEpNU-y-qsgp9oFwLKm5xnW0Gfb3RJGqVv2ag=s900-c-k-c0x00ffffff-no-rj"} />
                              <h4 className='Head_Dev'>I Am Developer</h4>
                              <p className='Head_P'>devaninigam2311@gamil.com</p>
                              <Link className='Menu_Link' to="/">Home</Link>
                              <Link className='Menu_Link' to="/About">About</Link>
                              <Link className='Menu_Link' to="/Technology">Technology</Link>
                              <Link className='Menu_Link' to="/ProjectWork">Project Work</Link>
                              <div className='Icon_ma'>
                                   <a style={{color:"red"}} className='Icon_So' href='https://www.youtube.com/channel/UCeMHt8uL6WrqL1aVDBZa5gA'><i class="fa-brands fa-youtube"></i></a>
                                   <a style={{color:"#1DA1F2"}} className='Icon_So' href='https://twitter.com/i/flow/login?redirect_after_login=%2FDevaniNigam'><i class="fa-brands fa-twitter"></i></a>
                                   <a style={{color:"#0077B5"}} className='Icon_So' href='https://in.linkedin.com/in/nigam-devani-638aa8283'><i class="fa-brands fa-linkedin-in"></i></a>
                                   <a style={{color:"black"}} className='Icon_So' href='https://www.behance.net/2029nigamdevani'><i class="fa-brands fa-behance"></i></a>
                              </div>
                         </div>
                    </div>
               </div>
          </>
     )
}

export default Nevbar