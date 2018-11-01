import React from "react"
import Location from "./Location";
import locations from "../data/locations";
import Map from "./Map";

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
        <div style={{textAlign: "center"}}>
            <h1>Whitehall helper</h1>
            <Location description="Upper left" location={this.state.upperLeft} onKeep={this.toggleKeepUL}/>
            <Location description="Upper right" location={this.state.upperRight} onKeep={this.toggleKeepUR}/>
            <Location description="Lower left" location={this.state.lowerLeft} onKeep={this.toggleKeepLL}/>
            <Location description="Lower right" location={this.state.lowerRight} onKeep={this.toggleKeepLR}/>
            <div><button onClick={this.reRoll}>Reroll</button></div>
            <Map positions={[this.state.upperLeft, this.state.upperRight, this.state.lowerLeft, this.state.lowerRight]}/>
        </div>
      );
    }
}

