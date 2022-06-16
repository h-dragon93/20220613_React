
// npm i styled-components
// npm i reactstrap
// npm i react-icons

import React from 'react'
// import styled from 'styled-components'
import {MYBOX, MYBTN} from './css/A04Styled'
import {Alert, Button, ButtonGroup} from 'reactstrap'
import {MdSettingsRemote} from 'react-icons/md'
// CSS가 적용된 Custom 컴퍼넌트가 된다.
// 태그는 div
/*
const MYBOX = styled.div`
    background-color: ${props => props.bgColor || 'lightgray'};
    color: white;
    font-size: 24pt;
    font-weight: bold;
    padding: 10px
`;

const MYBTN = styled.button`
    background-color: ${props => props.bgColor || 'lightgray'};
    color: white;
    font-weight: bold;
    border: 1px solid black;
    padding: 10px;

    &:hover {
        background-color: white;
        color: orange;
    }

    & + & {
        margin: 10px;
    }
`
*/

function A04StyledComponent() {
    return (
        <div>
            <h3>A04 Styled Component</h3>

            <MYBOX>This is App Content</MYBOX>
            <MYBOX bgColor="orange">This is App Content</MYBOX>
            <MYBTN>CLICK</MYBTN>
            <MYBTN>CLICK</MYBTN>
            <br/>

            <Alert color="primary">Hey! Pay attention.</Alert>
            <ButtonGroup>
                <Button color="primary">
                    Left
                </Button>
                <Button>
                    Middle
                </Button>
                <Button>
                    Right
                </Button>
            </ButtonGroup>
            <br />
            <br />

            <MdSettingsRemote style={{fontSize: '30pt', color: 'orange'}} />
        </div>
    )
}

export default A04StyledComponent
