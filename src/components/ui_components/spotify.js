import React, { Component, useState } from 'react';


export class Spotify extends Component {
    constructor(props) {
        super(props);
        this.state = {
            track: "",
        };
    }

    componentDidMount() {
        var newSong = this.props.song;
        this.fetchSongInfo(newSong);
    }


    async fetchSongInfo(songname) {
        //let songname = ''; // TODO: Implement
        const reg = /#/gi;
        const response = await fetch('http://localhost:3000/spotifyreq?song=' + songname.replace('/', '').replaceAll(reg, ''));
        const data = await response.json();
        this.setState({track: data});
    }
    render() {
        if (this.state.track != "FAILED") {
            return(
                <div>
                    <iframe src={"https://open.spotify.com/embed/track/" + this.state.track.replace('spotify:track:', '')}  width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                </div>
            )
        } else {
            return(
                <div>
                    Could not be found on Spotify.
                </div>
            )
        }
        
    }


}
export default Spotify;