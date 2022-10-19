import React, { Component } from "react";

import './Home.css';
import pfp from '../assets/pfp.svg';
import msg from '../assets/mssg.svg';

import logo from '../assets/roomz.png'

import {NavLink} from 'react-router-dom';

class Home extends Component {
    render(){
        return(
            <div className='home' >
                <div className='header'>
                    <img className='logo' src={logo} alt=""/>

                    <div style={{display: 'flex', alignItems: "center"} }>
                        <NavLink to='/chat/messages'><img src={msg} className='msg' alt=""/></NavLink>
                        <NavLink to='/profile'><img src={pfp}  alt=""/></NavLink>
                    </div>

                </div>

                <div className='room'>
                    <li><NavLink to='/home/roommates'>Roommate</NavLink></li>
                    <li><NavLink to='/home/apartment'>Apartment</NavLink></li>
                </div>

            </div>
        )
    }
}

export default Home;