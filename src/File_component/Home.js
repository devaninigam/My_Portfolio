import React from 'react'
import Nevbar from '../Component/Nevbar'
import '../App.css'
import { Link } from 'react-router-dom'; 

function Home() {
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-xl-4 col-sm-6 '>
          <Nevbar />  
          </div>
          <div className='col-xl-4 col-sm-6  all_center'>
            <h4 className='De_Teg'><span className='Desing'>I</span> am  <br /><span> <span className='Desing'>F</span>ontend <span className='Desing'>D</span>eveloper</span> </h4>
            <Link to='/Contect' className='Hire_me_btn'>Hire me</Link>
          </div>
          <div className='col-xl-4 col-md-6 all_center'>
            <img src={"https://mir-s3-cdn-cf.behance.net/project_modules/fs/33237e176850651.64cbc94763097.jpg"} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home