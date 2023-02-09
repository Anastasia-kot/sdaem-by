import * as React from "react";
const SvgLock = (props) => (
  <svg
    width={16}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13.625 7.5H13V5c0-2.757-2.242-5-5-5S3 2.243 3 5v2.5h-.625C1.342 7.5.5 8.34.5 9.375v8.75C.5 19.159 1.342 20 2.375 20h11.25c1.033 0 1.875-.84 1.875-1.875v-8.75A1.877 1.877 0 0 0 13.625 7.5ZM4.667 5A3.337 3.337 0 0 1 8 1.667 3.337 3.337 0 0 1 11.333 5v2.5H4.667V5Zm4.166 8.935v1.898a.833.833 0 1 1-1.666 0v-1.898a1.661 1.661 0 0 1-.834-1.435c0-.92.748-1.667 1.667-1.667.92 0 1.667.748 1.667 1.667 0 .614-.338 1.146-.834 1.435Z"
      fill="#686868"
    />
  </svg>
);
export default SvgLock;
