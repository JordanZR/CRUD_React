import './App.css';

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Home from "./components/Home"
import Jordan from "./components/Jordan"
import Ismael from './components/Ismael'
import Footer from "./components/Footer"


function App() {
  return (
    <Router>
        <Home/>
        <Routes>
          /*<Route path="/jordan" element={<Jordan />} />*/
        </Routes>
        <Footer/>
    </Router>
  );
}

export default App;
