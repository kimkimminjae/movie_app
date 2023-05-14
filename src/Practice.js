import React from 'react'
import Potato from './Potato' //./ App, Potato는 같은 곳에 위치하니깐 이렇게 표현함
import PropTypes from 'prop-types'

// 같은 파일에 작성해서 사용해도 됨.
function Food({name1, picture1, rating }) { // 데이터 명을 props로 적고 아래에서 props.name1 props.picture1 이렇게 쓸 수도 있음
  return (
          <div>
            <h1>l like {name1}</h1>
            <h4>{rating}/5.0</h4>
            <img src = {picture1} alt ={name1 +'의사진'}/>
          </div>
          );
  }

// Food.propTypes 객체 입력 .위에서 임포트한 포롭타입스
Food.propTypes = {
  name1: PropTypes.string.isRequired, //name이라고 하고 출력값 보면rop `name` is marked as required in `Food`, but its value is `undefined`. 필수지만 정의 되지 않음 이라고 함 변수명 틀렸다는 의미임.
  picture1: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired, //string이라고 바꿔보기 id prop `rating` of type `number` supplied to `Food`, expected `string`. rating의 타입은 number인데 string이 기대된다라는 뜻! 이렇게 내가 전달하는 데이터의 특성을 지정학고 맞는지 확인할 수 있다.
  //또한 평점이 등록되지 않을 수도 있으므로 isRequired를 빼줘도 된다ㅏ.
}

const foodLIke = [
{
  id: 0, // 컴포넌트 안에서 쓰이는 리스트는 id를 적어줘야 한다.
  name: 'Kimchi',
  image: 'https://m.unlimga.com/web/product/big/202204/02b8b48da448ad92b523fc814026dcc2.jpg',
  rating: 3.5
},
{
  id: 1,
  name: 'Ramen',
  image:'https://img-cf.kurly.com/shop/data/goodsview/20211125/gv00000248650_1.jpg',
  rating: 4.2
}];

function renderFood(dish) {
  return <Food key={dish.id} name1={dish.name} picture1={dish.image} rating = {dish.rating}  />  // <컴포넌트명/>으로 컴포넌트 생성하고 안에 속성에 함수에 설정한 매개변수를 잘 일치시켜준다. //배열 항목에게는 id를 지정해줘야 한다 그래야 다른 컴포넌트로 인식하고 나중에 각각을 다루기 쉽다.
}

function Prac() {
  console.log(foodLIke.map(renderFood));
  return (
    <div>
      {foodLIke.map(renderFood)} 
    </div>
  )
      

}

export default Prac; //여기에는 최종으로 사용할 컴포넌트를 적는다.


//function 형태이지만 일반함수인지 컴포넌트인지 잘 구별하기