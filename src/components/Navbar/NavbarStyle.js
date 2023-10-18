import styled from 'styled-components'

export const HeaderWrapper = styled.div`
background: var(--silver);
padding: 1.87rem;
`
export const Nav = styled.nav`
width: 90%;
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

`
export const ListItem = styled.li`
margin-right: 50px;
cursor: pointer;

&:last-child{
    margin-right: 0px
}
`


export const NavAction = styled.div`

`