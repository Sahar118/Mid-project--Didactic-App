import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home, Login, Register, Profile, DiagnosticForm, Admin } from './pages';
import ProtectedRoute from './components/ProtectedRoute';
import { Spinner } from './components/Spinner';
import { useSelector } from 'react-redux';

function App() {
  const { loading } = useSelector(state => state.loader)
  return (
    <div>
      {loading && <Spinner />}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/profile' element={<ProtectedRoute><Profile /> </ProtectedRoute>} />
          <Route path='/apply-Diagnostic' element={<ProtectedRoute> <DiagnosticForm /> </ProtectedRoute>} />
          <Route path='/admin' element={<ProtectedRoute> <Admin /> </ProtectedRoute>} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
