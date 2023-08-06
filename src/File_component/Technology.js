import React from 'react'
import Nevbar from '../Component/Nevbar'
import imgPoto from "../img/Adobe_Photoshop_CC_icon.svg-removebg-preview.png"
import html from "../img/HTML.svg.png"
import css from "../img/css.png"
import java from "../img/javascript.png"
import react from "../img/react.png"
import An from "../img/an.png"

const Technology = () => {
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-xl-4 col-lg-6 col-sm-8 center'>
            <Nevbar />
          </div>
          <div className='col-12 col-xl-8'>
            <div className='row'>
              <div className='col-lg-4 col-md-6 col-12'>
                <div className='cards gradient-border-card'>
                  <img src={imgPoto} />
                  <h5>Potoshop</h5>
                  <h2 className='gradient-text'>57%</h2>
                </div>
              </div>
              <div className='col-lg-4 col-md-6 col-12'>
                <div className='cards gradient-border-card'>
                  <img src={html} />
                  <h5>HTML</h5>
                  <h2 className='gradient-text'>99%</h2>
                </div>
              </div>
              <div className='col-lg-4 col-md-6 col-12'>
                <div className='cards gradient-border-card'>
                  <img src={css} />
                  <h5>CSS</h5>
                  <h2 className='gradient-text'>95%</h2>
                </div>
              </div> 
              <div className='col-lg-4 col-md-6 col-12'>
                <div className='cards gradient-border-card'>
                  <img src={java} />
                  <h5>JavaScript</h5>
                  <h2 className='gradient-text'>89%</h2>
                </div>
              </div>
              <div className='col-lg-4 col-md-6 col-12'>
                <div className='cards gradient-border-card'>
                  <img src={react} />
                  <h5>React</h5>
                  <h2 className='gradient-text'>05%</h2>
                </div>
              </div>
              <div className='col-lg-4 col-md-6 col-12'>
                <div className='cards gradient-border-card'>
                  <img src={An} />
                  <h5>Animate</h5>
                  <h2 className='gradient-text'>25%</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Technology