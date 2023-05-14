import React from "react";


/* 1111111111111111111111
state의 기본구조 state는 동적 데이터를 저장할 수 있으므로 값을 바꿀 수 있도록 코드를 작성해야한다.

class App1 extends React.Component{ //App클래스 extends(상속한다는 말)하여 만듦. 상속이란 클레스에 다른 클래스의 기능을 가져오는 것이라고 생각하면 쉽다.
    //현재여기에는 React.Component의 기능이 들어가 있다.
    
    //const let 쓰지 않는 이유..?
    state = {
        count:0

    };
    
    render() //여기서 클래스와 함수 컴포넌트의 차이가 있음 return이 jsx를 반환하는지 render()가 반환하는지가 다름
    {
        return <h1>The Number is: {this.state.count}</h1>
    }
}



export default App;


*/

/*2222222222222222222222222222222222
// state는 동적 데이터를 저장할 수 있으므로 값을 바꿀 수 있도록 코드를 작성해야한다.
// state 내에 3개 중에 하나만 바뀌었다면 그 하나만 값이 바뀐다 즉 전의 값과 비교하여 차이가 있는 것만 업데이트한다는 말임.
class App1 extends React.Component{ 
    state = {
        count:0

    };
    
    add = () => {
         // this.state.count ++ 이렇게 작성하면  do not mutate state directly Use setstate()라고 오류가 뜸 나는 왜 안 뜨지? 결국은 state 안이 변경되면 렌더링이 되는데 값을 직접 변경하는 경우 (ex = 사용는 render함수를 다시 실행하지 않음
            console.log('add') // 여길 보면 화면 전체가 렌더링 되는 것이 아니라 정한 state만 렌더링 되는 것을 알 수 있다. 
            this.setState({count:this.state.count +=1 }) // 키와 벨류 형식의 객체를 전달 +1, +=1은 되는데 대신 ++ 안 될까?
        }

    
    minus = () => {
        console.log('minus') 
        //this.setState({count:-1}) // 위에 직접 지정하면 안 된다고 했는데 돌아는 감... 느끼만 보기. -1이 되고 아래가 또 돌아가 최종 -2가 됨.
        this.setState(nowData => (  //현재 state의 값이 nowData로 들어감.
            {count: nowData.count -1})) //성능 개선한 코드임 nowData 인자를 받아 nowData.count -1객체를 반환하는 함수를 작성하면 setState() 함수에 전달.
    }



    render() 
    {
        return ( // onclick에서의 this는 클래스를 통해 만들어진 객체 즉 컴포넌트임. 안에 add 기능이 있으므로 바인딩한 것임.
        <div>
            <h1>The Number is: {this.state.count}</h1>
            <button onClick={this.add}>Add</button> 
            <button onClick={this.minus}>Minus</button>
        </div>
        )
    }
}


export default App;

*/

//생명주기 추가
class App1 extends React.Component{ 
    
    constructor(props) {
        super(props);
        console.log('hello')
    }

  
    state = {
        count:0

    };
    
    add = () => {
         // this.state.count ++ 이렇게 작성하면  do not mutate state directly Use setstate()라고 오류가 뜸 나는 왜 안 뜨지? 결국은 state 안이 변경되면 렌더링이 되는데 값을 직접 변경하는 경우 (ex = 사용는 render함수를 다시 실행하지 않음
            console.log('add') // 여길 보면 화면 전체가 렌더링 되는 것이 아니라 정한 state만 렌더링 되는 것을 알 수 있다. 
            this.setState({count:this.state.count +=1 }) // 키와 벨류 형식의 객체를 전달 +1, +=1은 되는데 대신 ++ 안 될까?
        }

    
    minus = () => {
        console.log('minus') 
        //this.setState({count:-1}) // 위에 직접 지정하면 안 된다고 했는데 돌아는 감... 느끼만 보기. -1이 되고 아래가 또 돌아가 최종 -2가 됨.
        this.setState(nowData => (  //현재 state의 값이 nowData로 들어감.
            {count: nowData.count -1})) //성능 개선한 코드임 nowData 인자를 받아 nowData.count -1객체를 반환하는 함수를 작성하면 setState() 함수에 전달.
    }


    componentDidMount() { //이름 정확히 써야한다.. 첫 생성될 때
        console.log('component renderd'); // render함수가 실행된 다음 함수 실행 즉  제일 마지막으로 실행되는 것 확인하기 다른 console.log보다 constructor(), render(),  componentDidMount() 이 세가지가 마운트로 분류하는 생명주기 함수임. 실행 순서 잘 기억하기 이제 update 추가해보기
    }
    
    componentDidUpdate() { //첫 생성 후 update될 떄첫 화면(새로고침하여 생명주기 콘솔로그 봐보기)과 버튼 하나 눌러 update 됐을 때 차이 비교해보기 여기는 첫 버튼을 누르면 setstate 함수가 실행되고 render 그리고 didupdate 순으로 실행됨.
        console.log("i'm just update")
    }
    
    componentWillUnmount() { //화면을 떠날 때 실행됨. 보통 컴포넌트에 적용한 이벤트 리스너를 제거할 때 많이 사용함.
        console.log('goodbye cruel world')
    }

    render() 
    {
        console.log('im rendering');
        return ( // onclick에서의 this는 클래스를 통해 만들어진 객체 즉 컴포넌트임. 안에 add 기능이 있으므로 바인딩한 것임.
        <div>
            <h1>The Number is: {this.state.count}</h1>
            <button onClick={this.add}>Add</button> 
            <button onClick={this.minus}>Minus</button>
        </div>
        )
    }
}


export default App1;
