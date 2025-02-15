import React from 'react';
import code from "../assets/code.svg";
import { Sidebar } from '../components/Sidebar';

export const JoinEventPage = () => {
    return (
        <div style={{height:'100vh', justifyContent:'center', alignItems:'center', width:'74.6%', display:'flex', marginLeft:'25vw'}}>

            <Sidebar />
            <div className='container' style={{minHeight:'40%', maxHeight:'45%'}}>

                <h1>Join Event with Code</h1>

                    <div className='input-box'>

                        <div className='single-input'>
                            <img src={code} alt="image hai" />
                            <input type='text' placeholder='Enter Code' className='email-input' />
                        </div>

                        <button className='login-button' style={{marginTop:'3vh', padding:'2vh 2vw', backgroundColor:'#011A99', color:'white', border:'none', outline:'none'}}>Join Event</button>
                    </div>

                <p style={{color:'red', marginBottom:'4vh'}}>Error: Failed to Join Event. <br/> Please check your code again</p>
            </div>

        </div>
    )
};
