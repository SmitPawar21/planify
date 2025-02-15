import React from 'react'
import { Sidebar } from '../components/Sidebar';
import pencil from "../assets/pencil.svg";
import category from "../assets/category.svg";
import desc from "../assets/desc.svg";
import loc from "../assets/loc.svg";
import time from "../assets/time.svg";
import group from "../assets/group.svg";

export const CreateEventPage = () => {
    return (
        <div style={{ height: '100vh', justifyContent: 'center', alignItems: 'center', width: '74.6%', display: 'flex', marginLeft: '25vw' }}>

            <Sidebar />
            <div style={{width:'50%', border:'1px solid black',height:'70%', justifyContent:'center', boxSizing:'border-box', borderRadius: '10px', padding:'1vh 1vw'}}>

                <h1>Create Your Event</h1>

                <div className='input-box' style={{width:'100%', height:'50%', marginTop:'5vh', boxSizing:'border-box', padding:'0vh 1vw'}}>

                    <div className='single-input' style={{height:'15%'}}>
                        <img src={pencil} alt="image hai" />
                        <input type='text' placeholder='Title for your event' className='email-input' />
                    </div>
                    <div className='single-input'  style={{height:'15%'}}>
                        <img src={category} alt="image hai" />
                        <input type='text' placeholder='Category (eg. Cricket, Music Concert, etc.)' className='email-input' />
                    </div>
                    <div className='single-input'  style={{height:'15%'}}>
                        <img src={desc} alt="image hai" />
                        <input type='text' placeholder='Description (max 100 words)' className='email-input' />
                    </div>
                    <div className='single-input'  style={{height:'15%'}}>
                        <img src={loc} alt="image hai" />
                        <input type='text' placeholder='Venue' className='email-input' />
                    </div>
                    <div className='single-input'  style={{height:'15%'}}>
                        <img src={time} alt="image hai" />
                        <input type='text' placeholder='Start and End date with Timings' className='email-input' />
                    </div>
                    <div className='single-input'  style={{height:'15%'}}>
                        <img src={group} alt="image hai" />
                        <input type='number' placeholder='Max Limit of participants' className='email-input' />
                    </div>

                    <button className='login-button' style={{ marginTop: '3vh', padding: '2vh 2vw', backgroundColor: '#011A99', color: 'white', border: 'none', outline: 'none', cursor:'pointer' }}>Create Event</button>
                </div>
            </div>

        </div>
    )
};
