import { useEffect, useState } from "react";

const SHEET_URL =
  "https://script.google.com/macros/s/AKfycbzpttKDUxieudBnZV1NwfQFtAaBvLvIU5zpip5NKfhzlVqQrDO7tR2VIi8e-j1cgVXjkA/exec";
const CACHE_KEY = "workshopConfig";

// Read cached data synchronously — available instantly on first render
function readCache() {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

// Shared module-level state — all components share this, only ONE fetch happens
let sharedConfig: any = readCache();
const listeners = new Set<() => void>();

function notify() {
  listeners.forEach((fn) => fn());
}

// Fetch starts immediately when this module is imported (before React renders)
fetch(SHEET_URL + "?nocache=" + Date.now(), { cache: "no-store" })
  .then((res) => res.json())
  .then((data) => {
    sharedConfig = data;
    try {
      localStorage.setItem(CACHE_KEY, JSON.stringify(data));
    } catch {}
    notify();
  })
  .catch((err) => console.error("Sheet error:", err));

export function useWorkshopConfig() {
  const [config, setConfig] = useState<any>(sharedConfig);

  useEffect(() => {
    // Sync in case fetch already resolved before this component mounted
    setConfig(sharedConfig);

    const update = () => setConfig(sharedConfig);
    listeners.add(update);
    return () => {
      listeners.delete(update);
    };
  }, []);

  return { config, loading: config === null };
}
