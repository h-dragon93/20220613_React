// A04Styled.js
import styled from 'styled-components'

export const MYBOX = styled.div`
    background-color: ${props => props.bgColor || 'lightgray'};
    color: white;
    font-size: 24pt;
    font-weight: bold;
    padding: 10px
`;

export const MYBTN = styled.button`
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

