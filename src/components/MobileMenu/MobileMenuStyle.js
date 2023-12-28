import styled from 'styled-components';
import { device, size } from '../../utils/device';
import {  FaPlus } from "react-icons/fa";

export const MobileMenuContainer = styled.div`
width: 100%;
background: #000;
position: fixed;
height: 100%;
top: 0;
transition: 0.3s ease-in-out;
opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
top:  ${({isOpen}) => (isOpen ? '0' : '-100%')}

`

export const MenuItemWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center
`
export const IconBox = styled.div`
width: 100%
display: block;
display: flex;
justify-content: flex-end;
padding-bottom: 15px;

`

export const CancelMenu = styled(FaPlus)`
cursor: pointer;
rotate: 45deg;
left: 0 auto;

clear: al;
color: #fff;
padding: 1em;


`
export const MenuList = styled.ul`
color: var(--white);
display: flex;
flex-direction: column;
justify-content: center;
gap: 4em;

align-items: center;



`
export const ListItem = styled.li`
cursor: pointer;
font-size: 1.3rem;
font-style: normal;
font-weight: 400;
line-height: 24px;
`

export const NavAction = styled.div`
display: inline-flex;
padding: 2rem;
// max-width: 100%
>* {
    margin-left: 10px;
}


`
