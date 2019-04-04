import React, { useState } from "react"
import { Helmet } from "react-helmet"
import IconButton from "@material/react-icon-button";
import MaterialIcon from "@material/react-material-icon";
import {Cell, Grid, Row} from "@material/react-layout-grid";
import Location from "./Location";
import locations from "../data/locations";
import Map from "./Map";

import "@material/react-layout-grid/dist/layout-grid.css";
import "@material/react-icon-button/dist/icon-button.css";
import "@material/react-button/dist/button.css";

const getRandom = (max) => (Math.floor(Math.random() * Math.floor(max)))

const getRandomLocation = (possibleLocations) => (possibleLocations[getRandom(possibleLocations.length)])

const App = () => {
    const [upperLeft, setUpperLeft] = useState(getRandomLocation(locations.upperLeft));
    const [upperRight, setUpperRight] = useState(getRandomLocation(locations.upperRight));
    const [lowerLeft, setLowerLeft] = useState(getRandomLocation(locations.lowerLeft));
    const [lowerRight, setLowerRight] = useState(getRandomLocation(locations.lowerRight));

    const reRoll = () => {
        setUpperLeft(upperLeft.keep  ? upperLeft : getRandomLocation(locations.upperLeft));
        setUpperRight(upperRight.keep ? upperRight: getRandomLocation(locations.upperRight));
        setLowerLeft(lowerLeft.keep ? lowerLeft: getRandomLocation(locations.lowerLeft));
        setLowerRight(lowerRight.keep ? lowerRight: getRandomLocation(locations.lowerRight));
    }

    const toggleKeepUL = () => {
        setUpperLeft({...upperLeft, keep: !upperLeft.keep});
    }

    const toggleKeepUR = () => {
        setUpperRight({...upperRight, keep: !upperRight.keep});
    }

    const toggleKeepLL = () => {
        setLowerLeft({...lowerLeft, keep: !lowerLeft.keep});
    }

    const toggleKeepLR = () => {
        setLowerRight({...lowerRight, keep: !lowerRight.keep});
    }

    const onLocationSelected = (location) => {
        switch (location.corner) {
            case "upperLeft":
                if(location.id == upperLeft.id) {
                    toggleKeepUL();
                } else {
                    setUpperLeft(location);
                }
                break;
            case "upperRight":
                if(location.id == upperRight.id) {
                    toggleKeepUR();
                } else {
                    setUpperRight(location);
                }
                break;
            case "lowerLeft":
                if(location.id == lowerLeft.id) {
                    toggleKeepLL();
                } else {
                    setLowerLeft(location);
                }
                break;
            case "lowerRight":
                if(location.id == lowerRight.id) {
                    toggleKeepLR();
                } else {
                    setLowerRight(location);
                }
                break;
            default:
                break;
        }
    }

    return (
        <div>
            <Helmet>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
            </Helmet>
            <Grid>
                <Row>
                    <Cell columns={1} align={"middle"}><Location description="Upper left" location={upperLeft} onKeep={toggleKeepUL}/></Cell>
                    <Cell columns={1} align={"middle"}><Location description="Upper right" location={upperRight} onKeep={toggleKeepUR}/></Cell>
                    <Cell columns={1} align={"middle"}><Location description="Lower left" location={lowerLeft} onKeep={toggleKeepLL}/></Cell>
                    <Cell columns={1} align={"middle"}><Location description="Lower right" location={lowerRight} onKeep={toggleKeepLR}/></Cell>
                    <Cell columns={1} align={"middle"}>
                        <IconButton onClick={reRoll}><MaterialIcon icon="refresh" /></IconButton>
                    </Cell>
                </Row>
                <Row>
                    <Cell align={"middle"}>
                    &nbsp;
                    </Cell>
                </Row>
                <Row>
                    <Cell columns={12}>
                        <Map positions={[upperLeft, upperRight, lowerLeft, lowerRight]} onLocationSelect={onLocationSelected}/>
                    </Cell>
                </Row>
            </Grid>
        </div>
    );
};

export default App;