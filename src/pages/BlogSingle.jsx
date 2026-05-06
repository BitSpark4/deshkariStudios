import { useParams } from 'react-router-dom';

// Phase 6 fills the BlogSingle article view.
export default function BlogSingle() {
  const { slug } = useParams();
  return (
    <div className="container-x py-section">
      <p className="section-label">Article</p>
      <h1 className="text-h2 text-heading">{slug}</h1>
      <p className="mt-4 text-body">[Phase 6 — single article body goes here.]</p>
    </div>
  );
}
