import React, { useState, useEffect, useRef } from "react"
import locations from "../data/locations";
import mapImage from "../data/whitehall-map.png";

const maxWidth = 1024;
const minWidth = 200;
const totalPadding = 48;
const positionRadius = 15;
const allLocations = [
    ...locations.upperLeft.map(location => ({ ...location, corner: "upperLeft" })),
    ...locations.upperRight.map(location => ({ ...location, corner: "upperRight" })),
    ...locations.lowerLeft.map(location => ({ ...location, corner: "lowerLeft" })),
    ...locations.lowerRight.map(location => ({ ...location, corner: "lowerRight" }))
];

const Map = ({positions, onLocationSelect}) => {
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
        ctx.arc(position.x*scale, position.y*scale, positionRadius*scale, 0, Math.PI * 2, true);
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

    const handleSelection = event => {
        const cursorLocation = getCursorLocation(event)

        const clickedLocation = allLocations.find(location => {
            return isLocationClicked(cursorLocation, location)
        })

        if (clickedLocation) {
            onLocationSelect(clickedLocation);
        }
    };

    const getCursorLocation = event => {
        const canvasRect = canvas.current.getBoundingClientRect();
        return {
            x: Math.floor((event.clientX - canvasRect.left)/scale),
            y: Math.floor((event.clientY - canvasRect.top)/scale)
        };
    }

    const isLocationClicked = (clickedPosition, location) => {
        return Math.sqrt((clickedPosition.x-location.x) ** 2 + (clickedPosition.y - location.y) ** 2) < positionRadius;
    };

    return  (
        <canvas
            ref={canvas}
            width={maxWidth}
            height={maxWidth}
            onClick={handleSelection} />
    );
};

export default Map;