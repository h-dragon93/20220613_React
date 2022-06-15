
// npm i styled-components
// npm i reactstrap
// npm i react-icons

import React from 'react'
import styled from 'styled-components'

// CSS가 적용된 Custom 컴퍼넌트가 된다.
// 태그는 div
const MYBOX = styled.div`
    background-color: lightgray;
    color: white;
    font-size: 24pt;
    font-weight: bold;
    padding: 10px
`;

function A04StyledComponent() {
    return (
        <div>
            <h3>A04 Styled Component</h3>

            <MYBOX>This is App Content</MYBOX>
        </div>
    )
}

export default A04StyledComponent
