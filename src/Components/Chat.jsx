import { React } from "react";

import {NavLink, Routes, Route} from 'react-router-dom';

import back from '../assets/arrow-left.svg'
import Messages from "./Messages";


export default function Chat() {
    const chat = {
            margin: '16px',
            marginBottom: '0'
    }
    return(
        <div style={chat}>

            <NavLink to='/home/roommates'><img src={back} alt=""/> </NavLink>

            <div className='room'>
                <li><NavLink to='/chat/messages'>Chat</NavLink></li>
                <li><NavLink to='/chat/request'>Request</NavLink></li>
            </div>


        </div>
    )
}