import axios from 'axios'
// import { request } from './helpers'

export const CHANGE_ACTIVE_PAGE = 'CHANGE_ACTIVE_PAGE'
export const CHANGE_ACTIVE_SHOP = 'CHANGE_ACTIVE_SHOP'

const pages = [
  {id: 0, name: 'home'},
  {id: 1, name: 'coffeeshop'},
  {id: 2, name: 'item'},
  {id: 3, name: 'cart'}
]

const shops = [
  {id: 0, name: 'Zeitgeist Coffee'},
  {id: 1, name: 'Cherry Street'},
  {id: 2, name: 'Elm Coffee Roasters'},
  {id: 3, name: 'Other CoffeeShop'},
]


const API = `${process.env.REACT_APP_BACKEND}`

export const changeActivePage = pageId => (
  dispatch => {
      dispatch({
        type: CHANGE_ACTIVE_PAGE,
        payload: pages.find(el => el.id === pageId)
      })
  }
)

export const changeActiveShop = shopId => (
  dispatch => {
      dispatch({
        type: CHANGE_ACTIVE_SHOP,
        payload: shops.find(el => el.id === shopId)
      })
  }
)
//
// export const doAction = () => (
//   dispatch => {
//     axios.get(`${API}/api/`)
//     .then((response) => {
//       dispatch({
//         type: DO_ACTION,
//         payload: response.data.data
//       })
//     })
//   }
// )
