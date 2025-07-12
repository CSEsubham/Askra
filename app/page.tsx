import React from 'react'
import Navbar from './Uicomponents/Navbar'
import Hero from './Uicomponents/Hero'

export default function page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <section className='h-[100vh]'/>
      <section className='min-h-screen'/>
    </div>
  )
}
