import React, { Component } from 'react';
import {Card, CardImg, CardBody, CardTitle, CardSubtitle} from 'reactstrap';

export class ShowMeta extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        // Take in data from the provided props and use it to construct a card containing a show's title, cover image, description and other metadata.
        return (
            <div>
                <Card>
                    <div className="imgcentre"><CardImg top src={this.props.showdata.showInfo.cover} /></div>
                    <CardTitle><div class="songtitle"><h3>{this.props.showdata.showInfo.title}</h3></div></CardTitle>
                    <CardSubtitle><div class="songtitle"><h6>{this.props.showdata.showInfo.airdate}</h6></div></CardSubtitle>
                    <CardBody>
                        <div className="textbox">
                        <p><b>Description:</b> {this.props.showdata.showInfo.description}
                            <br /><b>Media Type: </b> {this.props.showdata.showInfo.media_type}
                            <br /><b>Origin: </b> {this.props.showdata.showInfo.origin}
                            <br /><b>Episode Count: </b> {this.props.showdata.showInfo.epcount}
                            <br /><a href={this.props.showdata.showInfo.mal_url}>View on MyAnimeList</a>
                        </p>
                        </div>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default ShowMeta;