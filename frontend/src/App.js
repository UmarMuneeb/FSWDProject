import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Signup from './pages/signup';
import Home from './pages/landingpage';
import Listingspage from './pages/listingspage';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<Signup />} />
        <Route path="/Listings" element={<Listingspage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
