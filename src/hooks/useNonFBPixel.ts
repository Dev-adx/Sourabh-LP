import { useEffect, useRef } from "react";

interface UseNonFBPixelProps {
  eventName: string;
  eventParams?: Record<string, any>;
}

let initialized = false;

export const useNonFBPixel = ({ eventName, eventParams }: UseNonFBPixelProps) => {
  const tracked = useRef(false);

  useEffect(() => {
    if (window.fbq && !tracked.current) {
      tracked.current = true;
      if (!initialized) {
        window.fbq("init", "945210531500711");
        window.fbq("init", "1278108320936716");
        initialized = true;
      }
      window.fbq("track", eventName, eventParams);
    }
  }, []);
};
