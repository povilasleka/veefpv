"use client";

interface ThumbnailCellProps {
  cellData?: string;
}

export function ThumbnailCell({ cellData }: ThumbnailCellProps) {
  if (!cellData) {
    return <span style={{ opacity: 0.4 }}>—</span>;
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={cellData}
      alt=""
      style={{
        width: 50,
        height: 80,
        objectFit: "cover",
        borderRadius: "var(--style-radius-s)",
      }}
    />
  );
}
