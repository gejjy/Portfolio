import Header from './components/Header.jsx'
import MainVisual from './components/MainVisual.jsx'
import About from './components/About.jsx'
import Experience from './components/experience.jsx'
import Skills from './components/Skills.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import './portfolio.css'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <MainVisual />
        <About />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
