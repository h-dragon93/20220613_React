import A01ClassProps from './components/A01ClassProps'
import A02ClassState from './components/A02ClassState'

function App() {
  // 변경되더라도 화면 갱신은 이루어지지 않은 일반 변수
  const arr = [10, 20];
  const user = {name: 'HungBu', age: 10};
  const onAdd = (x, y) => `${x} + ${y} = ${x + y}`;

  return (
    <div className="card-body">
      <h1>Chap03 Class Component</h1>

      <A02ClassState></A02ClassState><br />
      
      <A01ClassProps name="Nolbu" age={30} ary={arr} user={user} onAdd={onAdd} isChecked>
        This is App Content 01
      </A01ClassProps>
      <A01ClassProps name="Nolbu" age={30} ary={arr} user={user} onAdd={onAdd} isChecked>
        This is App Content 02
      </A01ClassProps>
    </div>
  );
}

export default App;
