import React, { useContext } from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Result from './pages/Result'
import BuyCredit from './pages/BuyCredit'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './components/Login'
import { AppContext } from './context/AppContext'
 import { ToastContainer } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';
import About from './pages/About'
import ContactUs from './pages/ContactUs'
import ScrollToTop from './components/ScrollToTop';

const App = () => {

  const{showLogin} = useContext(AppContext);
  return (

    <div className='px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b from-teal-50 to-orange-50'>
      <ToastContainer position='bottom-right'/>

   <Navbar/> 
   {showLogin && <Login/>}  

   {/* 👇 scrolls to top on every route change */}
        <ScrollToTop />

      <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path='/result' element={<Result></Result>}/>
        <Route path='/buy' element={<BuyCredit></BuyCredit>}/>
        <Route path='/about' element={<About></About>}/>
        <Route path='/contact' element={<ContactUs></ContactUs>}/>

 
      </Routes>
      <Footer/>

      
    </div>
  )
}

export default App
