import { useState } from "react";
import { MdArrowOutward } from "react-icons/md";

interface Props {
  image: string;
  alt?: string;
  video?: string;
  link?: string;
}

const BASE = import.meta.env.BASE_URL; // "/Portfolio/" on GH Pages, "/" locally

const WorkImage = (props: Props) => {
  const [isVideo, setIsVideo] = useState(false);
  const [video, setVideo] = useState("");
  const [imgError, setImgError] = useState(false);

  // Resolve the image path against the Vite base URL so it works both
  // in dev (base = "/") and in the deployed GitHub Pages build (base = "/Portfolio/")
  const src = props.image
    ? `${BASE}${props.image}`.replace(/\/+/g, "/").replace(/^\/\//, "/")
    : "";

  const handleMouseEnter = async () => {
    if (props.video) {
      setIsVideo(true);
      const response = await fetch(`${BASE}assets/${props.video}`);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      setVideo(blobUrl);
    }
  };

  return (
    <div className="work-image">
      <a
        className="work-image-in"
        href={props.link}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setIsVideo(false)}
        target="_blank"
        data-cursor={"disable"}
      >
        {props.link && (
          <div className="work-link">
            <MdArrowOutward />
          </div>
        )}
        {!imgError ? (
          <img
            src={src}
            alt={props.alt}
            onError={() => setImgError(true)}
            loading="lazy"
          />
        ) : (
          <div className="work-image-fallback">
            <span>{props.alt || "Project"}</span>
          </div>
        )}
        {isVideo && <video src={video} autoPlay muted playsInline loop></video>}
      </a>
    </div>
  );
};

export default WorkImage;
