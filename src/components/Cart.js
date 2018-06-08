import React from 'react';
import '../css/App.css';
import {SideNav, SideNavItem, Button, Collapsible, CollapsibleItem, Collection, CollectionItem} from 'react-materialize'
import io from 'socket.io-client';
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import moment from 'moment'


import {changeActivePage, addToCart, removeFromCart, setPickupTime,createUserOrder} from '../actions'
import Header from './Header'
import { request, AuthenticationService, withAuthentication } from '../helpers'



const token = localStorage.getItem('token') || 12345
const socket = io.connect(`http://localhost:3000?token=${token}`, {reconnect: true})


const handlePlaceOrder = (event,props) => {
  if (props.authState) {
    console.log('Oh, Hi Mark');
    console.log(props.cart)
    const userId = props.authState ? props.authState.id : null
    // const payload = '{"shopId":"1","pickupTime":"2018-05-05 06:00:00","orderItems":[{"productId":"2","productName":"Latte","sizeId":"3","sizeName":"16 oz","milkId":"2","milkName":"2% Milk","shots":2,"extraShots":2,"price":4.75},{"productId":"2","productName":"Americano","sizeId":"2","sizeName":"12 oz","milkId":"0","milkName":null,"shots":2,"extraShots":0,"price":3.25}]}'
    // const payload = '{"orderId":"#AS6ASF876","shopId":"1","orderUserName":"Dan Dog","isFullfilled":false,"isCancelled":false,"pickupTime":15,"orderItems":[{"productId":"2","productName":"Latte","sizeId":"3","sizeName":"16 oz","milkId":"2","milkName":"2% Milk","shots":2,"extraShots":2,"price":4.75},{"productId":"2","productName":"Americano","sizeId":"2","sizeName":"12 oz","milkId":"0","milkName":null,"shots":2,"extraShots":0,"price":3.25}]}'
    // const payload = '{"shopId":"1","pickupTime":"2018-05-05 06:00:00","orderItems":[{"productWithOptionsId":"2","sizeId":"3","milkId":"2","extraId":"1","extraShots":2},{"productWithOptionsId":"1","sizeId":"1","milkId":"1","extraId":"1","extraShots":0}]}'
    // const payload = '{"shopId":"1","pickupTime":"2018-05-05 06:00:00","orderItems":[{"productWithOptionsId":"2","sizeId":"3","milkId":"2","extraId":"1","extraShots":2},{"productWithOptionsId":"2","sizeId":"2","milkId":"1","extraId":"1","extraShots":0}]}'
    const {shopId,pickupTime,orderItems} = props.cart
    const payloadOrderItems = orderItems.map(item => {
      const {id, drink_size, milk_type, extra_options, extra_espresso_shots} = item
      return {productWithOptionsId: id, sizeId:drink_size, milkId:milk_type, extraId:"1", extraShots:extra_espresso_shots}
    })
    const payloadCart = {shopId,pickupTime:moment().add(props.cart.pickupTime,'minutes'),orderItems:payloadOrderItems}
    console.log(payloadCart);

    // console.log(props.cart,JSON.stringify(props.cart))
    const payload = JSON.stringify(payloadCart)
    // console.log(JSON.stringify(payloadCart));
    props.createUserOrder(userId,payload)
    socket.emit('chat message',`${token}`)
    // props.changeActivePage(0)
  } else {
    props.changeActivePage(5)
  }
}

const Cart = (props) => {
  const {shopId, pickupTime, orderItems} = props.cart
  console.log(props.cart)
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
                  <h1 className='cart-item-card-title'>{item.item_name}</h1>
                  <h2 className='cart-item-card-subtitle'>{item.product_size}, {item.espresso_shots + item.extra_espresso_shots + ' Shots'}{item.milkName ? ', ' + item.milkName : null}</h2>
                  <h2 className='cart-item-card-subtitle'>
                    <i className="fas fa-plus cart-item-button" onClick={()=>props.addToCart(item)}></i>
                    <i className="fas fa-minus cart-item-button" onClick={()=>props.removeFromCart(idx)}></i>
                  </h2>
                </div>
                <div className='cart-item-card-price'>{'$'+item.item_price}</div>
              </div>
            ))}

          </div>
          <div className='cart-item-card'>
            <h1 className='cart-section-title-total'>Order Total</h1>
            <h1 className='cart-section-title-total'>${parseFloat(orderItems.reduce((acc,item)=>acc+parseFloat(item.item_price),0)).toFixed(2) || 0}</h1>
          </div>
          <Button waves='light' className='cart-item-order-button' onClick={event=>handlePlaceOrder(event,props)}>Place Order</Button>
        </section>
      </div>
)}

const mapDispatchToProps = dispatch => bindActionCreators({changeActivePage, addToCart, removeFromCart,setPickupTime, createUserOrder}, dispatch)
const mapStateToProps = ({activePage, cart, allShops}) => ({activePage, cart, allShops})

export default connect(mapStateToProps,mapDispatchToProps)(withAuthentication(Cart))
