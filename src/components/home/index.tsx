import AboutSection from '@components/home/about'
import HeroSection from '@components/home/hero'
import React from 'react'
import Services from './services'
import PortfolioSection from './portfolio'
import TeamsSection from './team'

function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <Services />
      <PortfolioSection />
      <TeamsSection />
    </>
  )
}

export default HomePage
