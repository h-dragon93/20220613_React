
import React from 'react';
import { useNavigate } from 'react-router-dom';

const A02ProductComponent = () => {

    const navigate = useNavigate();

    const back = () => navigate(-1);
    const forward = () => navigate(1);
    const home = () => navigate('/A01Props');
    const goURL = url => navigate(url);

    return (
        <div>
            <h5>Product Component</h5>
            <div>This is Product Component</div>
            <br />

            <div>
                <button     onClick={back}>BACK</button>
                <button     onClick={forward}>FORWARD</button>
                <button     onClick={home}>HOME</button>
                <button     onClick={() => goURL('/A02State')}>PARAMETER</button>
            </div>
        </div>
    )
}
export default A02ProductComponent;