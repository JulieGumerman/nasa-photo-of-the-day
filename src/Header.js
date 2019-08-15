import React from "react"; 
import { Header, Icon, Segment } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css';

const FancyHeader = () => {
    return (

    <Segment inverted>
    <Header as='h1' inverted color="violet">
    <Icon name='star' />
    <Header.Content inverted color="violet">
        Daily Dose of Wonder
    <Header.Subheader>Nasa's Photo of the Day</Header.Subheader>
    </Header.Content>
    </Header>
    </Segment>
    )
}

export default FancyHeader;