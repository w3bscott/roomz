import React, {Component} from 'react';
import './apartment.css';

import hostel from '../assets/Vectorhostel.jpg'
class Apartments extends Component{
    render(){
        return(
            <div>
                <div className="cards">
                    <div className='card_content'>
                        <div>
                            <h2>Goldridge Hostel</h2>
                            <h1>70%</h1>
                        </div>
                        <button>Book</button>
                    </div>
                    <img src={hostel} alt=""/>
                </div>
                

                
            </div>
        )
    }
}

export default Apartments;