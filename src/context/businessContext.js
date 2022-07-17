import { useState, createContext } from 'react';

export const businessContext = createContext(null);
export const BusinessContextProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [favoriteBusinessIDs, setFavoriteBusinessIDs] = useState([]);
    const [businesses, setBusinesses] = useState([]);
    const [term, setTerm] = useState('Pizza');
    const [location, setLocation] = useState('Miami');
    const [limit, setLimit] = useState(8);

    return (
        <businessContext.Provider
            value={{
                businesses,
                setBusinesses,
                favoriteBusinessIDs,
                setFavoriteBusinessIDs,
                loading,
                setLoading,
                term,
                setTerm,
                location,
                setLocation,
                limit,
                setLimit,
            }}>
            {children}
        </businessContext.Provider>
    );
};
