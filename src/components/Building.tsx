import React from "react";
import { useDrag } from "react-dnd";

interface BuildingProps {
  type: string;
  width: number;
  height: number;
  color: string;
}

const Building: React.FC<BuildingProps> = ({ type, width, height, color }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "BUILDING",
    item: { type, width, height },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  // Attach `drag` behavior to the `ref`
  drag(ref);

  return (
    <div
      ref={ref}
      style={{
        width: `${width * 40}px`,
        height: `${height * 40}px`,
        backgroundColor: color,
        opacity: isDragging ? 0.5 : 1,
        cursor: "grab",
      }}
    >
      {type}
    </div>
  );
};

export default Building;
