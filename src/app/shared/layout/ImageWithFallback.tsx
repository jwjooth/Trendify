import React, { useState } from "react";
import Image from "next/image";

const ERROR_IMG_SRC =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==";

interface ImageWithFallbackProps {
  src?: string;
  alt?: string;
  sizes?: string;
  className?: string;
  style?: React.CSSProperties;
}

export function ImageWithFallback({
  src,
  alt = "",
  sizes,
  className,
  style,
}: ImageWithFallbackProps) {
  const [didError, setDidError] = useState(false);

  if (didError || !src) {
    return (
      <div
        className={`relative flex items-center justify-center overflow-hidden bg-gray-100 ${className ?? ""}`}
        style={style}
      >
        <Image
          src={ERROR_IMG_SRC}
          alt={alt}
          width={64}
          height={64}
          unoptimized
        />
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden bg-gray-100 ${className ?? ""}`}
      style={style}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        onError={() => setDidError(true)}
      />
    </div>
  );
}
