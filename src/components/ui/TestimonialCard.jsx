import { Star } from 'lucide-react';

export default function TestimonialCard({ testimonial }) {
  return (
    <figure className="text-center max-w-3xl mx-auto">
      <img
        src={testimonial.image}
        alt={testimonial.name}
        className="mx-auto rounded-full object-cover"
        style={{ width: 72, height: 72, border: '3px solid #C45911' }}
      />
      <blockquote
        className="mt-6 italic text-heading font-rubik"
        style={{ fontSize: 18, lineHeight: 1.7 }}
      >
        “{testimonial.quote}”
      </blockquote>
      <figcaption className="mt-6">
        <div className="text-heading font-rubik font-semibold" style={{ fontSize: 15 }}>
          {testimonial.name}
        </div>
        <div className="text-primary font-rubik mt-1" style={{ fontSize: 13 }}>
          {testimonial.role}
        </div>
        <ul className="flex items-center justify-center gap-1 mt-3" aria-label={`${testimonial.rating} out of 5 stars`}>
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <li key={i}>
              <Star size={14} className="text-primary fill-primary" aria-hidden />
            </li>
          ))}
        </ul>
      </figcaption>
    </figure>
  );
}
