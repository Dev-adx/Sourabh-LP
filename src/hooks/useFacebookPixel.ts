import { useEffect } from "react";

interface UseFacebookPixelProps {
  eventName: string;
  eventParams?: Record<string, any>;
}

let initialized = false;

export const useFacebookPixel = ({ eventName, eventParams }: UseFacebookPixelProps) => {
  useEffect(() => {
    if (window.fbq) {
      if (!initialized) {
        window.fbq("init", "945210531500711");
        initialized = true;
      }
      window.fbq("track", eventName, eventParams);
    }
  }, []);
};
