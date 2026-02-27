import { useEffect } from "react";

interface UseNonFBPixelProps {
  eventName: string;
  eventParams?: Record<string, any>;
}

export const useNonFBPixel = ({ eventName, eventParams }: UseNonFBPixelProps) => {
  useEffect(() => {
    // Initialize the non-FB pixel
    if (window.fbq) {
      window.fbq("init", "1278108320936716");
      window.fbq("track", eventName, eventParams);
    }
  }, [eventName, eventParams]);
};
