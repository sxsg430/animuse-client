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
        let reg = new RegExp('^#');
        let reg2 = new RegExp('^\d:\s');
        console.log(songname);
        const response = await fetch('http://localhost:3000/spotifyreq?song=' + songname.replace('/', '').replace(reg, '').replace(reg2, ''));
        const data = await response.json();
        console.log(data);
        this.setState({track: data});
    }
    render() {
        console.log(this.state.track)
        if (this.state.track != "FAILED") {
            return(
                <div>
                    <iframe src={"https://open.spotify.com/embed/track/" + this.state.track.replace('spotify:track:', '')}  width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                </div>
            )
        } else {
            return(
                <div>
                    This Song Could Not Be Found on Spotify.
                </div>
            )
        }
        
    }


}
export default Spotify;