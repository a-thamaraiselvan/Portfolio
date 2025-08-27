import './App.css'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Mywork from './components/Mywork/Mywork'
import Navbar from './components/NavBar/Navbar'
import Services from './components/Services/Services'
import Loader from './components/Loader/Loader'
import { useState, useEffect } from 'react'
import Certificate from './components/Certificate/Certificate'


function App() {

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fakeDatafetch = () => {
      setTimeout(() => {
        setIsLoading(false)
      }, 5000)
    };
    fakeDatafetch()
  }, []);

  return isLoading ? (<Loader />) :
    (
      <>
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Mywork />
        <Certificate/>
        <Contact />
        <Footer />
      </>
    );
}

export default App
