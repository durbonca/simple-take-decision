import {useState} from 'react';

import './App.css';

function App() {

  const [elementsToRaffle, setElementsToRaffle] = useState([])
  const [element, setElement] = useState('')

  function handleSubmit (event) {
      event.preventDefault();
      setElementsToRaffle([...elementsToRaffle, element]) 
      setElement('')
  }

  function handleRandom () {
      let randomDecition = elementsToRaffle[Math.floor(Math.random() * elementsToRaffle.length)]
      window.alert('LA DAMA HA DICHO!: ' + randomDecition)
  }

  return (
    <div className="bg-gray-300 h-screen flex flex-col">
      <h1>La Dama de la fortuna</h1>

      <form onSubmit={handleSubmit}>
        <label ></label>
        <input 
          
          type="text" 
          value={element} 
          onChange={(event) => setElement(event.target.value)} />
        <input type="submit" value="agregar desicion" disabled={!element}/>
      </form>
      <ul>
        { elementsToRaffle.map((item, index)=> <li key={index} > {item} </li> )}
      </ul>

      <button onClick={()=>handleRandom()} disabled={!elementsToRaffle.length}>SORTEAR A LA DAMA DE LA FORTUNA!</button>
    </div>
  );
}

export default App;
