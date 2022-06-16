// npm i react-router-dom react-loader-spinner

import { Link, Route, Routes } from "react-router-dom";
import A01Props from './components/A01FunctionProps'
import A02State from './components/A02FunctionState'
import A03Currency from './components/A03Currency'
import A04History from './components/A04History'

function App() {
  const user = {name: 'HungBu', age: 20};
  const ary = ['a', 'b', 'c'];
  const onPlus = (x, y) => {
    return `${x} + ${y} = ${x + y}`;
  }

  return (
    <div className="card-body">
      <h1>Chap07 Router</h1>

      <Link to="/A01Props">A01Props</Link> |   {/* a href */}
      <Link to="/A02State">A02State</Link> | {' '}
      <Link to="/A03Currency">A03Currency</Link> |  {' '} 
      <Link to="/A04History">A04History</Link> |  {' '} 

      <hr />

      <Routes>
        {/* const {name, age, arr, user, onPlus, isChecked, num} = props; */}
        <Route path="/A01Props"         element={<A01Props name="NolBu" age={30} arr={ary} user={user} onPlus={onPlus} />} />
        <Route path="/A02State"         element={<A02State />} />
        <Route path="/A03Currency"      element={<A03Currency />} />
        <Route path="/A04History"       element={<A04History />} />
      </Routes>
    </div>
  );
}

export default App;
