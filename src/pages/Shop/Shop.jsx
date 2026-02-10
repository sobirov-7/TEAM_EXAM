import React from 'react';
import './Shop.css';
import Navbar from '../../components/Navbar';

import { DiLaravel } from 'react-icons/di';


const products = [
  {
    id: 1,
    tag: 'Vegetable',
    title: 'Calabrese Broccoli',
    price: '13.00',
    oldPrice: '20.00',
    rating: 5,
    img: '', 
  },
  {
    id: 2,
    tag: 'Fresh',
    title: 'Fresh Banana Fruites',
    price: '14.00',
    oldPrice: '20.00',
    rating: 5,
    img: '',
  },
  {
    id: 3,
    tag: 'Millets',
    title: 'White Nuts',
    price: '15.00',
    oldPrice: '20.00',
    rating: 5,
    img: '',
  },
  {
    id: 4,
    tag: 'Vegetable',
    title: 'Vegan Red Tomato',
    price: '17.00',
    oldPrice: '20.00',
    rating: 5,
    img: '',
  },
  {
    id: 5,
    tag: 'Health',
    title: 'Mung Bean',
    price: '11.00',
    oldPrice: '20.00',
    rating: 5,
    img: '',
  },
  {
    id: 6,
    tag: 'Nuts',
    title: 'Brown Hazelnut',
    price: '12.00',
    oldPrice: '20.00',
    rating: 5,
    img: '',
  },
  {
    id: 7,
    tag: 'Fresh',
    title: 'Eggs',
    price: '17.00',
    oldPrice: '20.00',
    rating: 5,
    img: '',
  },
  {
    id: 8,
    tag: 'Fresh',
    title: 'Zelco Suji Elaichi Rusk',
    price: '15.00',
    oldPrice: '20.00',
    rating: 5,
    img: '',
  },
  {
    id: 9,
    tag: 'Health',
    title: 'Mung Bean',
    price: '11.00',
    oldPrice: '20.00',
    rating: 5,
    img: '',
  },
  {
    id: 10,
    tag: 'Nuts',
    title: 'White Hazelnut',
    price: '12.00',
    oldPrice: '20.00',
    rating: 5,
    img: '',
  },
  {
    id: 11,
    tag: 'Fresh',
    title: 'Fresh Corn',
    price: '17.00',
    oldPrice: '20.00',
    rating: 5,
    img: '',
  },
  {
    id: 12,
    tag: 'Fresh',
    title: 'Organic Almonds',
    price: '15.00',
    oldPrice: '20.00',
    rating: 5,
    img: '',
  },
];

const Shop = () => {


  return (
    
    <div>
      <div className="box40">
        <h1>Shop</h1>
      </div>
      <div className="shop-container">
      
      {products.map((item) => (
        <div className="product-card" key={item.id}>
          <div className="card-header">
            <span className="tag">{item.tag}</span>
          </div>
          
          <div className="image-container">
            <img src={item.img}  />
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
      ))}
    </div>
    </div>
  );
};

export default Shop;