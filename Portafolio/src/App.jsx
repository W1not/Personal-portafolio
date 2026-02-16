import { Route, Routes } from 'react-router-dom';

import Home from './Home.jsx'
import Project from './Projects.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import AboutMe from './AboutMe.jsx'


function App() {
  return (
    <>
      <Header />
      <main className="content pt-20">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/projects" element={<Project />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
