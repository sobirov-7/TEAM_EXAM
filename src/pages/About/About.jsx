import React from 'react'
import { FaLeaf } from "react-icons/fa";
import { FaHeadset } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { GiReturnArrow } from "react-icons/gi";
import './About.css'
import img1 from '../../assets/About.img1.svg'
import img2 from '../../assets/img11.svg'

import img3 from '../../assets/fruit.svg'
import img4 from '../../assets/man.svg'
import img5 from '../../assets/girl.svg'
import img6 from '../../assets/women.svg'
import img7 from '../../assets/qum.svg'
import img8 from '../../assets/nimadur.svg'
import img9 from '../../assets/anor.svg'
import img10 from '../../assets/nimadur2.svg'

const About = () => {
	return (
		<>
			<section className='section1_aboutpg'>
				<img src={img1} alt="" />
			</section>

			<section className="section2_aboutpg">
  <div className="about_container">
    
    <div className="about_left">
      <img src={img2} alt="" />
    </div>

    <div className="about_right">
      <span className="about_subtitle">About Us</span>

      <h2>
        We do Creative <br />
        Things for Success
      </h2>

      <p>
        Simply dummy text of the printing and typesetting industry.
        Lorem had ceased to been the industry's standard dummy text ever
        since the 1500s.
      </p>

      <p>
        Simply dummy text of the printing and typesetting industry.
        Lorem had ceased to been the industry's standard dummy text ever
        since the 1500s.
      </p>

      <div className="about_features">
        <div className="feature">
          <span>🚜</span>
          <p>Modern Agriculture Equipment</p>
        </div>

        <div className="feature">
          <span>🏭</span>
          <p>No growth hormones are used</p>
        </div>
      </div>

      <button className="about_btn">Explore More →</button>
    </div>

  </div>
</section>

<section className="section3_aboutpg">
  <div className="section3_container">

    <div className="section3_left">
      <span className="section3_subtitle">Why Choose us?</span>

      <h2>
        We do not buy from the <br />
        open market & traders.
      </h2>

      <p className="section3_desc">
        Simply dummy text of the printing and typesetting industry.
        Lorem had ceased to been the industry's standard the 1500s,
        when an unknown
      </p>

      <div className="section3_points">
        
        <div className="point">
          <FaLeaf className="point_icon" />
          <div>
            <h4>100% Natural Product</h4>
            <p>Simply dummy text of the printing and typesetting industry.</p>
          </div>
        </div>

        <div className="point">
          <FaLeaf className="point_icon" />
          <div>
            <h4>Increases resistance</h4>
            <p>Filling, and temptingly healthy, our Biona Organic Granola</p>
          </div>
        </div>

      </div>
    </div>

    <div className="section3_right">
      <img src={img3} alt="why choose us" />
    </div>

  </div>


  <div className="section3_cards">
    
    <div className="card">
      <GiReturnArrow className="card_icon" />
      <h4>Return Policy</h4>
      <p>Simply dummy text of the printing industry.</p>
    </div>

    <div className="card">
      <FaLeaf className="card_icon" />
      <h4>100% Fresh</h4>
      <p>Simply dummy text of the printing industry.</p>
    </div>

    <div className="card">
      <FaHeadset className="card_icon" />
      <h4>Support 24/7</h4>
      <p>Simply dummy text of the printing industry.</p>
    </div>

    <div className="card">
      <FaLock className="card_icon" />
      <h4>Secured Payment</h4>
      <p>Simply dummy text of the printing industry.</p>
    </div>

  </div>
</section>



		    <section className="section4_aboutpg">
      <div className="section4_aboutpg-container">
        
        <div className="section4_aboutpg-header">
          <span className="section4_aboutpg-subtitle">Team</span>
          <h2 className="section4_aboutpg-title">Our Organic Experts</h2>
          <p className="section4_aboutpg-text">
            Simply dummy text of the printing and typesetting industry.
            Lorem had ceased to been the industry's standard dummy text ever since the 1500s.
          </p>
        </div>

        <div className="section4_aboutpg-cards">

          <div className="section4_aboutpg-card">
            <div className="section4_aboutpg-image">
				<img src={img4} alt="" />
            </div>
            <div className="section4_aboutpg-info">
              <h4>Giovani Bacardo</h4>
              <span>Farmer</span>
            </div>
          </div>

          <div className="section4_aboutpg-card">
            <div className="section4_aboutpg-image">
				<img src={img5} alt="" />
            </div>
            <div className="section4_aboutpg-info">
              <h4>Marianne Loreno</h4>
              <span>Designer</span>
            </div>
          </div>

          <div className="section4_aboutpg-card">
            <div className="section4_aboutpg-image">
				<img src={img6} alt="" />
            </div>
            <div className="section4_aboutpg-info">
              <h4>Riga Pelore</h4>
              <span>Farmer</span>
            </div>
          </div>

          

        </div>
      </div>
    </section>


		    <section className="section5_aboutpg">
      <div className="section5_aboutpg-container">

        <div className="section5_aboutpg-header">
          <span className="section5_aboutpg-subtitle">About Us</span>
          <h2 className="section5_aboutpg-title">
            What We Offer for You
          </h2>
        </div>

        <div className="section5_aboutpg-cards">

          <div className="section5_aboutpg-card">
            <div className="section5_aboutpg-image">
				<img src={img7} alt="" />
            </div>
            <p>Spicy</p>
          </div>

          <div className="section5_aboutpg-card">
            <div className="section5_aboutpg-image">
				<img src={img8} alt="" />
            </div>
            <p>Nuts & Feed</p>
          </div>

          <div className="section5_aboutpg-card">
            <div className="section5_aboutpg-image">
				<img src={img9} alt="" />
	        </div>
            <p>Fruits</p>
          </div>

          <div className="section5_aboutpg-card">
            <div className="section5_aboutpg-image">
				<img src={img10} alt="" />
            </div>
            <p>Vegetable</p>
          </div>

        </div>

      </div>
    </section>

		</>
	)
}

export default About