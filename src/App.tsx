import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Books from './pages/Books'
import Food from './pages/Food'
import Movies from './pages/Movies'
import People from './pages/People'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="books" element={<Books />} />
          <Route path="food" element={<Food />} />
          <Route path="movies" element={<Movies />} />
          <Route path="people" element={<People />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
