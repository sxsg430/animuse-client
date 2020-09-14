import React, { Component, useState } from 'react';
import {Spinner, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button} from 'reactstrap';
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