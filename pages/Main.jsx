import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"

import List from "./List"

export default function Main() {
  return (
    <main>
      <h1>2024 NFL Draft First Round</h1>
      <DndProvider backend={HTML5Backend}>
        <List />
      </DndProvider>
    </main>
  )
}
