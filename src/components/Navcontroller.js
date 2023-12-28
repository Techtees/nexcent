import Navbar from "./Navbar/Navbar";
import MobileMenu from "./MobileMenu/Mobilemenu";
import { useState } from "react";

function NavController() {
    const [isOpen, setIsOpen] = useState(false)

    const handleToggle = () => {
        setIsOpen(!isOpen)
    }
    return(
        <>
            <MobileMenu isOpen = {isOpen} toggle = {handleToggle}/>
            <Navbar toggle = {handleToggle}/>
        </>

    )
}

export default NavController;