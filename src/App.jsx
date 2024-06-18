import './App.css'
import About from './components/About/About'
// import Certificate from './components/Certificate/Certificate'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Loader from './components/Loader/Loader'
import Mywork from './components/Mywork/Mywork'
import Navbar from './components/NavBar/Navbar'
import Services from './components/Services/Services'
import { useState, useEffect } from 'react'


function App() {

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fakeDatafetch = () => {
      setTimeout(() => {
        setIsLoading(false)
      }, 1000)
    };
    fakeDatafetch()
  }, []);

  return isLoading ? (<Loader/>) :
    (<>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Mywork />
      {/* <Certificate/> */}
      <Contact />
      <Footer />

    </>);
}

export default App
