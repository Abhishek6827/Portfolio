import { useState, useEffect, useRef } from "react";
import { MdArrowOutward } from "react-icons/md";
import { getProjectImages } from "./utils/projectImages";

interface Props {
  projectName: string;
  alt?: string;
  link?: string;
}

const WorkImage = ({ projectName, alt, link }: Props) => {
  const images = getProjectImages(projectName);
  const [idx, setIdx] = useState(0);
  const [fading, setFading] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  /* Auto-cycle images every 2.5s with a brief CSS-driven fade-out/in */
  useEffect(() => {
    if (images.length <= 1) return;
    timerRef.current = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setIdx((prev) => (prev + 1) % images.length);
        setFading(false);
      }, 300);
    }, 2500);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [images.length]);

  if (images.length === 0) {
    return (
      <div className="work-image">
        <div className="work-image-in work-image-placeholder">
          <span>{alt || projectName}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="work-image">
      <a
        className="work-image-in"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        data-cursor="disable"
      >
        {link && (
          <div className="work-link">
            <MdArrowOutward />
          </div>
        )}

        <img
          src={images[idx]}
          alt={`${alt || projectName} screenshot ${idx + 1}`}
          className={`work-slide-img${fading ? " work-slide-fading" : ""}`}
        />

        {images.length > 1 && (
          <div className="work-image-counter">
            {idx + 1} / {images.length}
          </div>
        )}
      </a>
    </div>
  );
};

export default WorkImage;
