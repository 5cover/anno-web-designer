import Grid from "./components/Grid";
import Building from "./components/Building";
import './css/App.css';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export default function App() {
    return (
        <DndProvider backend={HTML5Backend}>
            <main>
                <h1>Anno Web Designer</h1>

                {/* <button
                onClick={() => addBuilding({ id: Date.now(), type: "House", color: "blue", x: 5, y: 5 })}>
                Add Building
            </button> */}

                <Grid rows={20} cols={20} />
                <Building type="House" width={3} height={3} color="blue" />
            </main>
        </DndProvider>
    );
}
