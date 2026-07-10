interface GlitchHeadingProps {
  text: string;
  delayed?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

/** Headline text with a red/cyan glitch-slice duplicate driven by CSS (see .glitch in globals.css). */
export function GlitchHeading({ text, delayed = false, className = "", style }: GlitchHeadingProps) {
  return (
    <div
      data-text={text}
      className={`glitch ${delayed ? "glitch-delay" : ""} ${className}`}
      style={style}
    >
      {text}
    </div>
  );
}
