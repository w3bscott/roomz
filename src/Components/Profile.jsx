import React from 'react';

import {NavLink} from 'react-router-dom';

import './profile.css';
import back from '../assets/arrow-left.svg';
import cover from '../assets/coverpfp.jpg';
import pfp from '../assets/mypfp.png';

import foot from '../assets/foot.jpg'


export default function Profile() {
    return(
        <>
        <div className='main' >
            <NavLink to='/home/roommates'><img src={back} alt="" className='back'/></NavLink>

            <div className="profile">
                <img src={cover} alt="" className="mycover"/>
                <img src={pfp} alt="" className="mypfp"/>

<div className="name">
<h1 style={{marginBottom:0}}>Jack Black</h1>
                <h3 style={{marginTop:0}}>Male . 21</h3>

</div>

                {/* <h2>Bio</h2>
                <h3>Interested in coding and design, chelsea fan and loves to travel</h3>

                <hr/> */}


            </div>
        </div>

<img src={foot} style={{margin:0}} alt=""/>
</>
    )
}