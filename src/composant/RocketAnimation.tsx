import React, { useEffect, useRef, useState } from "react";

interface SpriteOnScrollProps {
  scrollRef: React.RefObject<HTMLElement>;
}

const SpriteOnScroll: React.FC<SpriteOnScrollProps> = ({ scrollRef }) => {
  const [frameIndex, setFrameIndex] = useState(99);
  const targetIndexRef = useRef(0);
  const directionRef = useRef<"up" | "down" | null>(null);
  const lastScrollTopRef = useRef(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Scroll detection
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleScroll = () => {
      const scrollTop = el.scrollTop;
      const lastScrollTop = lastScrollTopRef.current;

      if (scrollTop > lastScrollTop) {
        directionRef.current = "down";
      } else if (scrollTop < lastScrollTop) {
        directionRef.current = "up";
      }

      lastScrollTopRef.current = scrollTop;

      // Inactivité timeout
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        directionRef.current = null;
      }, 300); // stop après 300ms d'inactivité
    };

    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, [scrollRef]);

  // Animation loop (lissée)
  useEffect(() => {
    let raf: number;

    const animate = () => {
      if (directionRef.current === "up") {
        targetIndexRef.current = Math.max(targetIndexRef.current - 1, 0);
      } else if (directionRef.current === "down") {
        targetIndexRef.current = Math.min(targetIndexRef.current + 1, 99);
      }

      // Interpolation douce vers la target
      setFrameIndex((prev) => {
        const diff = targetIndexRef.current - prev;
        if (Math.abs(diff) < 0.01) return targetIndexRef.current;
        return prev + diff * 0.2; // 0.2 = easing
      });

      raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  const getBackgroundPosition = () => {
    const cols = 20;
    const rows = 5;

    const index = Math.round(frameIndex);
    const col = index % cols;
    const row = Math.floor(index / cols) + 1;

    const x = -(col * 100 / (cols - 1));
    const y = -(row * 100 / (rows - 1));
    console.log({col,row,x,y})
    return `${x}% ${y}%`;
  };

  return (
    <div className="absolute bottom-0 right-0 z-[50]">
        <div
        className="w-[232px] h-[1075px]"
        style={{
            backgroundImage: "url(/images/Rocket.webp)",
            backgroundPosition: getBackgroundPosition(),
        }}
        />
    </div>
  );
};

export default SpriteOnScroll;
