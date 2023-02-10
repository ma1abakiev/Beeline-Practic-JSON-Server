import FilterBarItem from './FilterBarItem/FilterBarItem'
import './index.css'
import { CardListTypes, FilterTypes } from '../../store/store'

interface Props {
  filterBarTitles: FilterTypes[],
  filter: (categoryId: number) => void,
  activeTab: number
  setActiveTab: React.Dispatch<React.SetStateAction<number>>
}

const FilterBar = ({ filterBarTitles, filter, activeTab, setActiveTab }: Props) => {
  return (
    <>
      <div className="filter__box">
        <ul className="filter__ul">
          {filterBarTitles.map((item) => {
            return <FilterBarItem setActiveTab = {setActiveTab} activeTab={activeTab} data={item} filter = {filter} key={item.id} >{item.title}</FilterBarItem>
          })}
        </ul>
      </div>
    </>
  )
}

export default FilterBar
