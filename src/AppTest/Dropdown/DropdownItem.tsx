import * as React from 'react';
import { MenuItem, MenuItemIcon } from './DropdownMenu.element';
interface DropdownItemProps{
    children?:any;
    leftIcon?:any;
    rightIcon?:any;
    goToMenu?:any;
    setAtciveMenu?:(val:string)=>void;
    path?:string
}
const DropdownItemMenu=({children,leftIcon,rightIcon,goToMenu,setAtciveMenu,path='#'}:DropdownItemProps)=>{
  return (
      <MenuItem to={path} onClick={()=> goToMenu && setAtciveMenu && setAtciveMenu(goToMenu)} >
        <MenuItemIcon className="icon-button">{leftIcon}</MenuItemIcon>
         {children}
        <MenuItemIcon className="icon-right">{rightIcon}</MenuItemIcon>
      </MenuItem>
  )

}
export default DropdownItemMenu;