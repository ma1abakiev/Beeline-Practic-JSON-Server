import { CardListTypes } from '../../../store/store'
import './index.css'

interface Props {
  card: CardListTypes
}

const CardListItem = ({ card }: Props) => {
  return (
    <>
      <div key={card.id} className="card-list__wrapper">
        <div className="card-list__top-box" key={card.id}>
          <div className="card-list__top-left">
            <h5 className="card-list__top-title">{card.title}</h5>
            <p className="card-list__top-text">{card.text}</p>
          </div>
          <div className="card-list__top-right">
            <img
              src={card.img}
              alt=""
              className="card-list__img"
            />
          </div>
        </div>
        <div className="card-list__line"></div>
        <div className="card-list__bottom-box">
          <div className="card-list__bottom-left">
            <p className="card-list__bottom-price">{card.price} сом.</p>
            <p className="card-list__bottom-time">{card.time}</p>
          </div>
          <div className="card-list__bottom-right">
            <button className="card-list__bottom-btn">Подключить</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default CardListItem
