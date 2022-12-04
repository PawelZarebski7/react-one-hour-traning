import './App.css';
import Header from './components/Header';
import Main from './sites/Main';
import ErrorSite from './sites/ErrorSite';
import { Routes, Route } from 'react-router-dom';
import About from './sites/About';
import Contact from './sites/Contact';
import Users from './sites/Users';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='about' element={<About />} />
        <Route path='users' element={<Users />} />
        <Route path='contact' element={<Contact />}/>
        <Route path='*' element={<ErrorSite />}/>
      </Routes>
      
    </div>
  );
}

export default App;
