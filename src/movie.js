import React from "react";
import PropTypes from "prop-types";

function Movie ({id, title, year, summary, poster}) {

    return <h1>{title}</h1>
}

Movie.propTypes = { //api를 통해 넘어오는 데이터를 골라서 타입을 정하기
    id:PropTypes.number.isRequired,
    year:PropTypes.number.isRequired,
    title:PropTypes.string.isRequired,
    summary:PropTypes.string.isRequired,
    poster:PropTypes.string.isRequired //medium_cover_image를 poster에다가 사용할 것임.
};  //import P 대문자 소문자 다름 주의

export default Movie;