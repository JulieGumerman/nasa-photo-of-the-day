import React, { useState, useEffect} from "react";
import styled from "styled-components";
import moment from "moment";
import axios from "axios";

const PrettyP = styled.p` 
  font-size: 18px;
  line-height: 1.8; 
`

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin: 0 auto;
  border: 1px black solid;
  justify-content: center;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 10px;
  background: #edfaf1;
`

const CardImage = styled.img`
  width: 90%;
  height: 50%;
  margin: 0 auto;
  border-radius: 5px;
`
const CardMaker = () => {

    const [dailyPhoto, setDailyPhoto] = useState("0");
    const [dayBefore, setDayBefore] = useState("0");
    const [dayBeforeYesterday, setDayBeforeYesterday] = useState("0");
    
    useEffect(()=>{
        axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
        .then(response => {
            console.log(response);
            const daily=response.data;
            console.log("daily", daily);
            setDailyPhoto(daily);
        });
    }, [])

    useEffect(()=> {
      let dayPrior = moment().subtract(1, "days").format("YYYY-MM-DD")
      console.log(dayPrior);

      axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${dayPrior}`)
      .then(response => {
        console.log("yesterday", response);
        const yesterday=response.data;
        setDayBefore(yesterday);
      })
    }, []);

    useEffect(() => {
      let twoDaysPrior = moment().subtract(2, "days").format("YYYY-MM-DD")
      console.log(twoDaysPrior);

      axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${twoDaysPrior}`)
      .then(response => {
        console.log(response);
        const twoDaysAgo=response.data;
        setDayBeforeYesterday(twoDaysAgo);
        console.log(twoDaysAgo)
      })
      .catch(error => console.log(error));
    })

    return (
      <div>

      <CardContainer>
        <CardImage src={dailyPhoto.hdurl} alt={dailyPhoto.title} />
        <h2>{dailyPhoto.title}</h2>
        <PrettyP>{dailyPhoto.explanation}</PrettyP>
        <p>Photo credit: {dailyPhoto.copyright}</p>
      </CardContainer>

      <CardContainer>
        <CardImage src={dayBefore.hdurl} alt={dayBefore.title}/>
        <h2>{dayBefore.title}</h2>
        <PrettyP>{dayBefore.explanation}</PrettyP>
        <p>Photo credit: {dayBefore.copyright}</p>
      </CardContainer>

      <CardContainer>
        <cardImage src={dayBeforeYesterday.hdurl} alt={dayBeforeYesterday.title}/>
        <h2>{dayBeforeYesterday.title}</h2>
        <PrettyP>{dayBeforeYesterday.explanation}</PrettyP>
        <p>Photo credit: {dayBefore.copyright}</p>
      </CardContainer>

      </div>
        
        );



}

export default CardMaker;