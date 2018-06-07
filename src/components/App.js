import React from 'react';
import '../css/App.css';
import {SideNav, SideNavItem, Button, Collapsible, CollapsibleItem, Collection, CollectionItem} from 'react-materialize'
import io from 'socket.io-client';
import {connect} from 'react-redux'

import Home from './Home'
import Coffeeshop from './Coffeeshop'
import Item from './Item'
import Cart from './Cart'
import Register from './Register'
import Login from './Login'
import { request, AuthenticationService } from '../helpers'

// const token = localStorage.getItem('token') || 12345
// const socket = io.connect(`http://localhost:3000?token=${token}`, {reconnect: true})
//
// const handlePlaceOrder = event => {
//   console.log('hi');
//   // socket.emit('chat message',`${token}`)
// }

const App = (props) => {

  request('/auth/token')
    .then(response => {
      AuthenticationService.setAuthState(response.data)
      // return request('/users')
    })
    // .then(response => {
    //   const authState = AuthenticationService.getAuthState()
    //   const activeUser = response.data.data.find(el => el.id === authState.id)
    //   AuthenticationService.setAuthState(activeUser)
    // })

  return (
    <div className='container'>
      {props.activePage.id === 0 ? <Home/> : null}
      {props.activePage.id === 1 ? <Coffeeshop/> : null}
      {props.activePage.id === 2 ? <Item/> : null}
      {props.activePage.id === 3 ? <Cart/> : null}
      {props.activePage.id === 4 ? <Register/> : null}
      {props.activePage.id === 5 ? <Login/> : null}
    </div>
  )
}


const mapStateToProps = ({activePage}) => ({activePage})
export default connect(mapStateToProps)(App)
