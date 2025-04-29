import React from 'react'
import Navbar from '../components/navbar'
import Background from '../components/Background'
import Banner from '../components/Banner'
import Feedback from '../components/Feedback'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
    <div className="app-container">
    <Navbar/>

    
    <div className="min-h-screen flex flex-col">
  <main className="flex-grow">
    {/* Your Page Content Here */}
    <Background/>
    <Banner/>
    <Feedback/>
  </main>
  <Footer />
    </div>
  </div>
    </>
  )
}

export default Home
