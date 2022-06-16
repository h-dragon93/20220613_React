// npm i react-router-dom react-loader-spinner
import { lazy, Suspense } from 'react'
import { Link, NavLink, Route, Routes } from "react-router-dom";
import {Audio, Bars} from 'react-loader-spinner'

import A01Props from './components/A01FunctionProps'
import A02State from './components/A02FunctionState'
import A03Currency from './components/A03Currency'
import A04History from './components/A04History'
import A05Param from './components/A05MatchParam'
// import A06Args from './components/A06Arguments'
// import A07Child from './components/A07ChildComponent'
// import A08Redirect from './components/A08Redirect'
// import NotFound from './components/NotFoundComponent'

// 동적 Import
const A06Args = lazy(() => import('./components/A06Arguments'));
const A07Child = lazy(() => import('./components/A07ChildComponent'))
const A08Redirect = lazy(() => import('./components/A08Redirect'))
const NotFound = lazy(() => import('./components/NotFoundComponent'))

function App() {
  const user = {name: 'HungBu', age: 20};
  const ary = ['a', 'b', 'c'];
  const onPlus = (x, y) => {
    return `${x} + ${y} = ${x + y}`;
  }

  const style = {
    color: 'orange',
    fontWeight: 'bold'
  }

  return (
    <div className="card-body">
      <h1>Chap07 Router</h1>

      {/* Active link에 Style 적용 */}
      <NavLink to="/A01Props"   style={ ({isActive}) => (isActive ? style : undefined) }>A01Props</NavLink> |   {/* a href */}
      <NavLink to="/A02State"   style={ ({isActive}) => (isActive ? style : undefined) }>A02State</NavLink> | {' '}
      <Link to="/A03Currency">A03Currency</Link> |  {' '} 
      <Link to="/A04History">A04History</Link> |  {' '} 
      <Link to="/A05Param/1/data/NolBu">A05Param 1</Link> |  {' '} 
      <Link to="/A05Param/2/data/HungBu">A05Param 2</Link> |  {' '} 
      <Link to="/A06Args?id=3&name=HangDan&address=Seoul#TOP">A06Args</Link> |  {' '} 
      <Link to="/A07Child">A07Child</Link> |  {' '} 
      <Link to="/A08Redirect">A08Redirect</Link> |  {' '} 
      <Link to="/ABC">ABC</Link> |  {' '} 
      <hr />

      <Routes>
        {/* const {name, age, arr, user, onPlus, isChecked, num} = props; */}
        <Route path="/A01Props"         element={<A01Props name="NolBu" age={30} arr={ary} user={user} onPlus={onPlus} />} />
        <Route path="/A02State"         element={<A02State />} />
        <Route path="/A03Currency"      element={<A03Currency />} />
        <Route path="/A04History"       element={<A04History />} />
        <Route path="/A05Param/:id/data/:name"       element={<A05Param />} />
        {/* 주소줄에 ?id=3&name=ABC&address=Seoul#TOP */}
        <Route path="/A06Args"          element={<Suspense fallback={<div>Loading...</div>}><A06Args /></Suspense>} />
        <Route path="/A07Child"          element={<Suspense fallback={<Audio/>}><A07Child /></Suspense>}>
          {/* 이름이 동일하면 기본 값으로 표시된다 */}
          <Route path="/A07Child"       element={<div><h1>About</h1></div>} />
          <Route path="/A07Child/company"       element={<div><h1>Company</h1></div>} />
          <Route path="/A07Child/product"       element={<div><h1>Product</h1></div>} />
        </Route>

        <Route path="/A08Redirect"          element={<Suspense fallback={<Bars />}><A08Redirect /></Suspense>} />

        {/* path가 * 이면 모든 요청에 매칭된다. 따라서 이 * 패스가 다른 패스 지정보다 위에 기술하면 안됨(항상 맨 마지막에 기술)  */}
        <Route path="*"          element={<Suspense fallback={<Bars />}><NotFound /></Suspense>} />
      </Routes>
    </div>
  );
}

export default App;
