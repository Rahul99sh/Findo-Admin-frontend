import './App.css';
import './styles.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import StoreList from './Pages/StoreList';
import Navbar from './Components/Navbar';
import VerifyStore from './Pages/VerifyStore';
import AppManagement from './Pages/AppManagement';
function App() {
  return (
    <div className="App">
      <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/storelist" element={<StoreList />} />
          <Route path="/verify" element={<VerifyStore />} />
          <Route path="/manageapps" element={<AppManagement />} />
        </Routes>
      </Router>
    </div>
    </div>
  );
}

export default App;
