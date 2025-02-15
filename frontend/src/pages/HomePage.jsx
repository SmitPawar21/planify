import React from 'react'
import {Sidebar} from '../components/Sidebar'
import { Explore } from '../components/Explore'

export const HomePage = () => {
  return (
    <div style={{width:'74.6%', display:'flex', marginLeft:'25vw'}}>
      <Sidebar />
      <Explore />
      
    </div>
  )
}
