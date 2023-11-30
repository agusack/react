import logo from './logo.svg';
import './App.css';

import NavBar from './components/NavBar/NavBar';
import Button from './components/Button';
import Box from './components/Box';
import Input from './components/Input/index';


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
      <Box titulo='Caja Contenedora' />
      <Input handleExtraer={extraerValor} />
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
