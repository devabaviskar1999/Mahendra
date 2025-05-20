// analytics.ts or analytics.js

declare global {
  interface Window {
    gtag?: (
      command: "config" | "event" | "js",
      targetId: string,
      config?: Record<string, unknown>
    ) => void;
  }
}

export const pageview = (url: string) => {
  if (typeof window.gtag === "function") {
    window.gtag("config", "G-BHGN6V3WJZ", {
      page_path: url,
    });
  } else {
    console.warn("gtag not ready yet, retrying...");
    setTimeout(() => pageview(url), 500);
  }
};
