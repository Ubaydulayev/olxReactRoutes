// import "./Home.css"
import React from 'react'
import Header from "./../../containers/Header"
import { Link } from "react-router-dom"
import Footer from "../../containers/Footer"
import Container from "../../containers/Container"
import HeaderWrapper from '../../containers/Header/HeaderWrapper'
import HomeWrapper from './HomeWrapper'
import Search from '../Search'

// Работа
// Животные
// Дом и сад
// Электроника
// Бизнес и услуги
// Мода и стиль



const data = [
    {
        title: "Детский мир",
        img: "https://categories.olxcdn.com/assets/categories/olxuz/detskiy-mir-36-2x.png",
        to: "detskiy-mir",
        color: "#ffce32"
    },
    {
        title: "Недвижимость",
        img: "https://categories.olxcdn.com/assets/categories/olxuz/nedvizhimost-1-2x.png",
        to: "nedvizhimost",
        color: "#3777FF"
    },
    {
        title: "Транспорт",
        img: "https://categories.olxcdn.com/assets/categories/olxuz/transport-3-2x.png",
        to: "transport",
        color: "#23e5db"
    },
    {
        title: "Работа",
        img: "https://categories.olxcdn.com/assets/categories/olxuz/rabota-6-2x.png",
        to: "work",
        color: "#ff5636"
    },
    {
        title: "Животные",
        img: "https://categories.olxcdn.com/assets/categories/olxuz/zhivotnye-35-2x.png",
        to: "animals",
        color: "#fff6d9"
    },
    {
        title: "Дом и сад",
        img: "https://categories.olxcdn.com/assets/categories/olxuz/dom-i-sad-899-2x.png",
        to: "home",
        color: "#ceddff"
    },
    {
        title: "Электроника",
        img: "https://categories.olxcdn.com/assets/categories/olxuz/elektronika-37-2x.png",
        to: "electronika",
        color: "#c8f8f6"
    },
    {
        title: "Бизнес и услуги",
        img: "https://categories.olxcdn.com/assets/categories/olxuz/uslugi-7-2x.png",
        to: "bisnes",
        color: "#ffd6c9"
    },
    {
        title: "Мода и стиль",
        img: "https://categories.olxcdn.com/assets/categories/olxuz/moda-i-stil-891-2x.png",
        to: "moda",
        color: "#ffce32"
    },
    {
        title: `Хобби, отдых и спорт`,
        img: "https://categories.olxcdn.com/assets/categories/olxuz/hobbi-otdyh-i-sport-903-2x.png",
        to: "hobi",
        color: "#ceddff"
    },
    {
        title: "Отдам даром",
        img: "https://categories.olxcdn.com/assets/categories/olxuz/otdam-darom-1151-2x.png",
        to: "darom",
        color: "#c8f8f6"
    },
    {
        title: "Обмен",
        img: "https://categories.olxcdn.com/assets/categories/olxuz/obmen-barter-1153-2x.png",
        to: "home",
        color: "#ffd6c9"
    }
]

const Home = () => {
    return (
        <HomeWrapper>
            <Container>
                <Search />
                <div className="home">
                    <div className="container py-5">
                        <h1 className="text-center pb-5">Главные категории</h1>
                        <div className='d-flex flex-wrap' >
                            {data.map(v =>
                            <Link to={v.to} className="category me-4">
                            <div className="circle mx-auto" style={{ backgroundColor: v.color }}>
                                <img src={v.img} className="w-75" alt="" />
                                </div>
                                <p>{v.title}</p>
                            </Link>)}
                        </div>
                    </div> 
                </div>
            </Container>
        </HomeWrapper>
        
    )
}

export default Home
