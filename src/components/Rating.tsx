import { Star } from 'lucide-react';

interface RatingProps {
  value: number;
  reviews?: number;
  size?: number;
  showCount?: boolean;
}

export function Rating({ value, reviews, size = 14, showCount = false }: RatingProps) {
  const rounded = Math.round(value);
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={size}
            className={i < rounded ? 'fill-brand-gold text-brand-gold' : 'text-gray-300'}
            strokeWidth={1.5}
          />
        ))}
      </div>
      {showCount && reviews !== undefined && (
        <span className="text-xs text-brand-stone">({reviews})</span>
      )}
    </div>
  );
}
