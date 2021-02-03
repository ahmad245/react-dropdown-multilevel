import * as React  from 'react';
import '../../index.css'
import { ReactComponent as BellIcon } from '../../icons/bell.svg';
//const BellIcon = require("./icons/bell.svg") ;
import { ReactComponent as MessengerIcon } from '../../icons/messenger.svg';
//const MessengerIcon = require("../../icons/messenger.svg") ;
import { ReactComponent as CaretIcon } from '../../icons/caret.svg';
//const CaretIcon = require("../../icons/caret.svg") ;
import { ReactComponent as PlusIcon } from '../../icons/plus.svg';
//const PlusIcon = require("../../icons/plus.svg") ;
import { ReactComponent as CogIcon } from '../../icons/cog.svg';
//const CogIcon = require("./../icons/cog.svg") ;
import { ReactComponent as ChevronIcon } from '../../icons/chevron.svg';
//const ChevronIcon = require("./../icons/chevron.svg") ;
import { ReactComponent as ArrowIcon } from '../../icons/arrow.svg';
//const ArrowIcon = require("../../icons/arrow.svg") ;
import { ReactComponent as BoltIcon } from '../../icons/bolt.svg';
//const BoltIcon = require("./icons/bolt.svg") ;

import { CSSTransition } from 'react-transition-group';
import DropdownItem from './DropdownItem';
import { DropdownMenuStyle } from './DropdownMenu.element';
interface DropdownProps{
    children?:any;
    leftIcon?:any;
    rightIcon?:any;
}
const DropdownMenu=({children,leftIcon,rightIcon}:DropdownProps)=>{
    const [menuHeight,setMenuHeight]=React.useState(0);
    const [activeMenu, setActiveMenu] = React.useState('main');
    const dropdownRef=React.useRef<any>(null);

    React.useEffect(()=>{
        if(dropdownRef && dropdownRef.current){
            setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
          }
    },[])
   
    const calcHeight=(el:any)=>{
       const height=el.offsetHeight;
      
       setMenuHeight(height);

    }
  return (
    <DropdownMenuStyle menuHeight={menuHeight} ref={dropdownRef}>
       <CSSTransition
        in={activeMenu === 'main'}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem setAtciveMenu={setActiveMenu}>My Profile</DropdownItem>
          <DropdownItem
          setAtciveMenu={setActiveMenu}
            leftIcon={<CogIcon />}
            rightIcon={<ChevronIcon />}
            goToMenu="settings">
            Settings
          </DropdownItem>
          <DropdownItem
          setAtciveMenu={setActiveMenu}
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
          <DropdownItem  setAtciveMenu={setActiveMenu} goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>My Tutorial</h2>
          </DropdownItem>
          <DropdownItem setAtciveMenu={setActiveMenu}  leftIcon={<BoltIcon />}>HTML</DropdownItem>
          <DropdownItem setAtciveMenu={setActiveMenu} leftIcon={<BoltIcon />}>CSS</DropdownItem>
          <DropdownItem setAtciveMenu={setActiveMenu} leftIcon={<BoltIcon />}>JavaScript</DropdownItem>
          <DropdownItem goToMenu="test" setAtciveMenu={setActiveMenu} leftIcon={<BoltIcon />}>Awesome!</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'animals'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem setAtciveMenu={setActiveMenu}  goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>Animals</h2>
          </DropdownItem>
          <DropdownItem  setAtciveMenu={setActiveMenu} leftIcon="🦘">Kangaroo</DropdownItem>
          <DropdownItem  setAtciveMenu={setActiveMenu} leftIcon="🐸">Frog</DropdownItem>
          <DropdownItem  setAtciveMenu={setActiveMenu} leftIcon="🦋">Horse?</DropdownItem>
          <DropdownItem  setAtciveMenu={setActiveMenu} leftIcon="🦔">Hedgehog</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'test'}
        timeout={500}
        classNames="menu-third"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem setAtciveMenu={setActiveMenu}  goToMenu="settings" leftIcon={<ArrowIcon />}>
            <h2>test</h2>
          </DropdownItem>
          <DropdownItem  setAtciveMenu={setActiveMenu} leftIcon="🦘">test</DropdownItem>
          <DropdownItem  setAtciveMenu={setActiveMenu} leftIcon="🐸">test</DropdownItem>
          <DropdownItem  setAtciveMenu={setActiveMenu} leftIcon="🦋">test?</DropdownItem>
          <DropdownItem  setAtciveMenu={setActiveMenu} leftIcon="🦔">test</DropdownItem>
        </div>
      </CSSTransition>
     </DropdownMenuStyle>
  )

}
export default DropdownMenu;