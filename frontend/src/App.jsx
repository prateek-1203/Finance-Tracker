import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import './App.css'
import Home from './pages/Home'
import AddTransaction from './pages/AddTransaction'
import EditTransaction from './pages/EditTransaction'
import DeleteTransaction from './pages/DeleteTransaction'

function App() {
   return(
     <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddTransaction />} />
        <Route path="/:id/edit" element={<EditTransaction />} />
        <Route path="/:id/delete" element={<DeleteTransaction />} />
      </Routes>
      
     </Router>
   )
}

export default App;