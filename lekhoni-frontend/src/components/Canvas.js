// // src/components/Canvas.js
// import React, { useRef, useEffect, useState } from 'react';

// function Canvas({ onSave }) {
//   const canvasRef = useRef(null);
//   const [isDrawing, setIsDrawing] = useState(false);
//   const [context, setContext] = useState(null);

//   // Setup canvas on mount
//   useEffect(() => {
//     const canvas = canvasRef.current;
//     canvas.width = 300;
//     canvas.height = 300;
//     const ctx = canvas.getContext('2d');
//     ctx.fillStyle = '#fff';  // White background
//     ctx.fillRect(0, 0, canvas.width, canvas.height);
//     ctx.strokeStyle = '#000';  // Black pen
//     ctx.lineWidth = 4;
//     ctx.lineCap = 'round';
//     setContext(ctx);
//   }, []);

//   // Start drawing
//   const startDrawing = (e) => {
//     setIsDrawing(true);
//     const rect = canvasRef.current.getBoundingClientRect();
//     context.beginPath();
//     context.moveTo(e.clientX - rect.left, e.clientY - rect.top);
//   };

//   // Continue drawing
//   const draw = (e) => {
//     if (!isDrawing) return;
//     const rect = canvasRef.current.getBoundingClientRect();
//     context.lineTo(e.clientX - rect.left, e.clientY - rect.top);
//     context.stroke();
//   };

//   // Stop drawing
//   const stopDrawing = () => {
//     if (isDrawing) {
//       setIsDrawing(false);
//       context.closePath();
//     }
//   };

//   // Clear canvas
//   const handleClear = () => {
//     context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
//     context.fillStyle = '#fff';
//     context.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);
//   };

//   // Save and auto-clear if success
//   const handleSave = () => {
//     canvasRef.current.toBlob(async (blob) => {
//       if (onSave) {
//         const success = await onSave(blob);
//         if (success !== false) {
//           handleClear(); // only clear if save was successful
//         }
//       }
//     });
//   };

//   return (
//     <div>
//       <canvas
//         ref={canvasRef}
//         style={{
//           border: '2px solid black',
//           backgroundColor: '#fff',
//           touchAction: 'none',
//           cursor: 'crosshair'
//         }}
//         onMouseDown={startDrawing}
//         onMouseMove={draw}
//         onMouseUp={stopDrawing}
//         onMouseLeave={stopDrawing}
//       />
//       <br />
//       <button onClick={handleSave}>✅ Save</button>
//       <button onClick={handleClear} style={{ marginLeft: '10px' }}>🧹 Clear</button>
//     </div>
//   );
// }

// export default Canvas;


import React, { useRef, useEffect, useState } from 'react';

function Canvas({ onSave }) {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [context, setContext] = useState(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = 300;
    canvas.height = 300;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#fff';  // White background
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = '#000';  // Black pen
    ctx.lineWidth = 4;
    ctx.lineCap = 'round';
    setContext(ctx);
  }, []);

  const startDrawing = (e) => {
    setIsDrawing(true);
    const rect = canvasRef.current.getBoundingClientRect();
    context.beginPath();
    context.moveTo(e.clientX - rect.left, e.clientY - rect.top);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    const rect = canvasRef.current.getBoundingClientRect();
    context.lineTo(e.clientX - rect.left, e.clientY - rect.top);
    context.stroke();
  };

  const stopDrawing = () => {
    if (isDrawing) {
      setIsDrawing(false);
      context.closePath();
    }
  };

  const handleClear = () => {
    context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    context.fillStyle = '#fff';
    context.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);
  };

  const handleSave = () => {
    canvasRef.current.toBlob(async (blob) => {
      if (onSave) {
        const success = await onSave(blob);
        if (success !== false) {
          handleClear();
        }
      }
    });
  };

  return (
    <div>
      {/* Canvas heading */}
      <h3 style={{ marginBottom: '0.5rem', color: '#2c3e50' }}>ড্রইং এরিয়া</h3>

      <canvas
        ref={canvasRef}
        style={{
          border: '2px solid black',
          backgroundColor: '#fff',
          touchAction: 'none',
          cursor: 'crosshair',
        }}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
      />
      <br />
      <button onClick={handleSave}>✅ Save</button>
      <button onClick={handleClear} style={{ marginLeft: '10px' }}>🧹 Clear</button>
    </div>
  );
}

export default Canvas;
