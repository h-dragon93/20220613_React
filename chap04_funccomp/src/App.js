import A01FuncProps from './components/A01FuncProps'
import A02FuncState from './components/A02FuncState'
import A03FuncEvent from './components/A03FuncEvent'
import A04CreateDOM from './components/A04CreateDOM'
import A05Hook from './components/A05Hook'
import A06Hook from './components/A06Hook'
import A07HigherOrder from './components/A07HigherOrder'

function App() {
  // 변경되더라도 화면 갱신은 이루어지지 않은 일반 변수
  const arr = [10, 20];
  const user = {name: 'HungBu', age: 10};
  const onAdd = (x, y) => `${x} + ${y} = ${x + y}`;

  return (
    <div className="card-body">
      <h1>Chap04 Function Component</h1>

      <A07HigherOrder name="NolBu"></A07HigherOrder><br />
      <A06Hook></A06Hook><br />
      <A05Hook></A05Hook><br />
      <A04CreateDOM></A04CreateDOM><br />
      <A03FuncEvent></A03FuncEvent><br />
      <A02FuncState></A02FuncState><br />
      <A01FuncProps name="NolBu" age={30} ary={arr} user={user} onAdd={onAdd} isChecked>
        This is App Content
      </A01FuncProps>
    </div>
  );
}

export default App;
