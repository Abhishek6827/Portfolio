import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import setCharacter from "./utils/character";
import setLighting from "./utils/lighting";
import { useLoading } from "../../context/LoadingProvider";
import handleResize from "./utils/resizeUtils";
import {
  handleMouseMove,
  handleTouchEnd,
  handleHeadRotation,
  handleTouchMove,
} from "./utils/mouseUtils";
import setAnimations from "./utils/animationUtils";
import { setProgress } from "../Loading";

const Scene = () => {
  const canvasDiv = useRef<HTMLDivElement | null>(null);
  const hoverDivRef = useRef<HTMLDivElement>(null);
  const { setLoading } = useLoading();

  useEffect(() => {
    if (canvasDiv.current) {
      let disposed = false;
      let contextLost = false;
      let isVisible = true;

      const rect = canvasDiv.current.getBoundingClientRect();
      const container = { width: rect.width, height: rect.height };
      const aspect = container.width / container.height;
      const scene = new THREE.Scene();

      const renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: false,
        powerPreference: "default",
      });
      renderer.setSize(container.width, container.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1;
      canvasDiv.current.appendChild(renderer.domElement);

      const camera = new THREE.PerspectiveCamera(14.5, aspect, 0.1, 1000);
      camera.position.set(0, 13.1, 24.7);
      camera.zoom = 1.1;
      camera.updateProjectionMatrix();

      let headBone: THREE.Object3D | null = null;
      let screenLight: any | null = null;
      let mixer: THREE.AnimationMixer;
      const clock = new THREE.Clock();

      const light = setLighting(scene);
      let progress = setProgress((value) => setLoading(value));
      const { loadCharacter } = setCharacter(renderer, scene, camera);

      let mouse = { x: 0, y: 0 };

      const onMouseMove = (event: MouseEvent) => {
        handleMouseMove(event, (x, y) => (mouse = { x, y }));
      };

      const onResize = () => {
        handleResize(renderer, camera, canvasDiv, null as any); // character not needed for resize logic in utils usually
      };

      loadCharacter().then((gltf) => {
        if (disposed || !gltf) return;
        const animations = setAnimations(gltf);
        hoverDivRef.current && animations.hover(gltf, hoverDivRef.current);
        mixer = animations.mixer;
        const characterObj = gltf.scene;
        scene.add(characterObj);
        headBone = characterObj.getObjectByName("spine006") || null;
        screenLight = characterObj.getObjectByName("screenlight") || null;
        progress.loaded().then(() => {
          if (disposed) return;
          setTimeout(() => {
            if (disposed) return;
            light.turnOnLights();
            animations.startIntro();
          }, 2500);
        });
        window.addEventListener("resize", onResize);
      });

      const observer = new IntersectionObserver(([entry]) => {
        isVisible = entry.isIntersecting;
      }, { threshold: 0.1 });
      observer.observe(canvasDiv.current);

      let animationFrameId: number;
      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);
        if (contextLost || !isVisible) return;

        if (headBone) {
          handleHeadRotation(headBone, mouse.x, mouse.y, 0.1, 0.2, THREE.MathUtils.lerp);
          light.setPointLight(screenLight);
        }
        if (mixer) mixer.update(clock.getDelta());
        renderer.render(scene, camera);
      };
      animate();

      const onContextLost = (e: Event) => {
        e.preventDefault();
        contextLost = true;
      };
      const onContextRestored = () => {
        contextLost = false;
        clock.getDelta();
      };

      renderer.domElement.addEventListener("webglcontextlost", onContextLost, false);
      renderer.domElement.addEventListener("webglcontextrestored", onContextRestored, false);

      document.addEventListener("mousemove", onMouseMove);

      return () => {
        disposed = true;
        cancelAnimationFrame(animationFrameId);
        observer.disconnect();
        window.removeEventListener("resize", onResize);
        document.removeEventListener("mousemove", onMouseMove);
        renderer.domElement.removeEventListener("webglcontextlost", onContextLost);
        renderer.domElement.removeEventListener("webglcontextrestored", onContextRestored);

        if (canvasDiv.current && renderer.domElement.parentNode === canvasDiv.current) {
          canvasDiv.current.removeChild(renderer.domElement);
        }

        scene.clear();
        renderer.dispose();
        renderer.forceContextLoss();
      };
    }
  }, [setLoading]);

  return (
    <div className="character-container">
      <div className="character-model" ref={canvasDiv}>
        <div className="character-rim"></div>
        <div className="character-hover" ref={hoverDivRef}></div>
      </div>
    </div>
  );
};

export default Scene;
