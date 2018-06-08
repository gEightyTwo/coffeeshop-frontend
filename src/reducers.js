import { combineReducers } from 'redux'

import {
  GET_ALL_PRODUCTS,
  CHANGE_ACTIVE_PAGE,
  CHANGE_ACTIVE_SHOP,
  CHANGE_ACTIVE_ITEM,
  SET_ACTIVE_ITEM_OPTIONS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  SET_PICKUP_TIME,
  GET_ALL_SHOPS,
} from './actions'

const INITIAL_PAGE = {id: 3, pageName: 'home'}
const INITIAL_SHOP = {id: '1', shopName: 'Zeitgeist Coffee', shopAddress: '171 S Jackson St, Seattle, WA 98101'}
const INITIAL_ALL_ITEMS = [
  {
    shopId: '1',
    orderItems: [
      {
        productId: '1',
        productName: 'Latte',
        sizeId: '3',
        sizeName: '12 oz',
        milkId: '2',
        milkName: '2% Milk',
        shots: 2,
        extraShots: 2,
        price: 4.25
      },
      {
        productId: '2',
        productName: 'Americano',
        sizeId: '2',
        sizeName: '12 oz',
        milkId: '0',
        milkName: null,
        shots: 2,
        extraShots: 0,
        price: 3.25
      },
      {
        productId: '3',
        productName: 'Cappuccino',
        sizeId: '2',
        sizeName: '12 oz',
        milkId: '2',
        milkName: '2% Milk',
        shots: 2,
        extraShots: 0,
        price: 3.75
      },
      {
        productId: '4',
        productName: 'Mocha',
        sizeId: '2',
        sizeName: '12 oz',
        milkId: '2',
        milkName: 'Whole Milk',
        shots: 2,
        extraShots: 0,
        price: 4.50
      }
    ]
  },
  {
    shopId: '2',
    orderItems: [
      {
        productId: '1',
        productName: 'Latte',
        sizeId: '3',
        sizeName: '12 oz',
        milkId: '2',
        milkName: '2% Milk',
        shots: 2,
        extraShots: 2,
        price: 4.00
      },
      {
        productId: '2',
        productName: 'Americano',
        sizeId: '2',
        sizeName: '12 oz',
        milkId: '0',
        milkName: null,
        shots: 2,
        extraShots: 0,
        price: 3.00
      },
      {
        productId: '3',
        productName: 'Cappuccino',
        sizeId: '2',
        sizeName: '12 oz',
        milkId: '2',
        milkName: '2% Milk',
        shots: 2,
        extraShots: 0,
        price: 3.00
      },
      {
        productId: '4',
        productName: 'Mocha',
        sizeId: '2',
        sizeName: '12 oz',
        milkId: '2',
        milkName: 'Whole Milk',
        shots: 2,
        extraShots: 0,
        price: 5.00
      }
    ]
  }
]
const INITIAL_ITEM = {}
const INITIAL_CART = {
  orderId: '#AS6ASF876',
  shopId: '1',
  orderUserName: 'Dan Dog',
  isFullfilled: false,
  isCancelled: false,
  pickupTime: 15,
  orderItems: []
}


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
    case SET_ACTIVE_ITEM_OPTIONS: return {...state, ...action.payload}
    default: return state
  }
}

const cart = (state = INITIAL_CART, action) => {
  switch(action.type){
    case ADD_TO_CART: return {...state, orderItems: [...state.orderItems, action.payload]}
    case REMOVE_FROM_CART: return {...state, orderItems: state.orderItems.filter((item,idx)=>idx!==action.payload)}
    case SET_PICKUP_TIME: return {...state, pickupTime: action.payload}
    default: return state
  }
}

const allItems = (state = INITIAL_ALL_ITEMS, action) => {
  switch(action.type){
    case GET_ALL_PRODUCTS: return action.payload
    default: return state
  }
}

const allShops = (state = [], action) => {
  switch(action.type){
    case GET_ALL_SHOPS: return action.payload
    default: return state
  }
}


export default combineReducers({ activePage, activeShop, activeItem, cart, allItems, allShops })
