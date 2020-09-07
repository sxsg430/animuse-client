import React, { Component, useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';


export class Showdata extends Component {
    constructor(props) {
        super(props);
        this.state = {
            song: null,
        };
    }
    componentDidMount() {
        this.fetchSongInfo();
    }
    // TODO: Fix CORS
    render() {
        if (!this.state.song) {
            return <div />
        } else {
            return(
                <div>
                    <iframe src={"https://open.spotify.com/embed/track/" + this.state.song.replace('spotify:track:', '')}  width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                    <h1>Hello {this.state.song}</h1>
                </div>
            );
        }
        
    }
    async fetchSongInfo() {
        let songname = ''; // TODO: Implement
        const response = await fetch('http://localhost:3000/spotifyreq/' + songname);
        const data = await response.json();
        this.setState({song: data});
    }
}

export default Showdata;