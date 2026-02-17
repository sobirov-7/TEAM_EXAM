import { useParams } from 'react-router-dom'
import img1 from '../../assets/Image (5).svg'
import NewsLetter from '../../components/NewsLetter'
import './PortfolioSingle.css'
// import { products } from '../Shop/Shop.jsx'
import { products } from "./Portfolio"


const PorfolioSingle = () => {
	  let { id } = useParams();

  let single = products.find(
    (item) => item.id === Number(id)
  );
	console.log(single);
	
  // if (!single) {
  //   return <h2>Product topilmadi</h2>;
  // }
	return (
		<div className='PorfolioSingle'>
			<div className="box47">
					<img src={single.image}  />
      </div>
			<div className="OrganFood">
				{/* <small>Posted On: January 6, 2022  By Rachi Card</small> <br /> <br /> */}
				<h2>{single.title}</h2> <br /><br />
				<p>Established fact that a reader will be distracted by the readable content of a page <br /> when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less <br /> normal distribution of letters, as opposed </p>
			</div>
			<div className="container11">
				<h2>About The Farm:</h2> <br />
				<p>t is a long established fact that a reader will be distracted by the readable content of a page when looking a <br /> layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to <br /> using 'Content here, content here', making it look like readable English. <br /><br />

Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, <br /> and auncover many web sites still in their infancy. Various versions have evolved over the years</p> <br /><br />
				<img src={img1} alt="" id='img111'/> <br /><br /><br />
				<h2>How To Farm:</h2> <br />
				<p>t is a long established fact that a reader will be distracted by the readable content of a page when looking a <br /> layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to <br /> using 'Content here, content here', making it look like readable English. <br /><br />

Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, <br /> and auncover many web sites still in their infancy. Various versions have evolved over the years</p> <br /><br />
				<h2>Conclusion:</h2> <br />
				<p>t is a long established fact that a reader will be distracted by the readable content of a page when looking a <br /> layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to <br /> using 'Content here, content here', making it look like readable English. <br /><br />

Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, <br /> and auncover many web sites still in their infancy. Various versions have evolved over the years</p> <br /><br />
			</div>
			<NewsLetter/>
		</div>
	)
}

export default PorfolioSingle