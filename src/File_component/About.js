import React from 'react'
import Nevbar from '../Component/Nevbar'
import { Link } from 'react-router-dom'
import '../App.css'

function About() {
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-4 col-sm-6 col-12'>
            <Nevbar />
          </div>
          <div className='col-sm-6 col-12'>
            <div className='About_text'>
              <h2 className='intro'>Hi , i'm <p>Nigam Devani</p></h2>
              <h5>- I completed std:- 10 in  Winwisdom international school</h5>
              <p>- and currently i am study in frontend code React js in <a href='https://www.rnwmultimedia.edu.in/'>Rnw</a></p>
              <p>- After React Component My Goal is i am first full stack developer </p>
              <p>- Hobbies and Interests __ My Hobbies is Cricket and Game __ Interests in Footbol and YouTube</p>
              <p>- Visuals - start my it company</p>
              <div className='btn_center'>
              <Link to='/Contect' className='Hire_me_btn '>Hire me</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About