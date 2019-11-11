import React from "react";

const style = () => `
.cls-1,
.cls-3,
.cls-4,
.cls-6,
.cls-7,
.cls-8,
.cls-9 {
  fill: #b1b3b4;
}

.cls-1,
.cls-12,
.cls-2,
.cls-4,
.cls-5,
.cls-6 {
  stroke: #b1b3b4;
}

.cls-1,
.cls-2,
.cls-5,
.cls-8,
.cls-9 {
  stroke-width: 0.23px;
}

.cls-12,
.cls-2 {
  fill: #fff;
}

.cls-4 {
  stroke-width: 0.24px;
}

.cls-5 {
  fill: none;
}

.cls-12,
.cls-6 {
  stroke-width: 0.22px;
}

.cls-7 {
  opacity: 0.5;
}

.cls-8 {
  stroke: #afb1b2;
}

.cls-9 {
  stroke: #87888a;
}

.cls-10 {
  fill: #dfe3f1;
}

.cls-11 {
  font-size: 13.11px;
  fill: #1a171b;
  font-family: Arial-BoldMT, Arial;
  font-weight: 700;
}

 .line_work circle.cls-4 {
    fill: #ffffff;
  }


        .assay-wells circle {
          opacity: 0;
          fill: blue;
        }


`;

function Assay(props) {
  const { values, acid, fillColor } = props;
  const assay = {
    a: [],
    b: [],
    c: [],
    d: [],
    e: [],
    f: [],
    g: [],
    h: []
  };

  values.map((val, i) => {
    if (i === 0) assay["a"] = val;
    if (i === 1) assay["b"] = val;
    if (i === 2) assay["c"] = val;
    if (i === 3) assay["d"] = val;
    if (i === 4) assay["e"] = val;
    if (i === 5) assay["f"] = val;
    if (i === 6) assay["g"] = val;
    if (i === 7) assay["h"] = val;
    return undefined;
  });

  const fill = acid ? "yellow" : fillColor;

  return (
    <svg version="1.1" viewBox="0 0 508.45 345.93">
      <defs>
        <style>{style()}</style>
      </defs>
      <title>s290_plasticbox_final</title>
      <g className="line_work" data-name="line work">
        <rect
          className="cls-1"
          x="71.32"
          y="49.5"
          width="437.01"
          height="296.31"
          rx="13.19"
          ry="13.19"
        />
        <path
          className="cls-2"
          transform="translate(-48.05 -27.65)"
          d="M543.21,368.32a8,8,0,0,0,8-8v-270a8,8,0,0,0-8-8H132.54a8,8,0,0,0-8,8v270c0,4.52,3.49,8.58,8,8Z"
        />
        <path
          className="cls-3"
          transform="translate(-48.05 -27.65)"
          d="M124.51,101.29l3.31,1.42v249L141.17,365H544.53a3.09,3.09,0,0,0,3.4-3c1.07-17.27,0-274.22,0-274.22a3.1,3.1,0,0,0-3.4-3H146l-18.58,18.67-2.9-2,19.12-19.12H542.8a8.6,8.6,0,0,1,6.57,2.87c1.18,1.18,1.88,3.15,1.88,5.87V360.29a8.9,8.9,0,0,1-1.36,4.47,7.91,7.91,0,0,1-6.68,3.56H139.72l-15.21-15.21Z"
        />
        <rect
          className="cls-1"
          x="94.15"
          y="64.79"
          width="391.41"
          height="265.76"
          rx="6.36"
          ry="6.36"
        />
        <rect
          className="cls-2"
          x="97.47"
          y="68.11"
          width="384.77"
          height="259.12"
          rx="3.04"
          ry="3.04"
        />
        <rect
          className="cls-4"
          x="97.48"
          y="276.77"
          width="384.76"
          height=".91"
        />
        <rect
          className="cls-4"
          x="97.48"
          y="308.41"
          width="384.76"
          height=".91"
        />
        <rect
          className="cls-4"
          x="97.48"
          y="213.44"
          width="384.76"
          height=".91"
        />
        <rect
          className="cls-4"
          x="97.48"
          y="245.08"
          width="384.76"
          height=".91"
        />
        <rect
          className="cls-4"
          x="97.48"
          y="150.19"
          width="384.76"
          height=".91"
        />
        <rect
          className="cls-4"
          x="97.48"
          y="181.84"
          width="384.76"
          height=".91"
        />
        <rect
          className="cls-4"
          x="97.48"
          y="86.86"
          width="384.76"
          height=".91"
        />
        <rect
          className="cls-4"
          x="97.48"
          y="118.51"
          width="384.76"
          height=".91"
        />
        <rect
          className="cls-4"
          x="463.42"
          y="68.1"
          width=".91"
          height="259.12"
        />
        <rect
          className="cls-4"
          x="431.69"
          y="68.1"
          width=".91"
          height="259.12"
        />
        <rect
          className="cls-4"
          x="400.02"
          y="68.1"
          width=".91"
          height="259.12"
        />
        <rect
          className="cls-4"
          x="368.29"
          y="68.1"
          width=".91"
          height="259.12"
        />
        <rect
          className="cls-4"
          x="336.7"
          y="68.1"
          width=".91"
          height="259.12"
        />
        <rect
          className="cls-4"
          x="304.97"
          y="68.1"
          width=".91"
          height="259.12"
        />
        <rect
          className="cls-4"
          x="273.3"
          y="68.1"
          width=".91"
          height="259.12"
        />
        <rect
          className="cls-4"
          x="241.58"
          y="68.1"
          width=".91"
          height="259.12"
        />
        <rect
          className="cls-4"
          x="210.1"
          y="68.1"
          width=".91"
          height="259.12"
        />
        <rect
          className="cls-4"
          x="178.37"
          y="68.1"
          width=".91"
          height="259.12"
        />
        <rect
          className="cls-4"
          x="146.71"
          y="68.1"
          width=".91"
          height="259.12"
        />
        <rect
          className="cls-4"
          x="114.98"
          y="68.1"
          width=".91"
          height="259.12"
        />
        <circle className="cls-4" cx="115.47" cy="87.35" r="13.92" />
        <circle className="cls-4" cx="115.47" cy="118.99" r="13.92" />
        <circle className="cls-4" cx="115.47" cy="150.63" r="13.92" />
        <circle className="cls-4" cx="115.47" cy="182.29" r="13.92" />
        <circle className="cls-4" cx="115.47" cy="213.93" r="13.92" />
        <circle className="cls-4" cx="115.47" cy="245.57" r="13.92" />
        <circle className="cls-4" cx="115.47" cy="277.23" r="13.92" />
        <circle className="cls-4" cx="115.47" cy="308.84" r="13.92" />
        <circle className="cls-4" cx="147.11" cy="87.35" r="13.92" />
        <circle className="cls-4" cx="147.11" cy="118.99" r="13.92" />
        <circle className="cls-4" cx="147.11" cy="150.63" r="13.92" />
        <circle className="cls-4" cx="147.11" cy="182.29" r="13.92" />
        <circle className="cls-4" cx="147.11" cy="213.93" r="13.92" />
        <circle className="cls-4" cx="147.11" cy="245.57" r="13.92" />
        <circle className="cls-4" cx="147.11" cy="277.23" r="13.92" />
        <circle className="cls-4" cx="147.11" cy="308.84" r="13.92" />
        <circle className="cls-4" cx="178.78" cy="87.35" r="13.92" />
        <circle className="cls-4" cx="178.78" cy="118.99" r="13.92" />
        <circle className="cls-4" cx="178.78" cy="150.63" r="13.92" />
        <circle className="cls-4" cx="178.78" cy="182.29" r="13.92" />
        <circle className="cls-4" cx="178.78" cy="213.93" r="13.92" />
        <circle className="cls-4" cx="178.78" cy="245.57" r="13.92" />
        <circle className="cls-4" cx="178.78" cy="277.23" r="13.92" />
        <circle className="cls-4" cx="178.78" cy="308.84" r="13.92" />
        <circle className="cls-4" cx="210.5" cy="87.35" r="13.92" />
        <circle className="cls-4" cx="210.5" cy="118.99" r="13.92" />
        <circle className="cls-4" cx="210.5" cy="150.63" r="13.92" />
        <circle className="cls-4" cx="210.5" cy="182.29" r="13.92" />
        <circle className="cls-4" cx="210.5" cy="213.93" r="13.92" />
        <circle className="cls-4" cx="210.5" cy="245.57" r="13.92" />
        <circle className="cls-4" cx="210.5" cy="277.23" r="13.92" />
        <circle className="cls-4" cx="210.5" cy="308.84" r="13.92" />
        <circle className="cls-4" cx="242.17" cy="87.35" r="13.92" />
        <circle className="cls-4" cx="242.17" cy="118.99" r="13.92" />
        <circle className="cls-4" cx="242.17" cy="150.63" r="13.92" />
        <circle className="cls-4" cx="242.17" cy="182.29" r="13.92" />
        <circle className="cls-4" cx="242.17" cy="213.93" r="13.92" />
        <circle className="cls-4" cx="242.17" cy="245.57" r="13.92" />
        <circle className="cls-4" cx="242.17" cy="277.23" r="13.92" />
        <circle className="cls-4" cx="242.17" cy="308.84" r="13.92" />
        <circle className="cls-4" cx="273.84" cy="87.35" r="13.92" />
        <circle className="cls-4" cx="273.84" cy="118.99" r="13.92" />
        <circle className="cls-4" cx="273.84" cy="150.63" r="13.92" />
        <circle className="cls-4" cx="273.84" cy="182.29" r="13.92" />
        <circle className="cls-4" cx="273.84" cy="213.93" r="13.92" />
        <circle className="cls-4" cx="273.84" cy="245.57" r="13.92" />
        <circle className="cls-4" cx="273.84" cy="277.23" r="13.92" />
        <circle className="cls-4" cx="273.84" cy="308.84" r="13.92" />
        <circle className="cls-4" cx="305.46" cy="87.35" r="13.92" />
        <circle className="cls-4" cx="305.46" cy="118.99" r="13.92" />
        <circle className="cls-4" cx="305.46" cy="150.63" r="13.92" />
        <circle className="cls-4" cx="305.46" cy="182.29" r="13.92" />
        <circle className="cls-4" cx="305.46" cy="213.93" r="13.92" />
        <circle className="cls-4" cx="305.46" cy="245.57" r="13.92" />
        <circle className="cls-4" cx="305.46" cy="277.23" r="13.92" />
        <circle className="cls-4" cx="305.46" cy="308.84" r="13.92" />
        <circle className="cls-4" cx="337.13" cy="87.35" r="13.92" />
        <circle className="cls-4" cx="337.13" cy="118.99" r="13.92" />
        <circle className="cls-4" cx="337.13" cy="150.63" r="13.92" />
        <circle className="cls-4" cx="337.13" cy="182.29" r="13.92" />
        <circle className="cls-4" cx="337.13" cy="213.93" r="13.92" />
        <circle className="cls-4" cx="337.13" cy="245.57" r="13.92" />
        <circle className="cls-4" cx="337.13" cy="277.23" r="13.92" />
        <circle className="cls-4" cx="337.13" cy="308.84" r="13.92" />
        <circle className="cls-4" cx="368.8" cy="87.35" r="13.92" />
        <circle className="cls-4" cx="368.8" cy="118.99" r="13.92" />
        <circle className="cls-4" cx="368.8" cy="150.63" r="13.92" />
        <circle className="cls-4" cx="368.8" cy="182.29" r="13.92" />
        <circle className="cls-4" cx="368.8" cy="213.93" r="13.92" />
        <circle className="cls-4" cx="368.8" cy="245.57" r="13.92" />
        <circle className="cls-4" cx="368.8" cy="277.23" r="13.92" />
        <circle className="cls-4" cx="368.8" cy="308.84" r="13.92" />
        <circle className="cls-4" cx="400.47" cy="87.35" r="13.92" />
        <circle className="cls-4" cx="400.47" cy="118.99" r="13.92" />
        <circle className="cls-4" cx="400.47" cy="150.63" r="13.92" />
        <circle className="cls-4" cx="400.47" cy="182.29" r="13.92" />
        <circle className="cls-4" cx="400.47" cy="213.93" r="13.92" />
        <circle className="cls-4" cx="400.47" cy="245.57" r="13.92" />
        <circle className="cls-4" cx="400.47" cy="277.23" r="13.92" />
        <circle className="cls-4" cx="400.47" cy="308.84" r="13.92" />
        <circle className="cls-4" cx="432.14" cy="87.35" r="13.92" />
        <circle className="cls-4" cx="432.14" cy="118.99" r="13.92" />
        <circle className="cls-4" cx="432.14" cy="150.63" r="13.92" />
        <circle className="cls-4" cx="432.14" cy="182.29" r="13.92" />
        <circle className="cls-4" cx="432.14" cy="213.93" r="13.92" />
        <circle className="cls-4" cx="432.14" cy="245.57" r="13.92" />
        <circle className="cls-4" cx="432.14" cy="277.23" r="13.92" />
        <circle className="cls-4" cx="432.14" cy="308.84" r="13.92" />
        <circle className="cls-4" cx="463.85" cy="87.35" r="13.92" />
        <circle className="cls-4" cx="463.85" cy="118.99" r="13.92" />
        <circle className="cls-4" cx="463.85" cy="150.63" r="13.92" />
        <circle className="cls-4" cx="463.85" cy="182.29" r="13.92" />
        <circle className="cls-4" cx="463.85" cy="213.93" r="13.92" />
        <circle className="cls-4" cx="463.85" cy="245.57" r="13.92" />
        <circle className="cls-4" cx="463.85" cy="277.23" r="13.92" />
        <circle className="cls-4" cx="463.85" cy="308.84" r="13.92" />
        <path
          className="cls-5"
          transform="translate(-48.05 -27.65)"
          d="M127.82,102.86v248.8L141.17,365H544.89a3,3,0,0,0,3-3V87.61a2.94,2.94,0,0,0-3-2.92H146Z"
        />
        <circle className="cls-6" cx="115.47" cy="308.87" r="12.98" />
        <circle className="cls-4" cx="115.47" cy="308.87" r="13.92" />
        <circle className="cls-6" cx="147.11" cy="308.87" r="12.98" />
        <circle className="cls-4" cx="147.11" cy="308.87" r="13.92" />
        <circle className="cls-6" cx="178.78" cy="308.87" r="12.98" />
        <circle className="cls-4" cx="178.78" cy="308.87" r="13.92" />
        <circle className="cls-6" cx="210.5" cy="308.87" r="12.98" />
        <circle className="cls-4" cx="210.5" cy="308.87" r="13.92" />
        <circle className="cls-6" cx="242.17" cy="308.87" r="12.98" />
        <circle className="cls-4" cx="242.17" cy="308.87" r="13.92" />
        <circle className="cls-6" cx="273.84" cy="308.87" r="12.98" />
        <circle className="cls-4" cx="273.84" cy="308.87" r="13.92" />
        <circle className="cls-6" cx="305.46" cy="308.87" r="12.98" />
        <circle className="cls-4" cx="305.46" cy="308.87" r="13.92" />
        <circle className="cls-6" cx="337.13" cy="308.87" r="12.98" />
        <circle className="cls-4" cx="337.13" cy="308.87" r="13.92" />
        <circle className="cls-6" cx="368.8" cy="308.87" r="12.98" />
        <circle className="cls-4" cx="368.8" cy="308.87" r="13.92" />
        <circle className="cls-6" cx="400.47" cy="308.87" r="12.98" />
        <circle className="cls-4" cx="400.47" cy="308.87" r="13.92" />
        <circle className="cls-6" cx="432.14" cy="308.87" r="12.98" />
        <circle className="cls-4" cx="432.14" cy="308.87" r="13.92" />
        <circle className="cls-6" cx="463.85" cy="308.87" r="12.98" />
        <circle className="cls-4" cx="463.85" cy="308.87" r="13.92" />
        <line className="cls-5" x1="76.45" x2="91.67" y1="325.46" y2="340.67" />
        <line className="cls-5" x1="95.58" x2="76.45" y1="54.64" y2="73.76" />
        <rect
          className="cls-7"
          x="71.32"
          y="49.5"
          width="437.01"
          height="296.31"
          rx="13.19"
          ry="13.19"
        />
        <path
          className="cls-8"
          transform="translate(-48.05 -27.65)"
          d="m139.81 119h-2.06l-0.82-2.13h-3.75l-0.78 2.13h-2l3.66-9.38h2zm-3.49-3.71-1.32-3.46-1.27 3.48z"
        />
        <path
          className="cls-8"
          transform="translate(-48.05 -27.65)"
          d="M131.29,142.3H135a11.29,11.29,0,0,1,1.67.09,2.41,2.41,0,0,1,1,.39,2.47,2.47,0,0,1,.72.78,2.14,2.14,0,0,1,.28,1.1,2.25,2.25,0,0,1-.35,1.21,2.16,2.16,0,0,1-1,.82,2.4,2.4,0,0,1,1.32.86,2.23,2.23,0,0,1,.46,1.41,2.72,2.72,0,0,1-.29,1.24,2.44,2.44,0,0,1-.82,1,2.71,2.71,0,0,1-1.27.45q-.47,0-2.28.06h-3.2Zm1.9,1.56V146h1.24q1.11,0,1.38,0a1.22,1.22,0,0,0,.76-.34,1,1,0,0,0,.28-.73,1,1,0,0,0-.24-.71,1.1,1.1,0,0,0-.71-.33q-.28,0-1.62,0Zm0,3.73v2.51h1.75a8.15,8.15,0,0,0,1.3-.06,1.17,1.17,0,0,0,.69-.37,1.16,1.16,0,0,0,.27-.8,1.22,1.22,0,0,0-.21-.72,1.2,1.2,0,0,0-.59-.43,6.51,6.51,0,0,0-1.68-.13Z"
        />
        <path
          className="cls-8"
          transform="translate(-48.05 -27.65)"
          d="M137.29,179.93l1.84.58a4.1,4.1,0,0,1-1.41,2.29,4.44,4.44,0,0,1-5.56-.53,4.93,4.93,0,0,1-1.21-3.5,5.18,5.18,0,0,1,1.21-3.64,4.17,4.17,0,0,1,3.19-1.29,3.88,3.88,0,0,1,2.79,1,3.61,3.61,0,0,1,1,1.72l-1.87.45a2,2,0,0,0-.7-1.15,2,2,0,0,0-1.28-.42,2.12,2.12,0,0,0-1.69.75,3.61,3.61,0,0,0-.65,2.42,3.94,3.94,0,0,0,.64,2.54,2.07,2.07,0,0,0,1.66.75,1.88,1.88,0,0,0,1.3-.48A2.81,2.81,0,0,0,137.29,179.93Z"
        />
        <path
          className="cls-8"
          transform="translate(-48.05 -27.65)"
          d="M131.28,205.49h3.46a6.78,6.78,0,0,1,1.79.18,3.12,3.12,0,0,1,1.41.86,3.92,3.92,0,0,1,.9,1.52,6.79,6.79,0,0,1,.31,2.22,6.25,6.25,0,0,1-.29,2,4.12,4.12,0,0,1-1,1.65,3.27,3.27,0,0,1-1.33.75,5.39,5.39,0,0,1-1.67.2h-3.57Zm1.9,1.59v6.21h1.41a5.21,5.21,0,0,0,1.15-.09,1.83,1.83,0,0,0,.76-.39,2,2,0,0,0,.5-.91,6,6,0,0,0,.19-1.71,5.49,5.49,0,0,0-.19-1.67,2.12,2.12,0,0,0-.54-.91,1.8,1.8,0,0,0-.88-.45,8.78,8.78,0,0,0-1.55-.08Z"
        />
        <path
          className="cls-8"
          transform="translate(-48.05 -27.65)"
          d="M131.65,246.81v-9.39h7V239h-5.07v2.08h4.72v1.58h-4.72v2.56h5.25v1.58Z"
        />
        <path
          className="cls-8"
          transform="translate(-48.05 -27.65)"
          d="m132 278.21v-9.38h6.43v1.58h-4.54v2.23h3.92v1.58h-3.92v4z"
        />
        <path
          className="cls-8"
          transform="translate(-48.05 -27.65)"
          d="M135.29,306.34v-1.58h4.08v3.73a5,5,0,0,1-1.72,1,6.38,6.38,0,0,1-2.29.44,5.17,5.17,0,0,1-2.57-.62,3.86,3.86,0,0,1-1.64-1.77,5.65,5.65,0,0,1-.55-2.5,5.4,5.4,0,0,1,.61-2.6,4.17,4.17,0,0,1,1.8-1.75,4.87,4.87,0,0,1,2.25-.47A4.49,4.49,0,0,1,138,301a3.3,3.3,0,0,1,1.26,2l-1.88.35a2,2,0,0,0-.75-1.09,2.28,2.28,0,0,0-1.36-.4,2.56,2.56,0,0,0-2,.79,3.3,3.3,0,0,0-.73,2.34,3.69,3.69,0,0,0,.74,2.5,2.49,2.49,0,0,0,2,.84,3.2,3.2,0,0,0,1.19-.24,4,4,0,0,0,1-.56v-1.19Z"
        />
        <path
          className="cls-8"
          transform="translate(-48.05 -27.65)"
          d="m131.29 341.59v-9.39h1.9v3.7h3.71v-3.7h1.9v9.39h-1.9v-4.11h-3.71v4.11z"
        />
        <path
          className="cls-9"
          transform="translate(-48.05 -27.65)"
          d="M164.69,91.26h-1V87.39a3.55,3.55,0,0,1-1.33.78v-.93a3.23,3.23,0,0,0,.88-.5,2,2,0,0,0,.65-.86h.83Z"
        />
        <path
          className="cls-9"
          transform="translate(-48.05 -27.65)"
          d="M225.28,89.84l1-.12a1,1,0,0,0,.26.58.73.73,0,0,0,1,0,.92.92,0,0,0,.22-.65.85.85,0,0,0-.21-.61.64.64,0,0,0-.51-.23,1.84,1.84,0,0,0-.47.08l.11-.84a.89.89,0,0,0,.64-.18.64.64,0,0,0,.22-.51.56.56,0,0,0-.16-.43.58.58,0,0,0-.43-.17.65.65,0,0,0-.45.19.9.9,0,0,0-.23.53l-.94-.16a2.16,2.16,0,0,1,.29-.78,1.4,1.4,0,0,1,.56-.45,1.88,1.88,0,0,1,.8-.17,1.59,1.59,0,0,1,1.21.48,1.24,1.24,0,0,1,.38.9,1.26,1.26,0,0,1-.77,1.12,1.33,1.33,0,0,1,.74.44,1.31,1.31,0,0,1,.27.83,1.62,1.62,0,0,1-.51,1.21,1.81,1.81,0,0,1-1.29.5,1.76,1.76,0,0,1-1.2-.42A1.66,1.66,0,0,1,225.28,89.84Z"
        />
        <path
          className="cls-9"
          transform="translate(-48.05 -27.65)"
          d="M259,91.26V90.19h-2.2v-.9l2.33-3.41H260v3.4h.67v.91H260v1.07Zm0-2V87.45l-1.23,1.83Z"
        />
        <path
          className="cls-9"
          transform="translate(-48.05 -27.65)"
          d="M288.59,89.89l1-.11a.87.87,0,0,0,.26.55.71.71,0,0,0,.49.2.68.68,0,0,0,.55-.26,1.18,1.18,0,0,0,.22-.79,1.07,1.07,0,0,0-.22-.74.75.75,0,0,0-.57-.24,1.06,1.06,0,0,0-.8.39l-.83-.12.52-2.79H292v1H290l-.16.91a1.5,1.5,0,0,1,.7-.17,1.53,1.53,0,0,1,1.16.49,1.79,1.79,0,0,1,.48,1.29,2,2,0,0,1-.38,1.19,1.73,1.73,0,0,1-1.46.71,1.84,1.84,0,0,1-1.21-.4A1.67,1.67,0,0,1,288.59,89.89Z"
        />
        <path
          className="cls-9"
          transform="translate(-48.05 -27.65)"
          d="M323.82,87.22l-1,.1a.78.78,0,0,0-.19-.45.55.55,0,0,0-.4-.15.66.66,0,0,0-.55.3,2.47,2.47,0,0,0-.28,1.22,1.17,1.17,0,0,1,.95-.46,1.46,1.46,0,0,1,1.1.49,1.77,1.77,0,0,1,.46,1.27,1.82,1.82,0,0,1-.48,1.32,1.75,1.75,0,0,1-2.58-.14,4.37,4.37,0,0,1,0-4.19,1.76,1.76,0,0,1,1.41-.65,1.47,1.47,0,0,1,1,.34A1.58,1.58,0,0,1,323.82,87.22Zm-2.33,2.24a1.18,1.18,0,0,0,.23.77.69.69,0,0,0,.53.27.61.61,0,0,0,.48-.22,1.51,1.51,0,0,0,0-1.5.66.66,0,0,0-1,0A1,1,0,0,0,321.49,89.46Z"
        />
        <path
          className="cls-9"
          transform="translate(-48.05 -27.65)"
          d="M352,86.93V86h3.52v.74a5.76,5.76,0,0,0-.89,1.23,7.19,7.19,0,0,0-.68,1.7,5.88,5.88,0,0,0-.23,1.61h-1a6.88,6.88,0,0,1,.45-2.26,7.74,7.74,0,0,1,1.16-2.07Z"
        />
        <path
          className="cls-9"
          transform="translate(-48.05 -27.65)"
          d="M384.5,88.37a1.24,1.24,0,0,1-.58-.46,1.22,1.22,0,0,1-.18-.65,1.29,1.29,0,0,1,.42-1,2,2,0,0,1,2.38,0,1.29,1.29,0,0,1,.42,1,1.15,1.15,0,0,1-.74,1.11,1.35,1.35,0,0,1,.91,1.32,1.61,1.61,0,0,1-.47,1.2,1.74,1.74,0,0,1-1.26.47,1.93,1.93,0,0,1-1.22-.38,1.52,1.52,0,0,1-.57-1.25,1.59,1.59,0,0,1,.21-.8A1.37,1.37,0,0,1,384.5,88.37Zm.12,1.26a.89.89,0,0,0,.22.66.68.68,0,0,0,.54.24.67.67,0,0,0,.53-.23,1,1,0,0,0,.2-.66.84.84,0,0,0-.21-.6.71.71,0,0,0-.54-.23.66.66,0,0,0-.56.26A1,1,0,0,0,384.62,89.63Zm.09-2.29a.61.61,0,0,0,.18.47.6.6,0,0,0,.46.18.64.64,0,0,0,.47-.18.66.66,0,0,0-.93-.94A.63.63,0,0,0,384.71,87.34Z"
        />
        <path
          className="cls-9"
          transform="translate(-48.05 -27.65)"
          d="M415.34,90l1-.11a.73.73,0,0,0,.19.45.58.58,0,0,0,.41.15.68.68,0,0,0,.54-.29,2.48,2.48,0,0,0,.29-1.22,1.23,1.23,0,0,1-1,.45A1.45,1.45,0,0,1,415.7,89a1.78,1.78,0,0,1-.46-1.28,1.81,1.81,0,0,1,.48-1.31,1.67,1.67,0,0,1,1.24-.5,1.64,1.64,0,0,1,1.33.63,4.35,4.35,0,0,1,0,4.2,1.76,1.76,0,0,1-1.42.65,1.45,1.45,0,0,1-1-.34A1.57,1.57,0,0,1,415.34,90Zm2.33-2.24a1.18,1.18,0,0,0-.23-.77.67.67,0,0,0-.53-.28.62.62,0,0,0-.48.23,1.17,1.17,0,0,0-.18.73,1.18,1.18,0,0,0,.2.77.65.65,0,0,0,.51.24.64.64,0,0,0,.5-.23A1,1,0,0,0,417.67,87.78Z"
        />
        <path
          className="cls-9"
          transform="translate(-48.05 -27.65)"
          d="M447.5,91.26h-1V87.39a3.63,3.63,0,0,1-1.33.78v-.93a3.23,3.23,0,0,0,.88-.5,1.88,1.88,0,0,0,.64-.86h.84Z"
        />
        <path
          className="cls-9"
          transform="translate(-48.05 -27.65)"
          d="M450.77,85.88a1.47,1.47,0,0,1,1.22.56,3.51,3.51,0,0,1,.52,2.18,3.6,3.6,0,0,1-.52,2.19,1.49,1.49,0,0,1-1.22.55,1.54,1.54,0,0,1-1.26-.61,4.87,4.87,0,0,1,.05-4.32A1.44,1.44,0,0,1,450.77,85.88Zm0,.85a.52.52,0,0,0-.33.12.82.82,0,0,0-.23.43,6,6,0,0,0-.1,1.34,6.22,6.22,0,0,0,.09,1.3.89.89,0,0,0,.24.47.57.57,0,0,0,.33.11.48.48,0,0,0,.33-.12.73.73,0,0,0,.23-.42,5.86,5.86,0,0,0,.11-1.34,5.43,5.43,0,0,0-.1-1.3.89.89,0,0,0-.24-.47A.48.48,0,0,0,450.77,86.73Z"
        />
        <path
          className="cls-9"
          transform="translate(-48.05 -27.65)"
          d="M479.44,91.26h-1V87.39a3.55,3.55,0,0,1-1.33.78v-.93a3.23,3.23,0,0,0,.88-.5,2,2,0,0,0,.65-.86h.83Z"
        />
        <path
          className="cls-9"
          transform="translate(-48.05 -27.65)"
          d="M483.19,91.26h-1V87.39a3.51,3.51,0,0,1-1.32.78v-.93a3.19,3.19,0,0,0,.87-.5,1.9,1.9,0,0,0,.65-.86h.83Z"
        />
        <path
          className="cls-9"
          transform="translate(-48.05 -27.65)"
          d="M510.91,91.26h-1V87.39a3.63,3.63,0,0,1-1.33.78v-.93a3,3,0,0,0,.87-.5,1.83,1.83,0,0,0,.65-.86h.84Z"
        />
        <path
          className="cls-9"
          transform="translate(-48.05 -27.65)"
          d="M515.91,90.31v1h-3.6a2.53,2.53,0,0,1,.35-1A6.86,6.86,0,0,1,513.82,89a7.23,7.23,0,0,0,.85-.88,1.12,1.12,0,0,0,.21-.62.72.72,0,0,0-.18-.53.69.69,0,0,0-.51-.19.66.66,0,0,0-.51.2.92.92,0,0,0-.22.64l-1-.1a1.65,1.65,0,0,1,.58-1.22,1.89,1.89,0,0,1,1.2-.37,1.73,1.73,0,0,1,1.25.43,1.4,1.4,0,0,1,.45,1.06,1.8,1.8,0,0,1-.13.69,2.55,2.55,0,0,1-.41.69,6.64,6.64,0,0,1-.67.68c-.33.3-.53.5-.62.59s-.15.2-.21.29Z"
        />
        <path
          className="cls-9"
          transform="translate(-48.05 -27.65)"
          d="M197.09,90.31v1h-3.6a2.39,2.39,0,0,1,.35-1A6.52,6.52,0,0,1,195,89a7.23,7.23,0,0,0,.85-.88,1.12,1.12,0,0,0,.21-.62.72.72,0,0,0-.18-.53.78.78,0,0,0-1,0,1,1,0,0,0-.22.64l-1-.1a1.68,1.68,0,0,1,.57-1.22,1.94,1.94,0,0,1,1.21-.37,1.73,1.73,0,0,1,1.25.43,1.4,1.4,0,0,1,.45,1.06,1.8,1.8,0,0,1-.13.69,2.84,2.84,0,0,1-.41.69,6.64,6.64,0,0,1-.67.68c-.33.3-.53.5-.62.59a1.61,1.61,0,0,0-.21.29Z"
        />
      </g>
      <g className="assay-text-top">
        <rect
          className="cls-10"
          transform="translate(-32.03 110.21) rotate(-45)"
          x="151.18"
          y="41.81"
          width="46.49"
          height="15.57"
        />
        <text
          className="cls-11"
          transform="translate(116.31 38.35) rotate(-45)"
        >
          00000
        </text>
        <rect
          className="cls-10"
          transform="translate(-22.75 132.62) rotate(-45)"
          x="182.88"
          y="41.81"
          width="46.49"
          height="15.57"
        />
        <text
          className="cls-11"
          transform="translate(148.01 38.35) rotate(-45)"
        >
          00000
        </text>
        <rect
          className="cls-10"
          transform="translate(-13.56 154.8) rotate(-45)"
          x="214.24"
          y="41.81"
          width="46.49"
          height="15.57"
        />
        <text
          className="cls-11"
          transform="translate(179.37 38.35) rotate(-45)"
        >
          00000
        </text>
        <rect
          className="cls-10"
          transform="translate(-4.21 177.37) rotate(-45)"
          x="246.16"
          y="41.81"
          width="46.49"
          height="15.57"
        />
        <text className="cls-11" transform="translate(211.3 38.35) rotate(-45)">
          00000
        </text>
        <rect
          className="cls-10"
          transform="translate(5.04 199.7) rotate(-45)"
          x="277.73"
          y="41.81"
          width="46.49"
          height="15.57"
        />
        <text
          className="cls-11"
          transform="translate(242.87 38.35) rotate(-45)"
        >
          00000
        </text>
        <rect
          className="cls-10"
          transform="translate(14.35 222.18) rotate(-45)"
          x="309.53"
          y="41.81"
          width="46.49"
          height="15.57"
        />
        <text
          className="cls-11"
          transform="translate(274.67 38.35) rotate(-45)"
        >
          00000
        </text>
        <rect
          className="cls-10"
          transform="translate(23.55 244.38) rotate(-45)"
          x="340.93"
          y="41.81"
          width="46.49"
          height="15.57"
        />
        <text
          className="cls-11"
          transform="translate(306.07 38.35) rotate(-45)"
        >
          00000
        </text>
        <rect
          className="cls-10"
          transform="translate(32.79 266.69) rotate(-45)"
          x="372.48"
          y="41.81"
          width="46.49"
          height="15.57"
        />
        <text
          className="cls-11"
          transform="translate(337.62 38.35) rotate(-45)"
        >
          00000
        </text>
        <rect
          className="cls-10"
          transform="translate(42.14 289.27) rotate(-45)"
          x="404.42"
          y="41.81"
          width="46.49"
          height="15.57"
        />
        <text
          className="cls-11"
          transform="translate(369.55 38.35) rotate(-45)"
        >
          00000
        </text>
        <rect
          className="cls-10"
          transform="translate(51.44 311.74) rotate(-45)"
          x="436.18"
          y="41.81"
          width="46.49"
          height="15.57"
        />
        <text
          className="cls-11"
          transform="translate(401.32 38.35) rotate(-45)"
        >
          00000
        </text>
        <rect
          className="cls-10"
          transform="translate(60.72 334.14) rotate(-45)"
          x="467.87"
          y="41.81"
          width="46.49"
          height="15.57"
        />
        <text className="cls-11" transform="translate(433 38.35) rotate(-45)">
          00000
        </text>
        <rect
          className="cls-10"
          transform="translate(70.03 356.6) rotate(-45)"
          x="499.63"
          y="41.81"
          width="46.49"
          height="15.57"
        />
        <text
          className="cls-11"
          transform="translate(464.77 38.35) rotate(-45)"
        >
          00000
        </text>
      </g>
      <g className="assay-text-left">
        <rect className="cls-10" y="79.36" width="65.7" height="15.57" />
        <text className="cls-11" transform="translate(4.53 91.59)">
          Sample 1
        </text>
        <rect className="cls-10" y="111.63" width="65.7" height="15.57" />
        <text className="cls-11" transform="translate(4.53 123.86)">
          Sample 1
        </text>
        <rect className="cls-10" y="143.84" width="65.7" height="15.57" />
        <text className="cls-11" transform="translate(4.53 156.07)">
          Sample 1
        </text>
        <rect className="cls-10" y="174.96" width="65.7" height="15.57" />
        <text className="cls-11" transform="translate(4.53 187.19)">
          Sample 1
        </text>
        <rect className="cls-10" y="207.09" width="65.7" height="15.57" />
        <text className="cls-11" transform="translate(4.53 219.31)">
          Sample 1
        </text>
        <rect className="cls-10" y="238.62" width="65.7" height="15.57" />
        <text className="cls-11" transform="translate(4.53 250.85)">
          Sample 1
        </text>
        <rect className="cls-10" y="269.9" width="65.7" height="15.57" />
        <text className="cls-11" transform="translate(4.53 282.13)">
          Sample 1
        </text>
        <rect className="cls-10" y="301.94" width="65.7" height="15.57" />
        <text className="cls-11" transform="translate(4.53 314.17)">
          Sample 1
        </text>
      </g>
      <g className="assay-wells">
        <circle
          data-well="a1"
          style={{ fill, opacity: assay.a[0].opacity }}
          cx="115.47"
          cy="87.35"
          r="12.98"
        />
        <circle
          data-well="a2"
          style={{ fill, opacity: assay.a[1].opacity }}
          cx="147.11"
          cy="87.35"
          r="12.98"
        />
        <circle
          data-well="a3"
          style={{ fill, opacity: assay.a[2].opacity }}
          cx="178.78"
          cy="87.35"
          r="12.98"
        />
        <circle
          data-well="a4"
          style={{ fill, opacity: assay.a[3].opacity }}
          cx="210.5"
          cy="87.35"
          r="12.98"
        />
        <circle
          data-well="a5"
          style={{ fill, opacity: assay.a[4].opacity }}
          cx="242.17"
          cy="87.35"
          r="12.98"
        />
        <circle
          data-well="a6"
          style={{ fill, opacity: assay.a[5].opacity }}
          cx="273.84"
          cy="87.35"
          r="12.98"
        />
        <circle
          data-well="a7"
          style={{ fill, opacity: assay.a[6].opacity }}
          cx="305.46"
          cy="87.35"
          r="12.98"
        />
        <circle
          data-well="a8"
          style={{ fill, opacity: assay.a[7].opacity }}
          cx="337.13"
          cy="87.35"
          r="12.98"
        />
        <circle
          data-well="a9"
          style={{ fill, opacity: assay.a[8].opacity }}
          cx="368.8"
          cy="87.35"
          r="12.98"
        />
        <circle
          data-well="a10"
          style={{ fill, opacity: assay.a[9].opacity }}
          cx="400.47"
          cy="87.35"
          r="12.98"
        />
        <circle
          data-well="a11"
          style={{ fill, opacity: assay.a[10].opacity }}
          cx="432.14"
          cy="87.35"
          r="12.98"
        />
        <circle
          data-well="a12"
          style={{ fill, opacity: assay.a[11].opacity }}
          cx="463.85"
          cy="87.35"
          r="12.98"
        />

        <circle
          data-well="b1"
          style={{ fill, opacity: assay.b[0].opacity }}
          cx="115.47"
          cy="118.99"
          r="12.98"
        />
        <circle
          data-well="b2"
          style={{ fill, opacity: assay.b[1].opacity }}
          cx="147.11"
          cy="118.99"
          r="12.98"
        />
        <circle
          data-well="b3"
          style={{ fill, opacity: assay.b[2].opacity }}
          cx="178.78"
          cy="118.99"
          r="12.98"
        />
        <circle
          data-well="b4"
          style={{ fill, opacity: assay.b[3].opacity }}
          cx="210.5"
          cy="118.99"
          r="12.98"
        />
        <circle
          data-well="b5"
          style={{ fill, opacity: assay.b[4].opacity }}
          cx="242.17"
          cy="118.99"
          r="12.98"
        />
        <circle
          data-well="b6"
          style={{ fill, opacity: assay.b[5].opacity }}
          cx="273.84"
          cy="118.99"
          r="12.98"
        />
        <circle
          data-well="b7"
          style={{ fill, opacity: assay.b[6].opacity }}
          cx="305.46"
          cy="118.99"
          r="12.98"
        />
        <circle
          data-well="b8"
          style={{ fill, opacity: assay.b[7].opacity }}
          cx="337.13"
          cy="118.99"
          r="12.98"
        />
        <circle
          data-well="b9"
          style={{ fill, opacity: assay.b[8].opacity }}
          cx="368.8"
          cy="118.99"
          r="12.98"
        />
        <circle
          data-well="b10"
          style={{ fill, opacity: assay.b[9].opacity }}
          cx="400.47"
          cy="118.99"
          r="12.98"
        />
        <circle
          data-well="b11"
          style={{ fill, opacity: assay.b[10].opacity }}
          cx="432.14"
          cy="118.99"
          r="12.98"
        />
        <circle
          data-well="b12"
          style={{ fill, opacity: assay.b[11].opacity }}
          cx="463.85"
          cy="118.99"
          r="12.98"
        />

        <circle
          data-well="c1"
          style={{ fill, opacity: assay.c[0].opacity }}
          cx="115.47"
          cy="150.63"
          r="12.98"
        />
        <circle
          data-well="c2"
          style={{ fill, opacity: assay.c[1].opacity }}
          cx="147.11"
          cy="150.63"
          r="12.98"
        />
        <circle
          data-well="c3"
          style={{ fill, opacity: assay.c[2].opacity }}
          cx="178.78"
          cy="150.63"
          r="12.98"
        />
        <circle
          data-well="c4"
          style={{ fill, opacity: assay.c[3].opacity }}
          cx="210.5"
          cy="150.63"
          r="12.98"
        />
        <circle
          data-well="c5"
          style={{ fill, opacity: assay.c[4].opacity }}
          cx="242.17"
          cy="150.63"
          r="12.98"
        />
        <circle
          data-well="c6"
          style={{ fill, opacity: assay.c[5].opacity }}
          cx="273.84"
          cy="150.63"
          r="12.98"
        />
        <circle
          data-well="c7"
          style={{ fill, opacity: assay.c[6].opacity }}
          cx="305.46"
          cy="150.63"
          r="12.98"
        />
        <circle
          data-well="c8"
          style={{ fill, opacity: assay.c[7].opacity }}
          cx="337.13"
          cy="150.63"
          r="12.98"
        />
        <circle
          data-well="c9"
          style={{ fill, opacity: assay.c[8].opacity }}
          cx="368.8"
          cy="150.63"
          r="12.98"
        />
        <circle
          data-well="c10"
          style={{ fill, opacity: assay.c[9].opacity }}
          cx="400.47"
          cy="150.63"
          r="12.98"
        />
        <circle
          data-well="c11"
          style={{ fill, opacity: assay.c[10].opacity }}
          cx="432.14"
          cy="150.63"
          r="12.98"
        />
        <circle
          data-well="c12"
          style={{ fill, opacity: assay.c[11].opacity }}
          cx="463.85"
          cy="150.63"
          r="12.98"
        />

        <circle
          data-well="d1"
          style={{ fill, opacity: assay.d[0].opacity }}
          cx="115.47"
          cy="182.29"
          r="12.98"
        />
        <circle
          data-well="d2"
          style={{ fill, opacity: assay.d[0].opacity }}
          cx="147.11"
          cy="182.29"
          r="12.98"
        />
        <circle
          data-well="d3"
          style={{ fill, opacity: assay.d[1].opacity }}
          cx="178.78"
          cy="182.29"
          r="12.98"
        />
        <circle
          data-well="d4"
          style={{ fill, opacity: assay.d[3].opacity }}
          cx="210.5"
          cy="182.29"
          r="12.98"
        />
        <circle
          data-well="d5"
          style={{ fill, opacity: assay.d[4].opacity }}
          cx="242.17"
          cy="182.29"
          r="12.98"
        />
        <circle
          data-well="d6"
          style={{ fill, opacity: assay.d[5].opacity }}
          cx="273.84"
          cy="182.29"
          r="12.98"
        />
        <circle
          data-well="d7"
          style={{ fill, opacity: assay.d[6].opacity }}
          cx="305.46"
          cy="182.29"
          r="12.98"
        />
        <circle
          data-well="d8"
          style={{ fill, opacity: assay.d[7].opacity }}
          cx="337.13"
          cy="182.29"
          r="12.98"
        />
        <circle
          data-well="d9"
          style={{ fill, opacity: assay.d[8].opacity }}
          cx="368.8"
          cy="182.29"
          r="12.98"
        />
        <circle
          data-well="d10"
          style={{ fill, opacity: assay.d[9].opacity }}
          cx="400.47"
          cy="182.29"
          r="12.98"
        />
        <circle
          data-well="d11"
          style={{ fill, opacity: assay.d[10].opacity }}
          cx="432.14"
          cy="182.29"
          r="12.98"
        />
        <circle
          data-well="d12"
          style={{ fill, opacity: assay.d[11].opacity }}
          cx="463.85"
          cy="182.29"
          r="12.98"
        />

        <circle
          data-well="e1"
          style={{ fill, opacity: assay.e[0].opacity }}
          cx="115.47"
          cy="213.93"
          r="12.98"
        />
        <circle
          data-well="e2"
          style={{ fill, opacity: assay.e[1].opacity }}
          cx="147.11"
          cy="213.93"
          r="12.98"
        />
        <circle
          data-well="e3"
          style={{ fill, opacity: assay.e[2].opacity }}
          cx="178.78"
          cy="213.93"
          r="12.98"
        />
        <circle
          data-well="e4"
          style={{ fill, opacity: assay.e[3].opacity }}
          cx="210.5"
          cy="213.93"
          r="12.98"
        />
        <circle
          data-well="e5"
          style={{ fill, opacity: assay.e[4].opacity }}
          cx="242.17"
          cy="213.93"
          r="12.98"
        />
        <circle
          data-well="e6"
          style={{ fill, opacity: assay.e[5].opacity }}
          cx="273.84"
          cy="213.93"
          r="12.98"
        />
        <circle
          data-well="e7"
          style={{ fill, opacity: assay.e[6].opacity }}
          cx="305.46"
          cy="213.93"
          r="12.98"
        />
        <circle
          data-well="e8"
          style={{ fill, opacity: assay.e[7].opacity }}
          cx="337.13"
          cy="213.93"
          r="12.98"
        />
        <circle
          data-well="e9"
          style={{ fill, opacity: assay.e[8].opacity }}
          cx="368.8"
          cy="213.93"
          r="12.98"
        />
        <circle
          data-well="e10"
          style={{ fill, opacity: assay.e[9].opacity }}
          cx="400.47"
          cy="213.93"
          r="12.98"
        />
        <circle
          data-well="e11"
          style={{ fill, opacity: assay.e[10].opacity }}
          cx="432.14"
          cy="213.93"
          r="12.98"
        />
        <circle
          data-well="e12"
          style={{ fill, opacity: assay.e[11].opacity }}
          cx="463.85"
          cy="213.93"
          r="12.98"
        />

        <circle
          data-well="f1"
          style={{ fill, opacity: assay.f[0].opacity }}
          cx="115.47"
          cy="245.57"
          r="12.98"
        />
        <circle
          data-well="f2"
          style={{ fill, opacity: assay.f[1].opacity }}
          cx="147.11"
          cy="245.57"
          r="12.98"
        />
        <circle
          data-well="f3"
          style={{ fill, opacity: assay.f[2].opacity }}
          cx="178.78"
          cy="245.57"
          r="12.98"
        />
        <circle
          data-well="f4"
          style={{ fill, opacity: assay.f[3].opacity }}
          cx="210.5"
          cy="245.57"
          r="12.98"
        />
        <circle
          data-well="f5"
          style={{ fill, opacity: assay.f[4].opacity }}
          cx="242.17"
          cy="245.57"
          r="12.98"
        />
        <circle
          data-well="f6"
          style={{ fill, opacity: assay.f[5].opacity }}
          cx="273.84"
          cy="245.57"
          r="12.98"
        />
        <circle
          data-well="f7"
          style={{ fill, opacity: assay.f[6].opacity }}
          cx="305.46"
          cy="245.57"
          r="12.98"
        />
        <circle
          data-well="f8"
          style={{ fill, opacity: assay.f[7].opacity }}
          cx="337.13"
          cy="245.57"
          r="12.98"
        />
        <circle
          data-well="f9"
          style={{ fill, opacity: assay.f[8].opacity }}
          cx="368.8"
          cy="245.57"
          r="12.98"
        />
        <circle
          data-well="f10"
          style={{ fill, opacity: assay.f[9].opacity }}
          cx="400.47"
          cy="245.57"
          r="12.98"
        />
        <circle
          data-well="f11"
          style={{ fill, opacity: assay.f[10].opacity }}
          cx="432.14"
          cy="245.57"
          r="12.98"
        />
        <circle
          data-well="f12"
          style={{ fill, opacity: assay.f[11].opacity }}
          cx="463.85"
          cy="245.57"
          r="12.98"
        />

        <circle
          data-well="g1"
          style={{ fill, opacity: assay.g[0].opacity }}
          cx="115.47"
          cy="277.23"
          r="12.98"
        />
        <circle
          data-well="g2"
          style={{ fill, opacity: assay.g[1].opacity }}
          cx="147.11"
          cy="277.23"
          r="12.98"
        />
        <circle
          data-well="g3"
          style={{ fill, opacity: assay.g[2].opacity }}
          cx="178.78"
          cy="277.23"
          r="12.98"
        />
        <circle
          data-well="g4"
          style={{ fill, opacity: assay.g[3].opacity }}
          cx="210.5"
          cy="277.23"
          r="12.98"
        />
        <circle
          data-well="g5"
          style={{ fill, opacity: assay.g[4].opacity }}
          cx="242.17"
          cy="277.23"
          r="12.98"
        />
        <circle
          data-well="g6"
          style={{ fill, opacity: assay.g[5].opacity }}
          cx="273.84"
          cy="277.23"
          r="12.98"
        />
        <circle
          data-well="g7"
          style={{ fill, opacity: assay.g[6].opacity }}
          cx="305.46"
          cy="277.23"
          r="12.98"
        />
        <circle
          data-well="g8"
          style={{ fill, opacity: assay.g[7].opacity }}
          cx="337.13"
          cy="277.23"
          r="12.98"
        />
        <circle
          data-well="g9"
          style={{ fill, opacity: assay.g[8].opacity }}
          cx="368.8"
          cy="277.23"
          r="12.98"
        />
        <circle
          data-well="g10"
          style={{ fill, opacity: assay.g[9].opacity }}
          cx="400.47"
          cy="277.23"
          r="12.98"
        />
        <circle
          data-well="g11"
          style={{ fill, opacity: assay.g[10].opacity }}
          cx="432.14"
          cy="277.23"
          r="12.98"
        />
        <circle
          data-well="g12"
          style={{ fill, opacity: assay.g[11].opacity }}
          cx="463.85"
          cy="277.23"
          r="12.98"
        />

        <circle
          data-well="h1"
          style={{ fill, opacity: assay.h[0].opacity }}
          cx="115.47"
          cy="308.84"
          r="12.98"
        />
        <circle
          data-well="h2"
          style={{ fill, opacity: assay.h[1].opacity }}
          cx="147.11"
          cy="308.84"
          r="12.98"
        />
        <circle
          data-well="h3"
          style={{ fill, opacity: assay.h[2].opacity }}
          cx="178.78"
          cy="308.84"
          r="12.98"
        />
        <circle
          data-well="h4"
          style={{ fill, opacity: assay.h[3].opacity }}
          cx="210.5"
          cy="308.84"
          r="12.98"
        />
        <circle
          data-well="h5"
          style={{ fill, opacity: assay.h[4].opacity }}
          cx="242.17"
          cy="308.84"
          r="12.98"
        />
        <circle
          data-well="h6"
          style={{ fill, opacity: assay.h[5].opacity }}
          cx="273.84"
          cy="308.84"
          r="12.98"
        />
        <circle
          data-well="h7"
          style={{ fill, opacity: assay.h[6].opacity }}
          cx="305.46"
          cy="308.84"
          r="12.98"
        />
        <circle
          data-well="h8"
          style={{ fill, opacity: assay.h[7].opacity }}
          cx="337.13"
          cy="308.84"
          r="12.98"
        />
        <circle
          data-well="h9"
          style={{ fill, opacity: assay.h[8].opacity }}
          cx="368.8"
          cy="308.84"
          r="12.98"
        />
        <circle
          data-well="h10"
          style={{ fill, opacity: assay.h[9].opacity }}
          cx="400.47"
          cy="308.84"
          r="12.98"
        />
        <circle
          data-well="h11"
          style={{ fill, opacity: assay.h[10].opacity }}
          cx="432.14"
          cy="308.84"
          r="12.98"
        />
        <circle
          data-well="h12"
          style={{ fill, opacity: assay.h[11].opacity }}
          cx="463.85"
          cy="308.84"
          r="12.98"
        />
      </g>
    </svg>
  );
}

export default Assay;
