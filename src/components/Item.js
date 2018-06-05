import React from 'react';
import '../css/App.css';
import {SideNav, SideNavItem, Button, Collapsible, CollapsibleItem, Collection, CollectionItem, Modal} from 'react-materialize'
import io from 'socket.io-client';
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'

import {changeActivePage, addToCart} from '../actions'

import Header from './Header'

const handleAddToCart = (props, item) => {
  props.addToCart(item)
  props.changeActivePage(1)
}

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
          <Collapsible accordion defaultActiveKey={null} style={{boxShadow: 'none', border: 'none'}}>
            <CollapsibleItem header={'Size - 12 oz'} icon='filter_drama' style={{fontSize: '12px'}}>
              <Collection>
                <CollectionItem href='#' >8 oz</CollectionItem>
                <CollectionItem href='#' active>12 oz</CollectionItem>
                <CollectionItem href='#' >16 oz</CollectionItem>
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
                <CollectionItem href='#'>Single Shot</CollectionItem>
                <CollectionItem href='#' active>Double Shot</CollectionItem>
                <CollectionItem href='#'>Triple Shot</CollectionItem>
                <CollectionItem href='#'>Quad Shot</CollectionItem>
              </Collection>
            </CollapsibleItem>
          </Collapsible>
        </div>

        <Modal
          header='Modal Header'
          bottomSheet
          trigger={
            <Button waves='light' className='item-options-add-button' onClick={event => handleAddToCart(props, {item: 'Americano'})}>Add to Order</Button>
          }>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        </Modal>
      </section>



      <footer className='main-footer'>
        <p className='footer-text'>© 2018 Coffeeshop</p>
      </footer>

    </div>
)}

const mapDispatchToProps = dispatch => bindActionCreators({changeActivePage, addToCart}, dispatch)
const mapStateToProps = ({activePage}) => ({activePage})
export default connect(mapStateToProps,mapDispatchToProps)(Item)
