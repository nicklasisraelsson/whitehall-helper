import React from "react"
import mapImage from "../data/whitehall-map.png";

const drawPosition = (ctx, position) => {
    ctx.beginPath();
    ctx.arc(position.x, position.y, 15, 0, Math.PI * 2, true);
    ctx.fillStyle = position.keep ? "green" : "red";
    ctx.fill();
}

export default class Map extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            image: null
        };
    }

    componentDidMount() {
        const image = new Image();
        image.onload = () => {
            this.updateCanvas();
        }
        image.src = mapImage;
        this.setState({image});
    }

    componentDidUpdate() {
        this.updateCanvas();
    }

    updateCanvas() {
        const ctx = this.refs.canvas.getContext("2d");
        ctx.globalAlpha = 1;
        ctx.drawImage(this.state.image, 0, 0);
        ctx.globalAlpha = 0.5;
        this.props.positions.forEach(position => {
            drawPosition(ctx, position);
        });
    }

    render() {
        return  (
            <div style={{paddingTop: "20px"}}>
                <canvas ref="canvas" width="1024px" height="1024px" />
            </div>
        )
    }
}