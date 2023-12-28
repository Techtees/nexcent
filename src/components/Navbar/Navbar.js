import Logo from '../../images/Logo.png';
import PropTypes from 'prop-types';
import { Nav, HeaderWrapper, MenuList, ListItem,NavAction, NavContainer, NavLogo, MobileMenu, CancelMenu } from './NavbarStyle';
import {Button} from '../../shared/button';
import { useState } from 'react';


const Navbar = (props) => {
 const {bgColor,toggle,color} = props
    return(
    <>
        <HeaderWrapper>
            <Nav>
                <NavContainer>
                    <NavLogo>
                        <img src={Logo} alt="Nexcent" />
                    </NavLogo>
                    <MenuList>
                        <ListItem>Home</ListItem>
                        <ListItem>Service</ListItem>
                        <ListItem>Feature</ListItem>
                        <ListItem>Product</ListItem>
                        <ListItem>Testimonial</ListItem>
                        <ListItem>FAQ</ListItem>
                    </MenuList>
                    <NavAction>
                        <Button type='submit' color={color} $background ={bgColor}>Login</Button>
                        <Button >Sign Up </Button>
                    </NavAction>
                    <MobileMenu onClick={toggle} />
                </NavContainer>
            </Nav>
        </HeaderWrapper>
    </>
    )
}

Navbar.propTypes = {
    bgColor: PropTypes.string,
    color: PropTypes.string,
}

Navbar.defaultProps = {
    bgColor: 'var(--white)',
    color: 'var(--green-500)',
}

export default Navbar;