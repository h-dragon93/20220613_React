
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const A05ChildComponent = () => {

    return (
        <div>
            <h5>Children Component</h5>
            <div>This is Children Component</div>
            <br />
            
            <div>
                <Link to="/A07Child">ONE</Link> | &nbsp; 
                <Link to="/A07Child/company"> TWO</Link> |  &nbsp;
                <Link to="/A07Child/product"> THREE</Link>
            </div>
            
            <hr />

            {/* 자식 Route 요소가 로드 될 공간을 정의 */}
            <Outlet></Outlet>

        </div>
    )
}
export default A05ChildComponent;