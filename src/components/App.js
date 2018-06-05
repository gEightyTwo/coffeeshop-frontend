import React from 'react';
import '../css/App.css';
import {SideNav, SideNavItem, Button, Collapsible, CollapsibleItem, Collection, CollectionItem} from 'react-materialize'
import io from 'socket.io-client';
import {connect} from 'react-redux'

import Home from './Home'
import Coffeeshop from './Coffeeshop'
import Item from './Item'
import Cart from './Cart'

// const token = localStorage.getItem('token') || 12345
// const socket = io.connect(`http://localhost:3000?token=${token}`, {reconnect: true})

const handlePlaceOrder = event => {
  console.log('hi');
  // socket.emit('chat message',`${token}`)
}

const App = (props) => {
  return (
    <div className='container'>
      {props.activePage.id === 0 ? <Home/> : null}
      {props.activePage.id === 1 ? <Coffeeshop/> : null}
      {props.activePage.id === 2 ? <Item/> : null}
      {props.activePage.id === 3 ? <Cart/> : null}
    </div>
)}


const mapStateToProps = ({activePage}) => ({activePage})
export default connect(mapStateToProps)(App)
