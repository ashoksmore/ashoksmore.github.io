import { useState } from 'react';

function GalleryItem({ src, caption, aspect, alt }) {
  const [imgError, setImgError] = useState(false);
  const showImage = src && !imgError;

  return (
    <figure className={`captioned-item captioned-item--${aspect}`}>
      {showImage ? (
        <img
          src={src}
          alt={alt || caption}
          className="captioned-img"
          loading="lazy"
          onError={() => setImgError(true)}
        />
      ) : (
        <div
          className="gallery-placeholder captioned-placeholder"
          role="img"
          aria-label={`Photo placeholder: ${caption}`}
        >
          <span className="gallery-placeholder-icon" aria-hidden="true">
            ◻
          </span>
        </div>
      )}
      <figcaption className="captioned-caption">{caption}</figcaption>
    </figure>
  );
}

export default function CaptionedGallery({ items, className = '' }) {
  return (
    <ul
      className={`captioned-gallery masonry-grid ${className}`.trim()}
      aria-label="Photo gallery"
    >
      {items.map((item) => (
        <li
          key={item.id}
          className={`masonry-item masonry-item--${item.aspect || 'square'}`}
        >
          <GalleryItem
            src={item.src}
            caption={item.caption}
            aspect={item.aspect}
            alt={item.alt}
          />
        </li>
      ))}
    </ul>
  );
}
