import React from "react"
import mapImage from "../data/whitehall-map.png";

const maxWidth = 1024;
const minWidth = 200;
const totalPadding = 48;

export default class Map extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            image: null,
            scale: 1
        };
    }

    componentDidMount() {
        const image = new Image();
        this.setState({image});
        image.onload = () => {
            this.updateCanvas();
        }
        image.src = mapImage;
        this.setScale();
        window.addEventListener("resize", () => {
            this.setScale();
        });
    }

    setScale() {
        let scale = 1;
        const width = Math.min(document.documentElement.clientWidth, window.innerWidth || minWidth);
        if (width < maxWidth) {
            scale = (width-totalPadding) / maxWidth;
        }
        this.setState({scale});
    }

    componentDidUpdate() {
        this.updateCanvas();
    }

    updateCanvas() {
        const ctx = this.refs.canvas.getContext("2d");

        ctx.canvas.width = maxWidth*this.state.scale;
        ctx.canvas.height = maxWidth*this.state.scale;
        ctx.globalAlpha = 1;
        ctx.drawImage(this.state.image, 0, 0, maxWidth*this.state.scale, maxWidth*this.state.scale);
        ctx.globalAlpha = 0.5;
        this.props.positions.forEach(position => {
            this.drawPosition(ctx, position);
        });
    }

    drawPosition(ctx, position) {
        ctx.beginPath();
        ctx.arc(position.x*this.state.scale, position.y*this.state.scale, 15*this.state.scale, 0, Math.PI * 2, true);
        ctx.fillStyle = position.keep ? "green" : "red";
        ctx.fill();
    }

    render() {
        return  (
            <canvas ref="canvas" width={maxWidth} height={maxWidth} />
        )
    }
}