import React from "react";
import axios from "axios";

import Movie from "./movie";
import './App.css'


/*

class App extends React.Component {

    state ={
        isLoading: true,
        movies: [],
        };

    
    componentDidMount() {
        
        setTimeout(() =>{
            this.setState({isLoading:false});
        }, 6000) //6초후 Loading readyㅀ 바뀌는 것  확인 렌더 후 didmount 실행이니깐
        
       //json 파일 가져오기
       axios.get('https://yts-proxy.now.sh/list_movies.json') // 화면에 뭔가 실행은 안 되지만 네트워크가서 새로고침하면 axios가 잘 작동되고 있는 것 확인
        }

    render() {
        const {isLoading} = this.state  // state가 {}구조니깐 {}쓰는 것 같다. https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
        return <div> {isLoading ? 'Loading...' : 'We are ready'}</div>

        }
}

export default App
*/


class App extends React.Component {

    state ={
        isLoading: true,
        movies: [],
        };

        getmovies =  async () => {
            /*
            const movies = await axios.get('https://yts-proxy.now.sh/list_movies.json') //axios_get 반환결과 movies에 담기 axios.get은 속도가 느리다!
            console.log(movies.data.data.movies) //data 두개인 것 주의 movies의 데이터 중에 data 중의 movies
            이것보다는 객체 분해할당을 하는 것이 좋다. 아래는 객체분해 할당방법*/
            const {data:{
                data: {movies}
            }} = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating')
            console.log(movies)

            //영화 데이터 저장하기
            this.setState({movies: movies, isLoading:false})     // this.setState({state내 변수설정한 것: 구조분해할당으로 얻은 데이터가 있는 변수}) isloading도 변경 새로고침해서 보기 데이터 받아오는 데 조금의 시간이 있다!    
            //this.setState({movies}) 이것도 가능함 setState에서 키와 벨류의 변수명이 같으면 축약할 수 있다.
        }
        
        // async는 getmovies라는 함수는 시간이 필요하고 await는  axios.get의 실행을 기다려 달라고 말하는 것임.
        // async는 getmovies()함수가 비동기이니 기다리라는 뜻이며 await는 함수 내부의 axios.get을 실행하려면 시간이 필요하다라는 뜻 둘은 짝궁임. 동시에 사용해야함
        componentDidMount() {
            
            this.getmovies();
            }

        render() {
            const {isLoading,movies} = this.state  // state가 {}구조니깐 {}쓰는 것 같다. https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
            return (
            <section class='container'> 
                {isLoading ? (
                                <div class="loader">
                                    <span class="loader_text">'Loading...'</span>
                                </div>
                            ) : (
                                <div class='movie'>
                                    {movies.map(movie =>(
                                    //컴포넌트 실행할 때 데이터 전달은 ,없이 띄어쓰기로 한다..
                                    <Movie
                                    key={movie.id} //컴포넌트를 return할 때 key를 입력하지만 key는 props로 받는 데이터는 아니다 movie 컴포넌트 설정 가서 props로 key를 넣으면 오류가 뜬다.
                                    id={movie.id}
                                    year={movie.year}
                                    title={movie.title}
                                    summary={movie.summary}
                                    poster={movie.medium_cover_image}
                                    />
                                    ))}
                                </div>
                )}
            </section> //'we are ready를 변경한다'
            )
            }
    }

export default App

