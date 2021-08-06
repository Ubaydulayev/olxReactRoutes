import SearchWrapper from "./SearchWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import {
  faLocationArrow,
  faSearch,
  faSearchLocation,
} from "@fortawesome/free-solid-svg-icons";
import ThemeContext from "../../theme-context";

const Search = () => {
  const { colors } = useContext(ThemeContext);
  return (
    <SearchWrapper colors={colors}>
      <div className="container ">
        <form action="" className="d-flex align-items-center search">
          <div className="row w-100  justify-content-between">
            <div className="col-md-7 mb-5 mb-md-0">
              <div className="boss ">
                <button className="btn">
                  <FontAwesomeIcon className="icon" icon={faSearch} />
                </button>
                <input
                  type="text"
                  className="form-control border-0 inputBg"
                  placeholder="754 220 объявлений рядом"
                ></input>
              </div>
            </div>
            <div className="col-md-5">
              <div className="row">
                <div className="col-md-8 col-8">
                  <div className="boss ">
                    <button className="btn ms-2">
                      <FontAwesomeIcon
                        className="icon"
                        icon={faLocationArrow}
                      />
                    </button>
                    <input
                      type="text"
                      className="form-control border-0 inputBg"
                      placeholder="Весь Узбекистан"
                    ></input>
                  </div>
                </div>
              <div className="col-md-4 col-4 d-flex justify-content-end">
                <div>
                  <div className="boss ">
                    <button className="btn">
                      Поиск
                      <FontAwesomeIcon className="ms-2 icon " icon={faSearch} />
                    </button>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </SearchWrapper>
  );
};

export default Search;
