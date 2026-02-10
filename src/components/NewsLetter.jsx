import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
	return (
		<div className="container">
			<div className='NewsLetter'>
				<h2>Subscribe to <br /> our Newsletter</h2>
				<div className="contact">
					<input type="text" placeholder='Your Email Address'/>
					<button>Subscribe</button>
				</div>
			</div>
		</div>
	)
}

export default NewsLetter