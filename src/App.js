import logo from './logo.svg';
import './App.css';
import ListContainer from './components/ListContainer'
import context from './components/PostContext/postContext'
import{useState} from 'react'

function App() {
  const[posts,setPosts]=useState([])
  const[filmsUrl,setFilms]=useState([])
  return (
    <context.Provider value={{filmsUrl,posts,setPosts,setFilms}}>
      <ListContainer/>

      
    </context.Provider>
  );
}

export default App;
