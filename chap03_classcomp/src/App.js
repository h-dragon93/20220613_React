import A01ClassProps from './components/A01ClassProps'
import A02ClassState from './components/A02ClassState'
import A03ClassEvent from './components/A03ClassEvent'
import A04CreateDOM from './components/A04CreateDOM'
import A05LifeCycle from './components/A05LifeCycle'
import A06PureComponent from './components/A06PureComponent'
import A07ShallowEqual from './components/A07ShallowEqual'
import A08HigherOrderComp from './components/A08HigherOrderComp'

function App() {
  // 변경되더라도 화면 갱신은 이루어지지 않은 일반 변수
  const arr = [10, 20];
  const user = {name: 'HungBu', age: 10};
  const onAdd = (x, y) => `${x} + ${y} = ${x + y}`;

  return (
    <div className="card-body">
      <h1>Chap03 Class Component</h1>

      <A08HigherOrderComp name="NolBu"></A08HigherOrderComp><br />
      <A07ShallowEqual></A07ShallowEqual><br />
      <A06PureComponent></A06PureComponent><br />
      <A05LifeCycle isChecked={false}></A05LifeCycle><br />
      <A04CreateDOM></A04CreateDOM><br />
      <A03ClassEvent></A03ClassEvent><br />
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
