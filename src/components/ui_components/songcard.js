import React, { Component } from 'react';
import {Card, CardText, CardBody, CardTitle } from 'reactstrap';
import Spotify from './spotify';
import Discogs from './discogs';


export class SongCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        
    }
    render() {
        // Create the card which encloses both the Spotify and Discogs cards for a given song.
        return(
            <div>
                <Card>
                    <CardBody>
                        <CardTitle>{this.props.song}</CardTitle>
                        <CardText>
                            <div class="row">
                                    <Card>
                                        <CardBody>
                                            <CardText>
                                                <Spotify song={this.props.song} />
                                            </CardText>
                                        </CardBody>
                                    </Card>
                                </div>
                                <div class="row">
                                <Discogs song={this.props.song} />
                                </div>
                        </CardText>
                    </CardBody>
                </Card>
            </div>
        )
        
    }


}
export default SongCard;