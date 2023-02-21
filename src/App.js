import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import { Routes, BrowserRouter, Route } from 'react-router-dom';

import './style.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
