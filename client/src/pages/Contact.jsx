import './Contact.css'

const Contact = () => {
    return (
      <div className='contact-main-div'>
        <div className="holder-div">
          <div className="contact-links">
              <ul className="contact-link-list">
                  <li>email : "avnk.24598@gmail.com"</li>
                  <li>Linkdin: </li>
                  <li>Github</li>
              </ul>
          </div>
          <div className='form-div'>
              <form action="" className='contact-form'>
                  <label htmlFor="userMail">Your Email:</label>
                  <input type="email" id="userMail" placeholder="jolly@gmail.com" />
                  <label htmlFor="userSubject">subject</label>
                  <input type="text" id="userSubject" />
                  <label htmlFor="userElaborate">Text</label>
                  <textarea id="userElaborate" placeholder="type here...."></textarea>
                  <button type="submit">Submit</button>
              </form>
          </div>
        </div>
      </div>
    )
  }
  
  export default Contact