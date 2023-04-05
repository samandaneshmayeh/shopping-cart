import React, { useState, useEffect, createContext } from 'react';

// API
import { getProducts } from '../services/api';

const ProductsContext = createContext();

const ProductContextProvider = ({children}) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setProducts(await getProducts());
        }

        fetchAPI();

    }, []);


    return (
        <div>
            <ProductsContext.Provider value={products}>
                {children}
            </ProductsContext.Provider>
        </div>
    );
};

export default ProductContextProvider;