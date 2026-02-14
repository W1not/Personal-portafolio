import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './home.jsx'
import Project from './Projects.jsx'
import Header from './components/Header.jsx'


function App() {
  return (
    <>
      <Header />
      <main className="content">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/projects" element={<Project />} />
        </Routes>
      </main>
    </>
  )
}

export default App
