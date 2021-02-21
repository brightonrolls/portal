import * as React from 'react';
import { IconImgProps } from '../Icon.interfaces';

function SvgChecked({ className }: IconImgProps) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM12.4507 5.08257C12.733 4.51803 12.5042 3.83154 11.9396 3.54927C11.3751 3.267 10.6886 3.49583 10.4063 4.06037L7.68688 9.49928L5.37952 7.19192C4.9332 6.74561 4.20959 6.74561 3.76327 7.19192C3.31696 7.63824 3.31696 8.36185 3.76327 8.80817L7.19184 12.2367C7.45161 12.4965 7.82041 12.6156 8.18303 12.5567C8.54565 12.4979 8.85788 12.2683 9.02217 11.9397L12.4507 5.08257Z"
        fill="#FFE400"
      />
    </svg>
  );
}

export default SvgChecked;
