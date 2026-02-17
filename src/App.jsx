import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import About from './pages/About/About'
import Blog from './pages/Blog/Blog'
import BlogSingle from './pages/Blog/BlogSingle'
import Changelog from './pages/Changelog/Changelog'
import Contact from './pages/Contact/Contact'
import Home from './pages/Home/Home'
import Licenses from './pages/Licenses/Licenses'
import NotFound from './pages/NotFound/NotFound'
import Password from './pages/Password/Password'
import PorfolioSingle from './pages/Portfolio/PorfolioSingle'
import Portfolio from './pages/Portfolio/Portfolio'
import Service from './pages/Service/Service'
import ServiceSingle from './pages/Service/ServiceSingle'
import Shop from './pages/Shop/Shop'
import ShopSingle from './pages/Shop/ShopSingle'
import Team from './pages/Team/Team'


function App() {

  return (
    <div>
      
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/shop/:id' element={<ShopSingle/>}/>
        <Route path='/services' element={<Service/>}/>
        <Route path='/servicesingle' element={<ServiceSingle/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/portfolio/:id' element={<PorfolioSingle/>}/>
        <Route path='/team' element={<Team/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/blog/:id' element={<BlogSingle/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='*' element={<NotFound/>}/>
        <Route path='/licenses' element={<Licenses/>}/>
        <Route path='/changelog' element={<Changelog/>}/>
        <Route path='/password' element={<Password/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
