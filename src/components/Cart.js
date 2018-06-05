import React from 'react';
import '../css/App.css';
import {SideNav, SideNavItem, Button, Collapsible, CollapsibleItem, Collection, CollectionItem} from 'react-materialize'
import io from 'socket.io-client';
import {connect} from 'react-redux'

import Header from './Header'

//
// const token = localStorage.getItem('token') || 12345
// const socket = io.connect(`http://localhost:3000?token=${token}`, {reconnect: true})


const handlePlaceOrder = event => {
  console.log('hi');
  // socket.emit('chat message',`${token}`)
}

const Cart = (props) => {
  return (
      <div className='main'>

        <Header/>

        <h2 className='coffeeshop-time'><i className="fas fa-walking"></i> 5 min</h2>

        <section className='cart-section'>
          <div className='cart-info'>
              <h1 className='cart-section-title'>Order (4)</h1>
              <h2 className='cart-section-subtitle'>Zeitgeist Coffee - <i className="fas fa-walking"></i> 5 min</h2>
              <h2 className='cart-section-subtitle'>171 S Jackson St, Seattle, WA 98101</h2>
              <h2 className='cart-section-subtitle'>(206) 999-9999</h2>
          </div>
          <div className='cart-pickup-time'>
              <h1 className='cart-pickup-time-text'><i class="far fa-clock"></i> Pick Up in 10 min</h1>
              <input className='cart-pickup-time-slider' type="range" min="10" max="30" value={'20'}/>
          </div>
          <div className='cart-item-card-container'>
            <div className='cart-item-card'>
              <div>
                <h1 className='cart-item-card-title'>1 x Latte</h1>
                <h2 className='cart-item-card-subtitle'>12 oz, 2% Milk, Double Shot</h2>
                <h2 className='cart-item-card-subtitle'><i className="fas fa-plus cart-item-button"></i><i className="fas fa-minus cart-item-button"></i></h2>
              </div>
              <div className='cart-item-card-price'>$3.75</div>
            </div>
            <div className='cart-item-card'>
              <div>
                <h1 className='cart-item-card-title'>2 x Americano</h1>
                <h2 className='cart-item-card-subtitle'>8 oz, Double Shot</h2>
                <h2 className='cart-item-card-subtitle'><i className="fas fa-plus cart-item-button"></i><i className="fas fa-minus cart-item-button"></i></h2>
              </div>
              <div className='cart-item-card-price'>$6.50</div>
            </div>
            <div className='cart-item-card'>
              <div>
                <h1 className='cart-item-card-title'>1 x Cafe Mocha</h1>
                <h2 className='cart-item-card-subtitle'>16 oz, 2% Milk, Double Shot</h2>
                <h2 className='cart-item-card-subtitle'><i className="fas fa-plus cart-item-button"></i><i className="fas fa-minus cart-item-button"></i></h2>
              </div>
              <div className='cart-item-card-price'>$3.75</div>
            </div>
          </div>
          <div className='cart-item-card'>
            <h1 className='cart-section-title-total'>Order Total</h1>
            <h1 className='cart-section-title-total'>$14.00</h1>
          </div>
          <Button waves='light' className='cart-item-order-button' onClick={handlePlaceOrder}>Place Order</Button>

        </section>

      </div>
)}


const mapStateToProps = ({activePage}) => ({activePage})
export default connect(mapStateToProps)(Cart)
