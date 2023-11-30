import Logo from '../../images/Logo.png';
import PropTypes from 'prop-types';
import { Nav, HeaderWrapper, MenuList, ListItem,NavAction, NavContainer, NavLogo, MobileMenu } from './NavbarStyle';
import {Button} from '../../shared/button';


const Navbar = (props) => {
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
                        <Button type='submit' color='var(--green-500)' $background ='var(--silver)'>Login</Button>
                        <Button>Sign Up </Button>
                    </NavAction>
                    <MobileMenu />
                </NavContainer>
            </Nav>
        </HeaderWrapper>
    </>
    )
}

Navbar.propTypes = {
    bgColor: PropTypes.string,
}

Navbar.defaultProps = {
    bgColor: 'var(--silver)',
}

export default Navbar;