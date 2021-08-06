import styled from "styled-components";

const HeaderWrapper = styled.header`
    transition: 0.5s;
    background-color: ${props => props.colors.backgroundColor};
    color:  ${props => props.colors.color};

   .logo {
        height: 40px;
    }

    .btn {
        color:  ${props => props.colors.color};
    }

    .language_uz {
        color: ${props => props.colors.language_uz};
        font-weight: bold;
    }

    .language_ru {
        font-weight: bold;
        color: ${props => props.colors.language_ru};
    }

    .headButton, .headButton2 {
        background: none;
        border: none;
    }

    .headButton2 {
        background-color: ${props => props.colors.headButton2};
        color: ${props => props.colors.headTitle};
    }


    @media screen and (max-width: 992px) {
        .nav__menu {
            position: fixed;
            top: 70px;
            left: -150%;
            width: 250px;
            flex-direction: column;
            align-items: center;
            height: 100%;
            justify-content: center;
            background-color: ${props => props.colors.backgroundColor};
            transition: .5s;
            color: white !important;
        }
        .left{
            left: 0;
            transition: .5s;
        }
    }
`

export default HeaderWrapper