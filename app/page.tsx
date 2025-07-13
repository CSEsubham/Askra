import React from 'react'
import Navbar from './Uicomponents/navbar'
import Why from './Uicomponents/why'
import Subscription from './Uicomponents/subscription'
import Hero from './Uicomponents/Hero'
import Floatingbutton from './Uicomponents/floatingbutton'
import Cursor from './Uicomponents/cursor'
export default function page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Why />
      <Subscription />
      <Floatingbutton />
      <Cursor />
      
    </div>
  )
}