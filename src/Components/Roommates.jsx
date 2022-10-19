import React, {Component} from 'react';
import './Roommates.css'

import cover from '../assets/cover.png';
import user from '../assets/user.svg';
import adduser from '../assets/user-plus.svg';

class Roommates extends Component{
    render(){
        return(
            <div className='roommates'>
                <div className="card">
                    <div className="request">
                        <h2>70%</h2>
                        <button>
                            {/* <svg>{adduser}</svg> */}
                            Request
                        </button>
                    </div>          
                    <img src={cover} alt="" className="cover"/>

                    <img src={user} alt="" className="user"/>
                    <h3>John Doe</h3>
                    <p>I enjoy coding and design, Chelsea x GOT fan</p>
                </div>

                <div className="card">
                    <div className="request">
                        <h2>70%</h2>
                        <button>
                            {/* <svg>{adduser}</svg> */}
                            Request
                        </button>
                    </div>          
                    <img src={cover} alt="" className="cover"/>

                    <img src={user} alt="" className="user"/>
                    <h3>John Doe</h3>
                    <p>I enjoy coding and design, Chelsea x GOT fan</p>
                </div>

                <div className="card">
                    <div className="request">
                        <h2>70%</h2>
                        <button>
                            {/* <svg>{adduser}</svg> */}
                            Request
                        </button>
                    </div>          
                    <img src={cover} alt="" className="cover"/>

                    <img src={user} alt="" className="user"/>
                    <h3>John Doe</h3>
                    <p>I enjoy coding and design, Chelsea x GOT fan</p>
                </div>
            </div>
            
        )
    }
}

export default Roommates;