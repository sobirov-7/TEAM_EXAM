import React from 'react'
import './BlogSingle.css'
import NewsLetter from '../../components/NewsLetter'

const BlogSingle = () => {

	// let { id } = useParams();

  // let single = products.find(
  //   (item) => item.id === Number(id)
  // );
	return (
		<>

		<div className="box45">
					{/* <img src={single.image}  /> */}
      </div>
			<div className="OrganFood">
				<small>Posted On: January 6, 2022  By Rachi Card</small> <br /> <br />
				{/* <h2>{single.title}</h2> <br /><br /> */}
				<p>Established fact that a reader will be distracted by the readable content of a page <br /> when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less <br /> normal distribution of letters, as opposed </p>
			</div>
		<div className='BlogSingle'>
			

			<p>Uniquely matrix economically sound value through cooperative technology. Competently parallel task fully <br /> researched data and enterprise process improvements. Collaboratively expedite quality manufactured <br /> products via client-focused results quickly communicate enabled technology and turnkey leadership skills. <br /> Uniquely enable accurate supply chains rather than friction technology.</p> <br /><br />

			<h1>Preferred Form of Vitamin D?</h1> <br /><br />
			<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking a <br /> layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to <br /> using 'Content here, content here', making it look like readable English.</p> <br /><br />

			<ul>
				<li> Publishing packages and web pageLorem Ipsum as their default</li><br />
				<li> Content here, content here', making it look like readable</li><br />
				<li> Packages and web pageLorem Ipsum as their default</li><br />
			</ul> <br /><br />

			<h3>“The first rule of any organic used in a business is that nature applied to an <br /> efficient operation will magnify the efficiency. The second is that organic applied <br /> to an inefficient operation will magnify the health.”</h3> <br /><br />

			<h2>Make perfect organic product with us</h2> <br />
			<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking a <br /> layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to <br /> using 'Content here, content here', making it look like readable English.</p> <br /><br />

			<ol>
				<li> Publishing packages and web pageLorem Ipsum as their default</li><br />
				<li> Content here, content here', making it look like readable</li><br />
				<li> More-or-less normal distribution of letters</li><br />
			</ol>

		</div>
			<NewsLetter/>
		</>
	)
}

export default BlogSingle