
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import {About, Home, Pricing, Contact} from "./pages"
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NotFound from './components/NotFound';

function App() {


  return (
    <>
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </Router>
    </>
  )
}

export default App
