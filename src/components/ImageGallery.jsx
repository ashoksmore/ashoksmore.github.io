import { useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

function Lightbox({ photos, index, onClose, onNavigate }) {
  const photo = photos[index];

  useEffect(() => {
    const handleKey = (event) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowLeft') onNavigate(-1);
      if (event.key === 'ArrowRight') onNavigate(1);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [onClose, onNavigate]);

  if (!photo) return null;

  return createPortal(
    <div
      className="gallery-lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="Photo viewer"
      onClick={onClose}
    >
      <div className="gallery-lightbox-inner" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="gallery-lightbox-close"
          onClick={onClose}
          aria-label="Close photo viewer"
        >
          ×
        </button>
        {photos.length > 1 && (
          <>
            <button
              type="button"
              className="gallery-lightbox-nav gallery-lightbox-nav--prev"
              onClick={() => onNavigate(-1)}
              aria-label="Previous photo"
            >
              ‹
            </button>
            <button
              type="button"
              className="gallery-lightbox-nav gallery-lightbox-nav--next"
              onClick={() => onNavigate(1)}
              aria-label="Next photo"
            >
              ›
            </button>
          </>
        )}
        <img
          src={photo.src}
          alt={photo.caption || 'Gallery photo'}
          className="gallery-lightbox-img"
        />
        <div className="gallery-lightbox-meta">
          {photo.location && (
            <p className="gallery-lightbox-location">{photo.location}</p>
          )}
          {photo.caption && <p className="gallery-lightbox-caption">{photo.caption}</p>}
        </div>
      </div>
    </div>,
    document.body
  );
}

function GalleryTile({ photo, placeholderLabel, onOpen }) {
  const [imgError, setImgError] = useState(false);
  const hasImage = Boolean(photo.src) && !imgError;
  const aspect = photo.aspect || 'square';

  return (
    <figure className={`image-gallery-item image-gallery-item--${aspect}`}>
      {hasImage ? (
        <button
          type="button"
          className="gallery-image-btn"
          onClick={onOpen}
          aria-label={`View photo: ${photo.caption || photo.location || 'Gallery image'}`}
        >
          <img
            src={photo.src}
            alt={photo.caption || photo.location || ''}
            className="image-gallery-img"
            loading="lazy"
            decoding="async"
            onError={() => setImgError(true)}
          />
        </button>
      ) : (
        <div
          className="image-gallery-placeholder"
          role="img"
          aria-label={placeholderLabel}
        >
          <span className="image-gallery-placeholder-text">{placeholderLabel}</span>
        </div>
      )}
      {(photo.caption || photo.location) && (
        <figcaption className="image-gallery-caption">
          {photo.location && (
            <span className="image-gallery-location">{photo.location}</span>
          )}
          {photo.caption && <span className="image-gallery-caption-text">{photo.caption}</span>}
        </figcaption>
      )}
    </figure>
  );
}

/**
 * Masonry photo gallery with lazy-loaded images, placeholders, and lightbox.
 *
 * @param {Object[]} photos - `{ id?, src, caption, location, aspect? }`
 * @param {string} [placeholderLabel='Add marathon photo here']
 */
export default function ImageGallery({
  photos,
  placeholderLabel = 'Add marathon photo here',
  className = '',
  ariaLabel = 'Photo gallery',
}) {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const viewableIndices = photos
    .map((photo, i) => (photo.src ? i : -1))
    .filter((i) => i >= 0);

  const openAt = useCallback(
    (index) => {
      if (!photos[index]?.src) return;
      setLightboxIndex(index);
    },
    [photos]
  );

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const navigateLightbox = useCallback(
    (direction) => {
      if (lightboxIndex === null || viewableIndices.length === 0) return;
      const pos = viewableIndices.indexOf(lightboxIndex);
      const next =
        viewableIndices[(pos + direction + viewableIndices.length) % viewableIndices.length];
      setLightboxIndex(next);
    },
    [lightboxIndex, viewableIndices]
  );

  const lightboxPhotos = viewableIndices.map((i) => photos[i]);

  const lightboxViewIndex =
    lightboxIndex !== null ? viewableIndices.indexOf(lightboxIndex) : -1;

  return (
    <>
      <ul className={`image-gallery masonry-grid ${className}`.trim()} aria-label={ariaLabel}>
        {photos.map((photo, index) => (
          <li
            key={photo.id || `${photo.caption}-${index}`}
            className={`masonry-item masonry-item--${photo.aspect || 'square'}`}
          >
            <GalleryTile
              photo={photo}
              placeholderLabel={placeholderLabel}
              onOpen={() => openAt(index)}
            />
          </li>
        ))}
      </ul>

      {lightboxIndex !== null && lightboxViewIndex >= 0 && (
        <Lightbox
          photos={lightboxPhotos}
          index={lightboxViewIndex}
          onClose={closeLightbox}
          onNavigate={navigateLightbox}
        />
      )}
    </>
  );
}
