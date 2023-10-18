import Logo from '../../images/Logo.png';
import { Nav, HeaderWrapper, MenuList, ListItem,NavAction, NavContainer, NavLogo } from './NavbarStyle';
import {Button} from '../../shared/button';

const Navbar = () => {
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
                        <Button color='var(--green-500)' backgroundColor='var(--silver)'>Login</Button>
                        <Button>Sign Up </Button>
                    </NavAction>
                </NavContainer>
            </Nav>
        </HeaderWrapper>
    </>
    )
}

export default Navbar;