import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import {
  CardListTypes,
  FilterTypes,
  getFilterTitles,
  postCard,
} from '../../store/store'

import './index.css'

const Form = () => {
  const [card, setCard] = useState<CardListTypes>({
    id: 0,
    categoryId: 1,
    title: '',
    text: '',
    price: 0,
    time: '',
    img: '',
  })
  const [filterBarTitles, setFilterBarTitles] = useState<FilterTypes[]>([])
  const navigate = useNavigate()
  const { register, handleSubmit } = useForm()

  useEffect(() => {
    getFilterTitles().then((data) => setFilterBarTitles(data))
  }, [])

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (
      card.title !== '' &&
      card.text !== '' &&
      card.img !== '' &&
      card.time !== '' &&
      card.price !== 0
    ) {
      await postCard(card)
      navigate('/services')
    }
  }

  return (
    <>
      <div className="form__btn-back">
        <Link className="form__btn" to="/services">
          Back
        </Link>
      </div>

      <form onSubmit={(e) => submitHandler(e)} className="form">
        <div className="container">
          <div className="form__content">
            <span>Введите категорию</span>
            <select
              value={card.categoryId}
              onChange={(e) =>
                setCard({ ...card, categoryId: Number(e.target.value) })
              }
              className="form__select"
              name="categoryId"
            >
              {filterBarTitles.map((title, index) => {
                return (
                  <option key={title.id} value={index + 1}>
                    {title.title}
                  </option>
                )
              })}
            </select>
            <span>Введите заголовок</span>

            <input
              required
              placeholder="Title"
              name={'title'}
              onChange={(e) => setCard({ ...card, title: e.target.value })}
              value={card.title}
              type="text"
              className="form__input"
            />
            <span>Введите текст</span>

            <input
              required
              placeholder="Text"
              name="text"
              onChange={(e) => setCard({ ...card, text: e.target.value })}
              value={card.text}
              type="text"
              className="form__input"
            />
            <span>Введите цену</span>

            <input
              required
              placeholder="Price"
              name="price"
              type="number"
              onChange={(e) =>
                setCard({ ...card, price: Number(e.target.value) })
              }
              value={card.price}
              className="form__input"
            />
            <span>Введите период времени</span>
            <input
              required
              placeholder="time"
              name="time"
              onChange={(e) => setCard({ ...card, time: e.target.value })}
              value={card.time}
              type="text"
              className="form__input"
            />
            <span>Введите URL картинки</span>
            <input
              required
              placeholder="Img URL"
              name="img"
              onChange={(e) => setCard({ ...card, img: e.target.value })}
              value={card.img}
              type="text"
              className="form__input"
            />
            <button
              className={
                card.title == '' ||
                card.text == '' ||
                card.img == '' ||
                card.time == '' ||
                card.price == 0
                  ? 'form__btn form__btn_disabled'
                  : 'form__btn'
              }
              type="submit"
            >
              Создать
            </button>
          </div>
        </div>
      </form>
    </>
  )
}

export default Form
