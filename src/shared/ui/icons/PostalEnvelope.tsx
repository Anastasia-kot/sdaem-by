import * as React from "react";

const SvgPostalEnvelope = (props) => (
  <svg
    width={18}
    height={15}
    fill="#686868"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M15.937 14.625c.393 0 .734-.13 1.024-.386L12.003 9.28l-.343.246c-.371.274-.672.487-.904.64-.23.153-.538.31-.922.469-.385.16-.743.239-1.075.239h-.02c-.331 0-.69-.08-1.073-.24a5.546 5.546 0 0 1-.923-.468 23.049 23.049 0 0 1-.904-.64l-.342-.248-4.959 4.96c.29.256.63.386 1.024.386h14.375ZM.986 6.158c-.37-.247-.7-.53-.986-.85v7.544l4.37-4.37c-.874-.61-2-1.384-3.384-2.324ZM16.524 6.158c-1.33.9-2.46 1.676-3.392 2.326l4.368 4.368V5.31c-.28.312-.605.595-.976.85Z" />
    <path d="M15.938.875H1.563c-.502 0-.887.17-1.157.508C.136 1.72 0 2.145 0 2.653c0 .41.18.854.538 1.332.358.479.738.855 1.142 1.128.221.156.889.62 2.002 1.392a645.12 645.12 0 0 1 2.559 1.782l.145.104.27.194c.211.153.387.277.527.371.14.095.31.2.508.318.199.117.386.205.562.263.175.059.338.088.488.088h.02c.149 0 .312-.03.488-.088.175-.058.362-.146.561-.263.199-.118.368-.224.508-.318s.316-.218.527-.371a67.97 67.97 0 0 1 .415-.298l.989-.687 3.582-2.487a4.645 4.645 0 0 0 1.191-1.201c.319-.469.478-.96.478-1.474 0-.43-.154-.798-.463-1.104a1.51 1.51 0 0 0-1.1-.459Z" />
  </svg>
);
export default SvgPostalEnvelope;