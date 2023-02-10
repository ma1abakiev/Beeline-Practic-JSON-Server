import { ReactNode, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import {
  CardListTypes,
  FilterTypes,
  getFilterTitles,
  postCard,
} from '../../store/store'
import './index.css'

interface FormProps {
  activeTab: number,
  setActiveTab: React.Dispatch<React.SetStateAction<number>>
}


const Form = ({activeTab, setActiveTab} : FormProps) => {
  const [filterBarTitles, setFilterBarTitles] = useState<FilterTypes[]>([])
  const navigate = useNavigate()
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<CardListTypes>({
    mode: 'onBlur',
  })

  useEffect(() => {
    getFilterTitles().then((data) => setFilterBarTitles(data))
  }, [])

  const onSubmit = async (data: CardListTypes) => {
    data.categoryId = Number(data.categoryId)
    data.price = Number(data.price)
    await postCard(data)
    setActiveTab(data.categoryId)
    navigate('/services')
    reset()
  }
  return (
    <>
      <div className="form__btn-back">
        <Link className="form__btn" to="/services">
          Back
        </Link>
      </div>
      <form
        action="http://localhost:3000/tarifs"
        onSubmit={handleSubmit(onSubmit)}
        className="form"
      >
        <div className="container">
          <div className="form__content">
            <span>Введите категорию</span>
            <select
              className="form__select"
              {...register('categoryId', {
                required: 'Обязательно для заполнения',
              })}
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
              {...register('title', {
                required: 'Поле обязательно к заполнению',
                min: 1,
              })}
              className="form__input"
            />
            <div className="form__error-box">
              {errors?.title && (
                <p className="form__error">
                  {(errors?.title?.message as ReactNode) || 'Ошибка'}
                </p>
              )}
            </div>
            <span>Введите текст</span>
            <input
              {...register('text', {
                required: 'Поле обязательно к заполнению',
                min: 1,
              })}
              className="form__input"
            />
            <div className="form__error-box">
              {errors?.text && (
                <p className="form__error">
                  {(errors?.text?.message as ReactNode) || 'Ошибка'}
                </p>
              )}
            </div>
            <span>Введите цену</span>
            <input
              {...register('price', {
                required: 'Поле обязательно к заполнению',
              })}
              className="form__input"
              type={'number'}
            />
            <div className="form__error-box">
              {errors?.price && (
                <p className="form__error">
                  {(errors?.price?.message as ReactNode) || 'Ошибка'}
                </p>
              )}
            </div>
            <span>Введите период времени</span>
            <input
              {...register('time', {
                required: 'Поле обязательно к заполнению',
                min: 1,
              })}
              className="form__input"
            />
            <div className="form__error-box">
              {errors?.time && (
                <p className="form__error">
                  {(errors?.time?.message as ReactNode) || 'Ошибка'}
                </p>
              )}
            </div>
            <span>Введите URL картинки</span>
            <input
              {...register('img', {
                required: 'Поле обязательно к заполнению',
                min: 1,
              })}
              className="form__input"
            />
            <div className="form__error-box">
              {errors?.img && (
                <p className="form__error">
                  {(errors?.img?.message as ReactNode) || 'Ошибка'}
                </p>
              )}
            </div>
            <input className={'form__btn'} type="submit"></input>
          </div>
        </div>
      </form>
    </>
  )
}

export default Form
