import React from 'react';
import '../css/App.css';
import {SideNav, SideNavItem, Button, Collapsible, CollapsibleItem, Collection, CollectionItem} from 'react-materialize'
import io from 'socket.io-client';
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'

import {changeActivePage,changeActiveShop, changeActiveItem} from '../actions'
import Header from './Header'


const handleShopSelection = (props, shopId) => {
  props.changeActiveShop(shopId)
  props.changeActivePage(1)
}

const handleItemSelection = (props, shopId, itemId) => {
  props.changeActiveShop(shopId)
  props.changeActiveItem(itemId)
  props.changeActivePage(2)
}


const Home = (props) => {
  return (
      <div className='main'>

        <Header />

        <section className='main-section'>
          <h1 className='main-section-title'>Top Coffeeshops</h1>
          <div className='main-horizontal-scroller'>
            <div className='main-section-list'>

              <div className='main-card' onClick={event => handleShopSelection(props, 0)}>
                <div className='main-card-header'></div>
                <div className='main-card-content'>
                  <h1 className='main-card-content-title'>Zeitgeist Coffee</h1>
                  <h2 className='main-card-content-time'><i className="fas fa-walking"></i> 5 min</h2>
                </div>
              </div>

              <div className='main-card'>
                <div className='main-card-header'></div>
                <div className='main-card-content'>
                  <h1 className='main-card-content-title'>Cherry Street Coffee</h1>
                  <h2 className='main-card-content-time'><i className="fas fa-walking"></i> 7 min</h2>
                </div>
              </div>

              <div className='main-card'>
                <div className='main-card-header'></div>
                <div className='main-card-content'>
                  <h1 className='main-card-content-title'>Elm Coffee Roasters</h1>
                  <h2 className='main-card-content-time'><i className="fas fa-walking"></i> 10 min</h2>
                </div>
              </div>

              <div className='main-card'>
                <div className='main-card-header'></div>
                <div className='main-card-content'>
                  <h1 className='main-card-content-title'>Other Cafe</h1>
                  <h2 className='main-card-content-time'><i className="fas fa-walking"></i> 15 min</h2>
                </div>
              </div>


            </div>
          </div>
        </section>
        <section className='main-section'>
          <h1 className='main-section-title'>Popular Beverages</h1>
          <div className='main-horizontal-scroller'>
            <div className='main-section-list'>
              <div className='main-card' onClick={event => handleItemSelection(props, 0, 1)}>
                <div className='main-card-header items'></div>
                <div className='main-card-content'>
                  <h1 className='main-card-content-title'>Americano</h1>
                  <h2 className='main-card-content-time'>Order at Zeitgeist Coffee</h2>
                </div>
              </div>
              <div className='main-card'>
                <div className='main-card-header items'></div>
                <div className='main-card-content'>
                  <h1 className='main-card-content-title'>Latte</h1>
                  <h2 className='main-card-content-time'>Order at Zeitgeist Coffee</h2>
                </div>
              </div>
              <div className='main-card'>
                <div className='main-card-header items'></div>
                <div className='main-card-content'>
                  <h1 className='main-card-content-title'>Cappuccino</h1>
                  <h2 className='main-card-content-time'>Order at Zeitgeist Coffee</h2>
                </div>
              </div>
              <div className='main-card'>
                <div className='main-card-header items'></div>
                <div className='main-card-content'>
                  <h1 className='main-card-content-title'>Cafe Mocha</h1>
                  <h2 className='main-card-content-time'>Order at Zeitgeist Coffee</h2>
                </div>
              </div>
            </div>
          </div>
        </section>



        <footer className='main-footer'>
          <p className='footer-text'>© 2018 Coffeeshop</p>
        </footer>

      </div>
)}

const mapDispatchToProps = dispatch => bindActionCreators({changeActivePage, changeActiveShop, changeActiveItem}, dispatch)
export default connect(null,mapDispatchToProps)(Home)
