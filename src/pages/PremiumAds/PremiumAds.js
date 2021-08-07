import PremiumAdsWrapper from "./PremiumAdsWrapper";
import { Link, useParams } from "react-router-dom";
import React, { useContext } from "react";
import ThemeContext from "../../theme-context";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeartbeat } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import data from "../../data/premiumAds";

const PremiumAds = (props) => {
  const { theme, colors } = useContext(ThemeContext);
  const { category } = useParams();

  return (
    <PremiumAdsWrapper colors={colors}>
      <div className="PremiumAds">
        <div className="container">
          <h1 className="text-center p-5">Премиум объявления</h1>
          <div className="row">
            {data?.map((v) => (
              <div className="col-md-6 col-sm-6 col-lg-3 mb-5">
                <Link
                  to={`/${category}/${v.id}`}
                  className="premium shadow rounded p-3 h-100 w-100"
                >
                  <img src={v.img} className="w-100 mb-3 rounded" alt="" />
                  <p className="fw-bold">{v.title}</p>
                  <span className="text-secondary location">{v.location}</span>
                  <br />
                  <div className="priceHeart d-flex justify-content-between">
                    <span>{v.price}</span>
                    <FontAwesomeIcon
                      icon={theme == "light" ? faHeartbeat : faHeart}
                      className="heart me-4"
                    />
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <a
            href="https://www.olx.uz/"
            className="d-flex justify-content-center"
          >
            <button className="btn headButton3">Посмотреть все</button>
          </a>
        </div>
        <div className="footerAds mt-5">
          <div className="row align-items-center">
            <div className="col-md-2"></div>
            <div className="col-md-2">
              <img
                src="https://static.olx.uz/static/olxuz/packed/font/2fbd23c39bff0aee6c0c84aaf60e66347d.svg"
                alt="foto"
                className="me-5"
              />
            </div>
            <div className="col-md-4">
              <h5 className="textFooter">Начните бизнес в интернете с OLX!</h5>
            </div>
            <div className="col-md-2">
              <button className="btn headButton2">Подробнее</button>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
        <div className="olxAds text-center p-5">
          <div className="row">
            <div className="col-md-12">
              <img
                src="https://static.olx.uz/static/olxuz/packed/font/2f245edf8d709c906bd6c4b03d1623d647.svg"
                alt="olx"
                className="mb-5 mt-3"
              />
            </div>
            <div className="olxAdsTitle col-md-12">
              <p>
                Cервис объявлений № 1 в Узбекистане
                <br />
                Частные объявления Узбекистана на OLX (бывший torg.uz) - здесь
                вы найдете то, что искали.
                <br />
                Нажав на кнопку "Подать объявление", вы сможете разместить
                онлайн-объявление на любую необходимую тематику -<br />
                поиск работы, услуги, продажа автомобилей, недвижимости,
                электроники и многое другое.
                <br /> С помощью сервиса OLX в Узбекистане вы можете найти,
                продать или купить практически все, что угодно.
                <br />
                Воспользовавшись функцией поиска, вы без труда найдете уже
                опубликованные объявления интересующей вас тематики.
                <br /> OLX в Узбекистане - ваш надежный и незаменимый помощник.
              </p>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center static">
          <img
            src="https://static.olx.uz/static/olxuz/packed/font/2fc1ef4e9c6a6dc640b6feb727836fabc7.svg"
            alt="static"
            className="m-5"
          />
          <p>
            <span>
              <h3>Разделы на сервисе OLX:</h3>
            </span>
            Детский мир, Недвижимость, Транспорт, Работа, Животные, Дом и сад,
            Электроника, Бизнес и услуги, Мода и стиль, Хобби, отдых и спорт,
            Отдам даром, Обмен
          </p>
        </div>
      </div>
    </PremiumAdsWrapper>
  );
};

export default PremiumAds;
