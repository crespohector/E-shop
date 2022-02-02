import React, {createContext, useState, useEffect} from 'react';

export const featureItemContext = createContext();

const Featureitemprovider = (props) => {
    const [featureItem, setFeatureItem] = useState('');


    return (
        <featureItemContext.Provider value={featureItem}>
            {props.children}
        </featureItemContext.Provider>
    )
}


export default Featureitemprovider;
