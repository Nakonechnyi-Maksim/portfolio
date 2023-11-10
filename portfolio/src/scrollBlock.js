import React, { useEffect, useRef } from "react";

export default function ScrollBlock({ children }) {
  const blockRef = useRef(null);
  const callbackFunc = (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("show", entry.isIntersecting);
    });
  };

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunc, options);

    if (blockRef.current) {
      observer.observe(blockRef.current);
    }

    return () => {
      if (blockRef.current) {
        observer.unobserve(blockRef.current);
      }
    };
  }, []);

  return <div ref={blockRef}>{children}</div>;
}
