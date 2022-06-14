import FuncComp from './components/A01FuncComp'
import A02ClassComp from './components/A02ClassComp'
import A03Fragment from './components/A03Fragment'
import A04JQuery from './components/A04JQuery'
/*
const elem = <h3>Hello World 01</h3>
function App () {
  return elem;
}

function App () {
  return <h3>Hello World 02</h3>;
}


// 항상 1개의 요소만 리턴되어야 한다. 다중 요소는 JSX 문법 에러 발생.
// 따라서 항상 root element로 묶어야 한다
const elem = <div>
  <h3>Hello World 03</h3>
  <div>
    This is App Component
  </div>  
</div>
function App () {
  return elem;
}


function App () {
  return <div>
  <h3>Hello World 04</h3>
  <div>
    This is App Component
  </div>  
</div>;
}

function App () {
  return (
    <div>
      <h3>Hello World 05</h3>
      <div>
        This is App Component
      </div>  
    </div>
  );
}
*/

function MakeDOM() {
  return (
    <div>
      <h5>MakeDOM</h5>
      <div>This is Function Component</div>
    </div>
  )
}


function App() {

  // 값이 변경되도 화면 갱신이 안되는 일반 변수.
  const name = '놀부';
  const age = 30;

  const onAdd = (x, y) => `${x} + ${y} = ${x + y}`;

  return (
    // jsx에서 요소의 속성은 JavaScript의 속성명을 따른다.
    <div className="card-body">
      <h1>Chap02 JSX</h1>

      {/* 바인딩 표현법 - 보간법
        JSX X가 XML이다. 따라서 XML 문법을 따른다. 종료 태그가 반드시 있어야 한다.
      */}
      Name: {name}<br />
      Age: {age}<br />
      onAdd: {onAdd(10, 20)}<br />
      <br />

      MakeDOM: <br />
      {MakeDOM()}<br />
      {/* 태그로 사용하기 위해서는 함수의 첫글자가 대문자로 지정해야 한다. */}
      <MakeDOM></MakeDOM>
      <br />
      <br />
      <FuncComp></FuncComp><br />
      <A02ClassComp></A02ClassComp><br />
      <A03Fragment></A03Fragment><br />
      <A04JQuery></A04JQuery><br />
      <br />
      <img src="./images/tree.jpg" alt="나무 이미지" width="200"/>
    </div>
  );
}

export default App;
