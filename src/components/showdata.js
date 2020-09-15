import React, { Component, useState } from 'react';
import {Collapse, Spinner, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText, Container, Row, Col, Alert} from 'reactstrap';
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
            if (this.state.mal.response == "N/A") {
                return(
                    <div>
                        <Navbar color="dark" dark expand="md">
                        <NavbarBrand href="/">AniMuse</NavbarBrand>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink href="/">Search</NavLink>
                            </NavItem>
                        </Nav>
                    </Navbar>
                        <Container fluid>
                            <Row>
                                <Col xs="4" sm="4"><ShowMeta showdata={this.state.mal} /></Col>
                                <Col xs="8" sm="8"><SongData oplist={this.state.mal.showInfo.music.opening} edlist={this.state.mal.showInfo.music.ending}/></Col>
                            </Row>
                        </Container>
                        
                    </div>
                );
            } else {
                return(
                    <div>
                        <Navbar color="dark" dark expand="md">
                        <NavbarBrand href="/">AniMuse</NavbarBrand>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink href="/">Search</NavLink>
                            </NavItem>
                        </Nav>
                    </Navbar>
                        <Alert color="danger">An error has occured. Either this show doesn't exist or you have been ratelimited by Jikan.</Alert>
                    </div>
                )
            }
            
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