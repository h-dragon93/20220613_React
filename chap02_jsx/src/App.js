
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
*/

function App () {
  return <div>
  <h3>Hello World 04</h3>
  <div>
    This is App Component
  </div>  
</div>;
}

/*
function App() {
  return (
    <div className="App">
      <h1>Chap02 JSX</h1>

    </div>
  );
}
*/
export default App;
