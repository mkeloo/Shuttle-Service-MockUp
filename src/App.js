import './App.css';
import { Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import Home from './routes/Home';
import Signin from './routes/Signin';
import Signup from './routes/Signup';
import Account from './routes/Account';

function App() {
  return (
    <AuthContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </AuthContextProvider>
  );
}

export default App;
