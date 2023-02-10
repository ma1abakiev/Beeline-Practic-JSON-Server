import { CardListTypes, FilterTypes } from '../../../store/store'
import './index.css'

interface FilterBarItem {
  data: FilterTypes
  children: string
  filter: (categoryId: number) => void
  activeTab: number
  setActiveTab: React.Dispatch<React.SetStateAction<number>>
}

const FilterBarItem = ({
  data,
  children,
  filter,
  activeTab,
  setActiveTab
}: FilterBarItem) => {
  return (
    <li
      onClick={() => {
        setActiveTab(data.id)
      }}
      className={activeTab == data.id ? 'li li_active' : 'li'}
    >
      {children}
    </li>
  )
}

export default FilterBarItem
