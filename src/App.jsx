import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-slate-50 dark:bg-dark-900 text-slate-900 dark:text-slate-100 font-body transition-colors duration-300">
      <Navbar />
      <main className="flex-grow w-full overflow-hidden">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
