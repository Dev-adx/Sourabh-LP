import { useEffect } from "react";

interface UseFacebookPixelProps {
  eventName: string;
  eventParams?: Record<string, any>;
}

export const useFacebookPixel = ({ eventName, eventParams }: UseFacebookPixelProps) => {
  useEffect(() => {
    if (window.fbq) {
      window.fbq("init", "945210531500711");
      window.fbq("track", eventName, eventParams);
    }
  }, []);
};