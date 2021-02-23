import * as React from 'react';
import { IconImgProps } from '../Icon.interfaces';

function SvgLogin({ className }: IconImgProps) {
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
        d="M10.1429 11.1V8.4L14.6667 12L10.1429 15.6V12.9H3V11.1H10.1429ZM3.31914 14.7H5.24086C5.87242 16.2472 7.02478 17.528 8.50082 18.3233C9.97686 19.1187 11.6848 19.3792 13.3326 19.0603C14.9804 18.7413 16.4656 17.8628 17.5342 16.5749C18.6027 15.287 19.1882 13.6699 19.1905 12C19.1914 10.3284 18.6076 8.70855 17.5392 7.4183C16.4708 6.12805 14.9843 5.2478 13.3348 4.92853C11.6853 4.60926 9.97552 4.87087 8.4987 5.66848C7.02189 6.46609 5.87009 7.75 5.24086 9.3H3.31914C4.47181 5.6487 7.90086 3 11.9524 3C16.9494 3 21 7.0293 21 12C21 16.9707 16.9494 21 11.9524 21C7.90086 21 4.47181 18.3513 3.31914 14.7Z"
        fill="white"
      />
    </svg>
  );
}

export default SvgLogin;
