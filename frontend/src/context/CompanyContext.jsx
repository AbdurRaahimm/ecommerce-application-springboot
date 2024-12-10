import { createContext, useContext, useReducer } from 'react';
import axios from 'axios';

const CompanyContext = createContext();

const initialState = {
    companies: [],
    loading: false,
    error: null
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_START':
            return { ...state, loading: true, error: null };
        case 'FETCH_SUCCESS':
            return { ...state, loading: false, companies: action.payload };
        case 'FETCH_ERROR':
            return { ...state, loading: false, error: action.payload };
        case 'ADD_COMPANY':
            return { ...state, companies: [...state.companies, action.payload] };
        case 'UPDATE_COMPANY':
            return {
                ...state,
                companies: state.companies.map(company =>
                    company.id === action.payload.id ? action.payload : company
                )
            };
        case 'DELETE_COMPANY':
            return {
                ...state,
                companies: state.companies.filter(company => company.id !== action.payload)
            };
        default:
            return state;
    }
};

export const CompanyProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const fetchCompanies = async () => {
        dispatch({ type: 'FETCH_START' });
        try {
            const response = await axios.get(`${import.meta.env.VITE_BASE_API_URL}/companies`);
            dispatch({ type: 'FETCH_SUCCESS', payload: response.data });
        } catch (error) {
            dispatch({ type: 'FETCH_ERROR', payload: error.message });
        }
    };

    const addCompany = async (companyData) => {
        try {
            const response = await axios.post(`${import.meta.env.VITE_BASE_API_URL}/companies`, companyData);
            dispatch({ type: 'ADD_COMPANY', payload: response.data });
        } catch (error) {
            dispatch({ type: 'FETCH_ERROR', payload: error.message });
        }
    };

    const updateCompany = async (id, companyData) => {
        try {
            const response = await axios.put(`http://localhost:8080/api/companies/${id}`, companyData);
                dispatch({ type: 'UPDATE_COMPANY', payload: response.data });
        } catch (error) {
            dispatch({ type: 'FETCH_ERROR', payload: error.message });
        }
    };

    const deleteCompany = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/api/companies/${id}`);
            dispatch({ type: 'DELETE_COMPANY', payload: id });
        } catch (error) {
            dispatch({ type: 'FETCH_ERROR', payload: error.message });
        }
    };

    

    return (
        <CompanyContext.Provider value={{
            companies: state.companies,
            loading: state.loading,
            error: state.error,
            fetchCompanies,
            addCompany,
            updateCompany,
            deleteCompany
        }}>
            {children}
        </CompanyContext.Provider>
    );
};

export const useCompany = () => {
    const context = useContext(CompanyContext);
    if (!context) {
        throw new Error('useCompany must be used within a CompanyProvider');
    }
    return context;
};


