import React from 'react'
import Nevbar from '../Component/Nevbar'

const Contect = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-lg-4 col-sm-6  center'>
          <Nevbar />
        </div>
        <div className='col-sm-6 col-12'>
          <div className='Content_text'>
            <h2> My name is Nigam </h2>
            <h5>Details for  Contect Me </h5>
            <div className='Contact_details'>
              <span>Number :-</span>
              <a>9879269650</a>
            </div>
            <div className='Contact_details'>
              <span>Email :-</span>
              <a href='https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCJlJVpGqXjBNvggnJgcfCrcHWbkLpFRJMPLdrgzDjXSPvqjRqtgXnTwSRvfjkQvmvgmNtnB'>devaninigam2311@gmail.com</a>
            </div>
            <div className='Contact_details'>
              <span>Linkedin :-</span>
              <a href='https://www.linkedin.com/in/nigam-devani-638aa8283/?originalSubdomain=in'>Nigam_Devani</a>
            </div>
            <div id='more'>
            <a id='more' href='https://www.google.com/search?rlz=1C1YTUH_enIN1068IN1068&sxsrf=AB5stBg7T_mWkHeNKqgyi9Iu8OTQ7r-FdA:1691246361000&q=Nigam+Devani&stick=H4sIAAAAAAAAAOOwesRoyi3w8sc9YSmdSWtOXmNU4-IJSC0qzs8LTk0sSs4QEuNic80rySypFOKR4uLiqCrLzS6tMk_jWcTK45eZnpir4JJalpiXCQA8UrYjSQAAAA&sa=X&ved=2ahUKEwjYvczU38WAAxVS3TgGHeyhDsgQnJoFegQIKhAG&biw=1440&bih=783&dpr=1' className='Hire_me_btn '>More Detail For  me</a> 
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contect