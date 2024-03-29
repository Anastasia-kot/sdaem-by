import * as React from "react";
const SvgCross = (props) => (
  <svg
    width={10}
    height={10}
    fill="#664EF9"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5.916 5 9.81 1.106A.647.647 0 1 0 8.894.19L5 4.084 1.106.19a.647.647 0 1 0-.916.916L4.084 5 .19 8.894a.647.647 0 1 0 .916.916L5 5.916 8.894 9.81a.646.646 0 0 0 .916 0 .647.647 0 0 0 0-.916L5.916 5Z"
    />
  </svg>
);
export default SvgCross;
