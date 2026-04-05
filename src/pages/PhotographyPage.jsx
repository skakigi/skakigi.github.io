import Box from "@mui/system/Box";
import PageShell from "../components/PageShell";
import { Link } from "react-router";
import photos from "../data/photos";
import "./PhotographyPage.css";

export default function PhotographyPage() {
  return (
    <PageShell
      background="background.default"
      color="text.primary"
      showBackLink={true}
      backTo="/"
      backLabel="Home"
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 1400,
          mx: "auto",
        }}
        className="photography-page"
      >
        <h1 className="photography-title">Photography</h1>
        <p className="photography-abstract">Selected Works, Click for more.</p>

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
      </Box>
    </PageShell>
  );
}