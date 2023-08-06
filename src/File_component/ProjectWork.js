import React from 'react'
import Nevbar from '../Component/Nevbar'
import barber from "../img/Barber.png"
import bahubali from "../img/Bahubali.png"
import Techwind from "../img/Techwind.png"

const ProjectWork = () => {
  return (
    <>
      <div className="container">
        <div className='row'>
          <div className='col-xl-4 col-lg-6 col-sm-8  center'>
            <Nevbar />
          </div>
          <div className='col-12 col-xl-8 '>
            <div className='row'>
              <div className='col-12 '>
                <div className='Project_card'>
                  <div className='row'>
                    <div className='col-lg-6 col-12 centerPro'>
                      <img src={barber} />
                    </div>
                    <div className='col-lg-6 col-12 centerPro pro_text'>
                      <h6>Project in use html , css , bootstrap and jqury , some Efects   </h6>
                      <h5 style={{ marginBottom: '40px' }}>Project Name is :- Bahubali Web Page</h5>
                      <a href='https://devaninigam.github.io/Barber.com/' className='Hire_me_btn'>Show Now</a>
                    </div>
                  </div>
                </div>
                <div className='col-12 '>
                  <div className='Project_card'>
                    <div className='row'>
                      <div className='col-lg-6 col-12 centerPro'>
                        <img src={bahubali} />
                      </div>
                      <div className='col-lg-6 col-12 centerPro pro_text'>
                        <h6>Project in use html , css and css 3  </h6>
                        <h5 style={{ marginBottom: '40px' }}>Project Name is :- Barber WebSite</h5>
                        <a href='https://github.com/devaninigam/Bahubhali_Web_page_for_Netflix_PR_1' className='Hire_me_btn'>Show Now</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-12 '>
                  <div className='Project_card'>
                    <div className='row'>
                      <div className='col-lg-6 col-12 centerPro'>
                        <img src={Techwind} />
                      </div>
                      <div className='col-lg-6 col-12 centerPro pro_text'>
                        <h6>Project in use html , css , bootstrap and jqury , some Efects </h6>
                        <h5 style={{ marginBottom: '40px' }}>Project Name is :- Techwind WebSite</h5>
                        <a href='https://drive.google.com/drive/folders/16Kfun2k_Sn3-_TcYnOeukvrHVXog-iVK' className='Hire_me_btn'>Show Now</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectWork;