import React, { useContext } from 'react'
import Header from "../Header"
import Footer from "../Footer"
import ThemeContext from "../../theme-context";
import ContainerWrapper from './ContainerWrapper';
import Search from '../../pages/Search';

const Container = (props) => {
    const { colors } = useContext(ThemeContext);

    return (
        <ContainerWrapper colors={colors}>
            <Header />
            <Search />
            <div className="content">{props.children}</div>
            <Footer />
        </ContainerWrapper>
    )
}

export default Container
