import React, { Component } from 'react';
import { Spinner, Navbar,  NavbarBrand, Nav, NavItem, NavLink, Container, Row, Col, Alert} from 'reactstrap';
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
    render() {
        if (!this.state.mal) {
            // If no results currently returned, display loading animation.
            return(
                <div>
                    <Spinner color="primary" /><br />
                    <p className="text-primary">Loading...</p>
                </div>
            )
        } else {
            if (this.state.mal.response === "N/A") {
                // If the state has been set and no error codes returned, display the appropriate UI including embedding the show and song info panels.
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
                // If any other response code, notify users about the error and some of the potential fixes.
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
        // Get Show ID from the URL's GET Params.
        let search = window.location.search;
        let parameters = new URLSearchParams(search);
        let code = parameters.get('ID');
        // Query API endpoint for searching and update state.
        const response = await fetch(window.location.origin.split(':')[0] + ":" + window.location.origin.split(':')[1] + ":" + process.env.REACT_APP_SRVPORT + '/showdata/' + code);
        const data = await response.json();
        this.setState({mal: data});
    }
}

export default Showdata;