import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {

  let miEstilo = {backgroundColor : "grey"};
  
  return (
    <div ClassName="main" style={miEstilo}>
    <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/" 
          element= { 
          <ItemListContainer greeting= "Bienvenidos a mi E-Commerce"/>} />
          <Route path="/producto/:id" 
            element= 
          { <ItemDetailContainer/>} />
          <Route path="*" element={ <h1>No se encontro nada: Error:404</h1> }/>
        </Routes>
    </BrowserRouter>
    </div>
  );
}


export default App;
