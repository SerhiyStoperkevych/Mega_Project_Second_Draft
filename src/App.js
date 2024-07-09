import React from 'react';
import './App.scss';
import Head from './components/head/Head';
import Body from './components/body/Body';
import { AppProvider } from './AppContext';

function App() {
    return (
        <AppProvider>
            <div className="App">
                <Head />
                <Body />
            </div>
        </AppProvider>
    );
}

export default App;
