import React from 'react';
import '../css/App.css';
import {SideNav, SideNavItem, Button, Collapsible, CollapsibleItem, Collection, CollectionItem} from 'react-materialize'
import io from 'socket.io-client';
import {connect} from 'react-redux'

import Header from './Header'


const Item = (props) => {
  return (
    <div className='main'>

      <Header/>


      <h2 className='coffeeshop-time'><i className="fas fa-walking"></i> 5 min</h2>

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

      </section>



      <footer className='main-footer'>
        <p className='footer-text'>© 2018 Coffeeshop</p>
      </footer>

    </div>
)}


const mapStateToProps = ({activePage}) => ({activePage})
export default connect(mapStateToProps)(Item)
