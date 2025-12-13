import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Home from './pages/Home'
import About from "./pages/About";
import Canvas3D from "./components/Canvas3D";

function App() {


  return (
    <Router>
      <Toaster position="top-center"
        toastOptions={{
          style: {
            background: '#1a1a1a',
            color: '#fff',
            border: '1px solid rgba(255,255,255,0.1)',
          },
        }}
      />
      <Canvas3D />
      <div className="min-h-screen flex flex-col text-white relative z-10">
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
