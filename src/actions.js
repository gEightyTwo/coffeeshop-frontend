import axios from 'axios'
// import { request } from './helpers'

export const CHANGE_ACTIVE_PAGE = 'CHANGE_ACTIVE_PAGE'
export const CHANGE_ACTIVE_SHOP = 'CHANGE_ACTIVE_SHOP'
export const CHANGE_ACTIVE_ITEM = 'CHANGE_ACTIVE_ITEM'
export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const SET_PICKUP_TIME = 'SET_PICKUP_TIME'

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


const items = [
  {id: 0, name: 'Americano'},
  {id: 1, name: 'Latte'},
  {id: 2, name: 'Cappuccino'},
  {id: 3, name: 'Cafe Mocha'},
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


export const changeActiveItem = item => (
  dispatch => {
      dispatch({
        type: CHANGE_ACTIVE_ITEM,
        payload: item
      })
  }
)


export const addToCart = item => (
  dispatch => {
      dispatch({
        type: ADD_TO_CART,
        payload: item
      })
  }
)


export const removeFromCart = idx => (
  dispatch => {
      dispatch({
        type: REMOVE_FROM_CART,
        payload: idx
      })
  }
)

export const setPickupTime = time => (
  dispatch => {
      dispatch({
        type: SET_PICKUP_TIME,
        payload: time
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
