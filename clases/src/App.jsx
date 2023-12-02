import logo from './logo.svg';
import './App.css';

import NavBar from './components/NavBar/NavBar';
import Button from './components/Button';
import Box from './components/Box';
import Input from './components/Input/index';
import { Component } from 'react';
import Timer from './components/ConteinerTimer/index';
import Counter from './components/Counter';

function SuperButton({ buttonText }) {
  function doSomething() {
    console.log('Hello coders!');
  }
  return <button type='button' onClick={doSomething}>{ buttonText }</button>
}

function SuperForm(props) {
  console.log(props);
  return (
    <>
      <h1>{props.tittle}</h1>
      {props.boton({ buttonText: 'SuperForm Button' })}    
    </>
  );
}

class ConteinerTimer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showTimer: true
    }
  }

  render() {
    return (
      <div>
        <button onClick={() => this.setState({ showTimer: false })}>Destroy Timer</button>
        { this.state.showTimer && <Timer /> }
      </div>
    )
  }
}

function App() {

  const extraerValor = (valorDelInput) => {
    return console.log(valorDelInput)
  }

  const obj = {
    curso: 'ReactJS',
    comision: '31150',
    dias: 'Martes y Jueves',
    hora: 'De 19:00 a 21:00'
  }

  return (
    <div className="App">
      <NavBar />
      <Button texto='Boton' color='red' />
      <Button texto='Boton2' color='blue' lista={[1,2,3,4]} />
      <Button texto='Boton3' color='green' objeto={obj} >
        <p>este es otro children</p>
      </Button>
      <Button color='yellow'>
        <p>Esto es un children</p>
      </Button>
      <Counter />
      <Box titulo='Caja Contenedora' />
      <Input handleExtraer={extraerValor} />
      <SuperForm tittle='Hey!' boton={SuperButton} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
