import { Link } from 'react-router-dom';

// Phase 2 will fill this in with sticky behavior, mobile drawer, etc.
export default function Navbar() {
  return (
    <nav className="bg-white border-b border-border" style={{ height: 70 }}>
      <div className="container-x flex items-center justify-between h-full">
        <Link to="/" className="text-heading font-bold text-xl">
          <span className="text-primary">▮</span> Deshkari
        </Link>
        <span className="text-muted text-xs">[nav stub — phase 2]</span>
      </div>
    </nav>
  );
}
