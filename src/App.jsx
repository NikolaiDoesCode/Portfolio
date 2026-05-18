import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-7xl font-light text-foreground/20 mb-4">404</h1>
        <p className="text-foreground/50 mb-6">Page not found</p>
        <button
          onClick={() => (window.location.href = '/')}
          className="text-sm text-foreground underline underline-offset-4"
        >
          Go home
        </button>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
