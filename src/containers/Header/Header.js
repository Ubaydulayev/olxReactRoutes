import "./Header.css";
import React, { useContext } from 'react'
import ThemeContext from "../../theme-context";
import { Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";

const Header = () => {
    const { theme, setTheme } = useContext(ThemeContext);
    console.log(theme, setTheme);

    const toggle = () => {
        setTheme(theme == "light" ? "dark" : "light");
    }

    return (
        <header className={`shadow ${theme}`}>
            <div className="container py-3 d-flex align-items-center justify-content-between">
                <img src="logo192.png" className="logo me-3" alt="" />
                <a href="#" id="headerLogo" class="olx-website-rebranded">
					<span class="olx-website-rebranded__o"></span>
					<span class="olx-website-rebranded__l"></span>
					<span class="olx-website-rebranded__x"></span>		
                </a>
                <Button color={theme} onClick={toggle}><FontAwesomeIcon icon={theme == "light" ? faMoon : faSun} /></Button>
            </div>
        </header >
    )
}

export default Header
