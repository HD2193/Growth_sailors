import React from "react";
import svgPaths from "../imports/svg-js6lw8mr6d";

function Icon() {
  return (
    <div
      className="absolute left-[137.34px] size-[31.96px] top-[11.94px]"
      data-name="Icon"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 31.96 31.96"
      >
        <g id="Icon">
          <path
            d={svgPaths.p30846300}
            fill="var(--fill-0, white)"
            id="Vector"
          />
          <path
            d={svgPaths.p126f6800}
            fill="var(--fill-0, #1D1D1B)"
            id="Vector_2"
          />
        </g>
      </svg>
    </div>
  );
}

export default function SharedLinkLetsTalk() {
  return (
    <a
      className="absolute border border-[rgba(255,255,255,0.3)] border-solid h-[57.83px] left-[calc(83.33%-39px)] rounded-[1000px] top-[97px] w-[183.24px]"
      data-name="Link [lets_talk]"
      href="https://calendly.com/ismail-socialsailor/30min?month=2025-12"
      target="_blank"
      rel="noreferrer"
    >
      <Icon />
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[31.95px] not-italic text-[14.9px] text-nowrap text-white top-[27.63px] translate-y-[-50%] uppercase">
        <p className="leading-[20.779px]">Let's talk</p>
      </div>
    </a>
  );
}
