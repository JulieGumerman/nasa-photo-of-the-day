import React from "react";
import styled from "styled-components";

const Foot = styled.div`
  background: black;
  padding-top: 20px;
  padding-bottom: 20px;
`

const ApodCredit = styled.h3`
  color: violet;
  text-align: center;
`

const FooterP = styled.p`
  color: violet;
  text-align: center;
`

const Footer = () => {
    return (
        <Foot>
          <ApodCredit>The API for the photos is from APOD by NASA.</ApodCredit>
          <FooterP>App by Julie Gumerman</FooterP>
        </Foot>
    )
}

export default Footer;