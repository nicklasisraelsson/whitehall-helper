import React from "react"
import Location from "./Location";
import locations from "../data/locations";

const getRandom = (max) => (Math.floor(Math.random() * Math.floor(max)))

const getRandomLocation = (possibleLocations) => (possibleLocations[getRandom(possibleLocations.length)])

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ...this.getLocations(),
            keepUL: false,
            keepUR: false,
            keepLL: false,
            keepLR: false
        };
        this.reRoll = this.reRoll.bind(this);
        this.toggleKeepUL = this.toggleKeepUL.bind(this);
        this.toggleKeepUR = this.toggleKeepUR.bind(this);
        this.toggleKeepLL = this.toggleKeepLL.bind(this);
        this.toggleKeepLR = this.toggleKeepLR.bind(this);
    }
    getLocations() {
        return {
            upperLeft: this.state && this.state.keepUL ? this.state.upperLeft : getRandomLocation(locations.upperLeft),
            upperRight: this.state && this.state.keepUR ? this.state.upperRight: getRandomLocation(locations.upperRight),
            lowerLeft: this.state && this.state.keepLL ? this.state.lowerLeft: getRandomLocation(locations.lowerLeft),
            lowerRight: this.state && this.state.keepLR ? this.state.lowerRight: getRandomLocation(locations.lowerRight)
        };
    }
    toggleKeepUL () {
        this.setState({keepUL: !this.state.keepUL});
    }
    toggleKeepUR () {
        this.setState({keepUR: !this.state.keepUR});
    }
    toggleKeepLL () {
        this.setState({keepLL: !this.state.keepLL});
    }
    toggleKeepLR () {
        this.setState({keepLR: !this.state.keepLR});
    }
    reRoll () {
        this.setState(this.getLocations());
    }
    render() {
    return (
        <div style={{textAlign: "center"}}>
            <h1>Whitehall helper</h1>
            <Location description="Upper left" location={this.state.upperLeft} keep={this.state.keepUL} onKeep={this.toggleKeepUL}/>
            <Location description="Upper right" location={this.state.upperRight} keep={this.state.keepUR} onKeep={this.toggleKeepUR}/>
            <Location description="Lower left" location={this.state.lowerLeft} keep={this.state.keepLL} onKeep={this.toggleKeepLL}/>
            <Location description="Lower right" location={this.state.lowerRight} keep={this.state.keepLR} onKeep={this.toggleKeepLR}/>
            <div><button onClick={this.reRoll}>Reroll</button></div>
        </div>
      );
    }
}

