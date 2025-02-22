import { SVGProps } from "react";

export const GlobeIcon = (props: SVGProps<SVGRectElement>) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_141_2612)">
        <path
          d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z"
          stroke="#3E3D4B"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          {...props}
        />
        <path
          d="M1.5 9H16.5"
          stroke="#3E3D4B"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          {...props}
        />
        <path
          d="M9 1.5C10.876 3.55376 11.9421 6.21903 12 9C11.9421 11.781 10.876 14.4462 9 16.5C7.12404 14.4462 6.05794 11.781 6 9C6.05794 6.21903 7.12404 3.55376 9 1.5V1.5Z"
          stroke="#3E3D4B"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          {...props}
        />
      </g>
      <defs>
        <clipPath id="clip0_141_2612">
          <rect width="18" height="18" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
