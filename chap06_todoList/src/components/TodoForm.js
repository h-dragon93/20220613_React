
import React, { useCallback, useRef, useState } from 'react'

function TodoForm(props) {

    const {addTodo} = props;

    const [text, setText] = useState('');
    const inputRef = useRef();

    const changeText = (evt) => setText(evt.target.value);

    const sendData = useCallback( evt => {
        evt.preventDefault();

        if (text.trim().length !== 0) {
            addTodo(text);
            setText('');
            inputRef.current.focus();
        }
    }, [addTodo, text]);

    return (
        <form>
            <div className="input-group">
                <input type="text" className="form-control"     ref={inputRef}
                    value={text} onChange={changeText} />
                <div className="input-group-append">
                    <button type="submit" className="btn btn-primary mr-1"
                        onClick={sendData}>Submit</button>
                </div>
            </div>  
        </form>
    )

}
export default TodoForm