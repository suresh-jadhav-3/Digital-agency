import React,{ useEffect} from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {NavBar, Home, Counter, About, Service, Team, Testimonial, Newsletter, Footer} from './components'
import {ThemeProvider} from './context/ThemeContext'
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out', 
    });
  }, [])


  return (
    <ThemeProvider>
      <NavBar/>
      <Home/>
      <Counter/>
      <Service/>
      <About/>
      <Team/>
      <Testimonial/>
      <Newsletter/>
      <Footer/>
      </ThemeProvider>

  )
}

export default App