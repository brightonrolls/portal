import * as React from 'react';
import { IconImgProps } from '../Icon.interfaces';

function SvgYoutube({ className }: IconImgProps) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 6C5.34315 6 4 7.34315 4 9V15C4 16.6569 5.34315 18 7 18H17C18.6569 18 20 16.6569 20 15V9C20 7.34315 18.6569 6 17 6H7ZM2 9C2 6.23858 4.23858 4 7 4H17C19.7614 4 22 6.23858 22 9V15C22 17.7614 19.7614 20 17 20H7C4.23858 20 2 17.7614 2 15V9Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.5073 8.1298C9.82081 7.95229 10.2056 7.95715 10.5145 8.14251L15.5145 11.1425C15.8157 11.3232 16 11.6487 16 12C16 12.3513 15.8157 12.6768 15.5145 12.8575L10.5145 15.8575C10.2056 16.0429 9.82081 16.0477 9.5073 15.8702C9.19379 15.6927 9 15.3603 9 15V9C9 8.63973 9.19379 8.30731 9.5073 8.1298ZM11 10.7662V13.2338L13.0563 12L11 10.7662Z"
        fill="white"
      />
    </svg>
  );
}

export default SvgYoutube;
