import { DndProvider } from "react-dnd"
import useSSRBackend from "../hooks/useSSRBackend"

import List from "./List"

export default function Main() {
  const Backend = useSSRBackend()

  return (
    <main>
      <h1>2024 NFL Draft First Round</h1>
      <DndProvider backend={Backend}>
        <List />
      </DndProvider>
    </main>
  )
}
