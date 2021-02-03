
import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import './index.css';

import { ReactComponent as BellIcon } from './icons/bell.svg';
//const BellIcon = require("./icons/bell.svg") ;
import { ReactComponent as MessengerIcon } from './icons/messenger.svg';
//const MessengerIcon = require("./icons/messenger.svg") ;
import { ReactComponent as CaretIcon } from './icons/caret.svg';
//const CaretIcon = require("./icons/caret.svg") ;
import { ReactComponent as PlusIcon } from './icons/plus.svg';
//const PlusIcon = require("./icons/plus.svg") ;
import { ReactComponent as CogIcon } from './icons/cog.svg';
//const CogIcon = require("./icons/cog.svg") ;
import { ReactComponent as ChevronIcon } from './icons/chevron.svg';
//const ChevronIcon = require("./icons/chevron.svg") ;
import { ReactComponent as ArrowIcon } from './icons/arrow.svg';
//const ArrowIcon = require("./icons/arrow.svg") ;
import { ReactComponent as BoltIcon } from './icons/bolt.svg';
import DropdownMenu2 from './AppTest/Dropdown/DropdownMenu';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';

//const BoltIcon = require("./icons/bolt.svg") ;


function App() {
  return (
    <>
     <BrowserRouter>
      
      
    <Navbar>
      <NavItem icon={<PlusIcon />} />
      <NavItem icon={<BellIcon />} />
      <NavItem icon={<MessengerIcon />} />

      <NavItem icon={<CaretIcon />}>
        <DropdownMenu></DropdownMenu>
      </NavItem>
    </Navbar>
    <DropdownMenu2></DropdownMenu2>

    <Route path='/home' exact component={Home} />
    </BrowserRouter>

   </>
  );
}

function Navbar(props:any) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
}

function NavItem(props:any) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>

      {open && props.children}
    </li>
  );
}

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(0);
  const dropdownRef = useRef<any>(null);

  useEffect(() => {
    if(dropdownRef && dropdownRef.current){
      setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
    }
   
  }, [])

  function calcHeight(el:HTMLElement) {
    const height = el.offsetHeight;
    console.log(el);
       
    setMenuHeight(height);
  }

  function DropdownItem(props:any) {
    return (
      <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }

  return (
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>

      <CSSTransition
        in={activeMenu === 'main'}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}>

          <div className="menu">
            <DropdownItem>My Profile</DropdownItem>

            <DropdownItem
              leftIcon={<CogIcon />}
              rightIcon={<ChevronIcon />}
              goToMenu="settings">
              Settings
            </DropdownItem>

            <DropdownItem
              leftIcon="🦧"
              rightIcon={<ChevronIcon />}
              goToMenu="animals">
              Animals
            </DropdownItem>

          </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'settings'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>My Tutorial</h2>
          </DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>HTML</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>CSS</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>JavaScript</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>Awesome!</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'animals'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>Animals</h2>
          </DropdownItem>
          <DropdownItem leftIcon="🦘">Kangaroo</DropdownItem>
          <DropdownItem leftIcon="🐸">Frog</DropdownItem>
          <DropdownItem leftIcon="🦋">Horse?</DropdownItem>
          <DropdownItem leftIcon="🦔">Hedgehog</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}

export default App;