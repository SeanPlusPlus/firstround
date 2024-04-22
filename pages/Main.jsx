import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"
import { TouchBackend } from "react-dnd-touch-backend"

const isMobile =
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent,
  )
const Backend = isMobile ? TouchBackend : HTML5Backend

import List from "./List"

export default function Main() {
  return (
    <main>
      <h1>2024 NFL Draft First Round</h1>
      <DndProvider backend={Backend}>
        <List />
      </DndProvider>
    </main>
  )
}
