import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Fallback3D } from './Fallback3D';

export const ArchitectureCore3D: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [hasWebGL, setHasWebGL] = useState<boolean>(true);

  useEffect(() => {
    // Check if WebGL is supported
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) {
      setHasWebGL(false);
      return;
    }

    const container = mountRef.current;
    if (!container) return;

    // Check user preference for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // 1. Scene & Camera Setup
    const scene = new THREE.Scene();
    const width = container.clientWidth || 500;
    const height = container.clientHeight || 500;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 8.5;

    // 2. WebGL Renderer Setup
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0); // Transparent background
    container.appendChild(renderer.domElement);

    // 3. Central Software Core Group
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // A. Outer Wireframe Polyhedron
    const outerGeometry = new THREE.IcosahedronGeometry(2.3, 1);
    const outerMaterial = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.35
    });
    const outerMesh = new THREE.Mesh(outerGeometry, outerMaterial);
    coreGroup.add(outerMesh);

    // B. Inner Dense Geometric Node Core
    const innerGeometry = new THREE.DodecahedronGeometry(1.4, 0);
    const innerMaterial = new THREE.MeshBasicMaterial({
      color: 0x6366f1,
      wireframe: true,
      transparent: true,
      opacity: 0.6
    });
    const innerMesh = new THREE.Mesh(innerGeometry, innerMaterial);
    coreGroup.add(innerMesh);

    // C. Glowing Center Nucleus
    const centerGeo = new THREE.SphereGeometry(0.65, 16, 16);
    const centerMat = new THREE.MeshBasicMaterial({
      color: 0xa855f7,
      transparent: true,
      opacity: 0.8
    });
    const centerNucleus = new THREE.Mesh(centerGeo, centerMat);
    coreGroup.add(centerNucleus);

    // D. Orbiting Ring 1 (Cyan)
    const ring1Geo = new THREE.TorusGeometry(3.1, 0.02, 16, 100);
    const ring1Mat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.45
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 3;
    ring1.rotation.y = Math.PI / 6;
    scene.add(ring1);

    // E. Orbiting Ring 2 (Indigo / Purple)
    const ring2Geo = new THREE.TorusGeometry(3.4, 0.02, 16, 100);
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: 0x818cf8,
      transparent: true,
      opacity: 0.35
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.x = -Math.PI / 4;
    ring2.rotation.y = Math.PI / 4;
    scene.add(ring2);

    // F. Floating Satellite Node Spheres
    const nodeCount = 6;
    const satellites: THREE.Mesh[] = [];
    for (let i = 0; i < nodeCount; i++) {
      const nodeGeo = new THREE.SphereGeometry(0.12, 12, 12);
      const nodeMat = new THREE.MeshBasicMaterial({
        color: i % 2 === 0 ? 0x38bdf8 : 0x10b981
      });
      const sat = new THREE.Mesh(nodeGeo, nodeMat);
      scene.add(sat);
      satellites.push(sat);
    }

    // 4. Ambient Data Particle Cloud (800 particles)
    const particleCount = 600;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const c1 = new THREE.Color(0x38bdf8);
    const c2 = new THREE.Color(0x6366f1);
    const c3 = new THREE.Color(0xa855f7);

    for (let i = 0; i < particleCount * 3; i += 3) {
      const r = 3.5 + Math.random() * 4.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      positions[i] = r * Math.sin(phi) * Math.cos(theta);
      positions[i + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i + 2] = r * Math.cos(phi);

      const colorChoice = Math.random();
      const chosenColor = colorChoice < 0.4 ? c1 : colorChoice < 0.75 ? c2 : c3;
      colors[i] = chosenColor.r;
      colors[i + 1] = chosenColor.g;
      colors[i + 2] = chosenColor.b;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending
    });

    const particleCloud = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particleCloud);

    // 5. Interactive Mouse Parallax Tracking (Cinematic Camera Interpolation)
    let targetCameraX = 0;
    let targetCameraY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const normX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const normY = -(((event.clientY - rect.top) / rect.height) * 2 - 1);

      // Smooth bounded parallax targets
      targetCameraX = Math.max(-1.2, Math.min(1.2, normX * 0.9));
      targetCameraY = Math.max(-1.0, Math.min(1.0, normY * 0.7));
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // 6. Resize Observer
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // 7. Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      if (!prefersReducedMotion) {
        // Continuous smooth rotation for polyhedral software core
        coreGroup.rotation.y = elapsedTime * 0.15;
        coreGroup.rotation.x = Math.sin(elapsedTime * 0.2) * 0.1;

        // Counter-rotations for nested depth
        outerMesh.rotation.y = elapsedTime * 0.08;
        innerMesh.rotation.y = -elapsedTime * 0.25;
        innerMesh.rotation.z = Math.cos(elapsedTime * 0.15) * 0.15;

        ring1.rotation.z = elapsedTime * 0.12;
        ring2.rotation.z = -elapsedTime * 0.09;

        particleCloud.rotation.y = elapsedTime * 0.03;

        // Animate satellite nodes along orbit trajectories
        satellites.forEach((sat, index) => {
          const angle = elapsedTime * 0.7 + (index * (Math.PI * 2)) / nodeCount;
          const orbitRadius = 3.2 + (index % 2) * 0.4;
          sat.position.x = Math.cos(angle) * orbitRadius;
          sat.position.z = Math.sin(angle) * orbitRadius;
          sat.position.y = Math.sin(elapsedTime * 1.2 + index) * 0.5;
        });

        // Natural camera parallax interpolation
        camera.position.x += (targetCameraX - camera.position.x) * 0.04;
        camera.position.y += (targetCameraY - camera.position.y) * 0.04;
        camera.lookAt(scene.position);
      }

      renderer.render(scene, camera);
    };

    animate();

    // 8. Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);

      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      // Dispose resources
      outerGeometry.dispose();
      outerMaterial.dispose();
      innerGeometry.dispose();
      innerMaterial.dispose();
      centerGeo.dispose();
      centerMat.dispose();
      ring1Geo.dispose();
      ring1Mat.dispose();
      ring2Geo.dispose();
      ring2Mat.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  if (!hasWebGL) {
    return <Fallback3D />;
  }

  return (
    <div className="canvas-container" ref={mountRef} aria-label="Interactive 3D Software Architecture Core">
      <div className="canvas-overlay-badge">
        <span className="status-dot"></span>
        <span>Interactive WebGL 3D Core • Pointer Parallax</span>
      </div>
    </div>
  );
};
