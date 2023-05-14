import React from 'react'
import Potato from './Potato' //./ App, Potato는 같은 곳에 위치하니깐 이렇게 표현함

// 같은 파일에 작성해서 사용해도 됨.
function Food(props) { // 데이터 명을 {fav, image} 이렇게 쓸 수도 있음
  console.log(props);
  return <h1>l like {props.fav} {props.image}</h1> //여기도 {fav} 이런 식으로 바꿔준다.
}

const FoodLIke = [
{
  fav: 'Kimchi',
  image:'이미지 주소 입력'
},
{
  fav: 'Ramen',
  
  image:'이미지 주소 입력'
}];

function App() {
  return (
    <div>
      {FoodLIke.map(data => (<Food fav ={data.fav} image = {data.image}/>))}
    </div>
  )
      

}

export default App;
