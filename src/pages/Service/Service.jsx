import React from 'react';
import './Service.css';
import logo15 from '../../assets/Image (11).png'
import NewsLetter from '../../components/NewsLetter';


const Service = () => {
    return (
        <div className="service-container">
            <div className="box100">
                <h1>Services</h1>
            </div>
            

 
            <section className="features-section">
                <div className="features-header">
                    <span className="subtitle">What we Grow</span>
                    <h2 className="section-title">Better Agriculture for Better Future</h2>
                </div>

                <div className="features-grid">
                  
                    <div className="features-column left-align">
                        <div className="feature-item">
                            <div className="icon">🥛</div>
                            <h3>Dairy Products</h3>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium.</p>
                        </div>
                        <div className="feature-item">
                            <div className="icon">🏪</div>
                            <h3>Store Services</h3>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium.</p>
                        </div>
                        <div className="feature-item">
                            <div className="icon">🚚</div>
                            <h3>Delivery Services</h3>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium.</p>
                        </div>
                    </div>

                    <div className="features-image">
                        <img src={logo15} alt="" />
                        
                    </div>

                
                    <div className="features-column right-align">
                        <div className="feature-item">
                            <div className="icon">🌱</div>
                            <h3>Agricultural Services</h3>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium.</p>
                        </div>
                        <div className="feature-item">
                            <div className="icon">🥜</div>
                            <h3>Organic Products</h3>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium.</p>
                        </div>
                        <div className="feature-item">
                            <div className="icon">🥬</div>
                            <h3>Fresh Vegetables</h3>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium.</p>
                        </div>
                    </div>
                </div>

                <div className="action-area">
                    <button className="explore-btn">Explore More ➔</button>
                </div>

                <section className="hero-section">
                <div className="hero-content">
                    <span className="subtitle">Organic Only</span>
                    <h1 className="main-title">Everyday Fresh & Clean</h1>
                    <p className="description">
                        Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the.
                    </p>
                    <button className="play-button">
                        <div className="play-icon">▶</div>
                    </button>
      
                </div>

            </section>
				
            </section>
        </div>
    );
}

export default Service;