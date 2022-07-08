import React from 'react'
import NavigationItem from './NavigationItem'

const NavigationItems = (props) => {
  return (
    <ul className='NavigationItems'>
        <NavigationItem link='/' active>Home</NavigationItem>
        <NavigationItem link='/movie' active>Movies</NavigationItem>
        <NavigationItem link='/tv' active>TV</NavigationItem>
        <NavigationItem link='/latest' active>Latest</NavigationItem>
        <NavigationItem link='/contact' active>Contact Us</NavigationItem>
    </ul>
  )
}

export default NavigationItems