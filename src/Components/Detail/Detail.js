import React from 'react';
import {Link} from 'react-router-dom'

const Detail = (props) => {  
    const {name, image } = props.rider;

    return (
               <div className="card" style={{width: '15rem'}}>
                    <img style={{width: '12rem', margin: 'auto', padding: '10px'}} src={image} className="card-img-top" alt=""/>
                    <div className="card-body m-auto">
                        <p className="card-title text-primary"> {name}</p>
                        <Link to="/login">BOOKING</Link>
                    </div>
                </div>
        
    );
};

export default Detail;