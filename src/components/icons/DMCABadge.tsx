import { cn } from "@/lib/utils";
import type { SVGProps } from "react";

export function DMCABadge(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 120 50"
      {...props}
      className={cn("w-auto", props.className)}
    >
      <rect width="120" height="50" rx="5" ry="5" fill="#1d2d3c" />
      <path
        d="M25.6 12.5h-9.2c-2.4 0-4.4 2-4.4 4.4v16.2c0 2.4 2 4.4 4.4 4.4h9.2c2.4 0 4.4-2 4.4-4.4V16.9c0-2.4-2-4.4-4.4-4.4zm-1.8 20.6c0 .9-.8 1.7-1.8 1.7h-7.4c-1 0-1.8-.8-1.8-1.7v-15c0-1 .8-1.8 1.8-1.8h7.4c.9 0 1.8.8 1.8 1.8v15z"
        fill="#fff"
      />
      <circle cx="21" cy="25" r="5" fill="#4a90e2" />
      <path d="M21 22v6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M19 25h4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
      <text
        x="68"
        y="22"
        fontFamily="Arial, sans-serif"
        fontSize="12"
        fontWeight="bold"
        fill="#fff"
        textAnchor="middle"
      >
        DMCA
      </text>
      <text
        x="68"
        y="38"
        fontFamily="Arial, sans-serif"
        fontSize="10"
        fill="#a9b7c6"
        textAnchor="middle"
      >
        PROTECTED
      </text>
    </svg>
  );
}
