import React from 'react'
import './Blog.css'

import logo100 from '../../assets/Image (19).png'
import logo101 from '../../assets/Photo (10).png'
import logo102 from '../../assets/Image (20).png'
import logo103 from '../../assets/Image (21).png'
import logo104 from '../../assets/Image (22).png'
import logo105 from '../../assets/Image (23).png'


const blogData = [
    {
        id: 1,
        date: "25",
        month: "Nov",
        author: "Rachi Card",
        title: "The Benefits of Vitamin D & How to Get It",
        desc: "Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
        image: logo100
    },
    {
        id: 2,
        date: "25",
        month: "Nov",
        author: "Rachi Card",
        title: "Our Favorite Summertime Tomato",
        desc: "Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
        image: logo101 
    },
    {
        id: 3,
        date: "25",
        month: "Nov",
        author: "Rachi Card",
        title: "Benefits of Vitamin C & How to Get It",
        desc: "Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
        image: logo102
    },
    {
        id: 4,
        date: "25",
        month: "Nov",
        author: "Rachi Card",
        title: "Research More Organic Foods",
        desc: "Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
        image: logo103
    },
    {
        id: 5,
        date: "25",
        month: "Nov",
        author: "Rachi Card",
        title: "Everyday Fresh Fruites",
        desc: "Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
        image: logo104
    },
    {
        id: 6,
        date: "25",
        month: "Nov",
        author: "Rachi Card",
        title: "Don't Use Plastic Product! it's Kill Nature",
        desc: "Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
        image: logo105
    }
];

const Blog = () => {
    return (
        <div className="blog-section">
            <div className='box450'>
                <h1>Recent News</h1>
            </div>

            <div className="blog-container">
                <div className="blog-grid">
                    {blogData.map((blog) => (
                        <div key={blog.id} className="blog-card" >
                            <div className="date-circle">
                                <span className="day">{blog.date}</span>
                                <span className="month">{blog.month}</span>
                            </div>
                            <img src={blog.image} alt={blog.title} className="blog-img" />

                            <div className="blog-content">
                                <div className="author">
                                    <span className="user-icon">👤</span> By {blog.author}
                                </div>
                                <h3 className="blog-title">{blog.title}</h3>
                                <p className="blog-desc">{blog.desc}</p>
                                <a href="/blogsingle" className="read-more">
                                    Read More <span className="arrow">→</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Blog