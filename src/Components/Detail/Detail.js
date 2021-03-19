import React from 'react';
import {Link} from 'react-router-dom'

const Detail = (props) => {  
    const {name, image } = props.rider;

    return (
               <div class="card" style={{width: '15rem'}}>
                    <img style={{width: '12rem', margin: 'auto', padding: '10px'}} src={image} class="card-img-top" alt=""/>
                    <div class="card-body m-auto">
                        <p class="card-title text-primary"> {name}</p>
                        <Link to="/login">BOOKING</Link>
                    </div>
                </div>
        
    );
};

export default Detail;