import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col, Alert } from 'reactstrap';
import classnames from 'classnames';
import SongCard from './songcard'

const SongData = (props) => {
    const [activeTab, setActiveTab] = useState('1');
  
    const toggle = tab => {
      if(activeTab !== tab) setActiveTab(tab);
    }
  
    return (
      // Returns the list of songs for a given show in tabbed form.
      // Top Alert is there to notify users that the app may provide no results or the wrong results based on mismatching data or poor filtering.
      // Separate tabs for Opening and Ending themes.
      // Uses the Map function for the arrays of Opening and Ending themes and creates the Song Cards for each entry.
      <div>
        <Alert color="warning">
          Some songs may return incorrect data from Spotify and Discogs.
          <br />This is either due to poor filtering or incorrect data (like a song using a different title from MAL or the artist is under another name).
        </Alert>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '1' })}
              onClick={() => { toggle('1'); }}
            >
              Openings
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '2' })}
              onClick={() => { toggle('2'); }}
            >
              Endings
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                {props.oplist.map((songs) => (
                    <SongCard song={songs} />
                ))}
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
          <Row>
              <Col sm="12">
              {props.edlist.map((songs) => (
                    <SongCard song={songs} />
                ))}
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }

export default SongData;