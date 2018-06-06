import React from 'react';
import '../css/App.css';
import {SideNav, SideNavItem, Button, Collapsible, CollapsibleItem, Collection, CollectionItem} from 'react-materialize'
import io from 'socket.io-client';
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'

import {changeActivePage, addToCart, removeFromCart, setPickupTime} from '../actions'
import Header from './Header'
import { request, AuthenticationService, withAuthentication } from '../helpers'


//
// const token = localStorage.getItem('token') || 12345
// const socket = io.connect(`http://localhost:3000?token=${token}`, {reconnect: true})


const handlePlaceOrder = (event,props) => {
  console.log('hi');
  if (props.authState) {
    console.log('hiiiiiiii');
  } else {
    props.changeActivePage(5)
  }
  // socket.emit('chat message',`${token}`)
}

const Cart = (props) => {
  const {shopId, pickupTime, orderItems} = props.cart
  console.log(props)
  return (
      <div className='main'>

        <Header/>

        <h2 className='coffeeshop-time'><i className="fas fa-walking"></i> 5 min</h2>

        <section className='cart-section'>
          <div className='cart-info'>
              <h1 className='cart-section-title'>Order ({orderItems.length})</h1>
              <h2 className='cart-section-subtitle'>Zeitgeist Coffee - <i className="fas fa-walking"></i> 5 min</h2>
              <h2 className='cart-section-subtitle'>171 S Jackson St, Seattle, WA 98101</h2>
              <h2 className='cart-section-subtitle'>(206) 999-9999</h2>
          </div>
          <div className='cart-pickup-time'>
              <h1 className='cart-pickup-time-text'><i className="far fa-clock"></i> Pick Up in {pickupTime} min</h1>
              <input className='cart-pickup-time-slider' type="range" min="10" max="30" value={pickupTime} onChange={event=>props.setPickupTime(event.target.value)}/>
          </div>
          <div className='cart-item-card-container'>
            {console.log(orderItems)}
            {orderItems.map((item, idx)=>(
              <div className='cart-item-card'>
                <div>
                  <h1 className='cart-item-card-title'>{item.productName}</h1>
                  <h2 className='cart-item-card-subtitle'>{item.sizeName}, {item.shots + item.extraShots + ' Shots'}{item.milkName ? ', ' + item.milkName : null}</h2>
                  <h2 className='cart-item-card-subtitle'>
                    <i className="fas fa-plus cart-item-button" onClick={()=>props.addToCart(item)}></i>
                    <i className="fas fa-minus cart-item-button" onClick={()=>props.removeFromCart(idx)}></i>
                  </h2>
                </div>
                <div className='cart-item-card-price'>{'$'+item.price}</div>
              </div>
            ))}

          </div>
          <div className='cart-item-card'>
            <h1 className='cart-section-title-total'>Order Total</h1>
            <h1 className='cart-section-title-total'>${parseFloat(orderItems.reduce((acc,item)=>acc+item.price,0)).toFixed(2) || 0}</h1>
          </div>
          <Button waves='light' className='cart-item-order-button' onClick={event=>handlePlaceOrder(event,props)}>Place Order</Button>

        </section>

      </div>
)}

const mapDispatchToProps = dispatch => bindActionCreators({changeActivePage, addToCart, removeFromCart,setPickupTime}, dispatch)
const mapStateToProps = ({activePage, cart}) => ({activePage,cart})
export default connect(mapStateToProps,mapDispatchToProps)(withAuthentication(Cart))
