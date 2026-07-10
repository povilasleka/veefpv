import { Fragment } from "react";

interface MarqueeProps {
  children: React.ReactNode;
  durationS?: number;
  className?: string;
}

/** Infinite horizontal ticker. Renders `children` twice back-to-back and animates -50%. */
export function Marquee({ children, durationS = 20, className = "" }: MarqueeProps) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <div
        className="flex w-max"
        style={{ animation: `marquee ${durationS}s linear infinite` }}
      >
        <Fragment key="a">{children}</Fragment>
        <Fragment key="b">{children}</Fragment>
      </div>
    </div>
  );
}
