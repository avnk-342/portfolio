import { useState } from 'react'
import './Contact.css'
import axios from "axios"

const Contact = () => {
  const [FormData, setFormData] = useState({
    email: "",
    subject: "",
    text: "" 
  })

  const handelChange = (e) => {
    setFormData({...FormData, [e.target.name]: e.target.value})
  }
  
  const handelSubmit = (e) => {
    e.preventDefault()
      axios({
        method: "post",
        url:'http://localhost:8080/contact',
        data: {FormData},
      })
      .then(res=> console.log("success"))
      .catch(err=> console.log("sed life"))
  }


  return (
    <div className='contact-main-div'>
      <div className="holder-div">
        <h1 className='label-contact'>Contact me via</h1>
        <div className="contact-links">
            <ul className="contact-link-list">
              <a href="mailto:someone@example.com"><li>Email (avnk.24598@gmail.com)</li></a>
              <a href="https://www.linkedin.com/in/anmol-koundal-19748a241?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><li>Linkdin</li></a>
              <a href="https://github.com/avnk-342"><li>Github</li></a>
            </ul>
        </div>
        {/* <h1 className='label-contact'>OR</h1>
        <p className='label2-contact'>Fill this form</p>
        <div className='form-div'>
          <form onSubmit={handelSubmit} className='contact-form'>
            <label htmlFor="userMail">Your Email:</label>
            <input type="email" id="userMail" placeholder="jolly@gmail.com" name='email' onChange={handelChange}  value={FormData.email} />
            <label htmlFor="userSubject">subject</label>
            <input type="text" id="userSubject" name='subject' onChange={handelChange} value={FormData.subject} />
            <label htmlFor="userElaborate">Text</label>
            <textarea id="userElaborate" placeholder="type here...." name='text' onChange={handelChange} value={FormData.text} ></textarea>
            <button type="submit">Submit</button>
          </form>
        </div> */}
      </div>
    </div>
  )
}
  
export default Contact