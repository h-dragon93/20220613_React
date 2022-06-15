import A01FuncProps from './components/A01FuncProps'
import A02FuncState from './components/A02FuncState'

function App() {
  // 변경되더라도 화면 갱신은 이루어지지 않은 일반 변수
  const arr = [10, 20];
  const user = {name: 'HungBu', age: 10};
  const onAdd = (x, y) => `${x} + ${y} = ${x + y}`;

  return (
    <div className="card-body">
      <h1>Chap04 Function Component</h1>

      <A02FuncState></A02FuncState><br />
      <A01FuncProps name="NolBu" age={30} ary={arr} user={user} onAdd={onAdd} isChecked>
        This is App Content
      </A01FuncProps>
    </div>
  );
}

export default App;
