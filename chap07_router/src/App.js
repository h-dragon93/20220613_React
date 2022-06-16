// npm i react-router-dom react-loader-spinner

import { Link, Route, Routes } from "react-router-dom";
import A01Props from './components/A01FunctionProps'
import A02State from './components/A02FunctionState'
import A03Currency from './components/A03Currency'
import A04History from './components/A04History'
import A05Param from './components/A05MatchParam'
import A06Args from './components/A06Arguments'
import A07Child from './components/A07ChildComponent'

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
      <Link to="/A05Param/1/data/NolBu">A05Param 1</Link> |  {' '} 
      <Link to="/A05Param/2/data/HungBu">A05Param 2</Link> |  {' '} 
      <Link to="/A06Args?id=3&name=HangDan&address=Seoul#TOP">A06Args</Link> |  {' '} 
      <Link to="/A07Child">A07Child</Link> |  {' '} 
      <hr />

      <Routes>
        {/* const {name, age, arr, user, onPlus, isChecked, num} = props; */}
        <Route path="/A01Props"         element={<A01Props name="NolBu" age={30} arr={ary} user={user} onPlus={onPlus} />} />
        <Route path="/A02State"         element={<A02State />} />
        <Route path="/A03Currency"      element={<A03Currency />} />
        <Route path="/A04History"       element={<A04History />} />
        <Route path="/A05Param/:id/data/:name"       element={<A05Param />} />
        {/* 주소줄에 ?id=3&name=ABC&address=Seoul#TOP */}
        <Route path="/A06Args"          element={<A06Args />} />
        <Route path="/A07Child"          element={<A07Child />}>
          {/* 이름이 동일하면 기본 값으로 표시된다 */}
          <Route path="/A07Child"       element={<div><h1>About</h1></div>} />
          <Route path="/A07Child/company"       element={<div><h1>Company</h1></div>} />
          <Route path="/A07Child/product"       element={<div><h1>Product</h1></div>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
