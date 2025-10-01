import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Press from './pages/Press';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carte" element={<Menu />} />
          <Route path="/esprit" element={<About />} />
          <Route path="/presse" element={<Press />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
