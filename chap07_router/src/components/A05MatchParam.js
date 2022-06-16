
import React from 'react';
import {useLocation, useParams} from 'react-router-dom'
const A03ParamComponent = () => {

    const param = useParams();          // path value
    // console.log(param)
    const location = useLocation();

    const data = [
        { "id": 1, "name": "Apples", "category": "Fruit", "price": 1.20, "expiry": 10 },
        { "id": 2, "name": "Bananas", "category": "Fruit", "price": 2.42, "expiry": 7 },
        { "id": 3, "name": "Pears", "category": "Fruit", "price": 2.02, "expiry": 6 },
        { "id": 4, "name": "Tuna", "category": "Fish", "price": 20.45, "expiry": 3 },
        { "id": 5, "name": "Salmon", "category": "Fish", "price": 17.93, "expiry": 2 },
        { "id": 6, "name": "Trout", "category": "Fish", "price": 12.93, "expiry": 4 }
    ];

    const product = data[ Number(param.id) - 1 ];
    
    return (
        <div>
            <h5>Parameter Component</h5>
            <div>This is Parameter Component</div>
            <br />

            <div>
                Id: {param.id}<br/>
                Name: {param.name}<br/>
                Location: {location.pathname}
            </div>
            <br />

            <div>
                Id: {product.id}<br/>
                Name: {product.name}<br/>
                category: {product.category}
            </div>
        </div>
    )
}
export default A03ParamComponent;