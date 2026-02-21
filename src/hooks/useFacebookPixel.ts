import { useEffect } from "react";

interface UseFacebookPixelProps {
  eventName: string;
  eventParams?: Record<string, any>;
}

export const useFacebookPixel = ({ eventName, eventParams }: UseFacebookPixelProps) => {
  useEffect(() => {
    if (window.fbq) {
      window.fbq("track", eventName, eventParams);
    }
  }, []);
};