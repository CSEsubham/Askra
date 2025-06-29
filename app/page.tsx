import React from 'react'
import Hero from './Uicomponents/Hero'

export default function page() {
  return (
    <div>
      <Hero />
        <section className="h-[100vh]" />
        <section className="h-[100vh] bg-white" />
        <section className="h-[100vh] bg-amber-400" />
    </div>
  )
}
