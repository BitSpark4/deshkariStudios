import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/layout/ScrollToTop.jsx';
import TopBar from './components/layout/TopBar.jsx';
import Navbar from './components/layout/Navbar.jsx';
import Footer from './components/layout/Footer.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Productions from './pages/Productions.jsx';
import Events from './pages/Events.jsx';
import Films from './pages/Films.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Blog from './pages/Blog.jsx';
import BlogSingle from './pages/BlogSingle.jsx';
import Contact from './pages/Contact.jsx';
import NotFound from './pages/NotFound.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <TopBar />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/productions" element={<Productions />} />
          <Route path="/events" element={<Events />} />
          <Route path="/films" element={<Films />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogSingle />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
