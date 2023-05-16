import React from 'react'
import '../Contact Us/ContactUs.css'

const ContactUs = () => {
  return (
    <div>
      <div >
        <div className="mainn">
          <div className="containerr">
            <div className="imagg">
              <iframe className="viewImgg" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.0759831374658!2d77.28176917438478!3d19.191883348325923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd1d4203c0ac39b%3A0x9a695e71abd55987!2z4KSh4KWAIOCkruCkvuCksOCljeCknw!5e0!3m2!1shi!2sin!4v1683623226318!5m2!1shi!2sin" ></iframe>
            </div>
            <div className="text-containerr">
              <h5>Address :</h5><p>Canal Rd, Tirumala Nagar, Nanded, Maharashtra 411052</p>
              
              <h5>Email :</h5><p>xyz@email.com</p>
              <h5>Phone :</h5><p>123456****</p> 
              <h5>Mon - Fri, 9AM - 5PM</h5>                        
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs