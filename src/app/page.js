import { FeaturesSection, HeroSectionDiary, HeroSectionTodo } from '@/components'
import React from 'react'

// -------------------------------

const Home = () => {
  return (
    <>
      <HeroSectionTodo />
      <HeroSectionDiary />
      <FeaturesSection />
    </>
  )
}

export default Home
