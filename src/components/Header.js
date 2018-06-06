import React from 'react';
import {SideNav, SideNavItem, Button, Collapsible, CollapsibleItem, Collection, CollectionItem} from 'react-materialize'
import io from 'socket.io-client';
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'

import {changeActivePage} from '../actions'
import { request, AuthenticationService, withAuthentication } from '../helpers'

const token = localStorage.getItem('token') || 12345


const Header = (props) => {
  return (
    <header className={`main-header ${props.activePage.id ? 'coffeeshop': null}`}>
      <div className='main-header-nav'>
        <SideNav
          trigger={<div className='hamburger-menu'><i className="fas fa-bars"></i></div>}
          options={{closeOnClick: true}}
        >
          <SideNavItem subheader={true}>Welcome to Coffeeshop</SideNavItem>
          <SideNavItem waves={true} onClick={event=>props.changeActivePage(0)}>Home</SideNavItem>
          <SideNavItem waves={true} onClick={event=>props.changeActivePage(3)}>Cart</SideNavItem>
          <SideNavItem waves={true} href='#!third'>Order History</SideNavItem>
          <SideNavItem waves={true} href='#!third'>Favorite Shops</SideNavItem>
          <SideNavItem waves={true} href='#!third'>Favorite Drinks</SideNavItem>
          <SideNavItem divider={true}/>
          { // works but does not update state, need to mkae sure state is updated on logout to trigger
            props.authState
            ? <SideNavItem href='#!icon' waves={true} onClick={event=>AuthenticationService.setAuthState(null)}>Sign Out</SideNavItem>
            : <div>
              <SideNavItem href='#!icon' waves={true} onClick={event=>props.changeActivePage(5)}>Sign In</SideNavItem>
              <SideNavItem href='#!second' waves={true} onClick={event=>props.changeActivePage(4)} >New Account</SideNavItem>
            </div>
          }

        </SideNav>
        <div className='shopping-cart' onClick={event=>props.changeActivePage(3)}><i className="fas fa-shopping-cart"></i></div>
      </div>
    </header>
)}

const mapDispatchToProps = dispatch => bindActionCreators({changeActivePage}, dispatch)
const mapStateToProps = ({activePage}) => ({activePage})
export default connect(mapStateToProps, mapDispatchToProps)(withAuthentication(Header))
