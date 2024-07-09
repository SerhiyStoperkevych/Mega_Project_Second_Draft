import React, { useState, createContext, useEffect } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await fetch('/items.json');
    
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
    
                const data = await response.json();
                setItems(data);
            } catch (error) {
                console.error('Error fetching items:', error);
            }
        };
    
        fetchItems();
    }, []);
    

    return (
        <AppContext.Provider value={{ items, setItems }}>
            {children}
        </AppContext.Provider>
    );
};
