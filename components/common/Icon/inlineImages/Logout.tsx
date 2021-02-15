import {  IconImgProps } from '../Icon.interfaces';
export default function Logout({className}: IconImgProps) {
  return (
    <svg className={`fillImg ${className}`} width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7.52381 11.1V8.4L3 12L7.52381 15.6V12.9H16V11.1H7.52381Z"/><path d="M8.50077 18.3233C9.9768 19.1187 11.6848 19.3792 13.3326 19.0603C14.9804 18.7413 16.4656 17.8628 17.5341 16.5749C18.6026 15.287 19.1881 13.6699 19.1904 12C19.1914 10.3284 18.6076 8.70855 17.5391 7.4183C16.4707 6.12805 14.9843 5.2478 13.3348 4.92853C11.6853 4.60926 9.97547 4.87087 8.49865 5.66848C7.5 5 7.5 5 7 4.46666C8.42273 3.5393 10.1242 3 11.9523 3C16.9493 3 20.9999 7.0293 20.9999 12C20.9999 16.9707 16.9493 21 11.9523 21C10.1242 21 8.42273 20.4607 7 19.5333C7.5 18.5 7.5 18.5 7.95861 18C8.13393 18.1152 8.31478 18.2231 8.50077 18.3233Z"/></svg>
  );
}