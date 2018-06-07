import React, { Component } from 'react';
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


class App extends Component {
  componentDidMount(){
    request('/auth/token')
    .then(response => {
      AuthenticationService.setAuthState(response.data)
    })
  }

  render(){
    return (
      <div className='container'>
        {this.props.activePage.id === 0 ? <Home/> : null}
        {this.props.activePage.id === 1 ? <Coffeeshop/> : null}
        {this.props.activePage.id === 2 ? <Item/> : null}
        {this.props.activePage.id === 3 ? <Cart/> : null}
        {this.props.activePage.id === 4 ? <Register/> : null}
        {this.props.activePage.id === 5 ? <Login/> : null}
      </div>
    )
  }
}

const mapStateToProps = ({activePage}) => ({activePage})
export default connect(mapStateToProps)(App)
