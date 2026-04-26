"use client";

import Image from "next/image";

type ImageSlotProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  overlay?: string;
  objectPosition?: string;
};

export default function ImageSlot({
  src,
  alt,
  className,
  priority = false,
  overlay = "linear-gradient(0deg, rgba(9,25,34,0.42), rgba(9,25,34,0.42))",
  objectPosition = "center",
}: ImageSlotProps) {
  return (
    <div
      className={className}
      style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}
    >
      <Image src={src} alt={alt} fill priority={priority} style={{ objectFit: "cover", objectPosition }} />
      <div style={{ position: "absolute", inset: 0, background: overlay }} />
    </div>
  );
}
