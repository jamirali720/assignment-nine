import React, { useContext, useEffect, useState } from 'react';



const Destination = () => {
    const [destination, setDestination] = useState('')
    const [destination1, setDestination1] = useState('')
    
   
    const handleClick = () => {
       const searchFrom =  document.getElementById('searchFrom').value;
       setDestination(searchFrom);     
       const searchTo =  document.getElementById('searchTo').value;
       setDestination1(searchTo);
       
    }
    console.log(destination, destination1);
    // useEffect(() => {
    //     fetch ('AIzaSyAm7UoORabDDCLGuElo7QXlO8mV7g0o0IM')
    //     .then(res => res.json())
    //     .then(data => console.log(data))
    // },[])
    return (
        <div >
         
          <div style={{width: '250px',  background: 'lightGray'}}>
                <label style={{margin: '10px'}} htmlFor="">Pick From</label><br/>
                <input id="searchFrom" type="text" placeholder ="Dhaka"/> <br/>
                <label style={{margin: '10px'}} htmlFor="">Pick To </label> <br/>
                <input id="searchTo" type="text" placeholder="Comilla"/><br/>
               
                <button style={{marginTop: '10px', width: "90%"}} 
                onClick={handleClick}>Search</button>
                  
            </div>

           
            
        </div>
    );
};

export default Destination;