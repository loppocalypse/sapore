'use client'

import React from 'react'
import Header from '@/app/_components/header'
import { Analytics } from "@vercel/analytics/next"

function Provider({children}) {
  return (
    <div className='px-0 md:px-20 relative'>
        <Header />
        <Analytics />
        {children}
    </div>
  )
}

export default Provider