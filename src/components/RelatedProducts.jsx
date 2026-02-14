import React from 'react'
import './RelatedProducts.css'
import brokoli from '../assets/brokoli.svg'

	export const products = [
  { id: 1, tag: 'Vegetable', title: 'Calabrese Broccoli', price: '13.00', oldPrice: '20.00', rating: 5, img: '' },
  { id: 2, tag: 'Fresh', title: 'Fresh Banana Fruites', price: '14.00', oldPrice: '20.00', rating: 5, img: '' },
  { id: 3, tag: 'Millets', title: 'White Nuts', price: '15.00', oldPrice: '20.00', rating: 5, img: '' },
  { id: 4, tag: 'Vegetable', title: 'Vegan Red Tomato', price: '17.00', oldPrice: '20.00', rating: 5, img: '' },
];

const RelatedProducts = () => {

	return (

		<div>
            <div className="shop-container">
					{products.map((item) => (
					
					  <Link 
						to={`/shop/${item.id}`} 
						key={item.id} 
						style={{ textDecoration: 'none', color: 'inherit' }}
					  >
						<div className="product-card">
						  <div className="card-header">
							<span className="tag">{item.tag}</span>
						  </div>
						  
						  <div className="image-container">
							<img src={item.img} alt={item.title} />
						  </div>
			
						  <div className="card-body">
							<h3 className="product-title">{item.title}</h3>
							<hr className="divider"/>
							<div className="product-footer">
							  <div className="price-box">
								<span className="old-price">${item.oldPrice}</span>
								<span className="new-price">${item.price}</span>
							  </div>
							</div>
						  </div>
						</div>
					  </Link>
					))}
				  </div>
		</div>
	)
}

export default RelatedProducts