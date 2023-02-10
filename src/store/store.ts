import axios from 'axios'
// export function getChildren(id: number): Promise<Incident[]> {
//   return axios.get(`/incident/child/${id}`).then(res => res.data)
// }

export interface FilterTypes {
  id: number
  title: string
}

export interface CardListTypes {
  id: number
  categoryId: number
  title: string
  text: string
  price: number
  time: string
  img: string
}

export function getFilterTitles() {
  return axios
    .get<any | FilterTypes[]>('http://localhost:3000/categories')
    .then((res) => res.data)
}

export function getCardList() {
  return axios
    .get<any | CardListTypes>('http://localhost:3000/tarifs')
    .then((res) => res.data)
}

export function postCard(card: CardListTypes) {
  return axios.post('http://localhost:3000/tarifs', card)
}
