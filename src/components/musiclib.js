import React, { Component, useState } from 'react';


export class Spotify extends Component {
    constructor(props) {
        super(props);
        this.state = {
            track: "",
        };
    }

    componentDidMount() {
        this.fetchSongInfo(this.props.song);
    }


    async fetchSongInfo(songname) {
        //let songname = ''; // TODO: Implement
        const response = await fetch('http://localhost:3000/spotifyreq/' + songname);
        const data = await response.json();
        console.log(data);
        this.setState({track: data});
    }
    render() {
        return(
            <div>
                <iframe src={"https://open.spotify.com/embed/track/" + this.state.track.replace('spotify:track:', '')}  width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            </div>
        )
    }


}
export default Spotify;