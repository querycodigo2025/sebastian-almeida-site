import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Books from './components/Books'
import Programs from './components/Programs'
import MetodoQuery from './components/MetodoQuery'
import Mission from './components/Mission'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import QuickAccess from './components/QuickAccess'
import CTAFinal from './components/CTAFinal'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-dark-DEFAULT text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Books />
        <Programs />
        <MetodoQuery />
        <Gallery />
        <Testimonials />
        <Mission />
        <QuickAccess />
        <CTAFinal />
      </main>
      <Footer />
    </div>
  )
}
