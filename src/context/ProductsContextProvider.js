import React, { createContext, useEffect, useState } from 'react';

// API
import { getProducts } from '../services/api';

const ProductsContext = createContext(props);

const ProductsContextProvider = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setProducts(await getProducts());
        }

        fetchAPI();
    }, [])

    return (
        <div>
            <ProductsContext.Provider value={products}>
                {props.children}
            </ProductsContext.Provider>
        </div>
    );
};

export default ProductsContextProvider;