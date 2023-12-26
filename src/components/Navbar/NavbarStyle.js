import styled from 'styled-components'
import { device, size } from '../../utils/device'
import { FaBars } from "react-icons/fa";

export const HeaderWrapper = styled.div`
background: var(--silver);
padding: 1.87rem;
`
export const Nav = styled.nav`
width: 95%;
max-width: 1440px;
margin: 0 auto;
`
export const NavContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;


`

export const NavLogo = styled.span`
max-width:150px;
`
export const MenuList = styled.ul`
color: var(--gray-v);
display: flex;
width:100%;
max-width: 500px;
justify-content:space-between;

@media ${device.md} {
    display: none;
}
`
export const ListItem = styled.li`
cursor: pointer;
font-size: 1rem;
font-style: normal;
font-weight: 400;
line-height: 24px;
`


export const NavAction = styled.div`
display: inline-flex;
>* {
    margin-left: 8px;
}

@media ${device.md} {
    display: none;
}

`
export const MobileMenu = styled(FaBars)`
cursor: pointer

@media ${device.md} {
    display: flex;
}
@media(min-width: ${size.md}) {
    display: none;
}

`