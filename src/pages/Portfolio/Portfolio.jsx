import React from 'react'
import './Portfolio.css'
import logo34 from '../../assets/Image (13).png'
import logo35 from '../../assets/Image (14).png'
import logo36 from '../../assets/Image (15).png'
import logo37 from '../../assets/Image (16).png'
import logo38 from '../../assets/Photo.png'
import logo39 from '../../assets/Image (17).png'
import { CiCircleChevRight } from "react-icons/ci";
import NewsLetter from '../../components/NewsLetter'




const Portfolio = () => {
    
    const products = [
        {
            id: 1,
            title: "Green & Tasty Lemon",
            category: "Fruits",
            image:logo34
        },
        {
            id: 2,
            title: "Organic Carrot",
            category: "Farmer",
            image:logo35
        },
        {
            id: 3,
            title: "Organic Betel Leaf",
            category: "Leaf",
            image: logo36
        },
        {
            id: 4,
            title: "Natural Tomato",
            category: "Fruits",
            image: logo37
        },
        {
            id: 5,
            title: "Black Raspberry",
            category: "Farmer",
            image:logo38
        },
        {
            id: 6,
            title: "Honey Orange",
            category: "Farmer",
            image:logo39
        }
    ];

    return (
		<div>
			<div className="box56">
				<h1>Portfolio Standard</h1>
			</div>
        <div className="portfolio-container">
            {products.map((product) => (
				<>
					<div key={product.id} className="port-card">
                    <div className="card-image">
                        <img src={product.image} alt={product.title} />
                    </div>
                    <div className="card-content">
                        <h3>{product.title}</h3>
                        <span className="category">{product.category}</span>
                    </div>
					<div className='overlay'>
						<CiCircleChevRight className="overlay-icon"/>
					</div>
                        
					</div>
				</>
                

            ))}
        </div>

		<NewsLetter/>
		</div>
    )
}

export default Portfolio ;