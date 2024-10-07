import React from 'react'
import Navbar from './components/navbar'
import Hero from './components/Hero'
import HomeCards from './components/HomeCards'
import JobListings from './components/JobListings'
import VeiwAllJobs from './components/ViewAllJobs'
import ViewAllJobs from './components/ViewAllJobs'

const App = () => {
  return (
    <>
        <Navbar />
        <Hero />
        <HomeCards />
        <JobListings />
        <ViewAllJobs />

    </>
  )
}

export default App