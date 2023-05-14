import React from "react";
import PropTypes from "prop-types";
import './Movie.css'
function Movie ({id, title, year, summary, poster}) { //여기서 흐리게 보이는 id는 아래서 안 쓴다는 말이니깐 삭제해줘도 될 것 같다 즉 매개변수에서 지우니깐 안에서 사용할 필요 없다는 말.

    return(
        <div class="movie">
            <img src={poster} alt={title} title={title}/>
            <div class ="movie__data">
                <h3 class="moive__title" style={{backgroundColor:"red"}}>{title}</h3>
                <h5 class="moive__year">{year}</h5>
                <p class="moive__summary">{summary}</p>
            </div>
        </div>
    )
}

Movie.propTypes = { //api를 통해 넘어오는 데이터를 골라서 타입을 정하기
    id:PropTypes.number.isRequired,
    year:PropTypes.number.isRequired,
    title:PropTypes.string.isRequired,
    summary:PropTypes.string.isRequired,
    poster:PropTypes.string.isRequired //medium_cover_image를 poster에다가 사용할 것임.
};  //import P 대문자 소문자 다름 주의

export default Movie;