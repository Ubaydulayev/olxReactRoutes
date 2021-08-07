import React, { useContext } from 'react'
import { Link } from "react-router-dom"
import FooterWrapper from "./FooterWrapper";
import ThemeContext from "../../theme-context";

const Footer = () => {
    const { colors } = useContext(ThemeContext);
    const data = [
        {
            title: "Мобильные приложения"
        },
        {
            title: "Помощь"
        },
        {
            title: "Платные услуги"
        },
        {
            title: "Бизнес на OLX"
        },
        {
            title: "Реклама на сайте"
        },
        {
            title: "Условия использования"
        },
        {
            title: "Политика конфиденциальности"
        }
    ]

    const dataTwo = [
        {
            title: "Как продавать и покупать?"
        },
        {
            title: "Правила безопасности"
        },
        {
            title: "Карта сайта"
        },
        {
            title: "Карта регионов"
        },
        {
            title: "Карьера в OLX"
        },
        {
            title: "Обратная связь"
        },
        {
            title: "Партнёры",
        }
    ]

    return (
        <FooterWrapper colors={colors}>
            <hr className="p-0 m-0 hr" />
            <div className="container  py-5">
                <div className="row">
                    <div className="col-md-4">
                        {data.map (v => 
                            <div>
                                <Link to={"/mobileapps"} className="link">{v.title}</Link>
                            </div>
                        )}
                    </div>
                    <div className="col-md-4">
                        {dataTwo.map (v => 
                            <div>
                                <Link to={"/mobileapps"} className="link">{v.title}</Link>
                            </div>
                        )}
                    </div>
                    <div className="col-md-4">
                        <div>
                            <a className="me-3" href="https://play.google.com/store/apps/details?id=com.torg.torg&hl=ru&referrer=utm_source%3Dolx.uz%26utm_medium%3Dcpc%26utm_campaign%3Dandroid-app-footer">
                                <img src="https://static.olx.uz/static/olxuz/packed/font/2fc9f37e6707acfc0e1255cec57c49a986.svg" alt="" />
                            </a>
                            <a href="https://itunes.apple.com/uz/app/torg.uz/id665094472?mt=8&ign-mpt=uo%3D4">
                                <img src="https://static.olx.uz/static/olxuz/packed/font/2fccd2faa9395d5faed1011516c64dc929.svg" alt="" />
                            </a>
                            <p className="text-white-50 pt-2 darom">Бесплатное приложение для твоего телефона</p>
                        </div>
                    </div>
                </div>
            </div>
        </FooterWrapper>
    )
}

export default Footer
