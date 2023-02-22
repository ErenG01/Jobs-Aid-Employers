import Nav from "./nav";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'; 
import PublicarOferta from "./publicarOferta";
import Login from "./login";
import PerfilEmployeed from "./PerfilEmployeed";
import PublishOfert from "./componentes/publishOffer";
import UserEmployeed from "./componentes/user";
import Candidates from "./componentes/candidates";
import SearchCV from "./componentes/searchCV";
import Interviews from "./componentes/interviews";

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<PublicarOferta/>} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/perfil' element={<PerfilEmployeed/>} />
        <Route path='/perfil/Publishofert' element={<div className='PerfilComponent'><PerfilEmployeed/><PublishOfert/></div>} />
        <Route path='/perfil/useremployeed' element={<div className='PerfilComponent'><PerfilEmployeed/><UserEmployeed/></div>} />
        <Route path='/perfil/postulations' element={<div className='PerfilComponent'><PerfilEmployeed/><Candidates/></div>} />
        <Route path='/perfil/searchcv' element={<div className='PerfilComponent'><PerfilEmployeed/><SearchCV/></div>} />
        <Route path='/perfil/interviews' element={<div className='PerfilComponent'><PerfilEmployeed/><Interviews/></div>} />



        </Routes>
      
      
      
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
