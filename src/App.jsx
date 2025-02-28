import './App.css'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Fotter/Footer'
import Hero from './Components/Hero/Hero'
import { NavBar } from './Components/NavBar/NavBar'
import Program from './Components/Programs/Program'
import Testimional from './Components/Testimional/Testimional'
import Title from './Components/Title/Title'
// import VedioPlayer from './Components/VedioPlayer/VedioPlayer'

function App() {
return (
    <>
    <div>
      <NavBar/>
      <Hero/>
      <Title subTitle='our Program' title='What we Offer'/>
      <Program/>
      <About/>
      <Title subTitle='Gallery' title='Campus Photo'/>
      <Campus/>
      <Title subTitle='TESTIMIONALS' title='What Students Says'/>
      <Testimional/>
      <Title subTitle='Contact Us' title='Get In touch'/>
      <Contact/>
      <Footer/>
      {/* <VedioPlayer/> */}
    </div>
    </>
)}
export default App
