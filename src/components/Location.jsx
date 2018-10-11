import React from "react"

const locationStyle = {
    border: "1px black solid",
    fontSize: "2em",
    borderRadius: "50%",
    height: "100px",
    width: "100px",
    padding: "10px",
    margin: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
};

const containerStyle = {
    cursor: "pointer",
    display: "inline-block",
    textAlign: "center",
    width: "130px"
}


export default (props) => (
    <div style={containerStyle} onClick={props.onKeep}>
        <div><span>{props.description}</span></div>
        <div style={locationStyle}>
            <span style={{color: props.keep ? "green" : "red"}}>{props.location}</span>
        </div>
        <div>{props.keep ? "Reroll" : "Keep"}</div>
    </div>
)