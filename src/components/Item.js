import React from 'react';
import '../css/App.css';
import {SideNav, SideNavItem, Button, Collapsible, CollapsibleItem, Collection, CollectionItem} from 'react-materialize'
import io from 'socket.io-client';
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'

import {changeActivePage, addToCart,setActiveItemOptions} from '../actions'

import Header from './Header'

const handleAddToCart = (props, item) => {
  console.log('hi');
  props.addToCart(item)
  props.changeActivePage(1)
}

const handleOptionSelect = (props, options) => {
  console.log(props)
  props.setActiveItemOptions(options)
}

const Item = (props) => {
  console.log(props);
  const {activeItem} = props
  return (
    <div className='main'>

      <Header/>


      <h2 className='coffeeshop-time'><i className="fas fa-walking"></i> 5 min</h2>

      <section className='coffeeshop-section'>
        <div className='coffeeshop-info'>
            <h1 className='coffeeshop-section-title'>{activeItem.productName}</h1>
            <h2 className='coffeeshop-section-address'>${parseFloat(activeItem.price).toFixed(2)}</h2>
        </div>
        <div className='item-options-item-card-container'>
          <Collapsible accordion defaultActiveKey={null} style={{boxShadow: 'none', border: 'none'}}>
            <CollapsibleItem header={'Size - ' + activeItem.sizeName} icon='filter_drama' style={{fontSize: '12px'}}>
              <Collection>
                {['8 oz','12 oz', '16 oz'].map(el=>(
                  <CollectionItem href='#' active={activeItem.sizeName===el} onClick={()=>handleOptionSelect(props,{sizeName: el})}>{el}</CollectionItem>
                ))}
              </Collection>
            </CollapsibleItem>
            { activeItem.milkName ?
            <CollapsibleItem header={'Milk - ' + activeItem.milkName} icon='filter_drama' style={{fontSize: '12px'}}>
              <Collection>
                {['Skim Milk','2% Milk', 'Whole Milk', 'Almond Milk', 'Soy Milk'].map(el=>(
                  <CollectionItem href='#' active={activeItem.milkName===el} onClick={()=>handleOptionSelect(props,{milkName: el})}>{el}</CollectionItem>
                ))}
              </Collection>
            </CollapsibleItem>
            : null
            }
            <CollapsibleItem header={'Espresso - ' + (activeItem.shots + activeItem.extraShots) + ' Shots'} icon='place' style={{fontSize: '12px'}}>
              <Collection>
                {[0, 1, 2].map(el=>(
                  <CollectionItem href='#' active={activeItem.extraShots===el} onClick={()=>handleOptionSelect(props,{extraShots: el})}>{activeItem.shots + el} Shots</CollectionItem>
                ))}
              </Collection>
            </CollapsibleItem>
          </Collapsible>
        </div>
        <Button waves='light' className='item-options-add-button' onClick={event => handleAddToCart(props, activeItem)}>Add to Order</Button>
      </section>



      <footer className='main-footer'>
        <p className='footer-text'>© 2018 Coffeeshop</p>
      </footer>

    </div>
)}

const mapDispatchToProps = dispatch => bindActionCreators({changeActivePage, addToCart, setActiveItemOptions}, dispatch)
const mapStateToProps = ({activeItem}) => ({activeItem})
export default connect(mapStateToProps,mapDispatchToProps)(Item)
