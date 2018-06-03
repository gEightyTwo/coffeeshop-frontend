import React from 'react';
import '../css/App.css';
import {SideNav, SideNavItem, Button} from 'react-materialize'

const App = (props) => {

  return (

    <div className='container'>
    <SideNav
      trigger={<div className='hamburger-menu'><i class="fas fa-bars"></i></div>}
      options={{closeOnClick: true}}
    >

      <SideNavItem href='#!icon' icon='cloud'>First Link With Icon</SideNavItem>
      <SideNavItem href='#!second'>Second Link</SideNavItem>
      <SideNavItem divider="divider"/>
      <SideNavItem subheader="subheader">Subheader</SideNavItem>
      <SideNavItem waves="waves" href='#!third'>Third Link With Waves</SideNavItem>
    </SideNav>
  </div>)
}

export default App;
