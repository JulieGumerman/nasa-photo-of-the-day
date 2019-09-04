import React from "react"; 
import styled from "styled-components";


const HeadMaDoozle = styled.div`
background: black;
color: violet;
text-align: center;
font-family: 'Montserrat', sans-serif;
padding-top: 40px;
padding-bottom: 40px;

`
const FancyHeader = () => {
    return (

        <HeadMaDoozle>
            <h1>Daily Dose of Wonder</h1>
            <h2>NASA's Photo of the Day</h2>

        </HeadMaDoozle>
    )
}

export default FancyHeader;