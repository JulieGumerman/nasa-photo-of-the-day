import React, { useState, useEffect} from "react";
import styled from "styled-components";
import moment from "moment";
import axios from "axios";

const ContentWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`
const PrettyP = styled.p` 
  font-size: 18px;
  line-height: 1.8; 
  font-family: 'Roboto Condensed', sans-serif;
`

const PhotoCredit = styled.p`
  font-style: italic;
  font-family: 'Roboto Condensed', sans-serif;
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
  margin: 30px;
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
      <ContentWrapper>

      <CardContainer>
        <CardImage src={dailyPhoto.hdurl} alt={dailyPhoto.title} />
        <iframe src={dailyPhoto.url} />
        <h2>{dailyPhoto.title}</h2>
        <PrettyP>{dailyPhoto.explanation}</PrettyP>
        <PhotoCredit>{dailyPhoto.copyright}</PhotoCredit>
      </CardContainer>

      <CardContainer>
        <CardImage src={dayBefore.hdurl} alt={dayBefore.title}/>
        <iframe src={dayBefore.url} />
        <h2>{dayBefore.title}</h2>
        <PrettyP>{dayBefore.explanation}</PrettyP>
        <PhotoCredit>{dayBefore.copyright}</PhotoCredit>
      </CardContainer>

      <CardContainer>
        <CardImage src={dayBeforeYesterday.hdurl} alt={dayBeforeYesterday.title}/>
        <iframe src={dayBeforeYesterday.url} />
        <h2>{dayBeforeYesterday.title}</h2>
        <PrettyP>{dayBeforeYesterday.explanation}</PrettyP>
        <PhotoCredit>{dayBefore.copyright}</PhotoCredit>
      </CardContainer>

      </ContentWrapper>
        
        );



}

export default CardMaker;