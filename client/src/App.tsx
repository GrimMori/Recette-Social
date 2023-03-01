import './App.css';
import {
  Route,
  Routes
}
  from 'react-router-dom';

import Home from './pages/Home';
import SocialPage from './pages/SocialPage';
import Login from './pages/Login';
import Profile from './pages/Profile';
import RecetteListPage from './pages/RecetteList';
import RecetteDetail from './pages/RecetteDetail';
import StatisticPage from './pages/StatisticPage';
import Layout from './partials/Layout';
import RecetteForm from './pages/RecetteForm';
import NotFound from './pages/NotFound';


function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/" element={<Layout />}>
        <Route path='/social' element={<SocialPage />} />
        <Route path='/recetteList' element={<RecetteListPage />} />
        <Route path='/recetteDetail/:id' element={<RecetteDetail />} />
        <Route path='/recetteForm' element={<RecetteForm />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile/:id' element={<Profile />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
