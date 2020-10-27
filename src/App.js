import React,{useState, useEffect} from "react";
import api from './services/api'
import './App.css'
function App() {
  const [Repository,setRepository] = useState([])
  useEffect(()=>{
    api.get('repositories').then(response => setRepository(response.data))
  },[])

  async function handleAddRepository() {
    // TODO
    const add =  await api.post('repositories',{
      title:'Go',
      url:'http://github.com/andres',
      techs:['java','flutter']
    })
    setRepository([
      ...Repository,
      add
    ])
  }

  async function handleRemoveRepository(id) {
    // TODO

  await  api.delete(`repositories/${id}`)

  setRepository(Repository.filter(response => response.id !== id))
  }

  return (
    <div>
      <ul data-testid="repository-list">
        {Repository.map(response =>
          <li>
            {response.title}
            {response.url}
            {response.techs}
            {response.likes}
          

          <button onClick={() => handleRemoveRepository(response.id)}>
            Remover
          </button>
        </li>
          )}
      </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;