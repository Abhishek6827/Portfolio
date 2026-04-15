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
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (images.length <= 1) return;
    timerRef.current = setInterval(() => {
      setIdx((prev) => (prev + 1) % images.length);
    }, 3000);
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
          key={images[idx]} // Key helps React handle the change smoothly
          src={images[idx]}
          alt={`${alt || projectName} screenshot ${idx + 1}`}
          className="work-slide-img"
          loading="lazy"
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
