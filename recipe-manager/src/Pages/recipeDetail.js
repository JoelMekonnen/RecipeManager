import React from 'react'
import { useLocation } from 'react-router-dom'

export default function RecipeDetail(props) {
  const location = useLocation()
  const { recipe } = location.state
  console.log(recipe)
  return (
    <div><h1> Hello World </h1></div>
  )
}
