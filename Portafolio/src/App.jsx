import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './home.jsx'

function App() {

  return (
    <>
      <Router>
        <main className="content">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </main>
      </Router>
    </>
  )
}

export default App
