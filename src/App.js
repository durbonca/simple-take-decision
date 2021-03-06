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
    <div className="min-h-screen flex flex-col bg-purple-400 w-full items-center justify-around">
      
      <div className="flex flex-col items-center my-2">
        <img className="max-h-64 shadow-2xl rounded-3xl" src="./bruja.jpeg" alt="imagen de bruja"/>
        <h1 className="text-6xl text-center mt-3">La Dama de la fortuna</h1>
      </div>

      <form className="my-4 flex justify-center" onSubmit={handleSubmit}>
        <input 
          style={{maxWidth:"50%"}}
          className="rounded-tl-full rounded-bl-full p-3 outline-none"
          type="text" 
          value={element} 
          onChange={(event) => setElement(event.target.value)} />
        <input 
          style={{maxWidth:"50%"}}
          className="rounded-tr-full rounded-br-full p-3 bg-green-500 text-white cursor-pointer"
          type="submit" value="agregar desicion" disabled={!element}/>
      </form>
      <ul>
        { elementsToRaffle.map((item, index)=> <li key={index} >⭐ {item} </li> )}
      </ul>

      <button
        className="bg-green-500 text-xl font-bold w-1/2 my-2 rounded-full p-4" 
        onClick={()=>handleRandom()} disabled={!elementsToRaffle.length}>SORTEAR A LA DAMA DE LA FORTUNA! 🧙🏻‍♀️
      </button>
    </div>
  );
}

export default App;
