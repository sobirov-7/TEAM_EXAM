import React from 'react'
import './Home.css'
import img3 from '../../assets/Banner.jpg'
import img4 from '../../assets/img2.svg'
import img5 from '../../assets/nature.svg'
import img6 from '../../assets/Juice.svg'
import img7 from '../../assets/lipton.svg'
import img8 from '../../assets/Nuts.svg'
import img9 from '../../assets/Banner.jpg'
const Home = () => {
  return (
    <>

      <section homepg_texts>
        <img src={img9} alt="" className='Banner' />
      </section>

      <div className='Homepg_section2'>
        <div className="Homepg2_section2_texts">
          <img src="/src/assets/img1.svg" alt="" />
          <img src="/src/assets/img1.svg" alt="" />
        </div>
      </div>


      <div className="homepg_section3">
        <div className="homepg_section3_container">

          <div className="section3_image">
            <div className="image_placeholder">
              <img src={img4} alt="" width={"85%"} />
            </div>
          </div>

          <div className="section3_content">
            <span className="section3_subtitle">About Us</span>
            <h2>
              We Believe in Working <br />
              Accredited Farmers
            </h2>

            <p className="section3_desc">
              Simply dummy text of the printing and typesetting industry.
              Lorem had ceased to been the industry's standard dummy text ever since the 1500s.
            </p>

            <div className="section3_feature">
              <div className="feature_icon"></div>
              <div>
                <h4>Organic Foods Only</h4>
                <p>Simply dummy text of the printing and typesetting industry.</p>
              </div>
            </div>

            <div className="section3_feature">
              <div className="feature_icon"></div>
              <div>
                <h4>Quality Standards</h4>
                <p>Simply dummy text of the printing and typesetting industry.</p>
              </div>
            </div>

            <button className="section3_btn">Shop Now</button>
          </div>

        </div>
      </div>


      <section class="homepg_section4">
        <div class="container">
          <p class="subtitle">Categories</p>
          <h2 class="title">Our Products</h2>

          <div class="products-grid">
            {/* card  */}
            <div class="product-card">
              <span class="badge">Vegetable</span>

              <div class="product-image">
                <img src={img4} alt="" />
              </div>

              <h3 class="product-title">Calabrese Broccoli</h3>

              <div class="price">
                <span class="old">$20.00</span>
                <span class="new">$13.00</span>
              </div>

              <div class="stars">★★★★★</div>
            </div>

            <div class="product-card">
              <span class="badge">Vegetable</span>

              <div class="product-image">
                <img src={img4} alt="" />
              </div>

              <h3 class="product-title">Calabrese Broccoli</h3>

              <div class="price">
                <span class="old">$20.00</span>
                <span class="new">$13.00</span>
              </div>

              <div class="stars">★★★★★</div>
            </div>

            <div class="product-card">
              <span class="badge">Vegetable</span>

              <div class="product-image">
                <img src={img4} alt="" />
              </div>

              <h3 class="product-title">Calabrese Broccoli</h3>

              <div class="price">
                <span class="old">$20.00</span>
                <span class="new">$13.00</span>
              </div>

              <div class="stars">★★★★★</div>
            </div>

            <div class="product-card">
              <span class="badge">Vegetable</span>

              <div class="product-image">
                <img src={img4} alt="" />
              </div>

              <h3 class="product-title">Calabrese Broccoli</h3>

              <div class="price">
                <span class="old">$20.00</span>
                <span class="new">$13.00</span>
              </div>

              <div class="stars">★★★★★</div>
            </div>

            <div class="product-card">
              <span class="badge">Vegetable</span>

              <div class="product-image">
                <img src={img4} alt="" />
              </div>

              <h3 class="product-title">Calabrese Broccoli</h3>

              <div class="price">
                <span class="old">$20.00</span>
                <span class="new">$13.00</span>
              </div>

              <div class="stars">★★★★★</div>
            </div>

            <div class="product-card">
              <span class="badge">Vegetable</span>

              <div class="product-image">
                <img src={img4} alt="" />
              </div>

              <h3 class="product-title">Calabrese Broccoli</h3>

              <div class="price">
                <span class="old">$20.00</span>
                <span class="new">$13.00</span>
              </div>

              <div class="stars">★★★★★</div>
            </div>

            <div class="product-card">
              <span class="badge">Vegetable</span>

              <div class="product-image">
                <img src={img4} alt="" />
              </div>

              <h3 class="product-title">Calabrese Broccoli</h3>

              <div class="price">
                <span class="old">$20.00</span>
                <span class="new">$13.00</span>
              </div>

              <div class="stars">★★★★★</div>
            </div>

            <div class="product-card">
              <span class="badge">Vegetable</span>

              <div class="product-image">
                <img src={img4} alt="" />
              </div>

              <h3 class="product-title">Calabrese Broccoli</h3>

              <div class="price">
                <span class="old">$20.00</span>
                <span class="new">$13.00</span>
              </div>

              <div class="stars">★★★★★</div>
            </div>
          </div>
        </div>
      </section>

      <section className="homepg_section_4">
        <div className="testimonial">
          <p className="testimonial_label">Testimonial</p>
          <h2 className="testimonial_title">What Our Customer Saying?</h2>

          <div className="testimonial_card">
            <img
              src="/images/testimonial-user.png"
              alt="Customer"
              className="testimonial_avatar"
            />

            <div className="testimonial_stars">
              ★★★★★
            </div>

            <p className="testimonial_text">
              Simply dummy text of the printing and typesetting industry.
              Lorem Ipsum simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been.
            </p>

            <h4 className="testimonial_name">Sara Taylor</h4>
            <span className="testimonial_role">Consumer</span>

            <div className="testimonial_dots">
              <span className="dot active"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </div>
        </div>

        <div className="counter">
          <div className="counter_item">
            <h3>100%</h3>
            <p>Organic</p>
          </div>

          <div className="counter_item">
            <h3>285</h3>
            <p>Active Product</p>
          </div>

          <div className="counter_item">
            <h3>350+</h3>
            <p>Organic Orchads</p>
          </div>

          <div className="counter_item">
            <h3>25+</h3>
            <p>Years of Farming</p>
          </div>
        </div>
      </section>


      <section className='homepg_section6'>
        <img src={img5} alt="" />
        <div className="homepg_texts">
          <h1>Econis is a Friendly <br />Organic Store</h1><br />
          <h3>Start with Our Company First</h3>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium <br /> doloremque laudantium. Sed ut perspiciatis.</p><br /><br />
                    <h3>Start with Our Company First</h3>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium <br /> doloremque laudantium. Sed ut perspiciatis.</p><br /><br />
                    <h3>Start with Our Company First</h3>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium <br /> doloremque laudantium. Sed ut perspiciatis.</p><br /><br />
        </div>
      </section><br /><br /><br /><br /><br /><br /><br />


      <section className='homepg_section7'>
        <img src={img6} alt="" id='aa'/>
        <img src={img7} alt="" id='bb'/>
        <img src={img8} alt="" id='cc'/>
      </section>


    </>
  )
}

export default Home