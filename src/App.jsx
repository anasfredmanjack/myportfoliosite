import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Projects from './pages/Projects'
import Contact  from './pages/Contact'
import Home  from './pages/Home'
import About from "./pages/About";

function App() {


  return (
  <Router>
    <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
         <main className="flex-grow">
        
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
          </Routes>
        </main>
      <Footer />
    </div>
  </Router>
  )
}

export default App
