import React, { Component } from 'react';


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
        const reg = /#/gi;
        const response = await fetch(window.location.origin.split(':')[0] + ":" + window.location.origin.split(':')[1] + ":" + process.env.REACT_APP_SRVPORT + '/spotifyreq?song=' + songname.replace('/', '').replaceAll(reg, ''));
        const data = await response.json();
        this.setState({track: data});
    }
    render() {
        if (this.state.track !== "FAILED") {
            return(
                <div>
                    <iframe title={this.state.track.replace('spotify:track:', '')} src={"https://open.spotify.com/embed/track/" + this.state.track.replace('spotify:track:', '')}  width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
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