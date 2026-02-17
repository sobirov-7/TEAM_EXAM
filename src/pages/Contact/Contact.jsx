import React from 'react'
import './Contact.css'
import img22 from '../../assets/Contact.svg'
import img23 from '../../assets/Banana.svg'
import img24 from '../../assets/icons.svg'
const Contact = () => {
	return (
		<>
			<section className='section1_Contact'>
				<img src={img22} alt="" />
			</section>


			<section className='section2_Contact'>
				<img src={img23} alt="" />
				<div className="section2_texts">
					<h1>We'd love to talk about how we <br /> can work together.</h1>
					<p>Simply dummy text of the printing and typesetting industry. Lorem had ceased to <br /> been the industry's standard dummy text ever since the 1500s, when an unknown <br /> printer took a galley.</p><br /><br />
					<h3 className='Contact_texts-h3'>Massege</h3>
					<p className='Contact_texts-p'>support@saasflow.com</p><br />
					<h3 className='Contact_texts-1h3'>Contact Us</h3>
					<p className='Contact_texts-p1'>+01 123 456 789</p><br />
					<img src={img24} alt=""  className='Contact_texts-img1'/>
				</div>
			</section><br /><br /><br /><br /><br /><br /><br />


			<section className="section3_Contact">
  				<div className="section3_Contact_card">
   				 <span className="section3_Contact_location">Location</span>

  				  <h2 className="section3_Contact_title">Our Farms</h2>

   				 <p className="section3_Contact_text">
      				Established fact that a reader will be distracted by the readable
      				content of a page when looking a layout. The point of using.
   				 </p>

    				<div className="section3_Contact_item">
     				 <div className="section3_Contact_icon">📍</div>
      				<div>
       				 <h4>New York, USA:</h4>
        				<p>299 Park Avenue New York,<br />New York 10171</p>
     				 </div>
    				</div>

    				<div className="section3_Contact_item">
     				 <div className="section3_Contact_icon">📍</div>
      				<div>
        				<h4>London, UK:</h4>
       				 <p>30 Stamford Street,<br />London SE1 9LQ</p>
      				</div>
    				</div>
  				</div>
  				 </section>

			<section className="section4_contact">
  				<div className="section4_contact_container">
    
   				 <div className="section4_contact_row">
    				 				 <div className="section4_contact_field">
     				  				 <label>Full Name*</label>
        				<input type="text" placeholder="Your Full Name" />
     				 </div>

     				 				<div className="section4_contact_field">
        				<label>Your Email*</label>
       				 <input type="email" placeholder="example@yourmail.com" />
      					</div>
   						 </div>

   				 <div className="section4_contact_row">
				<div className="section4_contact_field">
       				 <label>Company*</label>
       				 <input type="text" placeholder="yourcompany name here" />
     				 </div>

      				<div className="section4_contact_field">
       				 <label>Subject*</label>
       				 <input type="text" placeholder="how can we help" />
      				</div>
   				 </div>

   				 <div className="section4_contact_field full">
      				<label>Message*</label>
    				  <textarea placeholder="hello there, i would like to talk about how to..."></textarea>
   				 </div>

    				<button className="section4_contact_btn">
    				  Send Message
   				 </button>

				</div>
			</section>


		</>
	)
}

export default Contact