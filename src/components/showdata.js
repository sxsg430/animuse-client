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
            mal: null
        };
    }
    componentDidMount() {
        this.fetchMalInfo();
    }
    // TODO: Fix CORS
    render() {
        if (!this.state.mal) {
            return <div />
        } else {
            // <iframe src={"https://open.spotify.com/embed/track/" + this.state.song.replace('spotify:track:', '')}  width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            return(
                <div>
                    
                    <h1>Hello {this.state.mal.showInfo.mal_id}</h1>
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

    async fetchMalInfo() {
        let search = window.location.search;
        let parameters = new URLSearchParams(search);
        let code = parameters.get('ID');
        const response = await fetch('http://localhost:3000/showdata/' + code);
        const data = await response.json();
        console.log(JSON.stringify(data));
        this.setState({mal: data});
    }
}

export default Showdata;