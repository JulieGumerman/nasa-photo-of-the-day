import React, { useState, useEffect} from "react";
import axios from "axios";

const CardMaker = () => {

    const [dailyPhoto, setDailyPhoto] = useState("0");
    
    useEffect(()=>{
        axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
        .then(response => {
            console.log(response);
        const daily=response.data;
        console.log("daily", daily);
        setDailyPhoto(daily);
        });
    }, [])


    return (

        <div className="card-container">
            <h2>{dailyPhoto.title}</h2>
            <img src={dailyPhoto.hdurl} alt="title" />
            <p className="description">{dailyPhoto.explanation}</p>
        </div>
        
        
        );



}

export default CardMaker;