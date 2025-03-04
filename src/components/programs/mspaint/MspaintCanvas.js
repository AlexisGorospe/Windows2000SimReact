// https://medium.com/@subhadipjana866/drawing-on-an-image-in-a-react-canvas-9cc47d38e183
import React, { useRef, useState, useEffect } from 'react';

const MspaintCanvas = ({ imageSrc }) => {
    const canvasRef = useRef(null);
    const [ctx, setCtx] = useState(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [points, setPoints] = useState([]);
    const [allStrokes, setAllStrokes] = useState([]);
    const [currentPoints, setCurrentPoints] = useState([]);
    const lastPosRef = useRef({ x: 0, y: 0 });
    const [penColor, setPenColor] = useState("blue");
    const [penWidth, setPenWidth] = useState(5);
    const [originalImageData, setOriginalImageData] = useState(null);
    
    const loadImageCanvas = (path) => {
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        setCtx(context);
        
        const image = new Image();
        image.crossOrigin = "anonymous";
        image.src = path;

        image.onload = () => {
            canvas.width = image.width;
            canvas.height = image.height;
            context.drawImage(image, 0, 0);
            const baseImageData = canvas.toDataURL("image/png");
            setOriginalImageData(baseImageData);
        };
    };

    const getCanvasCoords = (e) => {
        let clientX, clientY;
        if (e.touches && e.touches.length > 0) {
            clientX = e.touches[0].clientX;
            clientY = e.touches[0].clientY;
        } else {
            clientX = e.clientX;
            clientY = e.clientY;
        }
        const canvas = canvasRef.current;
        const rect = canvas.getBoundingClientRect();
        const scaleX = canvas.width / rect.width;
        const scaleY = canvas.height / rect.height;

        return {
            x: (clientX - rect.left) * scaleX,
            y: (clientY - rect.top) * scaleY,
        };
    };

    const handlePointerDown = (e) => {
        e.preventDefault();
        if (!ctx) return;
        setIsDrawing(true);
        const { x, y } = getCanvasCoords(e);
        lastPosRef.current = { x, y };
    };

    const handlePointerMove = (e) => {
        e.preventDefault();
        if (!ctx || !isDrawing) return;
        
        const { x, y } = getCanvasCoords(e);
        setCurrentPoints((prev) => [...prev, { x, y }]);

        const prevPoints = currentPoints;
        if (prevPoints.length < 1) return;

        const last = prevPoints[prevPoints.length - 1];

        ctx.beginPath();
        ctx.moveTo(last.x, last.y);
        ctx.lineTo(x, y);
        ctx.strokeStyle = penColor;
        ctx.lineWidth = penWidth;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.globalCompositeOperation = "source-over";
        ctx.stroke();
    };

    const handlePointerUp = (e) => {
        e.preventDefault();
        setIsDrawing(false);
        setAllStrokes((prev) => [...prev, currentPoints]);
        setCurrentPoints([]);
    };

    useEffect(() => {
        if (imageSrc) {
            loadImageCanvas(imageSrc);
        }
    }, [imageSrc]);

    return (
        <canvas
            ref={canvasRef}
            style={{
                border: "1px solid black",
                cursor: "crosshair",
                width: "100%",
                height: "auto",
                touchAction: "none",
            }}
            onMouseDown={handlePointerDown}
            onMouseMove={handlePointerMove}
            onMouseUp={handlePointerUp}
            onTouchStart={handlePointerDown}
            onTouchMove={handlePointerMove}
            onTouchEnd={handlePointerUp}
        />
    );
}

export default MspaintCanvas