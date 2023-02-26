import { useState, useRef } from "react"
import { useDrag, useDrop } from 'react-dnd'
import './Card.scss'

const Card = ({id, col, setCol, init, swap}) => {

    const [content, setContent] = useState(init)

    const [, drag] = useDrag({
        type: 'card',
        item: {id, col, setCol, content, setContent},
    })

    const [, drop] = useDrop({
        accept: 'card',
        drop: (e) => {
          if (e.id !== id && e.col === col){
            swap(e.id, id)
          }
        }
    })

    const ref = drag(drop(useRef()))

    return(
        <div className="card" ref={ref}>
            <textarea
                id="content"
                className="content"
                type="text" 
                placeholder="Write something here..."
                value={content}
                onChange={(e) => {
                    setContent(e.target.value)
                }}/>
        </div>
    )
}

export default Card