import './Column.scss'
import {useDrop} from 'react-dnd'
import { useRef } from 'react'
import Card from './Card'
import uuid from 'react-uuid'

const Column = ({name, cards, setCards}) => {

    const addCard = (initContent) => {
      setCards(prev => prev.length < 4 ? [...prev, {
        id: name + uuid(),
        content: initContent
      }]: prev)
    }

    const swapCards = (cardId_1, cardId_2) => {
        
        let index1 = -1
        let index2 = -1
        
        for (let i = 0;i < cards.length;i++){
            if(cards[i].id === cardId_1){
                index1 = i
            }else if(cards[i].id === cardId_2){
                index2 = i
            }
        }

        if(index1 !== -1 && index2 !== -1){
            setCards(prev => {
                let data = []
                let el1 = prev[index1]
                let el2 = prev[index2]

                for(let i = 0;i < prev.length;i++){
                    if (i === index1){
                        data.push(el2)
                    }else if(i === index2){
                        data.push(el1)
                    }else{
                        data.push(prev[i])
                    }
                }

                return data
            })
        }
    }

    const [, drop] = useDrop({
        accept: 'card',
        drop: (e) => {
            if (cards.length < 4){
                let cardExists = false

                for(let i = 0;i < cards.length;i++){
                    if (e.id === cards[i].id){
                        cardExists = true
                    }
                }
    
                if(!cardExists){
                    addCard(e.content)
                    e.setCol((cur) => cur.filter(el => el.id !== e.id))
                }
            }else{
                alert("column is full")
            }
        }
    })

    const ref = useRef()
    const dropRef = drop(ref)

    return(
        <div className="column" ref={dropRef}>
            <button onClick={() => addCard("")}>Add Card</button>
            {cards.map(card => {
                return(
                    <span key={card.id}>
                        <Card col={Column} setCol={setCards} id={card.id} swap={swapCards} init={card.content} />
                    </span>
                )
            })}
        </div>
    )
}

export default Column