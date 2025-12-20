import svgPaths from "./svg-kp05s91iag";
import imgImg74651 from "figma:asset/06213436584312a3a5c7579f3b8fede5d0931e3c.png";

function Group() {
  return (
    <div className="absolute left-0 size-[255px] top-[64px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 255 255">
        <g id="Group 185">
          <g id="Vector">
            <path d={svgPaths.p2ae8c580} fill="var(--fill-0, #5DDECE)" />
            <path d={svgPaths.p4b9c400} fill="var(--fill-0, #5DDECE)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

export default function Me() {
  return (
    <div className="relative size-full" data-name="me">
      <Group />
      <div className="absolute h-[319px] left-[33px] top-0 w-[201px]" data-name="IMG_7465 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[-70.29%] max-w-none top-0 w-[236.27%]" src={imgImg74651} />
        </div>
      </div>
    </div>
  );
}