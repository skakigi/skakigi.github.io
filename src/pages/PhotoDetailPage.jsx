import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router";
import PageShell from "../components/PageShell";
import photos from "../data/photos";
import "./PhotoDetailPage.css";

export default function PhotoDetailPage() {
  const { slug } = useParams();
  const currentIndex = photos.findIndex((photo) => photo.slug === slug);
  const photo = photos[currentIndex];

  const [isZoomed, setIsZoomed] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [isDesktopHover, setIsDesktopHover] = useState(false);

  const imgRef = useRef(null);
  const zoomAreaRef = useRef(null);
  const rafRef = useRef(null);
  const latestOriginRef = useRef({ x: 50, y: 50 });
  const movedDuringPointerRef = useRef(false);

  const prevPhoto = currentIndex > 0 ? photos[currentIndex - 1] : null;
  const nextPhoto = currentIndex < photos.length - 1 ? photos[currentIndex + 1] : null;

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");

    const updatePointerMode = () => {
      setIsDesktopHover(mq.matches);
    };

    updatePointerMode();

    if (mq.addEventListener) {
      mq.addEventListener("change", updatePointerMode);
      return () => mq.removeEventListener("change", updatePointerMode);
    }

    mq.addListener(updatePointerMode);
    return () => mq.removeListener(updatePointerMode);
  }, []);

  useEffect(() => {
    if (!photo?.zoomSrc) return;

    const preloader = new Image();
    preloader.src = photo.zoomSrc;

    if (preloader.decode) {
      preloader.decode().catch(() => {});
    }
  }, [photo?.zoomSrc]);

  useEffect(() => {
    setIsZoomed(false);
    setIsDragging(false);
    movedDuringPointerRef.current = false;
    latestOriginRef.current = { x: 50, y: 50 };

    if (imgRef.current) {
      imgRef.current.style.transformOrigin = "50% 50%";
    }
  }, [slug]);

  useEffect(() => {
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  function getOriginFromPoint(clientX, clientY, element) {
    const rect = element.getBoundingClientRect();

    const x = ((clientX - rect.left) / rect.width) * 100;
    const y = ((clientY - rect.top) / rect.height) * 100;

    return {
      x: Math.max(0, Math.min(100, x)),
      y: Math.max(0, Math.min(100, y)),
    };
  }

  function applyOrigin(x, y) {
    latestOriginRef.current = { x, y };

    if (imgRef.current) {
      imgRef.current.style.transformOrigin = `${x}% ${y}%`;
    }
  }

  function commitOrigin() {
    rafRef.current = null;
    const { x, y } = latestOriginRef.current;

    if (imgRef.current) {
      imgRef.current.style.transformOrigin = `${x}% ${y}%`;
    }
  }

  function queueOrigin(clientX, clientY, element) {
    const { x, y } = getOriginFromPoint(clientX, clientY, element);
    latestOriginRef.current = { x, y };

    if (rafRef.current == null) {
      rafRef.current = requestAnimationFrame(commitOrigin);
    }
  }

  function handleZoomAreaClick(e) {
    if (movedDuringPointerRef.current) {
      movedDuringPointerRef.current = false;
      return;
    }

    if (!isZoomed) {
      const { x, y } = getOriginFromPoint(e.clientX, e.clientY, e.currentTarget);
      applyOrigin(x, y);
      setIsZoomed(true);
      return;
    }

    setIsZoomed(false);
    setIsDragging(false);
    applyOrigin(50, 50);
  }

  function handleMouseMove(e) {
    if (!isZoomed || !isDesktopHover) return;
    queueOrigin(e.clientX, e.clientY, e.currentTarget);
  }

  function handlePointerDown(e) {
    if (!isZoomed || isDesktopHover) return;

    movedDuringPointerRef.current = false;
    setIsDragging(true);

    if (e.currentTarget.setPointerCapture) {
      e.currentTarget.setPointerCapture(e.pointerId);
    }

    queueOrigin(e.clientX, e.clientY, e.currentTarget);
  }

  function handlePointerMove(e) {
    if (!isZoomed || isDesktopHover || !isDragging) return;

    movedDuringPointerRef.current = true;
    queueOrigin(e.clientX, e.clientY, e.currentTarget);
  }

  function handlePointerUp() {
    setIsDragging(false);
  }

  if (!photo) {
    return (
      <PageShell background="#dacfba" color="#333333" showBackLink={true}>
        <div className="photo-detail-page">
          <h1>Photo not found</h1>
          <Link to="/photography" className="detail-back-link">
            Back to Photography
          </Link>
        </div>
      </PageShell>
    );
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
          <div
            ref={zoomAreaRef}
            className={`zoom-area ${isZoomed ? "is-zoomed" : ""}`}
            onClick={handleZoomAreaClick}
            onMouseMove={handleMouseMove}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
          >
            <img
              ref={imgRef}
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
              sizes={
                isZoomed
                  ? undefined
                  : "(max-width: 768px) 92vw, (max-width: 1200px) 80vw, 1600px"
              }
              alt={photo.alt}
              className={`detail-image ${isZoomed ? "zoomed" : ""}`}
              draggable="false"
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