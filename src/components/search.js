import React, { Component } from 'react';
import {Input, Alert, Table, Spinner, Button, Navbar, NavbarBrand, Nav, NavItem, NavLink, Container, Row, Col,} from 'reactstrap';


export class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            query: "",
            rescode: "",
            response: []
        };
    }
    
    componentDidMount() {
        this.fetchSearch();
    }


    handleSearchChange = (value) => {
        console.log(value.target.value);
        this.setState({query: value.target.value});
    }

    runSearch = () => {
        this.setState({loading: true})
        this.fetchSearch();
        this.forceUpdate();
    }


    static renderSearchTable(shows, rescode) {
        if (rescode !== "429") {
            if (shows.length === 0) {
                return (
                    <Alert color="warning">No Results. Please enter a search query or try another one.</Alert>
                    )
            } else {
                return (
                    <Table>
                       <thead>
                           <tr>
                               <th>Cover</th>
                               <th>Title</th>
                               <th>Description</th>
                               <th>Select</th>
                           </tr>
                        </thead>
                        <tbody>
                            {shows.map(show => 
                                <tr>
                                    <td><img src={show.image_url} alt="Cover Art" /></td>
                                    <td>{show.title}</td>
                                    <td>{show.synopsis}</td>
                                    <td><a href={"show?ID=" + show.mal_id}><Button color="primary">Select</Button></a></td>
                                </tr>                                    
                            )}
                        </tbody>
                    </Table>
                )
            }
        } else {
            return (
                <Alert color="danger">You have been ratelimited by Jikan, please wait a few seconds before trying again.</Alert>
            )
        }
        
        
    }

    /*
    <Spinner color="primary" /><br />
                <p className="text-primary">Loading...</p>
                */
    render() {
        let contents = this.state.loading
            ? <Spinner color="primary" />
            : Search.renderSearchTable(this.state.response, this.state.rescode);
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
                        <Col xs="5"></Col>
                        <Col xs="5"><h1>Search</h1></Col>
                        </Row>
                    <Row>
                        <Col xs="10"><Input type="text" placeholder="Search for a show" id="Searchup1" name="Search" value={this.state.query} onChange={this.handleSearchChange} /></Col>
                        <Col xs="2"><Button color="primary" onClick={this.runSearch}>Search</Button></Col>
                        <br />
                        <br />
                    </Row>
                    <Row>
                        <Col xs="auto">{contents}</Col>
                    </Row>
                </Container>
            </div>
        )
        
    }

    async fetchSearch() {
        const response = await fetch(window.location.origin.split(':')[0] + ":" + window.location.origin.split(':')[1] + ":" + process.env.REACT_APP_SRVPORT + '/search?title=' + this.state.query);
        const data = await response.json();
        console.log(data);
        this.setState({response: data.search, rescode: data.response,loading: false});
    }
}

export default Search;