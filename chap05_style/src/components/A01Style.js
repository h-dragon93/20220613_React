
import React from 'react'

// CSS import
import './css/A01Style.css';
import './css/A01Style.scss';       // npm i node-sass

function A01Style() {
    
    const color = 'title color';
    const style = {
        backgroundColor: 'aqua',
        color: 'black',
        fontSize: '24pt',
        fontWeight: 'bold',
        padding: '20px',
    }

    return (
        <div>
            <h3 className="title color">A01 Style</h3>
            <h3 className={color}>A01 Style</h3>
            <h3 className="scssTitle">A01 Style</h3>
            <h3 style={style}>A01 Style</h3>
            {/* 첫번째 {}는 바인딩 식, 두번째 {}가 객체 값 */}
            <h3 style={{backgroundColor: 'aqua',
                        color: 'black',
                        fontSize: '24pt',
                        fontWeight: 'bold',
                        padding: '20px',}}>A01 Style</h3>
        </div>
    )
}

export default A01Style
