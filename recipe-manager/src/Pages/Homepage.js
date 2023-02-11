import React, { Component } from 'react'
import Header from '../Components/Header'
import TrendingSection from '../Components/Sections/TrendingSection'
import HeroSection from '../Components/Sections/HeroSection'
export default class Homepage extends Component {
  render() {
    return (
      <div className='tw-h-screen'>
         <Header/>
         <HeroSection/>
         <TrendingSection/>
      </div>
    )
  }
}
