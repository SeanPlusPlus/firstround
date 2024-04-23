import { DndProvider } from "react-dnd"
import useSSRBackend from "../hooks/useSSRBackend"

import List from "./List"
import isClosed from "../utils/closed"

export default function Main() {
  const Backend = useSSRBackend()

  if (isClosed) {
    return (
      <main>
        <h1>Closed</h1>
        <p>The draft has started and no more entries are accpeted</p>
      </main>
    )
  }

  return (
    <main>
      <h1>2024 NFL Draft First Round</h1>
      <DndProvider backend={Backend}>
        <List />
      </DndProvider>
    </main>
  )
}
