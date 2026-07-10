interface PlaceholderProps {
  label?: string;
  labelPosition?: "bottom" | "center";
  className?: string;
  children?: React.ReactNode;
}

export function Placeholder({
  label,
  labelPosition = "bottom",
  className = "",
  children,
}: PlaceholderProps) {
  return (
    <div className={`stripe-placeholder relative overflow-hidden ${className}`}>
      {label && (
        <div
          className={`absolute right-3 left-3 z-[2] font-mono text-[11px] leading-snug tracking-wide text-white/45 break-words ${
            labelPosition === "center"
              ? "top-1/2 -translate-y-1/2 text-center"
              : "bottom-3"
          }`}
        >
          {label}
        </div>
      )}
      {children}
    </div>
  );
}
