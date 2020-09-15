import React, { Component } from 'react';


export class Spotify extends Component {
    constructor(props) {
        super(props);
        this.state = {
            track: "",
        };
    }

    componentDidMount() {
        // Set local variable and call function to query API endpoint.
        var newSong = this.props.song;
        this.fetchSongInfo(newSong);
    }


    async fetchSongInfo(songname) {
        const reg = /#/gi; // Strip out '#' characters to avoid server issues
        // Run API query and update state with
        const response = await fetch(window.location.origin.split(':')[0] + ":" + window.location.origin.split(':')[1] + ":" + process.env.REACT_APP_SRVPORT + '/spotifyreq?song=' + songname.replace('/', '').replaceAll(reg, ''));
        const data = await response.json();
        this.setState({track: data});
    }
    render() {
        if (this.state.track !== "FAILED") {
            // If no errors, return the Spotify Embedded Player with the appropriate track URI.
            // If the user isn't logged in or has a free account, it plays 30 seconds. Premium users can play the whole song.
            return(
                <div>
                    <iframe title={this.state.track.replace('spotify:track:', '')} src={"https://open.spotify.com/embed/track/" + this.state.track.replace('spotify:track:', '')}  width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                </div>
            )
        } else {
            // Otherwise, return a message about not being able to find the song.
            return(
                <div>
                    This Song Could Not Be Found on Spotify.
                </div>
            )
        }
        
    }


}
export default Spotify;