import SearchWrapper from "./SearchWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react'
import { faLocationArrow, faSearch, faSearchLocation } from "@fortawesome/free-solid-svg-icons";
import colors from "../../data/colors";

const Search = () => {
    return (
        <SearchWrapper>
            <div className="container">
                <div className="d-flex search">
                    <div className="boss w-25">
                        <button className="btn"><FontAwesomeIcon icon={faSearch} /></button>
                        <input type="text" className="form-control border-0" placeholder="754 220 объявлений рядом"></input>
                    </div>
                    <div className="boss w-25">
                        <button className="btn ms-2"><FontAwesomeIcon icon={faLocationArrow} /></button>
                        <input type="text" className="form-control border-0" placeholder="Весь Узбекистан"></input>
                    </div>
                    <div className="boss">
                        <button className="btn">Поиск<FontAwesomeIcon className="ms-2 " icon={faSearch} /></button>
                    </div>
                </div>
            </div>
        </SearchWrapper>
    )
}

export default Search;