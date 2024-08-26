import React, { useState } from 'react';

function App() {
  const [numero, setNumero] = useState('');
  const [resultado, setResultado] = useState(null);

  const ActualizarNum = (value) => {
    setNumero((prevNumero) => prevNumero + value);
  };

  const Suma = () => {
    setResultado((prevResultado) => 
      prevResultado === null ? parseFloat(numero) : prevResultado + parseFloat(numero)
    );
    setNumero('');
  };

  const Resta = () => {
    setResultado((prevResultado) => 
      prevResultado === null ? parseFloat(numero) : prevResultado - parseFloat(numero)
    );
    setNumero('');
  };

  const Multiplicacion = () => {
    setResultado((prevResultado) => 
      prevResultado === null ? parseFloat(numero) : prevResultado * parseFloat(numero)
    );
    setNumero('');
  };

  const Division = () => {
    setResultado((prevResultado) => 
      prevResultado === null ? parseFloat(numero) : prevResultado / parseFloat(numero)
    );
    setNumero('');
  };

  const MostrarResultado = () => {
    setResultado(parseFloat(numero));
    setNumero('');
  };

  return (
    <div>
      <h1>Calculadora</h1>
      <div className='input'>
        <input 
          value={numero}
          onChange={(e) => setNumero(e.target.value)} 
          id="pantalla" 
          type="number" 
        />
      </div>
      <div>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
          <button key={num} onClick={() => ActualizarNum(num.toString())}>
            {num}
          </button>
        ))}
      </div>
      <div>
        <button onClick={Suma}>+</button>
        <button onClick={Resta}>-</button>
        <button onClick={Division}>/</button>
        <button onClick={Multiplicacion}>*</button>
        <button onClick={MostrarResultado}>=</button>
      </div>
      <h2>Resultado: {resultado}</h2>
    </div>
  );
}

export default App;
