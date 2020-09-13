import React, { Component, useState } from 'react';
import {Collapse, Spinner, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText, Container, Row, Col,} from 'reactstrap';
import ShowMeta from './ui_components/showmeta';
import SongData from './ui_components/songdata';


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
            return(
                <div>
                    <Spinner color="primary" /><br />
                    <p className="text-primary">Loading...</p>
                </div>
            )
        } else {
            // <iframe src={"https://open.spotify.com/embed/track/" + this.state.song.replace('spotify:track:', '')}  width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            return(
                <div>
                    <Container>
                        <Row>
                            <Col xs="6" sm="4"><ShowMeta showdata={this.state.mal} /></Col>
                            <Col xs="8" sm="8"><SongData oplist={this.state.mal.showInfo.music.opening} edlist={this.state.mal.showInfo.music.ending}/></Col>
                        </Row>
                    </Container>
                    
                </div>
            );
        }
        
    }
    

    async fetchMalInfo() {
        let search = window.location.search;
        let parameters = new URLSearchParams(search);
        let code = parameters.get('ID');
        const response = await fetch('http://localhost:3000/showdata/' + code);
        const data = await response.json();
        this.setState({mal: data});
    }
}

export default Showdata;