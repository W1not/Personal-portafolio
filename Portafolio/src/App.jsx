import { Route, Routes } from 'react-router-dom';

import Home from './Home.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'


function App() {
  return (
    <>
      <Header/>
      <main className="content pt-20 ">
        <Home />
      </main>
      <Footer />
    </>
  )
}

export default App
