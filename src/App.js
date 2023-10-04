import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
    return (
      <div className='App'>
        <BrowserRouter>
          <NavBar />
            <Routes >
              <Route path='/' element={<ItemListContainer/>} />
              <Route path='/category/:categoryId' element={(<ItemDetailContainer/>)} />
              <Route path='/Item/:ItemId' element={ <ItemDetailContainer/>}/>
              <Route path= '*' element={<h>404 NOT FOUND</h>} />
            </Routes>
        </BrowserRouter>
      </div>
  )
}

export default App;
