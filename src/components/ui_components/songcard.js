import React, { Component, useState } from 'react';
import {Spinner, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button} from 'reactstrap';
import Spotify from './spotify'


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
                                <div class="col-xs-3">
                                    <Card>
                                        <CardBody>
                                            <CardText>
                                                <Spotify song={this.props.song} />
                                            </CardText>
                                        </CardBody>
                                    </Card>
                                </div>
                                <div class="col-xs-2 v-divider"></div>
                                <div class="col-xs-3">DISCOGS</div>
                            </div>
                        </CardText>
                    </CardBody>
                </Card>
            </div>
        )
        
    }


}
export default SongCard;