import React from 'react'
import NavigationItems from './NavigationItems'

const Toolbar = () => {
  return (
    <header className='Toolbar'>
        <nav className='DeskyopOnly'>
            <NavigationItems/>
        </nav>
    </header>
  )
}

export default Toolbar