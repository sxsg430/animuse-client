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
                    <h1>Hello {this.state.song}</h1>
                </div>
            );
        }
        
    }
    async fetchSongInfo() {
        const response = await fetch('http://localhost:3000/spotifyreq/Futakotome');
        const data = await response.json();
        this.setState({song: data});
    }
}

export default Showdata;