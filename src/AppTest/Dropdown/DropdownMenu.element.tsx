import styled  from 'styled-components';
type OtherDataWrapperType = {
    menuHeight?: any
}
export const DropdownMenuStyle=styled.div<OtherDataWrapperType>`
  position: absolute;
  top: 58px;
  width: 300px;
  height:${(props:any)=>props.menuHeight? props.menuHeight : ''};
   transform: ${(props:any)=> props.transformEnd ? 'translateX(-45%)' :'' }; 
  background-color: var(--bg);
  border: var(--border);
  border-radius: var(--border-radius);
  padding: 1rem;
  overflow: hidden;
  transition: height var(--speed) ease;
`;

export const MenuItemContainer=styled('div')`
width: 100%;
`;

export const MenuItem=styled('a')`
height: 50px;
display: flex;
align-items: center;
border-radius: var(--border-radius);
transition: background var(--speed);
padding: 0.5rem;
&:hover {
    background-color: #525357;
  }
`;

export const MenuItemIcon=styled('span')`
margin-right: 0.5rem;
&:hover{
    filter: none;
}
`