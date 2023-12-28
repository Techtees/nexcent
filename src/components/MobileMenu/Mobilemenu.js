import {MobileMenuContainer, MenuItemWrapper, CancelMenu, MenuList, IconBox, ListItem, NavAction} from './MobileMenuStyle'
import {Button} from '../../shared/button';
import PropTypes from 'prop-types';

function MobileMenu(props) {
 const {isOpen, toggle,fontSize, color, bgColor} = props
    return(
        <MobileMenuContainer isOpen={isOpen} >
            <IconBox onClick={toggle}>
                <CancelMenu size={30} />
            </IconBox>
            <MenuItemWrapper>
                <MenuList>
                    <ListItem>Home</ListItem>
                    <ListItem>Service</ListItem>
                    <ListItem>Feature</ListItem>
                    <ListItem>Product</ListItem>
                    <ListItem>Testimonial</ListItem>
                    <ListItem>FAQ</ListItem>
                </MenuList>
                <NavAction>
                    <Button fontSize={fontSize} type='submit' color={color} $background ={bgColor}>Login</Button>
                    <Button fontSize={fontSize}>Sign Up </Button>
                </NavAction>
            </MenuItemWrapper>
        </MobileMenuContainer>
    )
}

MobileMenu.propTypes = {
    bgColor: PropTypes.string,
    color: PropTypes.string,
    fontSize: PropTypes.string,
}

MobileMenu.defaultProps = {
    bgColor: 'var(--white)',
    color: 'var(--green-500)',
    fontSize: '1.5rem'
}


export default MobileMenu;