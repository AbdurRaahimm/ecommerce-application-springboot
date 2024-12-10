import React, { createContext, useReducer, useEffect } from 'react';

const ProductContext = createContext();


const initialState = {
    products: [],
    companies: [],
    loading: true,
    error: null,
};

const productReducer = (state, action) => {
    switch (action.type) {
        case 'RESET_LOADING':
            return { ...state, loading: true, error: null };
        case 'FETCH_PRODUCTS_SUCCESS':
            return { ...state, products: action.payload, loading: false };
        case 'FETCH_PRODUCTS_ERROR':
            return { ...state, error: action.payload, loading: false };
        case 'FETCH_COMPANIES_SUCCESS':
            return { ...state, companies: action.payload, loading: false };
        case 'FETCH_COMPANIES_ERROR':
            return { ...state, error: action.payload, loading: false };
        case 'ADD_PRODUCT':
            return { ...state, products: [...state.products, action.payload] };
        default:
            return state;
    }
};

export const ProductProvider = ({ children }) => {
    const [state, dispatch] = useReducer(productReducer, initialState);

    useEffect(() => {
        const fetchCompanies = async () => {
            dispatch({ type: 'RESET_LOADING' });
            try {
                const response = await fetch(`${import.meta.env.VITE_BASE_API_URL}/companies`);
                if (!response.ok) throw new Error('Failed to fetch companies');
                const data = await response.json();
                dispatch({ type: 'FETCH_COMPANIES_SUCCESS', payload: data });
            } catch (error) {
                console.error('Error fetching companies:', error);
                dispatch({ type: 'FETCH_COMPANIES_ERROR', payload: error.message });
            }
        };

        fetchCompanies();
    }, []);

    const fetchProducts = async () => {
        dispatch({ type: 'RESET_LOADING' });
        try {
            const response = await fetch(`${import.meta.env.VITE_BASE_API_URL}/products`);
            if (!response.ok) throw new Error('Failed to fetch products');
            const data = await response.json();
            dispatch({ type: 'FETCH_PRODUCTS_SUCCESS', payload: data });
        } catch (error) {
            dispatch({ type: 'FETCH_PRODUCTS_ERROR', payload: error.message });
        }
    };

    const fetchProductsByCompany = async (companyId) => {
        dispatch({ type: 'RESET_LOADING' });
        try {
            const response = await fetch(`${import.meta.env.VITE_BASE_API_URL}/companies/${companyId}/products`);
            if (!response.ok) throw new Error('Failed to fetch company products');
            const data = await response.json();
            dispatch({ type: 'FETCH_PRODUCTS_SUCCESS', payload: data });
        } catch (error) {
            dispatch({ type: 'FETCH_PRODUCTS_ERROR', payload: error.message });
        }
    };

    const addProduct = async (product) => {
        const { companyId } = product;
        try {
            const response = await fetch(`${import.meta.env.VITE_BASE_API_URL}/companies/${companyId}/products`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(product),
            });
            if (!response.ok) throw new Error('Failed to add product');
            const newProduct = await response.json();
            dispatch({ type: 'ADD_PRODUCT', payload: newProduct });
        } catch (error) {
            console.error('Error adding product:', error);
            dispatch({ type: 'FETCH_PRODUCTS_ERROR', payload: error.message });
        }
    };

    return (
        <ProductContext.Provider
            value={{
                state,
                fetchProducts,
                fetchProductsByCompany,
                addProduct,
            }}
        >
            {children}
        </ProductContext.Provider>
    );
};

export const useProducts = () => {
    const context = React.useContext(ProductContext);
    if (!context) {
        throw new Error('useProducts must be used within a ProductProvider');
    }
    return context;
};
