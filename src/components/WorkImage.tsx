import { useState, useEffect, useRef, CSSProperties } from "react";
import { MdArrowOutward } from "react-icons/md";
import { getProjectImages } from "./utils/projectImages";

type Props = {
  projectName: string;
  alt?: string;
  link?: string;
};

const WorkImage = ({ projectName, alt, link }: Props) => {
  const images = getProjectImages(projectName);
  const [idx, setIdx] = useState(0);
  const [hovered, setHovered] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    setIdx(0);
  }, [projectName]);

  useEffect(() => {
    if (images.length <= 1) return;
    timerRef.current = setInterval(() => {
      setIdx((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [images.length, projectName]);

  const boxStyle: CSSProperties = {
    display: "block",
    position: "relative",
    width: "100%",
    height: "100%", /* Fill parent */
    aspectRatio: "16 / 9",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
    border: "1px solid rgba(255,255,255,0.08)",
    textDecoration: "none",
    background: "#080c14", /* Darker, clearly visible fallback color */
  };

  const initials = (alt || projectName)
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");

  return (
    <div style={{ width: "100%" }}>
      <a
        style={boxStyle}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Link icon — visible on hover */}
        {link && (
          <div style={{
            position: "absolute",
            top: "12px", right: "12px", zIndex: 10,
            width: "34px", height: "34px", borderRadius: "50%",
            background: "rgba(0,0,0,0.6)", backdropFilter: "blur(8px)",
            border: "1px solid rgba(255,255,255,0.2)",
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "#fff", fontSize: "16px",
            opacity: hovered ? 1 : 0,
            transform: hovered ? "scale(1)" : "scale(0.8)",
            transition: "opacity 0.3s ease, transform 0.3s ease",
          }}>
            <MdArrowOutward />
          </div>
        )}

        {/* Fallback pattern if no images */}
        {images.length === 0 && (
          <div style={{
            position: "absolute", inset: 0,
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center", gap: "12px",
            border: "1px dashed rgba(255,255,255,0.12)",
          }}>
            <div style={{
              width: "72px", height: "72px", borderRadius: "16px",
              background: "rgba(45,212,191, 0.08)",
              border: "1px solid rgba(45,212,191, 0.2)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "28px", fontWeight: 700, color: "var(--accentColor)",
              letterSpacing: "-1px",
            }}>
              {initials || "?"}
            </div>
          </div>
        )}

        {/* Crossfade images */}
        {images.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`${alt || projectName} screenshot ${i + 1}`}
            style={{
              position: "absolute", 
              inset: 0,
              width: "100%", 
              height: "100%",
              objectFit: "cover", 
              display: "block",
              opacity: i === idx ? 1 : 0,
              visibility: i === idx ? "visible" : "hidden", /* Prevent invisible images from blocking interaction */
              filter: hovered && i === idx ? "brightness(1.05)" : "brightness(0.9)",
              transform: hovered && i === idx ? "scale(1.02)" : "scale(1)",
              transition: "opacity 0.7s ease, visibility 0.7s ease, filter 0.5s ease, transform 0.5s ease",
            }}
            loading={i === 0 ? "eager" : "lazy"}
          />
        ))}

        {/* Image counter badge */}
        {images.length > 1 && (
          <div style={{
            position: "absolute", bottom: "10px", right: "12px", zIndex: 10,
            fontSize: "12px", color: "rgba(255,255,255,0.8)",
            background: "rgba(0,0,0,0.6)", backdropFilter: "blur(6px)",
            padding: "3px 8px", borderRadius: "20px",
            border: "1px solid rgba(255,255,255,0.2)",
            userSelect: "none" as const,
          }}>
            {idx + 1} / {images.length}
          </div>
        )}
      </a>
    </div>
  );
};

export default WorkImage;