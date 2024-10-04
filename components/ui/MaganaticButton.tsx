"use client";

import { useState, useRef, useEffect } from "react";

import { ReactNode } from "react";

interface MagnetProps {
  children: ReactNode;
  padding?: number;
  disabled?: boolean;
}

const Magnet = ({ children, padding = 100, disabled = false }: MagnetProps) => {
  const [isActive, setIsActive] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const magnetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: { clientX: number; clientY: number }) => {
      if (magnetRef.current && !disabled) {
        const { left, top, width, height } =
          magnetRef.current.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;
        const distX = Math.abs(centerX - e.clientX);
        const distY = Math.abs(centerY - e.clientY);

        // Check if the mouse is within the padding area
        if (distX < width / 2 + padding && distY < height / 2 + padding) {
          setIsActive(true);
          // Calculate the offset
          const offsetX = (e.clientX - centerX) / 2;
          const offsetY = (e.clientY - centerY) / 2;
          setPosition({ x: offsetX, y: offsetY });
        } else {
          setIsActive(false);
          setPosition({ x: 0, y: 0 });
        }
      }
    };

    // Attach mouse move event listener
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [padding, disabled]);

  return (
    <div
      ref={magnetRef}
      style={{ position: "relative", display: "inline-block" }}
    >
      <div
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
          transition: isActive
            ? "transform 0.3s ease-out"
            : "transform 0.5s ease-in-out",
          willChange: "transform",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Magnet;
