import React from "react"
import { Helmet } from "react-helmet"
import IconButton from '@material/react-icon-button';
import MaterialIcon from '@material/react-material-icon';
import {Cell, Grid, Row} from '@material/react-layout-grid';
import Location from "./Location";
import locations from "../data/locations";
import Map from "./Map";

import '@material/react-layout-grid/dist/layout-grid.css';
import '@material/react-icon-button/dist/icon-button.css';

const getRandom = (max) => (Math.floor(Math.random() * Math.floor(max)))

const getRandomLocation = (possibleLocations) => (possibleLocations[getRandom(possibleLocations.length)])

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            upperLeft: getRandomLocation(locations.upperLeft),
            upperRight: getRandomLocation(locations.upperRight),
            lowerLeft: getRandomLocation(locations.lowerLeft),
            lowerRight: getRandomLocation(locations.lowerRight)
        };
        this.reRoll = this.reRoll.bind(this);
        this.toggleKeepUL = this.toggleKeepUL.bind(this);
        this.toggleKeepUR = this.toggleKeepUR.bind(this);
        this.toggleKeepLL = this.toggleKeepLL.bind(this);
        this.toggleKeepLR = this.toggleKeepLR.bind(this);
    }
    getLocations() {
        return {
            upperLeft: this.state.upperLeft.keep  ? this.state.upperLeft : getRandomLocation(locations.upperLeft),
            upperRight: this.state.upperRight.keep ? this.state.upperRight: getRandomLocation(locations.upperRight),
            lowerLeft: this.state.lowerLeft.keep ? this.state.lowerLeft: getRandomLocation(locations.lowerLeft),
            lowerRight: this.state.lowerRight.keep ? this.state.lowerRight: getRandomLocation(locations.lowerRight)
        };
    }
    toggleKeepUL () {
        this.setState({ upperLeft: { ...this.state.upperLeft, keep: !this.state.upperLeft.keep } });
    }
    toggleKeepUR () {
        this.setState({ upperRight: { ...this.state.upperRight, keep: !this.state.upperRight.keep } });
    }
    toggleKeepLL () {
        this.setState({ lowerLeft: { ...this.state.lowerLeft, keep: !this.state.lowerLeft.keep } });
    }
    toggleKeepLR () {
        this.setState({ lowerRight: { ...this.state.lowerRight, keep: !this.state.lowerRight.keep } });
    }
    reRoll () {
        this.setState(this.getLocations());
    }
    render() {
    return (
        <div>
            <Helmet>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
            </Helmet>
            <Grid>
                <Row>
                    <Cell columns={1}><Location description="Upper left" location={this.state.upperLeft} onKeep={this.toggleKeepUL}/></Cell>
                    <Cell columns={1}><Location description="Upper right" location={this.state.upperRight} onKeep={this.toggleKeepUR}/></Cell>
                    <Cell columns={1}><Location description="Lower left" location={this.state.lowerLeft} onKeep={this.toggleKeepLL}/></Cell>
                    <Cell columns={1}><Location description="Lower right" location={this.state.lowerRight} onKeep={this.toggleKeepLR}/></Cell>
                    <Cell columns={1}>
                        <IconButton onClick={this.reRoll}><MaterialIcon icon="refresh" /></IconButton>
                    </Cell>
                </Row>
                <Row>
                    <Cell>
                        <Map positions={[this.state.upperLeft, this.state.upperRight, this.state.lowerLeft, this.state.lowerRight]}/>
                    </Cell>
                </Row>
            </Grid>
        </div>
      );
    }
}

