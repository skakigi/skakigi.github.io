import PageShell from "../components/PageShell";
import { Link } from "react-router";
import photos from "../data/photos";
import "./PhotographyPage.css";

export default function PhotographyPage() {
  return (
    <PageShell
      background="#dacfba"
      color="#333333"
      showBackLink={true}
      backTo="/"
      backLabel="Home"
    >
      <div className="photography-page">
        <h1 className="photography-title">Photography</h1>

        <div className="photo-grid">
          {photos.map((photo) => (
            <Link
              key={photo.slug}
              to={`/photography/${photo.slug}`}
              className="photo-card"
            >
              <img
                src={photo.thumb}
                alt={photo.alt}
                loading="lazy"
                className="photo-image"
              />
            </Link>
          ))}
        </div>
      </div>
    </PageShell>
  );
}