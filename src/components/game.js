import React, { Component } from 'react';

class Game extends Component {
    constructor(props){
        super(props);

        this.state = {
            randomNumber: 0,
            userNumber: ''
        }
    }

    componentDidMount(){
        this.generateRandomNumber();
    }

    generateRandomNumber(){
        const randNum = Math.floor(Math.random() * 10) + 1;

        this.setState({
            randomNumber: randNum
        });
    }

    resetGame(){
        this.generateRandomNumber();
    }

    makeGuess(event){
        event.preventDefault();

        console.log('User Number', this.state.userNumber);
    }
    
    render(){

        const btnStyle = {
            margin: '10px 5px'
        };
        
        const { randomNumber, userNumber } = this.state;

        return (
            <div>
                <p>Random Number: {randomNumber}</p>
                <div className="row">
                    <form className="col s6 offset-s3" onSubmit={this.makeGuess.bind(this)}>
                        <div className="row">
                            <div className="input-field">
                                <input className="center-align" onChange={(event) => { this.setState({userNumber: event.target.value}) }} value={userNumber} type="number" placeholder="Enter a number"/>
                            </div>
                        </div>
                        <div className="row center-align">
                            <button style={btnStyle} className="btn green darken-2">Guess</button>
                            <button style={btnStyle} type="button" onClick={this.resetGame.bind(this)} className="btn red darken-2">Reset</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Game;
