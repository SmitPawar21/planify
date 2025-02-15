import React from 'react'
import OneCard from './Card';
import "../styles/ExplorePage.css";

export const Explore = () => {
  return (
    <div style={{width:'75vw'}}>
        <h2 style={{backgroundColor:'#1976D2', padding:'2vh 0vw', color:'white'}}>Explore Popular Events</h2>

        <div className='card-area'>
            <OneCard />
            <OneCard />
            <OneCard />
            <OneCard />
            <OneCard />
            <OneCard />
            <OneCard />
            <OneCard />
            <OneCard />
        </div>

    </div>
  )
};
