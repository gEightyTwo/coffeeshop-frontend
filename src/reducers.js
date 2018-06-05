import { combineReducers } from 'redux'

import { CHANGE_ACTIVE_PAGE,  CHANGE_ACTIVE_SHOP, CHANGE_ACTIVE_ITEM, ADD_TO_CART } from './actions'

const INITIAL_PAGE = {id: 0, name: 'home'}
const INITIAL_SHOP = {id: 1, name: 'Zeitgeist Coffee'}
const INITIAL_ITEM = {id: 1, name: 'Americano'}
const INITIAL_CART = []


const activePage = (state = INITIAL_PAGE, action) => {
  switch(action.type){
    case CHANGE_ACTIVE_PAGE: return action.payload
    default: return state
  }
}

const activeShop = (state = INITIAL_SHOP, action) => {
  switch(action.type){
    case CHANGE_ACTIVE_SHOP: return action.payload
    default: return state
  }
}

const activeItem = (state = INITIAL_ITEM, action) => {
  switch(action.type){
    case CHANGE_ACTIVE_ITEM: return action.payload
    default: return state
  }
}

const cart = (state = INITIAL_CART, action) => {
  switch(action.type){
    case ADD_TO_CART: return [...state, action.payload]
    default: return state
  }
}


export default combineReducers({ activePage })
