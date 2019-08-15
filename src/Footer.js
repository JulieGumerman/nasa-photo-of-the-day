import React from "react";
import { Header, Divider, Segment, Icon } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css';

const Footer = () => {
    return (
        <Segment inverted>
        <Header as='h4' inverted color='violet'>
          Daily images provided by NASA's APOD API.
          <Divider />
          App made by fledgling software engineer Julie Gumerman, who loves stargazing.
        </Header>
      </Segment>
    )
}

export default Footer;