'use client'

import React from 'react'
import Header from '@/app/_components/header'

function Provider({children}) {
  return (
    <div className='px-0 md:px-20 relative'>
        <Header />
        {children}
    </div>
  )
}

export default Provider