import React from "react"
import Button from '@material/react-button';

export default (props) => (
    <Button
        unelevated={props.location.keep}
        outlined={!props.location.keep}

        onClick={props.onKeep}>
        {props.location.id}
    </Button>
)