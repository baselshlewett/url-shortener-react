import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/home/Home';
import Layout from './components/layout/Layout';
import Dashboard from './pages/dashboard/Dashboard';

function App() {
  return (
    <Layout>
        <Routes>
            <Route path='/' element={<HomePage />}></Route>
            <Route path='/admin' element={<Dashboard />}></Route>
        </Routes>
    </Layout>
  );
}

export default App;
