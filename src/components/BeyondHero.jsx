import { useState } from 'react';
import { beyondHero } from '../data/beyondCode';

export default function BeyondHero() {
  const [showImage, setShowImage] = useState(true);

  return (
    <div className="beyond-hero" role="img" aria-label={beyondHero.alt}>
      {showImage ? (
        <img
          src={beyondHero.imageSrc}
          alt={beyondHero.alt}
          className="beyond-hero-img"
          onError={() => setShowImage(false)}
        />
      ) : (
        <div className="beyond-hero-placeholder">
          <span className="beyond-hero-placeholder-text">{beyondHero.fallbackLabel}</span>
        </div>
      )}
      <div className="beyond-hero-scrim" aria-hidden="true" />
    </div>
  );
}
