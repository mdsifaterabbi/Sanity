import {
  Route,
  Routes,
} from "react-router-dom";
import './App.css'
import Home from './pages/Home';
import Movies from './pages/Movies';
import Details from "./pages/Details";

function App() {


  return (
    <>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/movies" element={<Movies />}/>
          <Route path="/movies/:id" element={<Details /> } />
        </Routes>
      
    </>
  )
}

export default App
