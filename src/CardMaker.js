import React, { useState, useEffect} from "react";
import axios from "axios";
//import { Card, Image, Divider } from "semantic-ui-react";
import { Segment, Image, Header, Divider } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css';
import styled from "styled-components";

const PrettyP = styled.p` 
  font-size: 18px;
  line-height: 1.8; `

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

      <Segment padded="very">
      <Image src={dailyPhoto.hdurl} size='big' centered rounded />
      <Header size="medium">{dailyPhoto.title}</Header>
      <PrettyP>{dailyPhoto.explanation}
      </PrettyP>
      <Divider />
      <p>Photo credit: {dailyPhoto.copyright}</p>
     </Segment>
        // <Card>
        //   <Image src={dailyPhoto.hdurl} wrapped ui={false} />
        //   <Card.Content>
        //     <Card.Header>{dailyPhoto.title}</Card.Header>
        //     <Divider />
        //     <Card.Description>{dailyPhoto.explanation}</Card.Description>
        //   </Card.Content>
        // </Card>
        
        
        );



}

export default CardMaker;