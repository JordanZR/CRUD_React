import './App.css';

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Form from "./components/Form"
import Footer from "./components/Footer"

function App() {
  return (
      <div>
        <Form/>
        <Footer/>
      </div>
  );
}
/*<Routes>
            <Route path="/" element={<Usuarios />} />
  </Routes>
 */

export default App;
