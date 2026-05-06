import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="container-x py-section text-center">
      <p className="section-label">404</p>
      <h1 className="text-h2 text-heading">Page Not Found</h1>
      <p className="mt-4 text-body">The page you are looking for doesn't exist or has been moved.</p>
      <Link to="/" className="btn-primary mt-8 inline-flex">
        Back to Home <span aria-hidden>→</span>
      </Link>
    </div>
  );
}
