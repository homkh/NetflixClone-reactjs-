import './App.css';
import HomePage from './pages/HomePage.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login.jsx';
import SIgnupPage from './pages/SIgnupPage.jsx';
import MovieSection from './pages/MovieSection.jsx';
import MovieDetailpage from './pages/MovieDetailpage.jsx';
import FavMovpage from './pages/FavMovpage.jsx';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index='/' element={<HomePage />} />
          <Route path='/sign_in' element={<Login />} />
          <Route path='/sign_in/SIgnupPage' element={<SIgnupPage />} />
          <Route path='/moviesec' element={<MovieSection />} />
          <Route path='/moviesec/:id' element={<MovieDetailpage />} />
          <Route path='/moviesec/favPage' element={<FavMovpage />} />
          <Route path='*' element={<p>Page Not found 404!!!</p>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
