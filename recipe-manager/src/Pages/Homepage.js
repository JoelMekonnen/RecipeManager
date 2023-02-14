import React, { Component } from 'react'
import Header from '../Components/Header'
import TrendingSection from '../Components/Sections/TrendingSection'
import HeroSection from '../Components/Sections/HeroSection'
import Footer from '../Components/Footer'
export default class Homepage extends Component {
  render() {
    return (
      <div className='tw-h-auto tw-font-inter tw-antialiased tw-bg-gray-900 tw-text-gray-200 tw-tracking-tight tw-pb-32'>
         <Header/>
         <HeroSection/>
         <TrendingSection/>
      </div>
    )
  }
}
