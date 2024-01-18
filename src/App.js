import './App.css';
import CountdownTimer from './components/CounterDownTimer';
import Login from './components/Login';
import PasswordGenerator from './components/PasswordGenerator';
import Products from './components/Products';
import Profile from './components/Profile';
import UserContextProvider from './Context/UserContextProvider';

function App() {
  return (
    <>
      <CountdownTimer/>
      <PasswordGenerator/>
      <Products/>
      <UserContextProvider>
        <h1 className='text-center text-lg my-3'>Context Api useContext hooks</h1>
        <Login/>
        <Profile/>
      </UserContextProvider>
    </>
  );
}

export default App;
