import React, { useState } from 'react'
import { Sidebar } from '../components/Sidebar';
import pencil from "../assets/pencil.svg";
import category from "../assets/category.svg";
import desc from "../assets/desc.svg";
import loc from "../assets/loc.svg";
import time from "../assets/time.svg";
import group from "../assets/group.svg";
import Cookies from 'js-cookie';

export const CreateEventPage = () => {

    const [formData, setFormData] = useState({
        event_code: "",
        title: "",
        category: "",
        description: "",
        location: "",
        date_time: "",
        max_limit: null,
        user_id: Cookies.get('userId')
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === "checkbox" ? checked : value
        }));
    };

    const generateRandomCode = () => {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let code = '';
        for (let i = 0; i < 6; i++) {
            const randomIndex = Math.floor(Math.random() * chars.length);
            code += chars[randomIndex];
        }
        return code;
    }

    const submitForm = async () => {

        const code = generateRandomCode();

        setFormData(prevState => ({
            event_code: code
        }));

        setTimeout(async () => {
            await fetch('http://localhost:8080/event', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json; charset= utf-8'
                },
                body: JSON.stringify(formData)
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                })
        }, 1000);

    }

    return (
        <div style={{ height: '100vh', justifyContent: 'center', alignItems: 'center', width: '74.6%', display: 'flex', marginLeft: '25vw' }}>

            <Sidebar />
            <div style={{ width: '50%', border: '1px solid black', height: '70%', justifyContent: 'center', boxSizing: 'border-box', borderRadius: '10px', padding: '1vh 1vw' }}>

                <h1>Create Your Event</h1>

                <div className='input-box' style={{ width: '100%', height: '50%', marginTop: '5vh', boxSizing: 'border-box', padding: '0vh 1vw' }}>

                    <div className='single-input' style={{ height: '15%' }}>
                        <img src={pencil} alt="image hai" />
                        <input type='text' onChange={handleChange} value={formData.title} name="title" placeholder='Title for your event' className='email-input' />
                    </div>
                    <div className='single-input' style={{ height: '15%' }}>
                        <img src={category} alt="image hai" />
                        <input type='text' onChange={handleChange} value={formData.category} name="category" placeholder='Category (eg. Cricket, Music Concert, etc.)' className='email-input' />
                    </div>
                    <div className='single-input' style={{ height: '15%' }}>
                        <img src={desc} alt="image hai" />
                        <input type='text' onChange={handleChange} value={formData.description} name="description" placeholder='Description (max 100 words)' className='email-input' />
                    </div>
                    <div className='single-input' style={{ height: '15%' }}>
                        <img src={loc} alt="image hai" />
                        <input type='text' onChange={handleChange} value={formData.location} name="location" placeholder='Venue' className='email-input' />
                    </div>
                    <div className='single-input' style={{ height: '15%' }}>
                        <img src={time} alt="image hai" />
                        <input type='text' onChange={handleChange} value={formData.date_time} name="date_time" placeholder='Start and End date with Timings' className='email-input' />
                    </div>
                    <div className='single-input' style={{ height: '15%' }}>
                        <img src={group} alt="image hai" />
                        <input type='number' onChange={handleChange} value={formData.max_limit} name="max_limit" placeholder='Max Limit of participants' className='email-input' />
                    </div>

                    <button className='login-button' style={{ marginTop: '3vh', padding: '2vh 2vw', backgroundColor: '#011A99', color: 'white', border: 'none', outline: 'none', cursor: 'pointer' }} onClick={submitForm} >Create Event</button>
                </div>
            </div>

        </div>
    )
};
