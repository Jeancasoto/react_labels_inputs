import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>PETS</h1>
        {/*}Aqui es donde ponemos la imagen que aparecera al entrar{*/}
          <img src= 'http://www.stickpng.com/assets/thumbs/5a97dae99fc609199d0fefda.png'/>
          
          
          <label htmlFor="namedInput">Nombre del dueño  :    
          </label>
          <input id="namedInput" type="text" name="name"/>
          
          
          <label htmlFor="namedInput">Nombre de la mascota  :    
          </label>
          <input id="namedInput" type="text" name="name"/>
          
          
          <label htmlFor="namedInput">Edad de la mascota:    
          </label>
          <input id="edad" type="number"/>

          <label htmlFor="namedInput">Poseé PEDIGREE?  : </label>
          <form>
          <label>Si
          <input type="checkbox">
          </input>
          </label>
          <label>No
          <input type="checkbox">
          </input>
          </label>
          </form>
          <button onclick="onclick()">Submit</button>
          
        </header>
      </div>
    );
  }
  
}
    function onclick() {
      alert("Hello! I am an alert box!");
    }

export default App;
