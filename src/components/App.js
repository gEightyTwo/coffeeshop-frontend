import React from 'react';
import '../css/App.css';
import {SideNav, SideNavItem, Button} from 'react-materialize'

const App = (props) => {
  return (
    <div className='container'>
      <div className='main'>
        {/* <header className='main-header'> */}
        <header className='main-header coffeeshop'>
          <div className='main-header-nav'>
            <SideNav
              trigger={
                <div className='hamburger-menu'><i class="fas fa-bars"></i></div>
              }
              options={{closeOnClick: true}}>
              <SideNavItem href='#!icon' waves="waves" >Sign In</SideNavItem>
              <SideNavItem href='#!second' waves="waves" >New Account</SideNavItem>
              <SideNavItem divider="divider"/>
              <SideNavItem subheader="subheader">Welcome to Coffeeshop</SideNavItem>
              <SideNavItem waves="waves" href='#!third'>Purchase History</SideNavItem>
              <SideNavItem waves="waves" href='#!third'>Favorite Shops</SideNavItem>
              <SideNavItem waves="waves" href='#!third'>Favorite Drinks</SideNavItem>
            </SideNav>
            <div className='shopping-cart'><i class="fas fa-shopping-cart"></i></div>
          </div>
        </header>
        {/* <section className='main-section'>
          <h1 className='main-section-title'>Top Coffeeshops</h1>
          <div className='main-horizontal-scroller'>
            <div className='main-section-list'>

              <div className='main-card'>
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
              <div className='main-card'>
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
                  <h1 className='main-card-content-title'>Cappuchino</h1>
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
        </section> */}

        <h2 className='coffeeshop-time'><i className="fas fa-walking"></i> 5 min</h2>

        <section className='coffeeshop-section'>
          <div className='coffeeshop-info'>
              <h1 className='coffeeshop-section-title'>Zeitgeist Coffee</h1>
              <h2 className='coffeeshop-section-address'>171 S Jackson St, Seattle, WA 98101</h2>
          </div>
        </section>

        <footer className='main-footer'>
          <p className='footer-text'>© 2018 Coffeeshop</p>
        </footer>
      </div>
  </div>
)}

export default App;
