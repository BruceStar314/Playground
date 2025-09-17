// App.jsx
import React, { useRef, useState } from "react";
import Draggable from "react-draggable";

export default function App() {
  const canvasRef = useRef(null);
  const [notes, setNotes] = useState([]);
  const PALETTE_COLOR = "lightblue";

  // Create a new note at canvas-relative coordinates (x, y)
  const createNoteAt = (color, x, y) => {
    const id = Date.now() + Math.random();
    const width = 160;
    const height = 160;

    // clamp inside canvas bounds (so it doesn't spawn outside)
    const canvas = canvasRef.current;
    let canvasRect = { left: 0, top: 0, width: 800, height: 600 };
    if (canvas) canvasRect = canvas.getBoundingClientRect();

    const clampedX = Math.max(0, Math.min(x - canvasRect.left - width / 2, canvasRect.width - width));
    const clampedY = Math.max(0, Math.min(y - canvasRect.top - height / 2, canvasRect.height - height));

    const newNote = {
      id,
      color,
      x: clampedX,
      y: clampedY,
      text: "",
      width,
      height,
    };

    setNotes((prev) => [...prev, newNote]);
  };

  // Click handler for palette note -> create a copy where you clicked in the canvas
  // If the user clicks the palette directly (not on canvas), we fallback to center.
  const handlePaletteClick = (e) => {
    // we want the mouse coordinates. If click came from palette item,
    // the event target will be palette; use clientX/clientY to place on canvas.
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    // If you want to always spawn in the center of canvas instead, uncomment:
    // const canvas = canvasRef.current;
    // const rect = canvas.getBoundingClientRect();
    // const centerX = rect.left + rect.width / 2;
    // const centerY = rect.top + rect.height / 2;
    // createNoteAt(PALETTE_COLOR, centerX, centerY);

    // Default: place at mouse click position
    createNoteAt(PALETTE_COLOR, mouseX, mouseY);
  };

  // Update a note's position while dragging
  const handleDrag = (id, e, data) => {
    setNotes((prev) =>
      prev.map((n) => (n.id === id ? { ...n, x: data.x, y: data.y } : n))
    );
  };

  // Update textarea text for a note
  const handleTextChange = (id, newText) => {
    setNotes((prev) => prev.map((n) => (n.id === id ? { ...n, text: newText } : n)));
  };

  return (
    <div style={{ padding: 16, fontFamily: "system-ui, sans-serif", height: "100vh", boxSizing: "border-box" }}>
      <h2 style={{ margin: 0, marginBottom: 12 }}>Sticky Note Demo — click the blue note to clone it</h2>

      <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
        {/* Palette */}
        <div>
          <div
            onClick={handlePaletteClick}
            title="Click to create a copy on the canvas at your cursor"
            style={{
              width: 80,
              height: 80,
              background: PALETTE_COLOR,
              borderRadius: 8,
              boxShadow: "0 3px 6px rgba(0,0,0,0.12)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              userSelect: "none",
            }}
          >
            <strong>Click</strong>
          </div>
          <div style={{ marginTop: 8, fontSize: 12, color: "#444" }}>Palette (original)</div>
        </div>

        {/* Canvas */}
        <div
          ref={canvasRef}
          id="canvas"
          style={{
            position: "relative",
            width: "80vw",
            height: "70vh",
            background: "#f8f8f8",
            border: "1px solid #e6e6e6",
            borderRadius: 8,
            padding: 8,
            overflow: "hidden",
          }}
        >
          {notes.map((note) => (
            <Draggable
              key={note.id}
              bounds="parent"
              position={{ x: note.x, y: note.y }}
              onDrag={(e, data) => handleDrag(note.id, e, data)}
            >
              <div
                style={{
                  width: note.width,
                  height: note.height,
                  padding: 8,
                  borderRadius: 8,
                  background: note.color || "lightgray",
                  boxShadow: "0 6px 12px rgba(0,0,0,0.12)",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <textarea
                  value={note.text}
                  onChange={(e) => handleTextChange(note.id, e.target.value)}
                  placeholder="Write here..."
                  style={{
                    width: "100%",
                    height: "100%",
                    resize: "none",
                    border: "none",
                    background: "transparent",
                    outline: "none",
                    fontSize: 14,
                  }}
                />
              </div>
            </Draggable>
          ))}

          {notes.length === 0 && (
            <div style={{ position: "absolute", left: 12, top: 12, color: "#999", fontSize: 13 }}>
              Click the blue block to create a sticky note clone.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
