import './index.css'
import { useEffect, useState } from 'react'
import {
  CardListTypes,
  FilterTypes,
  getCardList,
  getFilterTitles,
} from '../../store/store'
import FilterBar from '../../components/FIlterBar/FilterBar'
import CardList from '../../components/CardList/CardList'
import { Link } from 'react-router-dom'

interface ServicesProps {
  activeTab: number,
  setActiveTab: React.Dispatch<React.SetStateAction<number>>
}

const Services = ({activeTab, setActiveTab} : ServicesProps) => {
  const [cardListShowed, setCardListShowed] = useState<CardListTypes[]>([])
  const [cardList, setCardList] = useState<CardListTypes[]>([])
  const [filterBarTitles, setFilterBarTitles] = useState<FilterTypes[]>([])

  useEffect(() => {
    getCardList().then((data) => setCardList(data))
    getFilterTitles().then((data) => setFilterBarTitles(data))
  }, [])

  useEffect(() => {
    filterCards(activeTab)
  }, [activeTab, cardList])

  const filterCards = (categoryId: number) => {
    const filteredCards = cardList.filter(
      (card) => card.categoryId === categoryId
    )
    setCardListShowed(filteredCards)
  }

  return (
    <>
      <div className="container">
        <h1 className="title">Выгодные услуги от Beeline</h1>
        <FilterBar
          filter={filterCards}
          filterBarTitles={filterBarTitles}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        ></FilterBar>

        <CardList cardList={cardListShowed}></CardList>
        <div className="form__btn-box">
          <Link className="form__btn" to="/form">
            +
          </Link>
        </div>
      </div>
    </>
  )
}

export default Services
