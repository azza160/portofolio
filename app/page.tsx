'use client'

import { useEffect, useState } from 'react'

import Header from '@/components/sections/header'
import HeroSection from '@/components/sections/hero-section'
import AboutSection from '@/components/sections/about-section'
import SkillsSection from '@/components/sections/skills-section'
import ProjectsSection from '@/components/sections/projects-section'
import ContactSection from '@/components/sections/contact-section'
import Test from '@/components/sections/test'

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="">
      <Header isScrolled={isScrolled} />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />

    </main>
  )
}
