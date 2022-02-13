import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp/SignUp';
import Login from './components/Login/Login';
import UserDetails from './components/UserDetails/UserDetails';
import './App.scss';

function App() {

  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/UserDetails" element={<UserDetails />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
