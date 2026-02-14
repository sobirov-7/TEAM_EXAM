import React from 'react'
import './Team.css'
import img4 from '../../assets/man.svg'
import img5 from '../../assets/girl.svg'
import img6 from '../../assets/women.svg'
import img15 from '../../assets/women2.svg'
import img16 from '../../assets/girl1.svg'
import img17 from '../../assets/man2.svg'
import img18 from '../../assets/team.svg'
const Team = () => {
	return (
		<>

		<section className='Team_header'>
			<img src={img18} alt="" />
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

        </div><br /><br /><br /><br /><br />

				<div className="section4_aboutpg-cards">

          <div className="section4_aboutpg-card">
            <div className="section4_aboutpg-image">
				<img src={img15} alt="" />
            </div>
            <div className="section4_aboutpg-info">
              <h4>Giovani Bacardo</h4>
              <span>Farmer</span>
            </div>
          </div>

          <div className="section4_aboutpg-card">
            <div className="section4_aboutpg-image">
				<img src={img16} alt="" />
            </div>
            <div className="section4_aboutpg-info">
              <h4>Marianne Loreno</h4>
              <span>Designer</span>
            </div>
          </div>

          <div className="section4_aboutpg-card">
            <div className="section4_aboutpg-image">
				<img src={img17} alt="" />
            </div>
            <div className="section4_aboutpg-info">
              <h4>Riga Pelore</h4>
              <span>Farmer</span>
            </div>
          </div>

        </div>


      </div>
    </section>
		</>
	)
}

export default Team