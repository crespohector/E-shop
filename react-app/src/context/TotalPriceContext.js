import React, {createContext, useState} from 'react';

export const totalPriceContext = createContext();

const TotalPriceProvider = (props) => {
    const [totalPrice, setTotalPrice] = useState(0);

    return (
        <totalPriceContext.Provider value={{totalPrice, setTotalPrice}}>
            {props.children}
        </totalPriceContext.Provider>
    )
}


export default TotalPriceProvider;
