import React from 'react';
import './ShopSingle.css';
import RelatedProducts from '../../components/RelatedProducts';
import NewsLetter from '../../components/NewsLetter';
import { useParams } from 'react-router-dom';
import { products } from './Shop.jsx'; 

const ShopSingle = () => {
  let { id } = useParams();
  let single = products.find((item) => item.id == id);


  return (
    <div className="shop-single-page">
      

      <div className="box41">
        <h1>Shop Single</h1>
      </div>

      <div className="single-product-container">
 
        <div className="single-product-image">
          <span className="single-tag">{single.tag}</span>
          <img src={single.img} alt={single.title} />
        </div>
        

        <div className="single-product-details">
          <h2>{single.title}</h2>
          
          <div className="single-rating">
            ⭐⭐⭐⭐⭐
          </div>
          
          <div className="single-prices">
            <span className="single-old-price">${single.oldPrice}</span>
            <span className="single-new-price">${single.price}</span>
          </div>
          
          <p className="single-short-desc">
            Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
          </p>
          
          <div className="single-actions">
            <span className="quantity-label">Quantity :</span>
            <input type="number" min="1" defaultValue="1" className="quantity-input" />
            <button className="add-to-cart-btn">Add To Cart <span>➔</span></button>
          </div>
        </div>
      </div>

   
      <div className="single-description-section">
        <div className="desc-buttons">
          <button className="btn-desc active">Product Description</button>
          <button className="btn-desc">Additional Info</button>
        </div>
        <p className="desc-text">
          Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.
        </p>
      </div>


      {/* <RelatedProducts /> */}


      <NewsLetter />
      
    </div>
  );
}

export default ShopSingle;