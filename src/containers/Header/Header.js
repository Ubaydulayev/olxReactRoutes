import React, { useContext, useState } from 'react'
import ThemeContext from "../../theme-context";
import { Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faMoon, faSun, faUser } from "@fortawesome/free-regular-svg-icons";
import HeaderWrapper from './HeaderWrapper';
import { faBars, faHeartbeat, faHeartBroken, faUserAlt } from '@fortawesome/free-solid-svg-icons';



const Header = () => {
    const { theme, setTheme, colors } = useContext(ThemeContext);
    const [bars, setbars] = useState(false)
    const toggle = () => {
    setbars(!bars)
    }
    const toggles = () => {
        setTheme(theme == "light" ? "dark" : "light");
    }

    return (
        <HeaderWrapper className={`shadow`} colors={colors}>
            <div className="container py-4 d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                    <img src="logo192.png" className="logo me-3" alt="" />
                    <p className="m-0 ms-2 fw-bold">Olx.uz</p>
                </div>
                <div className={`d-flex align-items-center nav__menu ${bars && "left"}`}>
                    <ul className="language">
                        <li className="d-inline-block me-2 language_uz">O`z</li>
                        <li className="d-inline-block me-2">|</li>
                        <li className="d-inline-block me-4 language_ru">Ru</li>
                    </ul>
                    <FontAwesomeIcon icon={theme == "light" ?  faHeartbeat : faHeart} className="heart me-4" />
                    <Button color={theme} className="me-4 headButton"><FontAwesomeIcon className="me-3" icon={theme == "light" ? faUserAlt : faUser} />Мой Профиль</Button>
                    <Button color={theme} className="me-4 headButton2">Падать объявление</Button>
                    
                    <Button color={theme} onClick={toggles}><FontAwesomeIcon icon={theme == "light" ? faMoon : faSun} /></Button>
                </div>
                <button className="btn d-block d-lg-none" onClick={toggle}><FontAwesomeIcon icon={faBars}/></button>
            </div>
        </HeaderWrapper >
    )
}

export default Header
