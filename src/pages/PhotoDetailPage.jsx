import { useState } from "react";
import { Link, useParams } from "react-router";
import PageShell from "../components/PageShell";
import photos from "../data/photos";
import "./PhotoDetailPage.css";

export default function PhotoDetailPage() {
  const { slug } = useParams();
  const currentIndex = photos.findIndex((photo) => photo.slug === slug);
  const photo = photos[currentIndex];

  const [isZoomed, setIsZoomed] = useState(false);
  const [origin, setOrigin] = useState("50% 50%");

  if (!photo) {
    return (
      <PageShell background="#dacfba" color="#333333" showBackLink={true}>
        <h1>Photo not found</h1>
      </PageShell>
    );
  }

  const prevPhoto = currentIndex > 0 ? photos[currentIndex - 1] : null;
  const nextPhoto = currentIndex < photos.length - 1 ? photos[currentIndex + 1] : null;

  function handleMouseMove(e) {
    if (!isZoomed) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setOrigin(`${x}% ${y}%`);
  }

  function handleImageClick() {
    setIsZoomed((prev) => !prev);
    if (isZoomed) {
      setOrigin("50% 50%");
    }
  }

  return (
    <PageShell background="#dacfba" color="#333333" showBackLink={true}>
      <div className="photo-detail-page">
        {prevPhoto && (
          <Link to={`/photography/${prevPhoto.slug}`} className="nav-button nav-left">
            ← Previous
          </Link>
        )}

        <div className="photo-frame">
          <div className="zoom-area" onMouseMove={handleMouseMove} onClick={handleImageClick}>
            <img
              src={isZoomed ? photo.zoomSrc : photo.img1600}
              srcSet={
                isZoomed
                  ? undefined
                  : `
                    ${photo.img960} 960w,
                    ${photo.img1600} 1600w,
                    ${photo.img2400} 2400w
                  `
              }
              sizes={isZoomed ? undefined : "(max-width: 768px) 92vw, (max-width: 1200px) 80vw, 1600px"}
              alt={photo.alt}
              className={`detail-image ${isZoomed ? "zoomed" : ""}`}
              style={{ transformOrigin: origin }}
            />
          </div>
        </div>

        {nextPhoto && (
          <Link to={`/photography/${nextPhoto.slug}`} className="nav-button nav-right">
            Next →
          </Link>
        )}
      </div>
    </PageShell>
  );
}