import React, { Component, useState } from 'react';
import {Spinner, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button} from 'reactstrap';


export class Discogs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            track: "",
            genre: "",
            style: "",
            label: "",
            format: ""
        };
    }

    componentDidMount() {
        var newSong = this.props.song;
        this.fetchSongInfo(newSong);
    }


    async fetchSongInfo(songname) {
        const reg = /#/gi;
        const response = await fetch('http://localhost:3000/discogsreq?song=' + songname.replace('/', '').replaceAll(reg, ''));
        const data = await response.json();
        if (data == "ERROR") {
            this.setState({track: data});    
        } else {
            this.setState({track: data, genre: data.genre.join(', '), style: data.style.join(', '), label: data.label[0], format: data.format.join(', ')});
        }
        
    }
    render() {
        if (this.state.track != "ERROR") {
            return(
                <div>
                    <Card>
                        <CardBody>
                            <CardImg src={this.state.track.cover_image} style={{width: '280px', height: '248px', display: 'block', margin: 'auto', textAlign: 'center', justifyContent: 'center', alignItems: 'center'}} />
                            <CardTitle>{this.state.track.title}</CardTitle>
                            <CardText>
                            <p style={{wordWrap: 'break-word', fontSize: '12px'}} ><b>Genre:</b> {this.state.genre}
                            <br /><b>Style: </b> {this.state.style}
                            <br /><b>Release Year: </b> {this.state.track.year}
                            <br /><b>Label: </b> {this.state.label}
                            <br /><b>Format: </b> {this.state.format}
                            <br /><a href={"https://discogs.com" + this.state.track.uri}>View and Purchase on Discogs</a>
                        </p>
                            </CardText>
                        </CardBody>
                    </Card>
                    <h6></h6>
                </div>
            )
        } else {
            return(
                <div>
                    <Card>
                        <CardBody>
                            <CardText>
                                This Song Could Not Be Found on Discogs.
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
            )
        }
        
    }


}
export default Discogs;