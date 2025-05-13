import React, { useRef } from "react";
import useOnScreen from "./hooks/useOnScreen";
export default function LazyComponentWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null); // ✅ No "| null"
  const isVisible = useOnScreen(ref, 0.2);
  return <div ref={ref}>{isVisible ? children : null}</div>;
}
