import React from 'react'
import './ServiceSingle.css'
import img1 from "../../assets/Image (2).svg"
import img2 from '../../assets/Image (3).svg'
import img3 from '../../assets/Image (4).svg'
import NewsLetter from '../../components/NewsLetter'

const ServiceSingle = () => {
	return (
		<div className='ServiceSingle'>
			<div className="box42">
        <h1>Quality Standard</h1>
      </div>
			<div className="containerImg">
				<img src={img1} alt="" width={1300}/> <br /><br /> <br />
			</div>
			<div className="containerText">
				<h2>Organic Store Services</h2> <br /><br />
				<p>t is a long established fact that a reader will be distracted by the readable content of a page when looking a <br /> layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to <br /> using 'Content here, content here', making it look like readable English. <br /><br />

				Many desktop publishing packages and web page editors now use Lorem Ipsum as their 				default model text, <br /> and auncover many web sites still in their infancy. Various 				versions have evolved over the years</p>
			</div>
			<div className="boxCards">
				<div className="boxCard1">
					<img src={img2} alt="" />
					<div className="boxText1">
						<h3>Why Organic</h3> <br />
					<p>Sed ut perspiciatis unde omnis iste natus error sit <br /> voluptat. page editors now use Lorem Ipsum as their <br /> default model text, and auncover.</p>
					</div>
				</div>
				<div className="boxCard1">
					<div className="boxText1">
						<h3>Speciality Produce</h3> <br />
					<p>Sed ut perspiciatis unde omnis iste natus error sit <br /> voluptat. page editors now use Lorem Ipsum as their <br /> default model text, and auncover.</p>
					</div>
						<img src={img3} alt="" />
				</div> <br /><br />
				<h2>We farm your land</h2> <br />
				<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking a <br /> layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to <br /> using 'Content here, content here', making it look like readable English.</p>
			</div>
			<NewsLetter/>
		</div>
	)
}

export default ServiceSingle