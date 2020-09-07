import React, { Component, useState } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Row, Container, Collapse
  } from 'reactstrap';

export class ShowMeta extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        }
    }

    toggle = () => {
        console.log("Toggle")
        this.setState({ isOpen: !this.state.isOpen })
    }
    render() {
        return (
            <div>
                <Card style={{backgroundColor: '#d9d9d9'}}>
                    <CardImg top style={{width: '225px', height: '338px', display: 'block', margin: 'auto', textAlign: 'center', justifyContent: 'center', alignItems: 'center'}} src={this.props.showdata.showInfo.cover} />
                    <CardTitle><h3 style={{textAlign: 'center'}}>{this.props.showdata.showInfo.title}</h3></CardTitle>
                    <CardSubtitle><h6 style={{textAlign: 'center'}}>{this.props.showdata.showInfo.airdate}</h6></CardSubtitle>
                    <CardBody>
                        <p style={{wordWrap: 'break-word', fontSize: '12px'}} ><b>Description:</b> {this.props.showdata.showInfo.description}
                            <br /><b>Media Type: </b> {this.props.showdata.showInfo.media_type}
                            <br /><b>Origin: </b> {this.props.showdata.showInfo.origin}
                            <br /><b>Episode Count: </b> {this.props.showdata.showInfo.epcount}
                        </p>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default ShowMeta;