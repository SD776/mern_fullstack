import logo from './logo.svg';
import './App.css';

//importamos los componentes
import CompShowBlogs from './blog/ShowBlogs';
import CompCreateBlog from './blog/CreateBlog';
import CompEditBlog from './blog/EditBlog';
import CargarReporte from './blog/CargarReporte';
import ListaPostgrados from './blog/ListaPostgrados';

//importamos el router
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MostrarReporte from './blog/MostrarReportes';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />        
      </header>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={ <CompShowBlogs />} />
            <Route path='/create' element={ <CompCreateBlog />} />
            <Route path='/reportes' element={ <CargarReporte />} />
            <Route path='/edit/:id' element={ <CompEditBlog />} />
            <Route path='/todos-los-reportes' element={ <MostrarReporte />} />
            <Route path='/postgrados' element={ <ListaPostgrados />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
