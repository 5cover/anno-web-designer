import React from "react";
import { CELL_SIZE_MM } from "../const";

const GRID_SIZE = 20; // 20x20 grid

interface GridProps {
    rows: number;
    cols: number;
}

const Grid: React.FC<GridProps> = ({ rows, cols }) => {
    return (
      <div className="grid" style={{ 
        display: "grid", 
        gridTemplateColumns: `repeat(${cols}, ${CELL_SIZE_MM}mm)`, 
        gridTemplateRows: `repeat(${rows}, ${CELL_SIZE_MM}mm)`, 
      }}>
        {[...Array(rows * cols)].map((_, i) => (
          <div key={i} className="grid-cell"></div>
        ))}
      </div>
    );
  };

export default Grid;