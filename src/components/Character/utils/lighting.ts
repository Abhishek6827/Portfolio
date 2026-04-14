import * as THREE from "three";
import { RGBELoader } from "three-stdlib";
import { gsap } from "gsap";

const setLighting = (scene: THREE.Scene) => {
  const directionalLight = new THREE.DirectionalLight(0xfff5e6, 0);
  directionalLight.intensity = 0;
  directionalLight.position.set(-0.47, -0.32, -1);
  directionalLight.castShadow = true;
  directionalLight.shadow.mapSize.width = 1024;
  directionalLight.shadow.mapSize.height = 1024;
  directionalLight.shadow.camera.near = 0.5;
  directionalLight.shadow.camera.far = 50;
  scene.add(directionalLight);

  // Front-facing fill light to keep the character's face illuminated
  // even when rotated to the desk pose (y: 0.92)
  const frontFill = new THREE.DirectionalLight(0xffe8d6, 0);
  frontFill.position.set(0, 12, 20);
  scene.add(frontFill);

  // Hemisphere light for natural sky/ground ambient fill
  const hemiLight = new THREE.HemisphereLight(0xfff5e6, 0x444444, 0);
  scene.add(hemiLight);

  const pointLight = new THREE.PointLight(0x88dde8, 0, 100, 3);
  pointLight.position.set(3, 12, 4);
  pointLight.castShadow = true;
  scene.add(pointLight);

  new RGBELoader()
    .setPath("models/")
    .load("char_enviorment.hdr?v=2", function (texture) {
      texture.mapping = THREE.EquirectangularReflectionMapping;
      scene.environment = texture;
      scene.environmentIntensity = 0;
      scene.environmentRotation.set(5.76, 85.85, 1);
    });

  function setPointLight(screenLight: any) {
    if (screenLight.material.opacity > 0.9) {
      // Capped to prevent cyan glow from overwhelming skin tones
      pointLight.intensity = Math.min(screenLight.material.emissiveIntensity * 20, 8);
    } else {
      pointLight.intensity = 0;
    }
  }
  const duration = 2;
  const ease = "power2.inOut";
  function turnOnLights() {
    gsap.to(scene, {
      environmentIntensity: 0.64,
      duration: duration,
      ease: ease,
    });
    gsap.to(directionalLight, {
      intensity: 1,
      duration: duration,
      ease: ease,
    });
    gsap.to(frontFill, {
      intensity: 0.6,
      duration: duration,
      ease: ease,
    });
    gsap.to(hemiLight, {
      intensity: 0.5,
      duration: duration,
      ease: ease,
    });
    gsap.to(".character-rim", {
      y: "55%",
      opacity: 1,
      delay: 0.2,
      duration: 2,
    });
  }

  return { setPointLight, turnOnLights };
};

export default setLighting;
