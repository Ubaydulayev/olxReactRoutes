import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import Container from "../../containers/Container";
import datas from "./../../data";
import CategoryWrapper from "./CategoryWrapper";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeartbeat } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ThemeContext from "../../theme-context";

const Category = (props) => {
  const { category } = useParams();
  const { theme, colors } = useContext(ThemeContext);
  const data = datas[category];

  return (
    <Container>
      <CategoryWrapper className="container py-5" colors={colors}>
        <h1 className="mb-5">Category: {category}</h1>
        <div className="row">
          {data?.map((v) => (
            <div className="col-md-3 mb-3 ">
              <Link
                to={`/${category}/${v.id}`}
                className="shadowBox shadow rounded p-2 product h-100 w-100" 
              >
                <img src={v.img} className="w-100 mb-3 rounded" alt="" />
                <p className="fw-bold">{v.title}</p>
                <span className=" text-secondary location">{v.location}</span>
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
      </CategoryWrapper>
    </Container>
  );
};

export default Category;
