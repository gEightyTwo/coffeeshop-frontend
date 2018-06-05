import { combineReducers } from 'redux'

import { CHANGE_ACTIVE_PAGE,  CHANGE_ACTIVE_SHOP } from './actions'

const INITIAL_PAGE = {id: 1, name: 'home'}
const INITIAL_SHOP = {id: 1, name: 'Zeitgeist Coffee'}

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


export default combineReducers({ activePage })
