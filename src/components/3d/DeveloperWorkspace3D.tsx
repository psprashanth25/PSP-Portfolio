import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export const DeveloperWorkspace3D: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const [hasWebGL, setHasWebGL] = useState<boolean>(true);
  const [robotChat, setRobotChat] = useState<boolean>(false);

  useEffect(() => {
    // 1. WebGL Support Detection
    const testCanvas = document.createElement('canvas');
    const gl = testCanvas.getContext('webgl') || testCanvas.getContext('experimental-webgl');
    if (!gl) {
      setHasWebGL(false);
      return;
    }

    const container = mountRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // 2. Scene, Camera & Renderer Setup
    const scene = new THREE.Scene();
    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || window.innerHeight;

    const fov = 45;
    const camera = new THREE.PerspectiveCamera(fov, width / height, 0.1, 1000);
    const cameraBaseZ = 10;
    camera.position.set(0, 0, cameraBaseZ);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x06080d, 1);
    container.appendChild(renderer.domElement);

    // 3. Dynamic Ambient & Warm Cozy Point Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.96);
    scene.add(ambientLight);

    // Cyan desk/monitor rim point light
    const cyanLight = new THREE.PointLight(0x38bdf8, 1.4, 16);
    cyanLight.position.set(2.5, -0.8, 3.2);
    scene.add(cyanLight);

    // Purple holographic point light near robot
    const purpleLight = new THREE.PointLight(0xa855f7, 1.2, 14);
    purpleLight.position.set(4.0, 1.5, 2.5);
    scene.add(purpleLight);

    // Warm cozy fairy-light accent point light
    const warmLight = new THREE.PointLight(0xfef08a, 0.85, 12);
    warmLight.position.set(-1.0, 3.0, 2.0);
    scene.add(warmLight);

    // 4. Background Plane Geometry & Positioning (Cover Scaling)
    const imgWidth = 1376;
    const imgHeight = 768;
    const imgAspect = imgWidth / imgHeight; // 1.791667

    let workspaceMesh: THREE.Mesh | null = null;
    let planeGeo: THREE.PlaneGeometry | null = null;
    let planeMat: THREE.MeshStandardMaterial | null = null;

    const updatePlaneScale = () => {
      if (!container) return;
      width = container.clientWidth || window.innerWidth;
      height = container.clientHeight || window.innerHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);

      // Visible frustum dimensions at z=0
      const vHeight = 2 * Math.tan(((fov * Math.PI) / 180) / 2) * cameraBaseZ;
      const vWidth = vHeight * (width / height);
      const vpAspect = width / height;

      // Cover scaling calculation
      let renderW: number;
      let renderH: number;
      let shiftX = 0;

      if (vpAspect > imgAspect) {
        // Viewport is wider than image
        renderW = vWidth * 1.05;
        renderH = renderW / imgAspect;
      } else {
        // Viewport is taller than image (desktop vertical or mobile)
        renderH = vHeight * 1.05;
        renderW = renderH * imgAspect;
        // On widescreen desktop, slightly bias to right so developer desk is centered-right
        if (width > 800) {
          shiftX = (vWidth - renderW) * -0.22;
        }
      }

      if (workspaceMesh) {
        workspaceMesh.scale.set(renderW, renderH, 1);
        workspaceMesh.position.set(shiftX, 0, 0);
      }

      // Synchronize DOM overlay stage to match the image plane in DOM pixels
      if (stageRef.current) {
        const pxToWorld = vHeight / height;
        const domW = renderW / pxToWorld;
        const domH = renderH / pxToWorld;
        const domLeft = (width - domW) / 2 + shiftX / pxToWorld;
        const domTop = (height - domH) / 2;

        stageRef.current.style.width = `${domW}px`;
        stageRef.current.style.height = `${domH}px`;
        stageRef.current.style.left = `${domLeft}px`;
        stageRef.current.style.top = `${domTop}px`;
      }
    };

    // Load cute workspace texture
    const textureLoader = new THREE.TextureLoader();
    textureLoader.load(
      '/assets/cute-developer-workspace.png',
      (texture) => {
        texture.generateMipmaps = true;
        texture.minFilter = THREE.LinearMipmapLinearFilter;
        texture.magFilter = THREE.LinearFilter;
        if (renderer.capabilities.getMaxAnisotropy) {
          texture.anisotropy = Math.min(renderer.capabilities.getMaxAnisotropy(), 8);
        }

        planeGeo = new THREE.PlaneGeometry(1, 1, 32, 32);
        planeMat = new THREE.MeshStandardMaterial({
          map: texture,
          roughness: 0.35,
          metalness: 0.08
        });

        workspaceMesh = new THREE.Mesh(planeGeo, planeMat);
        scene.add(workspaceMesh);
        updatePlaneScale();
      },
      undefined,
      (err) => {
        console.error('Error loading cute workspace texture:', err);
      }
    );

    // 5. Volumetric Foreground Floating Fairy Sparkles & Cyber Dust (280 Particles)
    const particleCount = 280;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const colCyan = new THREE.Color(0x38bdf8);
    const colPurple = new THREE.Color(0xa855f7);
    const colGold = new THREE.Color(0xfde047);
    const colWhite = new THREE.Color(0xffffff);

    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 16;
      particlePositions[i + 1] = (Math.random() - 0.5) * 10;
      particlePositions[i + 2] = 0.5 + Math.random() * 4.5;

      const rand = Math.random();
      const c = rand < 0.4 ? colCyan : rand < 0.7 ? colPurple : rand < 0.9 ? colGold : colWhite;
      particleColors[i] = c.r;
      particleColors[i + 1] = c.g;
      particleColors[i + 2] = c.b;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.055,
      vertexColors: true,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending
    });

    const particlePoints = new THREE.Points(particleGeo, particleMat);
    scene.add(particlePoints);

    // 6. Smooth Mouse Parallax Tracking
    let targetX = 0;
    let targetY = 0;
    let isHovering = false;
    let lastMouseMove = performance.now();

    const handleMouseMove = (e: MouseEvent) => {
      const normX = (e.clientX / window.innerWidth) * 2 - 1;
      const normY = -(e.clientY / window.innerHeight) * 2 + 1;

      targetX = Math.max(-1, Math.min(1, normX));
      targetY = Math.max(-1, Math.min(1, normY));
      isHovering = true;
      lastMouseMove = performance.now();
    };

    const handleMouseLeave = () => {
      isHovering = false;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', updatePlaneScale);

    // 7. Intersection Observer for Performance
    let isVisible = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    // 8. Main Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isVisible) return;

      const elapsedTime = clock.getElapsedTime();

      if (!prefersReducedMotion) {
        // Idle gentle breathing when pointer rests
        const now = performance.now();
        if (!isHovering || now - lastMouseMove > 2500) {
          targetX = Math.sin(elapsedTime * 0.35) * 0.16;
          targetY = Math.cos(elapsedTime * 0.28) * 0.1;
        }

        // Camera smooth lerp damping
        const camTargetX = targetX * 0.42;
        const camTargetY = targetY * 0.28;
        camera.position.x += (camTargetX - camera.position.x) * 0.035;
        camera.position.y += (camTargetY - camera.position.y) * 0.035;
        camera.lookAt(0, 0, 0);

        // Subtle 3D mesh tilt to enhance depth without distorting developer figure
        if (workspaceMesh) {
          workspaceMesh.rotation.y = targetX * 0.02;
          workspaceMesh.rotation.x = -targetY * 0.015;
        }

        // Dynamic lighting breathing
        cyanLight.intensity = 1.3 + Math.sin(elapsedTime * 1.5) * 0.25;
        purpleLight.intensity = 1.0 + Math.cos(elapsedTime * 1.2) * 0.2;
        warmLight.intensity = 0.8 + Math.sin(elapsedTime * 2.0) * 0.15;

        // Animate volumetric particles
        particlePoints.rotation.y = elapsedTime * 0.014;
        particlePoints.rotation.x = Math.sin(elapsedTime * 0.04) * 0.02;

        // Apply synchronized 3D perspective to overlay container
        if (stageRef.current) {
          const rotY = (targetX * 2.4).toFixed(2);
          const rotX = (-targetY * 1.6).toFixed(2);
          const transX = (-targetX * 4.5).toFixed(1);
          const transY = (targetY * 3.0).toFixed(1);
          stageRef.current.style.transform = `perspective(1200px) rotateX(${rotX}deg) rotateY(${rotY}deg) translate3d(${transX}px, ${transY}px, 0)`;
        }
      }

      renderer.render(scene, camera);
    };

    animate();

    // 9. Resource Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', updatePlaneScale);
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);

      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      if (planeGeo) planeGeo.dispose();
      if (planeMat) planeMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, []);

  if (!hasWebGL) {
    return (
      <div className="workspace-immersive-fallback">
        <img
          src="/assets/cute-developer-workspace.png"
          alt="P.S. Prashanth - Cute 3D Developer Workspace"
          className="workspace-fallback-img"
        />
        <div className="workspace-cinematic-scrim" />
      </div>
    );
  }

  return (
    <div className="workspace-immersive-bg" aria-hidden="true">
      {/* Full-Screen WebGL Canvas Mount */}
      <div className="workspace-fullscreen-canvas" ref={mountRef} />

      {/* Cinematic Multi-Stop Dark Gradient Scrim Overlay for Left-Side Text Contrast */}
      <div className="workspace-cinematic-scrim" />

      {/* Synchronized Parallax Overlays Container Aligned with Image Coordinates */}
      <div className="workspace-elements-stage" ref={stageRef}>
        {/* Ambient Moon Lamp Warm Glow */}
        <div className="cute-moon-lamp-glow" />

        {/* Ambient Fairy Lights Twinkle Aura */}
        <div className="cute-fairy-lights-aura" />

        {/* =======================================================
            1. CUTE FLOATING AI COMPANION ROBOT (WITH CUTE REACTION)
            Floating near the monitor, bobbing gently with glowing eyes
            ======================================================= */}
        <div
          className={`cute-ai-robot-companion ${robotChat ? 'is-talking' : ''}`}
          onMouseEnter={() => setRobotChat(true)}
          onMouseLeave={() => setRobotChat(false)}
          title="Agi • Prashanth's AI Companion Bot"
        >
          {/* Cute Floating Speech Bubble on Hover */}
          {robotChat && (
            <div className="robot-speech-bubble">
              <span>Hi Prashanth! Ready to code? 🚀</span>
            </div>
          )}

          {/* Floating Propulsion Jet Halo */}
          <div className="robot-jet-glow" />

          {/* Interactive Aura Ring */}
          <div className="robot-aura-ring" />
        </div>

        {/* =======================================================
            4. ACTIVE CODE SCANNING ON ULTRA-WIDE CURVED MONITOR
            Realistic active syntax stream & 'HAPPY CODING!' luminescence
            ======================================================= */}
        <div
          className="cute-monitor-code-stream"
          title="Primary Ultra-Wide Display • Live Telemetry Stream"
        >
          <div className="monitor-scanline" />
          <div className="monitor-code-marquee">
            <span className="m-line syn-cyan">{`const engine = new Engine();`}</span>
            <span className="m-line syn-green">{`await engine.deployPlacementMonitor();`}</span>
            <span className="m-line syn-purple">{`// Telemetry stream: 60 FPS`}</span>
            <span className="m-line syn-yellow">{`renderV8Heap({ live: true });`}</span>
            <span className="m-line syn-cyan">{`const engine = new Engine();`}</span>
            <span className="m-line syn-green">{`await engine.deployPlacementMonitor();`}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
