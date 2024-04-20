import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import List from './List'

export default function Main () {
  return (
    <main>
      <h3>Countries by Population</h3>
      <DndProvider backend={HTML5Backend}>
        <List />
      </DndProvider>
    </main>
  )
}
