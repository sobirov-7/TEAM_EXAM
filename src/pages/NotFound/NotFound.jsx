import React from 'react'
import './NotFound.css'
import img1 from '../../assets/notfound.svg'
import { Link } from 'react-router-dom'
import Home from '../Home/Home'
import img2 from '../../assets/404.svg'

const NotFound = () => {
	return (
		<div className='NotFound'>
			<div className='box404'>
				<img src={img2} alt="" /> <br />
				<h2>Page not found</h2> 
				<p>The page you are looking for doesn't exist or has been moved</p> <br />
				<button className='btn1'><Link to={'/'}>Go to Homepage</Link></button>	
			</div>
		</div>
	)
}

export default NotFound