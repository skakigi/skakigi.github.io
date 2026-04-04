import { Link, useParams } from "react-router";
import PageShell from "../components/PageShell";
import photos from "../data/photos";
import "./PhotoDetailPage.css";

export default function PhotoDetailPage() {
  const { slug } = useParams();
  const currentIndex = photos.findIndex((photo) => photo.slug === slug);
  const photo = photos[currentIndex];

  if (!photo) {
    return (
      <PageShell background="#fffaf0" color="#333333" showBackLink={true}>
        <h1>Photo not found</h1>
      </PageShell>
    );
  }

  const prevPhoto = currentIndex > 0 ? photos[currentIndex - 1] : null;
  const nextPhoto = currentIndex < photos.length - 1 ? photos[currentIndex + 1] : null;

  return (
    <PageShell background="#fffaf0" color="#333333" showBackLink={true}>
      <div className="photo-detail-page">
        {prevPhoto && (
          <Link to={`/photography/${prevPhoto.slug}`} className="nav-button nav-left">
            ← Previous
          </Link>
        )}

        <div className="photo-frame">
          <img
            src={photo.img1600}
            alt={photo.alt}
            className="detail-image"
          />
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