import React from 'react';
import { Link } from 'react-router-dom'; 
import './Shop.css';
import Navbar from '../../components/Navbar';
import { DiLaravel } from 'react-icons/di';
import img1 from '../../assets/Photo (1).png'
import img2 from '../../assets/Photo (2).png'
import img3 from '../../assets/Photo (3).png'
import img4 from '../../assets/Photo (4).svg'
import img5 from '../../assets/Photo (5).png'
import img6 from '../../assets/Photo (6).png'
import img7 from '../../assets/Photo (8).png'
import img8 from '../../assets/a1a0c6166f5bcadc055840a8e3ce3837a16d918b.png'
import img9 from '../../assets/83bd77968b1f0548ce9236babe0d3cd145551e11.png'
import img10 from '../../assets/25b77d15e753c5f41067642ba8690ae63129d7f2.png'
import img11 from '../../assets/761e943e2ebd46197311ba99790e8050fad752af (1).png'
import img12 from '../../assets/9b2572fc2b1137708808cccb1e3fee46782e6661.png'

export const products = [
  { id: 1, tag: 'Vegetable', title: 'Calabrese Broccoli', price: '13.00', oldPrice: '20.00', rating: 5, img: img1 },
  { id: 2, tag: 'Fresh', title: 'Fresh Banana Fruites', price: '14.00', oldPrice: '20.00', rating: 5, img: img2 },
  { id: 3, tag: 'Millets', title: 'White Nuts', price: '15.00', oldPrice: '20.00', rating: 5, img: img3 },
  { id: 4, tag: 'Vegetable', title: 'Vegan Red Tomato', price: '17.00', oldPrice: '20.00', rating: 5, img: img4 },
  { id: 5, tag: 'Health', title: 'Mung Bean', price: '11.00', oldPrice: '20.00', rating: 5, img: img5 },
  { id: 6, tag: 'Nuts', title: 'Brown Hazelnut', price: '12.00', oldPrice: '20.00', rating: 5, img: img6 },
  { id: 7, tag: 'Fresh', title: 'Eggs', price: '17.00', oldPrice: '20.00', rating: 5, img: img7 },
  { id: 8, tag: 'Fresh', title: 'Zelco Suji Elaichi Rusk', price: '15.00', oldPrice: '20.00', rating: 5, img: img8 },
  { id: 9, tag: 'Health', title: 'Mung Bean', price: '11.00', oldPrice: '20.00', rating: 5, img: img9 },
  { id: 10, tag: 'Nuts', title: 'White Hazelnut', price: '12.00', oldPrice: '20.00', rating: 5, img: img10 },
  { id: 11, tag: 'Fresh', title: 'Fresh Corn', price: '17.00', oldPrice: '20.00', rating: 5, img: img11 },
  { id: 12, tag: 'Fresh', title: 'Organic Almonds', price: '15.00', oldPrice: '20.00', rating: 5, img: img12 },
];

const Shop = () => {
  return (
    <div>
      <div id="box400">
        <h1>Shop</h1>
      </div>
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
  );
};

export default Shop;