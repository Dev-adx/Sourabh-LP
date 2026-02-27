import { useEffect, useRef } from "react";

interface UseFacebookPixelProps {
  eventName: string;
  eventParams?: Record<string, any>;
}

let initialized = false;

export const useFacebookPixel = ({ eventName, eventParams }: UseFacebookPixelProps) => {
  const tracked = useRef(false);

  useEffect(() => {
    if (window.fbq && !tracked.current) {
      tracked.current = true;
      if (!initialized) {
        window.fbq("init", "945210531500711");
        initialized = true;
      }
      window.fbq("track", eventName, eventParams);
    }
  }, []);
};
