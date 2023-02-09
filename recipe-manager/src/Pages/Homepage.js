import React, { Component } from 'react'
import Header from '../Components/Header'
import TrendingSection from '../Components/Sections/TrendingSection'
export default class Homepage extends Component {
  render() {
    return (
      <div className='h-screen'>
         <Header/>
         <TrendingSection/>
      </div>
    )
  }
}
