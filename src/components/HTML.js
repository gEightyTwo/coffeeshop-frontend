import React from 'react';
import '../css/App.css';
import {SideNav, SideNavItem, Button, Collapsible, CollapsibleItem, Collection, CollectionItem} from 'react-materialize'
import io from 'socket.io-client';

const token = localStorage.getItem('token') || 12345
const socket = io.connect(`http://localhost:3000?token=${token}`, {reconnect: true})


const handlePlaceOrder = event => {
  console.log('hi');
  socket.emit('chat message',`${token}`)
}

const App = (props) => {
  return (
    <div className='container'>
      <div className='main'>
        {/* <header className='main-header'> */}
        <header className='main-header coffeeshop'>
          <div className='main-header-nav'>
            <SideNav
              trigger={
                <div className='hamburger-menu'><i className="fas fa-bars"></i></div>
              }
              options={{closeOnClick: true}}>
              <SideNavItem href='#!icon' waves={true}>Sign In</SideNavItem>
              <SideNavItem href='#!second' waves={true} >New Account</SideNavItem>
              <SideNavItem divider={true}/>
              <SideNavItem subheader={true}>Welcome to Coffeeshop</SideNavItem>
              <SideNavItem waves={true} href='#!third'>Home</SideNavItem>
              <SideNavItem waves={true} href='#!third'>Cart</SideNavItem>
              <SideNavItem waves={true} href='#!third'>Order History</SideNavItem>
              <SideNavItem waves={true} href='#!third'>Favorite Shops</SideNavItem>
              <SideNavItem waves={true} href='#!third'>Favorite Drinks</SideNavItem>
            </SideNav>
            <div className='shopping-cart'><i className="fas fa-shopping-cart"></i></div>
          </div>
        </header>


        {/*

          MAIN PAGE

         */}


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
        </section> */}

        {/*

          COFFEESHOP PAGE

         */}

        {/* <h2 className='coffeeshop-time'><i className="fas fa-walking"></i> 5 min</h2>

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
        </section> */}


        {/*

          ITEM PAGE

         */}

        {/* <h2 className='coffeeshop-time'><i className="fas fa-walking"></i> 5 min</h2>

        <section className='coffeeshop-section'>
          <div className='coffeeshop-info'>
              <h1 className='coffeeshop-section-title'>Latte</h1>
              <h2 className='coffeeshop-section-address'>$3.75</h2>
          </div>
          <div className='item-options-item-card-container'>
            <Collapsible accordion defaultActiveKey={0} style={{boxShadow: 'none', border: 'none'}}>
              <CollapsibleItem header={'Size - 12 oz'} icon='filter_drama' style={{fontSize: '12px'}}>
                <Collection>
                  <CollectionItem href='#'>8 oz</CollectionItem>
                  <CollectionItem href='#' active>12 oz</CollectionItem>
                  <CollectionItem href='#'>16 oz</CollectionItem>
                </Collection>
              </CollapsibleItem>
              <CollapsibleItem header={'Milk - 2% Milk'} icon='filter_drama' style={{fontSize: '12px'}}>
                <Collection>
                  <CollectionItem href='#'>Skim Milk</CollectionItem>
                  <CollectionItem href='#' active>2% Milk</CollectionItem>
                  <CollectionItem href='#'>Whole Milk</CollectionItem>
                  <CollectionItem href='#'>Almond Milk</CollectionItem>
                  <CollectionItem href='#'>Soy Milk</CollectionItem>
                </Collection>
              </CollapsibleItem>
              <CollapsibleItem header={'Espresso - Double Shot'} icon='place' style={{fontSize: '12px'}}>
                <Collection>
                  <CollectionItem href='#' active>Single Shot</CollectionItem>
                  <CollectionItem href='#'>Double Shot</CollectionItem>
                  <CollectionItem href='#'>Triple Shot</CollectionItem>
                  <CollectionItem href='#'>Quad Shot</CollectionItem>
                </Collection>
              </CollapsibleItem>
            </Collapsible>
          </div>
          <Button waves='light' className='item-options-add-button'>Add to Order</Button>

        </section> */}



      {/*

        CART PAGE

       */}

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




      {/*

        FOOTER

       */}


{/*
        <footer className='main-footer'>
          <p className='footer-text'>© 2018 Coffeeshop</p>
        </footer> */}

      </div>
  </div>
)}

export default App;
