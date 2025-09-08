import { cn } from "@/lib/utils";
import type { SVGProps } from "react";

export function SSLBadge(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 120 50"
      {...props}
      className={cn("w-auto", props.className)}
    >
      <rect width="120" height="50" rx="5" ry="5" fill="#1d2d3c" />
      <path
        d="M21 15c-3.3 0-6 2.7-6 6v1c0 .6-.4 1-1 1s-1-.4-1-1v-1c0-4.4 3.6-8 8-8s8 3.6 8 8v1c0 .6-.4 1-1 1s-1-.4-1-1v-1c0-3.3-2.7-6-6-6z"
        fill="#4CAF50"
      />
      <rect x="12" y="21" width="18" height="15" rx="2" ry="2" fill="#4a90e2" />
      <circle cx="21" cy="28.5" r="1.5" fill="#1d2d3c" />
      <text
        x="70"
        y="22"
        fontFamily="Arial, sans-serif"
        fontSize="12"
        fontWeight="bold"
        fill="#fff"
        textAnchor="middle"
      >
        SSL
      </text>
      <text
        x="70"
        y="38"
        fontFamily="Arial, sans-serif"
        fontSize="10"
        fill="#a9b7c6"
        textAnchor="middle"
      >
        SECURED
      </text>
    </svg>
  );
}
