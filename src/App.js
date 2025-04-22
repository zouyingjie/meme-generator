import React from 'react';
import MemeGenerator from './components/MemeGenerator';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <h1>表情包生成器 Pro</h1>
            <MemeGenerator />
        </div>
    );
};

export default App;