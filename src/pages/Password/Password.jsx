import React from 'react'
import './Password.css'
import img20 from '../../assets/Password.svg'
import img21 from '../../assets/plan.svg'
const Password = () => {
	return (
		<>
			<section className='section1_Password'>
				<img src={img20} alt="" />
			</section>

			<section className="section2_Password">
  <div className="section2_Password_container">

    <div className="section2_Password_image">
		<img src={img21} alt="" />
    </div>

    <div className="section2_Password_content">
      <h2 className="section2_Password_title">Password</h2>

      <input
        type="password"
        placeholder="Enter Your Password"
        className="section2_Password_input"
      />

      <button className="section2_Password_btn">
        Send Now
        <span className="section2_Password_arrow">→</span>
      </button>
    </div>

  </div>
</section>

		</>
	)
}

export default Password