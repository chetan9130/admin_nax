import React, { useEffect, useRef, useState } from "react";

type FadeInProps = {
  children: React.ReactNode;
  className?: string;
  rootMargin?: string;
  threshold?: number;
  once?: boolean;
};

const FadeIn = ({ children, className = "", rootMargin = "0px 0px -10% 0px", threshold = 0.15, once = true }: FadeInProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once && el) observer.unobserve(el);
          } else {
            if (!once) setVisible(false);
          }
        });
      },
      { root: null, rootMargin, threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin, threshold, once]);

  return (
    <div ref={ref} className={`${className} ${visible ? "fade-in" : "opacity-0"}`}>
      {children}
    </div>
  );
};

export default FadeIn;
