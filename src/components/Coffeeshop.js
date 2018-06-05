import React from 'react';
import '../css/App.css';
import {SideNav, SideNavItem, Button, Collapsible, CollapsibleItem, Collection, CollectionItem} from 'react-materialize'
import io from 'socket.io-client';
import {connect} from 'react-redux'

import Header from './Header'


const Coffeeshop = (props) => {
  return (
      <div className='main'>

        <Header/>


        <h2 className='coffeeshop-time'><i className="fas fa-walking"></i> 5 min</h2>

        <section className='coffeeshop-section'>
          <div className='coffeeshop-info'>
              <h1 className='coffeeshop-section-title'>Zeitgeist Coffee</h1>
              <h2 className='coffeeshop-section-address'>171 S Jackson St, Seattle, WA 98101</h2>
          </div>
          <div className='coffeeshop-item-card-container'>
            <div className='coffeeshop-item-card'>
              <div>
                <img className='coffeeshop-item-card-image' src={'https://media.istockphoto.com/photos/black-coffee-in-disposable-cup-with-clipping-path-picture-id529747627?k=6&m=529747627&s=612x612&w=0&h=lV2tGJlFgX-WQItNWbdZO8XVQHVSoUlbYod-7jKyU1I='}/>
                <h1 className='coffeeshop-item-card-title'>Americano</h1>
              </div>
              <div className='coffeeshop-item-card-price'>$3.00</div>
            </div>
            <div className='coffeeshop-item-card'>
              <div>
                <img className='coffeeshop-item-card-image' src={'https://media.istockphoto.com/photos/black-coffee-in-disposable-cup-with-clipping-path-picture-id529747627?k=6&m=529747627&s=612x612&w=0&h=lV2tGJlFgX-WQItNWbdZO8XVQHVSoUlbYod-7jKyU1I='}/>
                <h1 className='coffeeshop-item-card-title'>Latte</h1>
              </div>
              <div className='coffeeshop-item-card-price'>$4.25</div>
            </div>
            <div className='coffeeshop-item-card'>
              <div>
                <img className='coffeeshop-item-card-image' src={'https://media.istockphoto.com/photos/black-coffee-in-disposable-cup-with-clipping-path-picture-id529747627?k=6&m=529747627&s=612x612&w=0&h=lV2tGJlFgX-WQItNWbdZO8XVQHVSoUlbYod-7jKyU1I='}/>
                <h1 className='coffeeshop-item-card-title'>Cappuccino</h1>
              </div>
              <div className='coffeeshop-item-card-price'>$3.75</div>
            </div>
            <div className='coffeeshop-item-card'>
              <div>
                <img className='coffeeshop-item-card-image' src={'https://media.istockphoto.com/photos/black-coffee-in-disposable-cup-with-clipping-path-picture-id529747627?k=6&m=529747627&s=612x612&w=0&h=lV2tGJlFgX-WQItNWbdZO8XVQHVSoUlbYod-7jKyU1I='}/>
                <h1 className='coffeeshop-item-card-title'>Cafe Mocha</h1>
              </div>
              <div className='coffeeshop-item-card-price'>$4.50</div>
            </div>
          </div>
        </section>



        <footer className='main-footer'>
          <p className='footer-text'>© 2018 Coffeeshop</p>
        </footer>

      </div>
)}


const mapStateToProps = ({activePage}) => ({activePage})
export default connect(mapStateToProps)(Coffeeshop)
