import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    state={
        contador:0
    }

    sumar=()=>{
        let {contador}=this.state;
        contador += 1;
        this.setState({contador})
    }
    restar=()=>{
        let {contador}= this.state;

        if(contador === 0){
            alert("No hay nada que restar")
        }
        else{
            contador -= 1;
        }
        this.setState({contador})

    }

  render() {
        let {contador}=this.state
    return (
      <div className="App" style={{height:400,display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        <div style={{marginBottom:10}}>
            <button onClick={this.sumar} style={{marginRight:5}}>Sumar</button>
            <button onClick={this.restar}>Restar</button>
        </div>

          <text>Contador: {contador}</text>

      </div>
    );
  }
}

export default App;
