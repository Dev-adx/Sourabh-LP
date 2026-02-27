import { useEffect } from "react";

interface UseNonFBPixelProps {
  eventName: string;
  eventParams?: Record<string, any>;
}

let initialized = false;

export const useNonFBPixel = ({ eventName, eventParams }: UseNonFBPixelProps) => {
  useEffect(() => {
    if (window.fbq) {
      if (!initialized) {
        window.fbq("init", "1278108320936716");
        initialized = true;
      }
      window.fbq("track", eventName, eventParams);
    }
  }, []);
};
