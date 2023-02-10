import { CardListTypes } from '../../store/store'
import CardListItem from './CardListItem/CardListItem'

import './index.css'

interface Props {
  cardList: CardListTypes[]
}

const CardList = ({ cardList }: Props) => {
  return (
    <>
      {cardList.length == 0 ? (
        <div style={{textAlign: 'center', marginTop: 50, fontSize: 50}}>Тут ничего нет</div>
      ) : (
        <div className="card-list">
          {cardList.map((card: CardListTypes) => {
            return <CardListItem key={card.id} card={card}></CardListItem>
          })}
        </div>
      )}
    </>
  )
}

export default CardList
