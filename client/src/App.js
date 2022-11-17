import './App.css';
import {Routes, Route} from 'react-router-dom'
import ProfilePage from './views/Profile';

function App() {
  return (
    <div className="App">
      <h1>H test</h1>
      <Routes>
        <Route path='/' element={<div>Home</div>}/>
        <Route path='/profile' element={<ProfilePage/>}/>
        <Route path='/login' element={<div>Login</div>}/>
        <Route path='/turn' element={<div>Turn</div>}/>
        <Route path='/register' element={<div>Register</div>}/>
        <Route path='/patients' element={<div>Patients</div>}/>
      </Routes>
    </div>
  );
}

export default App;
