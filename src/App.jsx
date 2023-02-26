import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import Column from './Column'
import './App.scss'
import { useState } from 'react'

function App() {

  const [cards_1, setCards1] = useState([])
  const [cards_2, setCards2] = useState([])
  const [cards_3, setCards3] = useState([])
  const [cards_4, setCards4] = useState([])

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <Column 
          name="col_1"
          cards={cards_1} 
          setCards={setCards1} />

        <Column
          name="col_2" 
          cards={cards_2} 
          setCards={setCards2} />

        <Column 
          name="col_3"
          cards={cards_3} 
          setCards={setCards3} />

        <Column 
          name="col_4"
          cards={cards_4} 
          setCards={setCards4} />
      </div>
    </DndProvider>
  )
}

export default App
