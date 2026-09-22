import React, { useEffect, useRef, useState } from 'react';

interface ClickRipple {
  id: number;
  x: number;
  y: number;
}

interface Spark {
  id: number;
  x: number;
  y: number;
  dx: number;
  dy: number;
  char: string;
}

export const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isBlinking, setIsBlinking] = useState(false);
  const [ripples, setRipples] = useState<ClickRipple[]>([]);
  const [sparks, setSparks] = useState<Spark[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check for touch device or reduced motion
    const isTouch = window.matchMedia('(hover: none)').matches;
    if (isTouch) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let currentX = mouseX;
    let currentY = mouseY;
    let velX = 0;
    let velY = 0;
    let angle = 0;
    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) setIsVisible(true);

      // Check if hovering interactive element
      const target = e.target as HTMLElement | null;
      if (target) {
        const isInteractive = Boolean(
          target.closest('button, a, input, textarea, select, [role="button"], .btn, .tech-holo-node, .psp-mug-glow-container')
        );
        setIsHovered(isInteractive);
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
      setIsClicking(true);
      const rippleId = Date.now();
      setRipples((prev) => [...prev.slice(-3), { id: rippleId, x: e.clientX, y: e.clientY }]);

      // Generate cute tactile tech micro-sparks
      const sparkChars = ['✦', '•', '{', '}', '<', '>'];
      const newSparks: Spark[] = Array.from({ length: 5 }, (_, i) => {
        const rad = (i * (Math.PI * 2)) / 5 + (Math.random() - 0.5) * 0.4;
        const dist = 24 + Math.random() * 18;
        return {
          id: rippleId + i,
          x: e.clientX,
          y: e.clientY,
          dx: Math.cos(rad) * dist,
          dy: Math.sin(rad) * dist,
          char: sparkChars[Math.floor(Math.random() * sparkChars.length)]
        };
      });
      setSparks((prev) => [...prev.slice(-10), ...newSparks]);

      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== rippleId));
      }, 700);

      setTimeout(() => {
        setSparks((prev) => prev.filter((s) => !newSparks.some((ns) => ns.id === s.id)));
      }, 600);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Smooth Spring Lerp Loop
    const renderLoop = () => {
      // Damped spring interpolation
      const k = 0.22;
      velX = (mouseX - currentX) * k;
      velY = (mouseY - currentY) * k;
      currentX += velX;
      currentY += velY;

      // Subtle dynamic banking angle based on horizontal velocity
      const targetAngle = Math.max(-25, Math.min(25, velX * 1.8));
      angle += (targetAngle - angle) * 0.15;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) rotate(${angle.toFixed(1)}deg)`;
      }

      animationFrameId = requestAnimationFrame(renderLoop);
    };

    renderLoop();

    // Occasional charming blinking cycle
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 160);
    }, 4200);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearInterval(blinkInterval);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Main Cute Cyber Drone Cursor Companion */}
      <div
        ref={cursorRef}
        className={`custom-cursor-drone ${isHovered ? 'is-hovered' : ''} ${isClicking ? 'is-clicking' : ''}`}
        aria-hidden="true"
      >
        {/* Little Magnetic Antenna Horns */}
        <div className="drone-antennas">
          <span className="antenna-horn left" />
          <span className="antenna-horn right" />
        </div>

        {/* Aerodynamic Cyber Drone Head / Visor */}
        <div className="drone-head">
          {/* Animated Expressive Digital Eyes */}
          <div className={`drone-face ${isBlinking ? 'is-blinking' : ''}`}>
            {isHovered ? (
              // Happy squinting sparkle eyes on hover (^‿^)
              <div className="eyes-happy">
                <span className="eye-arc left" />
                <span className="eye-arc right" />
              </div>
            ) : (
              // Cute glowing cyber pill eyes (• •)
              <div className="eyes-normal">
                <span className="eye-dot left" />
                <span className="eye-dot right" />
              </div>
            )}
          </div>

          {/* Holographic Ring Reticle (appears on hover) */}
          <div className="drone-hover-ring" />
        </div>

        {/* Propulsion Glow Jet Flame */}
        <div className="drone-propulsion" />
      </div>

      {/* Tactile Click Shockwave Ripples */}
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="cursor-shockwave-ripple"
          style={{
            left: `${ripple.x}px`,
            top: `${ripple.y}px`
          }}
          aria-hidden="true"
        />
      ))}

      {/* Tactile Click Floating Micro-Sparks */}
      {sparks.map((spark) => (
        <div
          key={spark.id}
          className="cursor-micro-spark"
          style={
            {
              left: `${spark.x}px`,
              top: `${spark.y}px`,
              '--dx': `${spark.dx}px`,
              '--dy': `${spark.dy}px`
            } as React.CSSProperties
          }
          aria-hidden="true"
        >
          {spark.char}
        </div>
      ))}
    </>
  );
};
