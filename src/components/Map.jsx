import React, { useState, useEffect, useRef } from "react"
import mapImage from "../data/whitehall-map.png";

const maxWidth = 1024;
const minWidth = 200;
const totalPadding = 48;

const Map = ({positions}) => {
    const [image, setImage] = useState(null);
    const [scale, setScale] = useState(1);
    const canvas = useRef(null);

    const updateScale = () => {
        let newScale = 1;
        const width = Math.min(document.documentElement.clientWidth, window.innerWidth || minWidth);
        if (width < maxWidth) {
            newScale = (width-totalPadding) / maxWidth;
        }
        setScale(newScale);
    };

    const drawPosition = (ctx, position) => {
        ctx.beginPath();
        ctx.arc(position.x*scale, position.y*scale, 15*scale, 0, Math.PI * 2, true);
        ctx.fillStyle = position.keep ? "green" : "red";
        ctx.fill();
    };

    const updateCanvas = () => {
        if (!canvas || !image) return;

        const ctx = canvas.current.getContext("2d");

        ctx.canvas.width = maxWidth*scale;
        ctx.canvas.height = maxWidth*scale;
        ctx.globalAlpha = 1;
        ctx.drawImage(image, 0, 0, maxWidth*scale, maxWidth*scale);
        ctx.globalAlpha = 0.5;
        positions.forEach(position => {
            drawPosition(ctx, position);
        });
    };

    useEffect(() => {
        const newImage = new Image();
        newImage.src = mapImage;
        newImage.onload = () => {
            setImage(newImage);
        };
        updateScale();
        window.addEventListener("resize", () => {
            updateScale();
        });
    }, []);

    useEffect(() => {
        updateCanvas();
    });

    return  (
        <canvas ref={canvas} width={maxWidth} height={maxWidth} />
    );
};

export default Map;