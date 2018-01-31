import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import Game from './game';

const App = () => (
    <div className="container">
        <h1 className="center-align">Guessing Game</h1>
        <Game/>
    </div>
);

export default App;
