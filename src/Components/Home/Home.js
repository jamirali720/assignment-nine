import React, { useEffect, useState } from 'react';
import fakeData from '../../../src/fakeData';
import Detail from '../Detail/Detail';



const Home = () => {
    const [riders, setRiders] = useState([])
    useEffect(() => {      
        fetch(fakeData)
        .then(res => res.json())
        .then(data => setRiders(data))
    }, [])
  
    return (
      <div>           
            <div className="d-flex justify-content-around m-5 " style={{paddingTop: '80px'}}> 
                    
                {
                    riders.map((rider, id) =>  <Detail rider={rider} key={id}></Detail> )
                }          
            </div>
      </div>
    );
};

export default Home;