import { useState, useEffect } from "react";
import svgPaths from "./svg-js6lw8mr6d";
import imgImage17 from "figma:asset/52073a4dbc87f6a7e93fa6244589a629f0262253.png";
import imgImage21 from "figma:asset/21fa3562f1ba9928fd8a08c8c141b380330a45ce.png";
import imgImageBlogCardImage from "figma:asset/11f5d6637c178006ceb8581a505290ed23932cb6.png";
import imgImage18 from "figma:asset/d232a2733b289f6b47e2f8ebecccd50a584cb55b.png";
import imgImage20 from "figma:asset/36890f5e0117ee92c16b4da508eb6a869226b407.png";
import imgImage27 from "figma:asset/5a29753ccb27b95ea99248f55dc48ef9c5c8880f.png";
import imgStrategy from "figma:asset/bb83c6aab066fceb185a7b25a635a881e5605984.png";
import imgImage12 from "figma:asset/f4a111ed0c18b661845ed72c92322fec8ebb6002.png";
import imgImage8 from "figma:asset/391d4fd8453e4723fb92f1e8b28302358bc6af0f.png";
import imgImage29 from "figma:asset/8690bc71a95c0ccd8492edb342cf34ea353a4028.png";
import imgImage31 from "figma:asset/792e14a5fa5b43a831b2bb9b4ea460a360a27c5d.png";
import imgImage7 from "figma:asset/1bfb0088055418283315f1456e686eddd68f331d.png";
import imgImage6 from "figma:asset/0c2de3a9835264afbaf0f9f772cc637c5a3a981d.png";
import imgLogoWhiteBig1 from "figma:asset/221e78b67b6af7a968c919083e537e0c2aa870b6.png";
import { imgGroup, imgGroup1, imgGroup2 } from "./svg-oak2b";

function Link() {
  return (
    <div className="h-[18.16px] relative shrink-0 w-[62.52px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-transparent border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[13px] text-nowrap text-white top-[8.92px] translate-y-[-50%] uppercase">
          <p className="leading-[18.158px]">What</p>
        </div>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="h-[18px] relative shrink-0 w-[44px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-transparent border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[13px] text-nowrap text-white top-[8.92px] translate-y-[-50%] uppercase">
          <p className="leading-[18.158px]">Why</p>
        </div>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="h-[18.16px] relative shrink-0 w-[67.15px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-transparent border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[17.63px] not-italic text-[13px] text-nowrap text-white top-[8.92px] translate-y-[-50%] uppercase">
          <p className="leading-[18.158px]">who</p>
        </div>
      </div>
    </div>
  );
}

function Span() {
  return (
    <div
      className="absolute left-[74.84px] size-[6.97px] top-[5.59px]"
      data-name="Span"
    />
  );
}

function Link3() {
  return (
    <div
      className="absolute h-[18.16px] left-0 overflow-clip top-0 w-[81.82px]"
      data-name="Link"
    >
      <Span />
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[13px] text-nowrap text-white top-[8.92px] translate-y-[-50%] uppercase">
        <p className="leading-[18.158px]">numbers</p>
      </div>
    </div>
  );
}

function ItemMenuItem() {
  return (
    <div
      className="h-[18.16px] relative shrink-0 w-[81.82px]"
      data-name="Item [menu-item-64]"
    >
      <div className="bg-clip-padding border-0 border-transparent border-solid relative size-full">
        <Link3 />
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div
      className="absolute h-[18.16px] left-0 overflow-clip top-0 w-[49.97px]"
      data-name="Link"
    >
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[13px] text-nowrap text-white top-[8.92px] translate-y-[-50%] uppercase">
        <p className="leading-[18.158px]">know</p>
      </div>
    </div>
  );
}

function ItemMenuItem1() {
  return (
    <div
      className="h-[18.16px] relative shrink-0 w-[49.97px]"
      data-name="Item [menu-item-69]"
    >
      <div className="bg-clip-padding border-0 border-transparent border-solid relative size-full">
        {/* <Link4 /> */}
      </div>
    </div>
  );
}

function ListPrimaryMenu() {
  return (
    <div
      className="absolute content-stretch flex gap-[45.922px] h-[66px] items-center justify-center left-[3px] pl-0 pr-[192.781px] py-0 top-0 w-[379px]"
      data-name="List [primary-menu]"
    >
      <Link />
      <Link1 />
      <Link2 />
      <ItemMenuItem />
      <ItemMenuItem1 />
    </div>
  );
}

function NavBar() {
  return (
    <div
      className="absolute h-[66px] left-[calc(54.17%+5.5px)] top-[96px] translate-x-[-50%] w-[357px]"
      data-name="Nav bar"
    >
      <ListPrimaryMenu />
    </div>
  );
}

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

function LinkLetsTalk() {
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

function Frame8() {
  return (
    <div className="absolute bg-[#4abe8f] left-[1212px] size-[36px] top-[729px]" />
  );
}

function Group() {
  return (
    <div
      className="[mask-clip:no-clip,no-clip] [mask-composite:intersect,intersect] [mask-mode:alpha,alpha] [mask-repeat:no-repeat,no-repeat] absolute inset-[-9.52%_-14.29%_-14.29%_-9.52%] mask-position-[1.988px,0px] mask-[20.88px_20.88px,25.851px_25.851px]"
      data-name="Group"
      style={{ maskImage: `url('${imgGroup}'), url('${imgGroup1}')` }}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 25.8514 25.8514"
      >
        <g id="Group">
          <path
            d={svgPaths.p21bc3f00}
            fill="url(#paint0_linear_1_2209)"
            id="Vector"
          />
        </g>
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_1_2209"
            x1="-2.2261"
            x2="26.2821"
            y1="26.551"
            y2="-0.462254"
          >
            <stop offset="0.0001" stopColor="#15BCDF" />
            <stop offset="0.615" stopColor="#0DDC7A" />
            <stop offset="1" stopColor="#15BCDF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function MaskGroup() {
  return (
    <div
      className="absolute contents inset-[-9.52%_-14.29%_-14.29%_-9.52%]"
      data-name="Mask group"
    >
      <Group />
    </div>
  );
}

function Group1() {
  return (
    <div
      className="absolute contents inset-[-9.52%_-14.29%_-14.29%_-9.52%]"
      data-name="Group"
    >
      <MaskGroup />
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group1 />
    </div>
  );
}

function Icon1() {
  return (
    <div
      className="absolute left-[10.5px] overflow-clip size-[20.88px] top-[10.5px]"
      data-name="Icon"
    >
      <ClipPathGroup />
      <div
        className="absolute inset-[11.82%_8.7%_6.76%_9.88%]"
        data-name="Vector"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 17 17"
        >
          <path d={svgPaths.p70c1900} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function DivCircleIconB() {
  return (
    <div
      className="absolute bg-[#070707] left-[229px] rounded-[41.891px] size-[41.9px] top-[9px]"
      data-name="Div [circle_icon_b]"
    >
      <Icon1 />
    </div>
  );
}

function Button() {
  return (
    <button
      className="absolute block border border-[#949494] border-solid cursor-pointer h-[61px] left-[456px] rounded-[64.8px] shadow-[1px_1px_10px_0px_rgba(204,195,195,0.25)] top-[592px] w-[280px]"
      data-name="button"
      style={{
        backgroundImage:
          "linear-gradient(14.0695deg, rgb(41, 41, 41) 0%, rgb(74, 190, 143) 61.5%, rgb(137, 255, 214) 100%)",
      }}
    >
      <DivCircleIconB />
      <div className="absolute flex flex-col font-['Manrope:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] left-[calc(50%-114px)] text-[#031c11] text-[14.9px] text-left text-nowrap top-[calc(50%+0.5px)] tracking-[1px] translate-y-[-50%] uppercase">
        <p className="leading-[15.984px]">Free Strategy Call</p>
      </div>
    </button>
  );
}

function Frame12() {
  return (
    <div className="absolute content-stretch flex h-[24px] items-center justify-center left-[448px] p-[8px] rounded-[36px] top-[475px] w-[78px]">
      <div
        aria-hidden="true"
        className="absolute border-[#a5a5a5] border-[0.6px] border-solid inset-0 pointer-events-none rounded-[36px]"
      />
      <p className="font-['Libre_Baskerville:Italic'] italic leading-[29px] relative shrink-0 text-[16px] text-nowrap text-white">
        clarity
      </p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="absolute content-stretch flex h-[29px] items-center justify-center left-[80px] p-[8px] rounded-[36px] top-[505px] w-[198px]">
      <div
        aria-hidden="true"
        className="absolute border-[#a5a5a5] border-[0.6px] border-solid inset-0 pointer-events-none rounded-[36px]"
      />
      <p className="font-['Manrope:Regular',sans-serif] font-normal h-[29px] leading-[29px] relative shrink-0 text-[16px] text-white w-[162px]">
        <span>Data - </span>
        <span className="font-['Libre_Baskerville:Italic'] italic">based</span>
        <span>{` `}</span>
        <span className="font-['Manrope:Regular',sans-serif] font-normal">
          strategy
        </span>
      </p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="absolute content-stretch flex h-[24px] items-center justify-center left-[532px] p-[8px] rounded-[36px] top-[475px] w-[99px]">
      <div
        aria-hidden="true"
        className="absolute border-[#a5a5a5] border-[0.6px] border-solid inset-0 pointer-events-none rounded-[36px]"
      />
      <p className="font-['Libre_Baskerville:Italic'] italic leading-[29px] relative shrink-0 text-[16px] text-nowrap text-white">
        creativity
      </p>
    </div>
  );
}

function Hero() {
  return (
    <div
      className="absolute h-[234px] left-[44px] top-[36px] w-[700px]"
      data-name="Hero"
    >
      <div className="absolute font-['Poppins:ExtraLight',sans-serif] inset-0 leading-[0] not-italic text-[#e8e8e8] text-[0px] tracking-[-2.88px]">
        <p className="leading-[82px] mb-0 text-[72px]">
          <span className="font-['Poppins:Regular',sans-serif] not-italic">{`Empowering brands to `}</span>
          <span className="font-['Poppins:Bold_Italic',sans-serif] italic">
            grow
          </span>
          <span className="font-['Poppins:Regular',sans-serif] not-italic">
            {" "}
          </span>
        </p>
        <p className="font-['Poppins:Regular',sans-serif] leading-[82px] text-[72px]">
          <span className="text-[#e8e8e8]">with purpose</span>
          <span className="text-[#4abe8f]">.</span>
        </p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute bg-[#111] h-[729px] left-[96px] rounded-[24px] top-[232px] w-[788px]">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Manrope:Light',sans-serif] font-light inset-[64.47%_43.15%_31.69%_5.58%] leading-[29px] text-[#f0f0f0] text-[16px]">{`Unlock the limitless potential of your business through `}</p>
        <Button />
        <Frame12 />
        <Frame14 />
        <Frame13 />
        <p className="absolute font-['Manrope:Light',sans-serif] font-light leading-[29px] left-[44px] text-[16px] text-nowrap text-white top-[505px]">
          and
        </p>
        <p className="absolute font-['Manrope:Light',sans-serif] font-light leading-[29px] left-[44px] text-[14px] text-white top-[603px] tracking-[1px] uppercase w-[404px]">
          1000+ successful campaigns.All chances are you'll be impressed too.
        </p>
        <Hero />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#080808] border-solid -inset-px pointer-events-none rounded-[25px]"
      />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative shrink-0">
      <p className="font-['Poppins:Medium',sans-serif] leading-[23px] not-italic relative shrink-0 text-[24px] text-nowrap text-white tracking-[-0.72px]">
        <span className="text-[#24d5ff]">Shark Tank</span>
        <span className="text-[#02abd3]"> </span>
        <span className="text-[#fef960]">India</span>
        <span className="text-[#02abd3]"> </span>
        <span className="font-['Libre_Baskerville:Italic',sans-serif] italic">
          brands
        </span>
      </p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="absolute content-stretch flex h-[50px] items-center justify-between left-[calc(66.67%+59px)] px-[8px] py-0 rounded-[36px] top-[248px] w-[325px]">
      <Frame15 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="absolute content-stretch flex h-[36px] items-center justify-center left-[calc(66.67%-39px)] p-[12px] rounded-[12345px] top-[255px] w-[98px]">
      <div
        aria-hidden="true"
        className="absolute border-2 border-[#4b4b4b] border-dashed inset-0 pointer-events-none rounded-[12345px]"
      />
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[23px] relative shrink-0 text-[#b9b9b9] text-[16px] text-nowrap tracking-[1.12px]">
        WORK
      </p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="absolute content-stretch flex h-[36px] items-center justify-center left-0 p-[12px] rounded-[12345px] top-[28px] w-[156px]">
      <div
        aria-hidden="true"
        className="absolute border-2 border-[#4b4b4b] border-dashed inset-0 pointer-events-none rounded-[12345px]"
      />
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[23px] relative shrink-0 text-[16px] text-nowrap text-white tracking-[1.12px]">
        OUR MISSION
      </p>
    </div>
  );
}

function ImageImgFounder() {
  return (
    <div
      className="absolute bg-white left-0 overflow-clip rounded-[72px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] size-[222px] top-[119px]"
      data-name="Image [img_founder]"
    >
      <div
        className="absolute h-[337px] left-[-12px] top-[-34px] w-[246px]"
        data-name="image 17"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
          src={imgImage17}
        />
      </div>
    </div>
  );
}

function Group29() {
  return (
    <div className="absolute contents left-0 top-[119px]">
      <ImageImgFounder />
    </div>
  );
}

function Group30() {
  return (
    <div className="absolute contents left-0 top-[28px]">
      <Frame22 />
      <Group29 />
      <div className="absolute flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] left-0 not-italic text-[18.8px] text-nowrap text-white top-[397px] tracking-[-0.4176px] translate-y-[-50%]">
        <p className="leading-[27.144px]">Ismail A</p>
      </div>
      <div className="absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[15px] text-nowrap text-white top-[421.5px] tracking-[1px] translate-y-[-50%]">
        <p className="leading-[20.779px]">{`CO-FOUNDER & CEO`}</p>
      </div>
    </div>
  );
}

function Group27() {
  return (
    <div className="h-[94.446px] relative w-[103.765px]">
      <div className="absolute inset-[-105.88%_-115.65%_-127.06%_-96.37%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 323.765 314.446"
        >
          <g id="Group 44">
            <g filter="url(#filter0_f_1_2471)" id="Ellipse 10">
              <ellipse
                cx="129.656"
                cy="132.171"
                fill="var(--fill-0, #73E0B4)"
                rx="29.6563"
                ry="32.1706"
              />
            </g>
            <g filter="url(#filter1_f_1_2471)" id="Ellipse 11">
              <ellipse
                cx="172.324"
                cy="160.326"
                fill="var(--fill-0, #B4FFE1)"
                rx="31.4406"
                ry="34.1204"
              />
            </g>
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="264.341"
              id="filter0_f_1_2471"
              width="259.313"
              x="0"
              y="0"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_1_2471"
                stdDeviation="50"
              />
            </filter>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="308.241"
              id="filter1_f_1_2471"
              width="302.881"
              x="20.8834"
              y="6.20575"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_1_2471"
                stdDeviation="60"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div
      className="absolute inset-[calc(10.11%-1px)_calc(31.42%-1px)_calc(60.29%-1px)_calc(31.8%-1px)]"
      data-name="Group"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 95.9997 82.0008"
      >
        <g id="Group">
          <path
            d={svgPaths.p16381f00}
            fill="var(--fill-0, white)"
            id="Vector"
          />
          <path
            d={svgPaths.pd323600}
            fill="var(--fill-0, white)"
            id="Vector_2"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p98197f0}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Vector_3"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p30db6600}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Vector_4"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p365a46f2}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Vector_5"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p166907b0}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Vector_6"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p33a12480}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Vector_7"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p5031080}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Vector_8"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p30bb4b00}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Vector_9"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p123cec00}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Vector_10"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p168ce300}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Vector_11"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p28ff2000}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Vector_12"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p14688280}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Vector_13"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p14c80000}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Vector_14"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p17492d00}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Vector_15"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p2a8d0180}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Vector_16"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p20f5c100}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Vector_17"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p26b2d300}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Vector_18"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p26c7a980}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Vector_19"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p1347900}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Vector_20"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p270b4e00}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Vector_21"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p1ad34a80}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Vector_22"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p203a93f0}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Vector_23"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p2d7ecb00}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Vector_24"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p14a3080}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Vector_25"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p2c217f80}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Vector_26"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p1a110000}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Vector_27"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p846180}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Vector_28"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p3c69cc00}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Vector_29"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p390e1800}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Vector_30"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p68af3f0}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Vector_31"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p1abb4780}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Vector_32"
          />
          <g id="Group 48">
            <path
              d={svgPaths.p3d6cd300}
              fill="var(--fill-0, white)"
              id="Vector_33"
            />
            <path
              d={svgPaths.p23c82b00}
              fill="var(--fill-0, #010C07)"
              id="Vector_34"
            />
            <path
              d={svgPaths.p2e6a700}
              fill="var(--fill-0, #010C07)"
              id="Vector_35"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame26() {
  return (
    <div className="absolute bg-black border border-[#171717] border-solid h-[277px] left-0 overflow-clip rounded-[28px] top-[551px] w-[261px]">
      <div
        className="absolute flex h-[126.421px] items-center justify-center left-[80.28px] top-[13.94px] w-[120.153px]"
        style={
          {
            "--transform-inner-width": "0",
            "--transform-inner-height": "0",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-[106.599deg]">
          <Group27 />
        </div>
      </div>
      <div className="absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] left-[calc(50%-78.5px)] text-[#f4f4f4] text-[20px] text-nowrap top-[215px] translate-y-[-50%]">
        <p className="leading-[25.2px]">Top rated experts</p>
      </div>
      <div className="absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[42px] justify-center leading-[0] left-[calc(50%-19.5px)] text-[36px] text-white top-[171px] tracking-[-0.36px] translate-y-[-50%] w-[48px]">
        <p className="leading-[25.2px]">5+</p>
      </div>
      <Group2 />
    </div>
  );
}

function Group28() {
  return (
    <div className="h-[118.741px] relative w-[103.765px]">
      <div className="absolute inset-[-84.22%_-115.65%_-80.6%_-96.37%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 323.765 314.446"
        >
          <g id="Group 44">
            <g filter="url(#filter0_f_1_2464)" id="Ellipse 10">
              <ellipse
                cx="129.656"
                cy="132.171"
                fill="var(--fill-0, #73E0B4)"
                rx="29.6563"
                ry="32.1706"
              />
            </g>
            <g filter="url(#filter1_f_1_2464)" id="Ellipse 11">
              <ellipse
                cx="172.324"
                cy="160.326"
                fill="var(--fill-0, #B4FFE1)"
                rx="31.4406"
                ry="34.1204"
              />
            </g>
            <g filter="url(#filter2_f_1_2464)" id="Ellipse 12">
              <ellipse
                cx="136.576"
                cy="189.913"
                fill="var(--fill-0, white)"
                rx="26.5799"
                ry="28.8282"
              />
            </g>
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="264.341"
              id="filter0_f_1_2464"
              width="259.313"
              x="0"
              y="0"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_1_2464"
                stdDeviation="50"
              />
            </filter>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="308.241"
              id="filter1_f_1_2464"
              width="302.881"
              x="20.8834"
              y="6.20575"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_1_2464"
                stdDeviation="60"
              />
            </filter>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="217.656"
              id="filter2_f_1_2464"
              width="213.16"
              x="29.9957"
              y="81.0846"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_1_2464"
                stdDeviation="40"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div
      className="absolute inset-[12.17%_31.41%_56.98%_31.03%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-[0px_-5.717px] mask-size-[97.999px_98px]"
      data-name="Group"
      style={{ maskImage: `url('${imgGroup2}')` }}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 98.0101 85.4583"
      >
        <g id="Group">
          <path
            d={svgPaths.p3b577900}
            fill="var(--fill-0, white)"
            id="Vector"
          />
          <path
            d={svgPaths.p21f38900}
            fill="var(--fill-0, white)"
            id="Vector_2"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p21d0580}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Vector_3"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p441ac00}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Vector_4"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p30727600}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Vector_5"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p37249440}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Vector_6"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.pd5a5380}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Vector_7"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p21bc9600}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Vector_8"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.pf23e600}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Vector_9"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p1bc20740}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Vector_10"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p177b8a00}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Vector_11"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p35956b00}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Vector_12"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p3fae0100}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Vector_13"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p333f2920}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Vector_14"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.pad0080}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Vector_15"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p42f5600}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Vector_16"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p1eb76c80}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Vector_17"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p3568fc00}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Vector_18"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p323ef300}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Vector_19"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p307edf80}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Vector_20"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p37e82f00}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Vector_21"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p16e62470}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Vector_22"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p29016b80}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Vector_23"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p2bbd8f80}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Vector_24"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p241b9a50}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Vector_25"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p21a15800}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Vector_26"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p2fff2600}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Vector_27"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p1b54f680}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Vector_28"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p33ce7000}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Vector_29"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p137a5900}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Vector_30"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p2e4a5880}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Vector_31"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p14d6eef1}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Vector_32"
          />
          <path
            d={svgPaths.p16051980}
            fill="var(--fill-0, white)"
            id="Vector_33"
          />
          <path
            d={svgPaths.p1f295d00}
            fill="var(--fill-0, white)"
            id="Vector_34"
          />
          <path
            d={svgPaths.p5700280}
            fill="var(--fill-0, white)"
            id="Vector_35"
          />
          <path
            d={svgPaths.p27b99200}
            fill="var(--fill-0, white)"
            id="Vector_36"
          />
          <path
            d={svgPaths.p2cda100}
            fill="var(--fill-0, white)"
            id="Vector_37"
          />
          <path
            d={svgPaths.p412a500}
            fill="var(--fill-0, white)"
            id="Vector_38"
          />
          <path
            d={svgPaths.p341e7b80}
            fill="var(--fill-0, white)"
            id="Vector_39"
          />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup1() {
  return (
    <div
      className="absolute contents inset-[calc(10.11%-1px)_calc(31.42%-1px)_calc(54.51%-1px)_calc(31.03%-1px)]"
      data-name="Clip path group"
    >
      <Group3 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="absolute bg-black border border-[#171717] border-solid h-[277px] left-[310px] overflow-clip rounded-[28px] top-[551px] w-[261px]">
      <div
        className="absolute flex h-[133.362px] items-center justify-center left-[57px] top-[7px] w-[143.436px]"
        style={
          {
            "--transform-inner-width": "0",
            "--transform-inner-height": "0",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-[106.599deg]">
          <Group28 />
        </div>
      </div>
      <div className="absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] left-[calc(50%-77.5px)] text-[#f4f4f4] text-[20px] text-nowrap top-[215px] translate-y-[-50%]">
        <p className="leading-[25.2px]">Satisfied Clients</p>
      </div>
      <div className="absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[42px] justify-center leading-[0] left-[calc(50%-33.5px)] text-[36px] text-white top-[171px] tracking-[-0.36px] translate-y-[-50%] w-[63px]">
        <p className="leading-[25.2px]">50+</p>
      </div>
      <ClipPathGroup1 />
    </div>
  );
}

function Group35() {
  return (
    <div className="h-[118.741px] relative w-[103.765px]">
      <div className="absolute inset-[-84.22%_-115.65%_-80.6%_-96.37%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 323.765 314.446"
        >
          <g id="Group 44">
            <g filter="url(#filter0_f_1_2464)" id="Ellipse 10">
              <ellipse
                cx="129.656"
                cy="132.171"
                fill="var(--fill-0, #73E0B4)"
                rx="29.6563"
                ry="32.1706"
              />
            </g>
            <g filter="url(#filter1_f_1_2464)" id="Ellipse 11">
              <ellipse
                cx="172.324"
                cy="160.326"
                fill="var(--fill-0, #B4FFE1)"
                rx="31.4406"
                ry="34.1204"
              />
            </g>
            <g filter="url(#filter2_f_1_2464)" id="Ellipse 12">
              <ellipse
                cx="136.576"
                cy="189.913"
                fill="var(--fill-0, white)"
                rx="26.5799"
                ry="28.8282"
              />
            </g>
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="264.341"
              id="filter0_f_1_2464"
              width="259.313"
              x="0"
              y="0"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_1_2464"
                stdDeviation="50"
              />
            </filter>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="308.241"
              id="filter1_f_1_2464"
              width="302.881"
              x="20.8834"
              y="6.20575"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_1_2464"
                stdDeviation="60"
              />
            </filter>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="217.656"
              id="filter2_f_1_2464"
              width="213.16"
              x="29.9957"
              y="81.0846"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_1_2464"
                stdDeviation="40"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div
      className="absolute inset-[10.11%_31.41%_59.04%_31.03%]"
      data-name="Group"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 98.0101 85.4583"
      >
        <g id="Group">
          <path
            d={svgPaths.p3b577900}
            fill="var(--fill-0, white)"
            id="Vector"
          />
          <path
            d={svgPaths.p21f38900}
            fill="var(--fill-0, white)"
            id="Vector_2"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p21d0580}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Vector_3"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p441ac00}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Vector_4"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p30727600}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Vector_5"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p37249440}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Vector_6"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.pd5a5380}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Vector_7"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p21bc9600}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Vector_8"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.pf23e600}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Vector_9"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p1bc20740}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Vector_10"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p177b8a00}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Vector_11"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p35956b00}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Vector_12"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p3fae0100}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Vector_13"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p333f2920}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Vector_14"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.pad0080}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Vector_15"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p42f5600}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Vector_16"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p1eb76c80}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Vector_17"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p3568fc00}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Vector_18"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p323ef300}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Vector_19"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p307edf80}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Vector_20"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p37e82f00}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Vector_21"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p16e62470}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Vector_22"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p29016b80}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Vector_23"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p2bbd8f80}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Vector_24"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p241b9a50}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Vector_25"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p21a15800}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Vector_26"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p2fff2600}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Vector_27"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p1b54f680}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Vector_28"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p33ce7000}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Vector_29"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p137a5900}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Vector_30"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p2e4a5880}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Vector_31"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p14d6eef1}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Vector_32"
          />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup2() {
  return (
    <div
      className="absolute contents inset-[10.11%_31.41%_59.04%_31.03%]"
      data-name="Clip path group"
    >
      <Group4 />
    </div>
  );
}

function Group32() {
  return (
    <div className="absolute contents inset-[calc(10.11%-1px)_calc(31.41%-1px)_calc(59.04%-1px)_calc(31.03%-1px)]">
      <div
        className="absolute inset-[21.3%_42.53%_71.48%_42.15%]"
        data-name="Vector"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 40 20"
        >
          <path
            d={svgPaths.p1c335480}
            fill="var(--fill-0, white)"
            id="Vector"
          />
        </svg>
      </div>
      <ClipPathGroup2 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="absolute bg-black border border-[#171717] border-solid h-[277px] left-[620px] overflow-clip rounded-[28px] top-[551px] w-[261px]">
      <div
        className="absolute flex h-[133.362px] items-center justify-center left-[57px] top-[7px] w-[143.436px]"
        style={
          {
            "--transform-inner-width": "0",
            "--transform-inner-height": "0",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-[106.599deg]">
          <Group35 />
        </div>
      </div>
      <div className="absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] left-[calc(50%-77.5px)] text-[#f4f4f4] text-[20px] text-nowrap top-[215px] translate-y-[-50%]">
        <p className="leading-[25.2px]">Satisfied Clients</p>
      </div>
      <div className="absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[42px] justify-center leading-[0] left-[calc(50%-41.5px)] text-[36px] text-white top-[171px] tracking-[-0.36px] translate-y-[-50%] w-[80px]">
        <p className="leading-[25.2px]">10K+</p>
      </div>
      <Group32 />
    </div>
  );
}

function Group36() {
  return (
    <div className="h-[118.741px] relative w-[103.765px]">
      <div className="absolute inset-[-84.22%_-115.65%_-80.6%_-96.37%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 323.765 314.446"
        >
          <g id="Group 44">
            <g filter="url(#filter0_f_1_2464)" id="Ellipse 10">
              <ellipse
                cx="129.656"
                cy="132.171"
                fill="var(--fill-0, #73E0B4)"
                rx="29.6563"
                ry="32.1706"
              />
            </g>
            <g filter="url(#filter1_f_1_2464)" id="Ellipse 11">
              <ellipse
                cx="172.324"
                cy="160.326"
                fill="var(--fill-0, #B4FFE1)"
                rx="31.4406"
                ry="34.1204"
              />
            </g>
            <g filter="url(#filter2_f_1_2464)" id="Ellipse 12">
              <ellipse
                cx="136.576"
                cy="189.913"
                fill="var(--fill-0, white)"
                rx="26.5799"
                ry="28.8282"
              />
            </g>
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="264.341"
              id="filter0_f_1_2464"
              width="259.313"
              x="0"
              y="0"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_1_2464"
                stdDeviation="50"
              />
            </filter>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="308.241"
              id="filter1_f_1_2464"
              width="302.881"
              x="20.8834"
              y="6.20575"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_1_2464"
                stdDeviation="60"
              />
            </filter>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="217.656"
              id="filter2_f_1_2464"
              width="213.16"
              x="29.9957"
              y="81.0846"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_1_2464"
                stdDeviation="40"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group33() {
  return (
    <div className="absolute inset-[calc(10.11%-1px)_calc(33.33%-1px)_calc(59.04%-1px)_calc(29.12%-1px)]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 98.0101 85.4583"
      >
        <g id="Group 51">
          <g id="Group">
            <path
              d={svgPaths.p3b577900}
              fill="var(--fill-0, white)"
              id="Vector"
            />
            <path
              d={svgPaths.p21f38900}
              fill="var(--fill-0, white)"
              id="Vector_2"
            />
            <path
              clipRule="evenodd"
              d={svgPaths.p21d0580}
              fill="var(--fill-0, white)"
              fillRule="evenodd"
              id="Vector_3"
            />
            <path
              clipRule="evenodd"
              d={svgPaths.p441ac00}
              fill="var(--fill-0, white)"
              fillRule="evenodd"
              id="Vector_4"
            />
            <path
              clipRule="evenodd"
              d={svgPaths.p30727600}
              fill="var(--fill-0, white)"
              fillRule="evenodd"
              id="Vector_5"
            />
            <path
              clipRule="evenodd"
              d={svgPaths.p37249440}
              fill="var(--fill-0, white)"
              fillRule="evenodd"
              id="Vector_6"
            />
            <path
              clipRule="evenodd"
              d={svgPaths.pd5a5380}
              fill="var(--fill-0, white)"
              fillRule="evenodd"
              id="Vector_7"
            />
            <path
              clipRule="evenodd"
              d={svgPaths.p21bc9600}
              fill="var(--fill-0, white)"
              fillRule="evenodd"
              id="Vector_8"
            />
            <path
              clipRule="evenodd"
              d={svgPaths.pf23e600}
              fill="var(--fill-0, white)"
              fillRule="evenodd"
              id="Vector_9"
            />
            <path
              clipRule="evenodd"
              d={svgPaths.p1bc20740}
              fill="var(--fill-0, white)"
              fillRule="evenodd"
              id="Vector_10"
            />
            <path
              clipRule="evenodd"
              d={svgPaths.p177b8a00}
              fill="var(--fill-0, white)"
              fillRule="evenodd"
              id="Vector_11"
            />
            <path
              clipRule="evenodd"
              d={svgPaths.p35956b00}
              fill="var(--fill-0, white)"
              fillRule="evenodd"
              id="Vector_12"
            />
            <path
              clipRule="evenodd"
              d={svgPaths.p3fae0100}
              fill="var(--fill-0, white)"
              fillRule="evenodd"
              id="Vector_13"
            />
            <path
              clipRule="evenodd"
              d={svgPaths.p333f2920}
              fill="var(--fill-0, white)"
              fillRule="evenodd"
              id="Vector_14"
            />
            <path
              clipRule="evenodd"
              d={svgPaths.pad0080}
              fill="var(--fill-0, white)"
              fillRule="evenodd"
              id="Vector_15"
            />
            <path
              clipRule="evenodd"
              d={svgPaths.p42f5600}
              fill="var(--fill-0, white)"
              fillRule="evenodd"
              id="Vector_16"
            />
            <path
              clipRule="evenodd"
              d={svgPaths.p1eb76c80}
              fill="var(--fill-0, white)"
              fillRule="evenodd"
              id="Vector_17"
            />
            <path
              clipRule="evenodd"
              d={svgPaths.p3568fc00}
              fill="var(--fill-0, white)"
              fillRule="evenodd"
              id="Vector_18"
            />
            <path
              clipRule="evenodd"
              d={svgPaths.p323ef300}
              fill="var(--fill-0, white)"
              fillRule="evenodd"
              id="Vector_19"
            />
            <path
              clipRule="evenodd"
              d={svgPaths.p307edf80}
              fill="var(--fill-0, white)"
              fillRule="evenodd"
              id="Vector_20"
            />
            <path
              clipRule="evenodd"
              d={svgPaths.p37e82f00}
              fill="var(--fill-0, white)"
              fillRule="evenodd"
              id="Vector_21"
            />
            <path
              clipRule="evenodd"
              d={svgPaths.p16e62470}
              fill="var(--fill-0, white)"
              fillRule="evenodd"
              id="Vector_22"
            />
            <path
              clipRule="evenodd"
              d={svgPaths.p29016b80}
              fill="var(--fill-0, white)"
              fillRule="evenodd"
              id="Vector_23"
            />
            <path
              clipRule="evenodd"
              d={svgPaths.p2bbd8f80}
              fill="var(--fill-0, white)"
              fillRule="evenodd"
              id="Vector_24"
            />
            <path
              clipRule="evenodd"
              d={svgPaths.p241b9a50}
              fill="var(--fill-0, white)"
              fillRule="evenodd"
              id="Vector_25"
            />
            <path
              clipRule="evenodd"
              d={svgPaths.p21a15800}
              fill="var(--fill-0, white)"
              fillRule="evenodd"
              id="Vector_26"
            />
            <path
              clipRule="evenodd"
              d={svgPaths.p2fff2600}
              fill="var(--fill-0, white)"
              fillRule="evenodd"
              id="Vector_27"
            />
            <path
              clipRule="evenodd"
              d={svgPaths.p1b54f680}
              fill="var(--fill-0, white)"
              fillRule="evenodd"
              id="Vector_28"
            />
            <path
              clipRule="evenodd"
              d={svgPaths.p33ce7000}
              fill="var(--fill-0, white)"
              fillRule="evenodd"
              id="Vector_29"
            />
            <path
              clipRule="evenodd"
              d={svgPaths.p137a5900}
              fill="var(--fill-0, white)"
              fillRule="evenodd"
              id="Vector_30"
            />
            <path
              clipRule="evenodd"
              d={svgPaths.p2e4a5880}
              fill="var(--fill-0, white)"
              fillRule="evenodd"
              id="Vector_31"
            />
            <path
              clipRule="evenodd"
              d={svgPaths.p14d6eef1}
              fill="var(--fill-0, white)"
              fillRule="evenodd"
              id="Vector_32"
            />
          </g>
          <path
            d={svgPaths.p3634dc00}
            fill="var(--fill-0, white)"
            id="Vector_33"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame29() {
  return (
    <div className="absolute bg-black border border-[#171717] border-solid h-[277px] left-[930px] overflow-clip rounded-[28px] top-[551px] w-[261px]">
      <div
        className="absolute flex h-[133.362px] items-center justify-center left-[57px] top-[7px] w-[143.436px]"
        style={
          {
            "--transform-inner-width": "0",
            "--transform-inner-height": "0",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-[106.599deg]">
          <Group36 />
        </div>
      </div>
      <div className="absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] left-[calc(50%-77.5px)] text-[#f4f4f4] text-[20px] text-nowrap top-[215px] translate-y-[-50%]">
        <p className="leading-[25.2px]">Managed in Ads</p>
      </div>
      <div className="absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[42px] justify-center leading-[0] left-[calc(50%-44.5px)] text-[36px] text-white top-[171px] tracking-[-0.36px] translate-y-[-50%] w-[87px]">
        <p className="leading-[25.2px]">10M+</p>
      </div>
      <Group33 />
    </div>
  );
}

function Group31() {
  return (
    <div className="absolute contents left-0 top-[551px]">
      <Frame26 />
      <Frame27 />
      <Frame28 />
      <Frame29 />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute inset-[0_-0.02%_0_0]" data-name="Group">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 141.031 40"
      >
        <g id="Group">
          <path
            d={svgPaths.p3b0fe880}
            fill="var(--fill-0, white)"
            id="Vector"
          />
          <g id="Vector_2"></g>
          <g id="Vector_3"></g>
          <g id="Vector_4"></g>
          <g id="Vector_5"></g>
          <path
            d={svgPaths.p229fbc00}
            fill="var(--fill-0, white)"
            id="Vector_6"
          />
          <path
            d={svgPaths.p13523000}
            fill="var(--fill-0, white)"
            id="Vector_7"
          />
          <path
            d={svgPaths.p100adc00}
            fill="var(--fill-0, white)"
            id="Vector_8"
          />
          <path
            d={svgPaths.p11b9d880}
            fill="var(--fill-0, #090000)"
            id="Vector_9"
          />
          <path
            d={svgPaths.p18c5a280}
            fill="var(--fill-0, white)"
            id="Vector_10"
          />
          <path
            d={svgPaths.p13af00}
            fill="var(--fill-0, white)"
            id="Vector_11"
          />
          <path
            d={svgPaths.p5aa3000}
            fill="var(--fill-0, white)"
            id="Vector_12"
          />
          <path
            d={svgPaths.p373c8080}
            fill="var(--fill-0, white)"
            id="Vector_13"
          />
          <path
            d={svgPaths.p14277300}
            fill="var(--fill-0, white)"
            id="Vector_14"
          />
          <path
            d={svgPaths.p2dc94a00}
            fill="var(--fill-0, #090000)"
            id="Vector_15"
          />
        </g>
      </svg>
    </div>
  );
}

function BookmyshowLogoSvg() {
  return (
    <div
      className="h-[40px] overflow-clip relative shrink-0 w-[141px]"
      data-name="bookmyshow_logo.svg"
    >
      <Group5 />
    </div>
  );
}

function SwiggyLogo() {
  return (
    <div
      className="h-[40px] relative shrink-0 w-[138.131px]"
      data-name="Swiggy Logo"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 138.131 40"
      >
        <g id="Swiggy Logo">
          <path d={svgPaths.pfa16580} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function G() {
  return (
    <div
      className="[grid-area:1/1] h-[30px] ml-0 mt-0 relative w-[140.856px]"
      data-name="g12"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 140.856 30"
      >
        <g id="g12">
          <path d={svgPaths.p4990d00} fill="var(--fill-0, white)" id="path14" />
          <path
            d={svgPaths.p307468b0}
            fill="var(--fill-0, white)"
            id="path16"
          />
        </g>
      </svg>
    </div>
  );
}

function ZomatoLogo() {
  return (
    <div
      className="h-[30px] relative shrink-0 w-[140.856px]"
      data-name="Zomato Logo"
      style={{ transform: "scaleY(-1)" }}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 140.856 30"
      >
        <g id="Zomato Logo">
          <path d={svgPaths.p4990d00} fill="var(--fill-0, white)" id="path14" />
          <path
            d={svgPaths.p307468b0}
            fill="var(--fill-0, white)"
            id="path16"
          />
        </g>
      </svg>
    </div>
  );
}

function LenskartLogo() {
  return (
    <div
      className="h-[30px] relative shrink-0 w-[214px]"
      data-name="Lenskart Logo"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 214 30"
      >
        <g clipPath="url(#clip0_1_2294)" id="Lenskart Logo">
          <path
            d={svgPaths.p2912e200}
            fill="var(--fill-0, white)"
            id="Vector"
          />
          <path
            d={svgPaths.p217eaf00}
            fill="var(--fill-0, white)"
            id="Vector_2"
          />
          <path
            d={svgPaths.p912f9c0}
            fill="var(--fill-0, white)"
            id="Vector_3"
          />
          <path
            d={svgPaths.p128ef8f0}
            fill="var(--fill-0, white)"
            id="Vector_4"
          />
          <path
            d={svgPaths.p1b627380}
            fill="var(--fill-0, white)"
            id="Vector_5"
          />
          <path
            d={svgPaths.p35855b80}
            fill="var(--fill-0, white)"
            id="Vector_6"
          />
          <path
            d={svgPaths.p192b6a00}
            fill="var(--fill-0, white)"
            id="Vector_7"
          />
          <path
            d={svgPaths.p142a2c80}
            fill="var(--fill-0, white)"
            id="Vector_8"
          />
          <path
            d={svgPaths.p30bfdf00}
            fill="var(--fill-0, white)"
            id="Vector_9"
          />
          <path
            d={svgPaths.p16ccbc00}
            fill="var(--fill-0, white)"
            id="Vector_10"
          />
          <path
            d={svgPaths.p2eb24b80}
            fill="var(--fill-0, white)"
            id="Vector_11"
          />
          <path
            d={svgPaths.p4c0acf0}
            fill="var(--fill-0, white)"
            id="Vector_12"
          />
          <path
            d={svgPaths.p78ccc00}
            fill="var(--fill-0, white)"
            id="Vector_13"
          />
          <path
            d={svgPaths.p18413b00}
            fill="var(--fill-0, white)"
            id="Vector_14"
          />
          <path
            d={svgPaths.p7c0e880}
            fill="var(--fill-0, white)"
            id="Vector_15"
          />
          <path
            d={svgPaths.pa815680}
            fill="var(--fill-0, white)"
            id="Vector_16"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_2294">
            <rect fill="white" height="30" width="214" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group6() {
  return (
    <div
      className="[grid-area:1/1] h-[30px] ml-[43.59%] mt-0 relative w-[71.023px]"
      data-name="Group"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 71.0229 30"
      >
        <g id="Group">
          <path d={svgPaths.p647bc00} fill="var(--fill-0, white)" id="Vector" />
          <path
            d={svgPaths.p10a76e40}
            fill="var(--fill-0, white)"
            id="Vector_2"
          />
          <path
            d={svgPaths.p3fe43140}
            fill="var(--fill-0, white)"
            id="Vector_3"
          />
          <path
            d={svgPaths.pc013900}
            fill="var(--fill-0, white)"
            id="Vector_4"
          />
          <path
            d={svgPaths.p26f7b100}
            fill="var(--fill-0, white)"
            id="Vector_5"
          />
          <path
            d={svgPaths.p33e3d100}
            fill="var(--fill-0, white)"
            id="Vector_6"
          />
          <path
            d={svgPaths.pddeb780}
            fill="var(--fill-0, white)"
            id="Vector_7"
          />
          <path
            d={svgPaths.p3d8b1200}
            fill="var(--fill-0, white)"
            id="Vector_8"
          />
          <path
            d={svgPaths.p2121d080}
            fill="var(--fill-0, white)"
            id="Vector_9"
          />
          <path
            d={svgPaths.pae8dc00}
            fill="var(--fill-0, white)"
            id="Vector_10"
          />
          <path
            d={svgPaths.p93b6000}
            fill="var(--fill-0, white)"
            id="Vector_11"
          />
          <path
            d={svgPaths.p15678700}
            fill="var(--fill-0, white)"
            id="Vector_12"
          />
          <path
            d={svgPaths.pa429900}
            fill="var(--fill-0, white)"
            id="Vector_13"
          />
          <path
            d={svgPaths.p11e430c0}
            fill="var(--fill-0, white)"
            id="Vector_14"
          />
          <path
            d={svgPaths.p13af2c00}
            fill="var(--fill-0, white)"
            id="Vector_15"
          />
          <path
            d={svgPaths.p3eea4a00}
            fill="var(--fill-0, white)"
            id="Vector_16"
          />
          <path
            d={svgPaths.p15b37d00}
            fill="var(--fill-0, white)"
            id="Vector_17"
          />
          <path
            d={svgPaths.pb4a5200}
            fill="var(--fill-0, white)"
            id="Vector_18"
          />
          <path
            d={svgPaths.p11609280}
            fill="var(--fill-0, white)"
            id="Vector_19"
          />
          <path
            d={svgPaths.p3b61e130}
            fill="var(--fill-0, white)"
            id="Vector_20"
          />
          <path
            d={svgPaths.pfdb8580}
            fill="var(--fill-0, white)"
            id="Vector_21"
          />
          <path
            d={svgPaths.p24b6780}
            fill="var(--fill-0, white)"
            id="Vector_22"
          />
          <path
            d={svgPaths.p294286f0}
            fill="var(--fill-0, white)"
            id="Vector_23"
          />
        </g>
      </svg>
    </div>
  );
}

function Group7() {
  return (
    <div
      className="[grid-area:1/1] h-[29.999px] ml-0 mt-0 relative w-[47.816px]"
      data-name="Group"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 47.8157 29.9986"
      >
        <g id="Group">
          <path
            d={svgPaths.p131e3100}
            fill="var(--fill-0, white)"
            id="Vector"
          />
          <path
            d={svgPaths.p29bda500}
            fill="var(--fill-0, white)"
            id="Vector_2"
          />
          <path
            d={svgPaths.p205cd2c0}
            fill="var(--fill-0, white)"
            id="Vector_3"
          />
          <path
            d={svgPaths.p35291700}
            fill="var(--fill-0, white)"
            id="Vector_4"
          />
          <path
            d={svgPaths.p13117900}
            fill="var(--fill-0, white)"
            id="Vector_5"
          />
          <path
            d={svgPaths.pe3cfcf2}
            fill="var(--fill-0, white)"
            id="Vector_6"
          />
          <path
            d={svgPaths.p1184bb00}
            fill="var(--fill-0, white)"
            id="Vector_7"
          />
          <path
            d={svgPaths.p2f33ef80}
            fill="var(--fill-0, white)"
            id="Vector_8"
          />
          <path
            d={svgPaths.p2a728900}
            fill="var(--fill-0, white)"
            id="Vector_9"
          />
        </g>
      </svg>
    </div>
  );
}

function TcsLogo() {
  return (
    <div
      className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0"
      data-name="TCS Logo"
    >
      <Group6 />
      <Group7 />
    </div>
  );
}

function FoodStoriesLogo() {
  return (
    <div
      className="h-[30px] relative shrink-0 w-[125px]"
      data-name="FoodStories Logo"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 125 30"
      >
        <g clipPath="url(#clip0_1_2181)" id="FoodStories Logo">
          <path
            d={svgPaths.p2ec86b00}
            fill="var(--fill-0, white)"
            id="Vector"
          />
          <path
            d={svgPaths.p3d42f600}
            fill="var(--fill-0, white)"
            id="Vector_2"
          />
          <path
            d={svgPaths.p2216bc80}
            fill="var(--fill-0, white)"
            id="Vector_3"
          />
          <path
            d={svgPaths.p28fca880}
            fill="var(--fill-0, white)"
            id="Vector_4"
          />
          <path
            d={svgPaths.p3fa0280}
            fill="var(--fill-0, white)"
            id="Vector_5"
          />
          <path
            d={svgPaths.p2bed7780}
            fill="var(--fill-0, white)"
            id="Vector_6"
          />
          <path
            d={svgPaths.paa9a700}
            fill="var(--fill-0, white)"
            id="Vector_7"
          />
          <path
            d={svgPaths.pb481600}
            fill="var(--fill-0, white)"
            id="Vector_8"
          />
          <path
            d={svgPaths.p54b5d00}
            fill="var(--fill-0, white)"
            id="Vector_9"
          />
          <path
            d={svgPaths.p22854060}
            fill="var(--fill-0, white)"
            id="Vector_10"
          />
          <path
            d={svgPaths.p12486300}
            fill="var(--fill-0, white)"
            id="Vector_11"
          />
          <path
            d={svgPaths.p3c8d7200}
            fill="var(--fill-0, white)"
            id="Vector_12"
          />
          <path
            d={svgPaths.p130bf200}
            fill="var(--fill-0, white)"
            id="Vector_13"
          />
          <path
            d={svgPaths.p96dec00}
            fill="var(--fill-0, white)"
            id="Vector_14"
          />
          <path
            d={svgPaths.p2fdbaa80}
            fill="var(--fill-0, white)"
            id="Vector_15"
          />
          <path
            d={svgPaths.p38af9080}
            fill="var(--fill-0, white)"
            id="Vector_16"
          />
          <path
            d={svgPaths.p392a6f00}
            fill="var(--fill-0, white)"
            id="Vector_17"
          />
          <path
            d={svgPaths.p2c5607c0}
            fill="var(--fill-0, white)"
            id="Vector_18"
          />
          <path
            d={svgPaths.p25aebd00}
            fill="var(--fill-0, white)"
            id="Vector_19"
          />
          <path
            d={svgPaths.p1229e640}
            fill="var(--fill-0, white)"
            id="Vector_20"
          />
          <path
            d={svgPaths.p3a77d500}
            fill="var(--fill-0, white)"
            id="Vector_21"
          />
          <path
            d={svgPaths.p35706700}
            fill="var(--fill-0, white)"
            id="Vector_22"
          />
          <path
            d={svgPaths.p2a4e6500}
            fill="var(--fill-0, white)"
            id="Vector_23"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_2181">
            <rect fill="white" height="30" width="125" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute inset-[0_-0.02%_0_0]" data-name="Group">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 141.031 40"
      >
        <g id="Group">
          <path
            d={svgPaths.p3b0fe880}
            fill="var(--fill-0, white)"
            id="Vector"
          />
          <g id="Vector_2"></g>
          <g id="Vector_3"></g>
          <g id="Vector_4"></g>
          <g id="Vector_5"></g>
          <path
            d={svgPaths.p229fbc00}
            fill="var(--fill-0, white)"
            id="Vector_6"
          />
          <path
            d={svgPaths.p13523000}
            fill="var(--fill-0, white)"
            id="Vector_7"
          />
          <path
            d={svgPaths.p100adc00}
            fill="var(--fill-0, white)"
            id="Vector_8"
          />
          <path
            d={svgPaths.p11b9d880}
            fill="var(--fill-0, white)"
            id="Vector_9"
          />
          <path
            d={svgPaths.p18c5a280}
            fill="var(--fill-0, white)"
            id="Vector_10"
          />
          <path
            d={svgPaths.p13af00}
            fill="var(--fill-0, white)"
            id="Vector_11"
          />
          <path
            d={svgPaths.p5aa3000}
            fill="var(--fill-0, white)"
            id="Vector_12"
          />
          <path
            d={svgPaths.p373c8080}
            fill="var(--fill-0, white)"
            id="Vector_13"
          />
          <path
            d={svgPaths.p14277300}
            fill="var(--fill-0, white)"
            id="Vector_14"
          />
          <path
            d={svgPaths.p2dc94a00}
            fill="var(--fill-0, white)"
            id="Vector_15"
          />
        </g>
      </svg>
    </div>
  );
}

function BookmyshowLogoSvg1() {
  return (
    <div
      className="h-[40px] overflow-clip relative shrink-0 w-[141px]"
      data-name="bookmyshow_logo.svg"
    >
      <Group8 />
    </div>
  );
}

function Group9() {
  return (
    <div
      className="[grid-area:1/1] h-[30px] ml-[43.59%] mt-0 relative w-[71.023px]"
      data-name="Group"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 71.0229 30"
      >
        <g id="Group">
          <path d={svgPaths.p647bc00} fill="var(--fill-0, white)" id="Vector" />
          <path
            d={svgPaths.p10a76e40}
            fill="var(--fill-0, white)"
            id="Vector_2"
          />
          <path
            d={svgPaths.p3fe43140}
            fill="var(--fill-0, white)"
            id="Vector_3"
          />
          <path
            d={svgPaths.pc013900}
            fill="var(--fill-0, white)"
            id="Vector_4"
          />
          <path
            d={svgPaths.p26f7b100}
            fill="var(--fill-0, white)"
            id="Vector_5"
          />
          <path
            d={svgPaths.p33e3d100}
            fill="var(--fill-0, white)"
            id="Vector_6"
          />
          <path
            d={svgPaths.pddeb780}
            fill="var(--fill-0, white)"
            id="Vector_7"
          />
          <path
            d={svgPaths.p3d8b1200}
            fill="var(--fill-0, white)"
            id="Vector_8"
          />
          <path
            d={svgPaths.p2121d080}
            fill="var(--fill-0, white)"
            id="Vector_9"
          />
          <path
            d={svgPaths.pae8dc00}
            fill="var(--fill-0, white)"
            id="Vector_10"
          />
          <path
            d={svgPaths.p93b6000}
            fill="var(--fill-0, white)"
            id="Vector_11"
          />
          <path
            d={svgPaths.p15678700}
            fill="var(--fill-0, white)"
            id="Vector_12"
          />
          <path
            d={svgPaths.pa429900}
            fill="var(--fill-0, white)"
            id="Vector_13"
          />
          <path
            d={svgPaths.p11e430c0}
            fill="var(--fill-0, white)"
            id="Vector_14"
          />
          <path
            d={svgPaths.p13af2c00}
            fill="var(--fill-0, white)"
            id="Vector_15"
          />
          <path
            d={svgPaths.p3eea4a00}
            fill="var(--fill-0, white)"
            id="Vector_16"
          />
          <path
            d={svgPaths.p15b37d00}
            fill="var(--fill-0, white)"
            id="Vector_17"
          />
          <path
            d={svgPaths.pb4a5200}
            fill="var(--fill-0, white)"
            id="Vector_18"
          />
          <path
            d={svgPaths.p11609280}
            fill="var(--fill-0, white)"
            id="Vector_19"
          />
          <path
            d={svgPaths.p3b61e130}
            fill="var(--fill-0, white)"
            id="Vector_20"
          />
          <path
            d={svgPaths.pfdb8580}
            fill="var(--fill-0, white)"
            id="Vector_21"
          />
          <path
            d={svgPaths.p24b6780}
            fill="var(--fill-0, white)"
            id="Vector_22"
          />
          <path
            d={svgPaths.p294286f0}
            fill="var(--fill-0, white)"
            id="Vector_23"
          />
        </g>
      </svg>
    </div>
  );
}

function Group10() {
  return (
    <div
      className="[grid-area:1/1] h-[29.999px] ml-0 mt-0 relative w-[47.816px]"
      data-name="Group"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 47.8156 29.9986"
      >
        <g id="Group">
          <path
            d={svgPaths.p131e3100}
            fill="var(--fill-0, white)"
            id="Vector"
          />
          <path
            d={svgPaths.p29bda500}
            fill="var(--fill-0, white)"
            id="Vector_2"
          />
          <path
            d={svgPaths.p205cd2c0}
            fill="var(--fill-0, white)"
            id="Vector_3"
          />
          <path
            d={svgPaths.p35291700}
            fill="var(--fill-0, white)"
            id="Vector_4"
          />
          <path
            d={svgPaths.p13117900}
            fill="var(--fill-0, white)"
            id="Vector_5"
          />
          <path
            d={svgPaths.pe3cfcf2}
            fill="var(--fill-0, white)"
            id="Vector_6"
          />
          <path
            d={svgPaths.p1184bb00}
            fill="var(--fill-0, white)"
            id="Vector_7"
          />
          <path
            d={svgPaths.p2f33ef80}
            fill="var(--fill-0, white)"
            id="Vector_8"
          />
          <path
            d={svgPaths.p2a728900}
            fill="var(--fill-0, white)"
            id="Vector_9"
          />
        </g>
      </svg>
    </div>
  );
}

function TcsLogo1() {
  return (
    <div
      className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0"
      data-name="TCS Logo"
    >
      <Group9 />
      <Group10 />
    </div>
  );
}

function LogoRow() {
  return (
    <div className="flex gap-[40px] items-center justify-center leading-[0] h-14">
      <BookmyshowLogoSvg />
      <SwiggyLogo />
      <ZomatoLogo />
      <LenskartLogo />
      <TcsLogo />
      <FoodStoriesLogo />
      <BookmyshowLogoSvg1 />
      <SwiggyLogo />
      <ZomatoLogo />
      <LenskartLogo />
      <TcsLogo1 />
      <FoodStoriesLogo />
    </div>
  );
}

function BrandCollabMarquee() {
  return (
    <div
      className="overflow-hidden relative h-14 flex items-center"
      data-name="Brand Collab Marquee"
      style={{ width: "800px" }}
    >
      <div
        className="flex gap-[40px] animate-logo-marquee whitespace-nowrap"
        style={{ animationDuration: "18s" }}
      >
        <LogoRow />
        <LogoRow />
      </div>
    </div>
  );
}

function BrandContentWrapper() {
  return (
    <div
      className="flex gap-8 items-center w-[1188px] mx-auto"
      data-name="Brand content wrapper"
    >
      <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[24px] shrink-0 text-[20px] text-white w-[312px]">
        Trusted by leading companies in tech, finance and e-commerce
      </p>
      <BrandCollabMarquee />
    </div>
  );
}

function BrandCollabSection() {
  return (
    <div
      className="absolute w-full flex justify-center"
      style={{ top: "2050px" }}
      data-name="Brand Collab Section"
    >
      <BrandContentWrapper />
    </div>
  );
}

function Frame24() {
  return (
    <div className="absolute h-[1188px] left-[132px] overflow-clip top-[1058px] w-[1189px]">
      <Group30 />
      <p className="absolute font-['Poppins:Light',sans-serif] h-[143px] leading-[56px] left-[338px] not-italic text-[#f9f9f9] text-[42px] top-[64px] tracking-[-0.42px] w-[851px]">
        <span className="font-['Poppins:Black',sans-serif]">“</span>
        <span>We believe brands should create </span>
        <span className="font-['Poppins:SemiBold_Italic',sans-serif] italic">
          value for people
        </span>
        <span>, not just numbers.”</span>
      </p>
      <p className="absolute font-['Manrope:Regular',sans-serif] font-normal h-[78px] leading-[29px] left-[725px] text-[#f9f9f9] text-[18px] top-[325px] tracking-[-0.18px] w-[449px]">
        Our mission at Growth Sailor is to help brands scale predictably,
        blending performance-driven strategy with a culture of care, clarity,
        and true partnership.
      </p>
      <Group31 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="absolute content-stretch flex h-[22.415px] items-center justify-center left-[694px] p-[8px] rounded-[36px] top-[211.67px] w-[105px]">
      <div
        aria-hidden="true"
        className="absolute border-[#a5a5a5] border-[0.6px] border-solid inset-0 pointer-events-none rounded-[36px]"
      />
      <p className="font-['Libre_Baskerville:Italic',sans-serif] italic leading-[29px] relative shrink-0 text-[16px] text-nowrap text-white">
        end to end
      </p>
    </div>
  );
}

function Frame34() {
  return (
    <div className="absolute content-stretch flex h-[22.415px] items-center justify-center left-[660px] p-[8px] rounded-[36px] top-[245.29px] w-[87px]">
      <div
        aria-hidden="true"
        className="absolute border-[#a5a5a5] border-[0.6px] border-solid inset-0 pointer-events-none rounded-[36px]"
      />
      <p className="font-['Libre_Baskerville:Italic',sans-serif] italic leading-[29px] relative shrink-0 text-[16px] text-nowrap text-white">
        content
      </p>
    </div>
  );
}

function Frame35() {
  return (
    <div className="absolute content-stretch flex h-[22.415px] items-center justify-center left-[765px] p-[8px] rounded-[36px] top-[245.29px] w-[87px]">
      <div
        aria-hidden="true"
        className="absolute border-[#a5a5a5] border-[0.6px] border-solid inset-0 pointer-events-none rounded-[36px]"
      />
      <p className="font-['Libre_Baskerville:Italic',sans-serif] italic leading-[29px] relative shrink-0 text-[16px] text-nowrap text-white">
        branding
      </p>
    </div>
  );
}

function Frame36() {
  return (
    <div className="absolute content-stretch flex h-[22.415px] items-center justify-center left-[903px] p-[8px] rounded-[36px] top-[245.29px] w-[204px]">
      <div
        aria-hidden="true"
        className="absolute border-[#a5a5a5] border-[0.6px] border-solid inset-0 pointer-events-none rounded-[36px]"
      />
      <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[29px] relative shrink-0 text-[16px] text-nowrap text-white">
        <span className="font-['Manrope:Medium',sans-serif] font-medium">
          marketplace
        </span>{" "}
        <span className="font-['Libre_Baskerville:Italic',sans-serif] italic">
          expansion
        </span>
      </p>
    </div>
  );
}

function Frame33() {
  return (
    <div className="absolute content-stretch flex h-[22.415px] items-center justify-center left-[954px] p-[8px] rounded-[36px] top-[211.67px] w-[204px]">
      <div
        aria-hidden="true"
        className="absolute border-[#a5a5a5] border-[0.6px] border-solid inset-0 pointer-events-none rounded-[36px]"
      />
      <p className="font-['Libre_Baskerville:Italic',sans-serif] italic leading-[29px] relative shrink-0 text-[16px] text-nowrap text-white">
        <span className="font-['Manrope:Medium',sans-serif] font-medium">
          performance
        </span>
        <span>{` marketing`}</span>
      </p>
    </div>
  );
}

function Frame37() {
  return (
    <div className="absolute content-stretch flex h-[22.415px] items-center justify-center left-[660px] p-[8px] rounded-[36px] top-[283.58px] w-[158px]">
      <div
        aria-hidden="true"
        className="absolute border-[#a5a5a5] border-[0.6px] border-solid inset-0 pointer-events-none rounded-[36px]"
      />
      <p className="font-['Libre_Baskerville:Italic',sans-serif] italic leading-[29px] relative shrink-0 text-[16px] text-nowrap text-white">
        <span className="font-['Manrope:Medium',sans-serif] font-medium">
          measurable
        </span>
        <span className="font-['Manrope:Regular',sans-serif] font-normal">
          {" "}
        </span>
        results
      </p>
    </div>
  );
}

function Group34() {
  return (
    <div className="absolute contents left-[660px] top-[207px]">
      <p className="absolute font-['Manrope:Light',sans-serif] font-light h-[27.085px] leading-[33px] left-[660px] text-[18px] text-white top-[207px] tracking-[-0.18px] w-[34px]">{`Our `}</p>
      <p className="absolute font-['Manrope:Light',sans-serif] font-light h-[27.085px] leading-[33px] left-[807px] text-[18px] text-white top-[207px] tracking-[-0.18px] w-[139px]">{`approach blends `}</p>
      <p className="absolute font-['Manrope:Light',sans-serif] font-light h-[27.085px] leading-[33px] left-[863px] text-[18px] text-white top-[240.62px] tracking-[-0.18px] w-[35px]">
        and
      </p>
      <p className="absolute font-['Manrope:Light',sans-serif] font-light h-[27.085px] leading-[33px] left-[1118px] text-[18px] text-white top-[240.62px] tracking-[-0.18px] w-[63px]">
        to drive
      </p>
      <Frame16 />
      <Frame34 />
      <Frame35 />
      <Frame36 />
      <Frame33 />
      <Frame37 />
      <p className="absolute font-['Manrope:Bold',sans-serif] font-bold h-[30.821px] leading-[33px] left-[1163px] text-[24px] text-white top-[207px] tracking-[-0.24px] w-[8px]">
        ,
      </p>
      <p className="absolute font-['Manrope:Bold',sans-serif] font-bold h-[30.821px] leading-[33px] left-[752px] text-[24px] text-white top-[243.42px] tracking-[-0.24px] w-[8px]">
        ,
      </p>
    </div>
  );
}

function Group11() {
  return (
    <div
      className="[mask-clip:no-clip,no-clip] [mask-composite:intersect,intersect] [mask-mode:alpha,alpha] [mask-repeat:no-repeat,no-repeat] absolute inset-[-9.52%_-14.29%_-14.29%_-9.52%] mask-position-[1.988px,0px] mask-[20.88px_20.88px,25.851px_25.851px]"
      data-name="Group"
      style={{ maskImage: `url('${imgGroup}'), url('${imgGroup1}')` }}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 25.8514 25.8514"
      >
        <g id="Group">
          <path
            d={svgPaths.p21bc3f00}
            fill="url(#paint0_linear_1_2209)"
            id="Vector"
          />
        </g>
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_1_2209"
            x1="-2.2261"
            x2="26.2821"
            y1="26.551"
            y2="-0.462254"
          >
            <stop offset="0.0001" stopColor="#15BCDF" />
            <stop offset="0.615" stopColor="#0DDC7A" />
            <stop offset="1" stopColor="#15BCDF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function MaskGroup1() {
  return (
    <div
      className="absolute contents inset-[-9.52%_-14.29%_-14.29%_-9.52%]"
      data-name="Mask group"
    >
      <Group11 />
    </div>
  );
}

function Group12() {
  return (
    <div
      className="absolute contents inset-[-9.52%_-14.29%_-14.29%_-9.52%]"
      data-name="Group"
    >
      <MaskGroup1 />
    </div>
  );
}

function ClipPathGroup3() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group12 />
    </div>
  );
}

function Icon2() {
  return (
    <div
      className="absolute left-[10.5px] overflow-clip size-[20.88px] top-[10.5px]"
      data-name="Icon"
    >
      <div
        className="absolute inset-[11.82%_8.7%_6.76%_9.88%]"
        data-name="Vector"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 17 17"
        >
          <path d={svgPaths.p70c1900} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function DivCircleIconB1() {
  return (
    <div
      className="absolute bg-transparent rounded-[41.891px] size-[41.9px] top-[9px]"
      style={{ left: "228px" }}
      data-name="Div [circle_icon_b]"
    >
      <Icon2 />
    </div>
  );
}

function Button1() {
  return (
    <a
      className="absolute border border-[#949494] border-solid h-[61px] left-[660px] rounded-[64.8px] shadow-[1px_1px_10px_0px_rgba(204,195,195,0.25)] top-[406px] w-[280px] cursor-pointer"
      data-name="button"
      href="https://calendly.com/ismail-socialsailor/30min?month=2025-12"
      target="_blank"
      rel="noreferrer"
      style={{
        backgroundImage:
          "linear-gradient(14.0695deg, rgb(41, 41, 41) 0%, rgb(74, 190, 143) 61.5%, rgb(137, 255, 214) 100%)",
      }}
    >
      <DivCircleIconB1 />
      <div className="absolute flex flex-col font-['Manrope:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] left-[calc(50%-114px)] text-[#031c11] text-[14.9px] text-nowrap top-[calc(50%+0.5px)] tracking-[1px] translate-y-[-50%] uppercase">
        <p className="leading-[15.984px]">SEE IF YOU ARE READY</p>
      </div>
    </a>
  );
}

function Frame21() {
  return (
    <div className="absolute content-stretch flex h-[36px] items-center justify-center left-[660px] p-[12px] rounded-[12345px] top-0 w-[98px]">
      <div
        aria-hidden="true"
        className="absolute border-2 border-[#4b4b4b] border-dashed inset-0 pointer-events-none rounded-[12345px]"
      />
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[23px] relative shrink-0 text-[#b9b9b9] text-[16px] text-nowrap tracking-[1.12px]">
        WHY
      </p>
    </div>
  );
}

function Group40() {
  return (
    <div className="h-[399.384px] relative w-[335.512px]">
      <div className="absolute inset-[-16%_-17.28%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 451.436 527.211"
        >
          <g id="Group 46">
            <g filter="url(#filter0_f_1_2206)" id="Ellipse 10">
              <ellipse
                cx="120.615"
                cy="167.343"
                fill="var(--fill-0, #4ABE8F)"
                fillOpacity="0.8"
                rx="120.615"
                ry="167.343"
                transform="matrix(0.939032 0.343831 -0.32565 0.94549 166.952 63.9137)"
              />
            </g>
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="527.211"
              id="filter0_f_1_2206"
              width="451.436"
              x="0"
              y="0"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_1_2206"
                stdDeviation="50"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function TripFillStreamlineRoundedFillMaterial() {
  return (
    <div
      className="absolute left-[425px] size-[63px] top-[46px]"
      data-name="Trip-Fill--Streamline-Rounded-Fill-Material"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 63 63"
      >
        <g id="Trip-Fill--Streamline-Rounded-Fill-Material">
          <path d={svgPaths.p513bf00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <a
      className="absolute bg-white h-[44px] left-[22px] rounded-[64.8px] shadow-[1px_1px_10px_0px_#347c5e] top-[273px] w-[229px] cursor-pointer"
      data-name="button"
      href="https://calendly.com/ismail-socialsailor/30min?month=2025-12"
      target="_blank"
      rel="noreferrer"
    >
      <div className="absolute flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] left-[calc(50%-87.5px)] text-[#031c11] text-[14.9px] text-nowrap top-1/2 tracking-[1px] translate-y-[-50%] uppercase">
        <p className="leading-[15.984px]">SEE IF YOU ARE READY</p>
      </div>
    </a>
  );
}

function Group13() {
  return (
    <div
      className="[mask-clip:no-clip,no-clip] [mask-composite:intersect,intersect] [mask-mode:alpha,alpha] [mask-repeat:no-repeat,no-repeat] absolute inset-[-9.52%_-14.29%_-14.29%_-9.52%] mask-position-[1.988px,0px] mask-[20.88px_20.88px,25.851px_25.851px]"
      data-name="Group"
      style={{ maskImage: `url('${imgGroup}'), url('${imgGroup1}')` }}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 25.8514 25.8514"
      >
        <g id="Group">
          <path
            d={svgPaths.p21bc3f00}
            fill="url(#paint0_linear_1_2209)"
            id="Vector"
          />
        </g>
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_1_2209"
            x1="-2.2261"
            x2="26.2821"
            y1="26.551"
            y2="-0.462254"
          >
            <stop offset="0.0001" stopColor="#15BCDF" />
            <stop offset="0.615" stopColor="#0DDC7A" />
            <stop offset="1" stopColor="#15BCDF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function MaskGroup2() {
  return (
    <div
      className="absolute contents inset-[-9.52%_-14.29%_-14.29%_-9.52%]"
      data-name="Mask group"
    >
      <Group13 />
    </div>
  );
}

function Group14() {
  return (
    <div
      className="absolute contents inset-[-9.52%_-14.29%_-14.29%_-9.52%]"
      data-name="Group"
    >
      <MaskGroup2 />
    </div>
  );
}

function ClipPathGroup4() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group14 />
    </div>
  );
}

function Icon3() {
  return (
    <div
      className="absolute left-[calc(50%+0.94px)] overflow-clip size-[20.88px] top-[calc(50%+0.94px)] translate-x-[-50%] translate-y-[-50%]"
      data-name="Icon"
    >
      <div
        className="absolute left-[calc(50%-0.44px)] size-[17px] top-[calc(50%-0.44px)] translate-x-[-50%] translate-y-[-50%]"
        data-name="Vector"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 17 17"
        >
          <path d={svgPaths.p70c1900} fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function DivCircleIconB2() {
  return (
    <div
      className="absolute bg-white left-[249px] rounded-[41.891px] size-[45px] top-[273px]"
      data-name="Div [circle_icon_b]"
    >
      <Icon3 />
    </div>
  );
}

function Group37() {
  return (
    <div className="absolute contents left-[20px] top-[271px]">
      <Button2 />
      <DivCircleIconB2 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="relative bg-black border-2 border-[#181818] border-solid h-[338px] overflow-clip rounded-[20px] w-[530px] shrink-0">
      <div
        className="absolute flex h-[516.262px] items-center justify-center left-[167px] top-[-156px] w-[495.669px]"
        style={
          {
            "--transform-inner-width": "0",
            "--transform-inner-height": "0",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-[211.822deg]">
          <Group40 />
        </div>
      </div>
      <div className="absolute capitalize flex flex-col font-['Poppins:Medium_Italic',sans-serif] h-[166px] italic justify-center leading-[0] left-[calc(50%-245px)] text-[36px] text-white top-1/2 tracking-[-1px] translate-y-[-50%] w-[412px]">
        <p className="leading-[34px]">Performance Marketing</p>
      </div>
      <TripFillStreamlineRoundedFillMaterial />
      <Group37 />
    </div>
  );
}

function Group41() {
  return (
    <div className="h-[399.384px] relative w-[335.512px]">
      <div className="absolute inset-[-16%_-17.28%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 451.436 527.211"
        >
          <g id="Group 46">
            <g filter="url(#filter0_f_1_2153)" id="Ellipse 10">
              <ellipse
                cx="120.615"
                cy="167.343"
                fill="var(--fill-0, #4ABE8F)"
                fillOpacity="0.8"
                rx="120.615"
                ry="167.343"
                transform="matrix(0.939032 0.343831 -0.32565 0.94549 166.952 63.9137)"
              />
            </g>
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="527.211"
              id="filter0_f_1_2153"
              width="451.436"
              x="0"
              y="0"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_1_2153"
                stdDeviation="50"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function TripFillStreamlineRoundedFillMaterial1() {
  return (
    <div
      className="absolute left-[425px] size-[63px] top-[46px]"
      data-name="Trip-Fill--Streamline-Rounded-Fill-Material"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 63 63"
      >
        <g id="Trip-Fill--Streamline-Rounded-Fill-Material">
          <path d={svgPaths.p513bf00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <a
      className="absolute bg-white h-[44px] left-[22px] rounded-[64.8px] shadow-[1px_1px_10px_0px_#347c5e] top-[273px] w-[229px] cursor-pointer"
      data-name="button"
      href="https://calendly.com/ismail-socialsailor/30min?month=2025-12"
      target="_blank"
      rel="noreferrer"
    >
      <div className="absolute flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] left-[calc(50%-87.5px)] text-[#031c11] text-[14.9px] text-nowrap top-1/2 tracking-[1px] translate-y-[-50%] uppercase">
        <p className="leading-[15.984px]">SEE IF YOU ARE READY</p>
      </div>
    </a>
  );
}

function Group15() {
  return (
    <div
      className="[mask-clip:no-clip,no-clip] [mask-composite:intersect,intersect] [mask-mode:alpha,alpha] [mask-repeat:no-repeat,no-repeat] absolute inset-[-9.52%_-14.29%_-14.29%_-9.52%] mask-position-[1.988px,0px] mask-[20.88px_20.88px,25.851px_25.851px]"
      data-name="Group"
      style={{ maskImage: `url('${imgGroup}'), url('${imgGroup1}')` }}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 25.8514 25.8514"
      >
        <g id="Group">
          <path
            d={svgPaths.p21bc3f00}
            fill="url(#paint0_linear_1_2209)"
            id="Vector"
          />
        </g>
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_1_2209"
            x1="-2.2261"
            x2="26.2821"
            y1="26.551"
            y2="-0.462254"
          >
            <stop offset="0.0001" stopColor="#15BCDF" />
            <stop offset="0.615" stopColor="#0DDC7A" />
            <stop offset="1" stopColor="#15BCDF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function MaskGroup3() {
  return (
    <div
      className="absolute contents inset-[-9.52%_-14.29%_-14.29%_-9.52%]"
      data-name="Mask group"
    >
      <Group15 />
    </div>
  );
}

function Group16() {
  return (
    <div
      className="absolute contents inset-[-9.52%_-14.29%_-14.29%_-9.52%]"
      data-name="Group"
    >
      <MaskGroup3 />
    </div>
  );
}

function ClipPathGroup5() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group16 />
    </div>
  );
}

function Icon4() {
  return (
    <div
      className="absolute left-[calc(50%+0.94px)] overflow-clip size-[20.88px] top-[calc(50%+0.94px)] translate-x-[-50%] translate-y-[-50%]"
      data-name="Icon"
    >
      <div
        className="absolute left-[calc(50%-0.44px)] size-[17px] top-[calc(50%-0.44px)] translate-x-[-50%] translate-y-[-50%]"
        data-name="Vector"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 17 17"
        >
          <path d={svgPaths.p70c1900} fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function DivCircleIconB3() {
  return (
    <div
      className="absolute bg-white left-[249px] rounded-[41.891px] size-[45px] top-[273px]"
      data-name="Div [circle_icon_b]"
    >
      <Icon4 />
    </div>
  );
}

function Group42() {
  return (
    <div className="absolute contents left-[20px] top-[271px]">
      <Button3 />
      <DivCircleIconB3 />
    </div>
  );
}

function Frame45() {
  return (
    <div className="relative bg-black border-2 border-[#181818] border-solid h-[338px] overflow-clip rounded-[20px] w-[530px] shrink-0">
      <div
        className="absolute flex h-[516.262px] items-center justify-center left-[167px] top-[-156px] w-[495.669px]"
        style={
          {
            "--transform-inner-width": "0",
            "--transform-inner-height": "0",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-[211.822deg]">
          <Group41 />
        </div>
      </div>
      <div className="absolute capitalize flex flex-col font-['Poppins:Medium_Italic',sans-serif] h-[166px] italic justify-center leading-[0] left-[calc(50%-245px)] text-[36px] text-white top-1/2 tracking-[-1px] translate-y-[-50%] w-[412px]">
        <p className="leading-[34px]">Branding</p>
      </div>
      <TripFillStreamlineRoundedFillMaterial1 />
      <Group42 />
    </div>
  );
}

function Group43() {
  return (
    <div className="h-[399.384px] relative w-[335.512px]">
      <div className="absolute inset-[-16%_-17.28%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 451.436 527.211"
        >
          <g id="Group 46">
            <g filter="url(#filter0_f_1_2150)" id="Ellipse 10">
              <ellipse
                cx="120.615"
                cy="167.343"
                fill="var(--fill-0, #4ABE8F)"
                fillOpacity="0.8"
                rx="120.615"
                ry="167.343"
                transform="matrix(0.939032 0.343831 -0.32565 0.94549 166.952 63.9137)"
              />
            </g>
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="527.211"
              id="filter0_f_1_2150"
              width="451.436"
              x="0"
              y="0"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_1_2150"
                stdDeviation="50"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function TripFillStreamlineRoundedFillMaterial2() {
  return (
    <div
      className="absolute left-[425px] size-[63px] top-[46px]"
      data-name="Trip-Fill--Streamline-Rounded-Fill-Material"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 63 63"
      >
        <g id="Trip-Fill--Streamline-Rounded-Fill-Material">
          <path d={svgPaths.p513bf00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <a
      className="absolute bg-white h-[44px] left-[22px] rounded-[64.8px] shadow-[1px_1px_10px_0px_#347c5e] top-[273px] w-[229px] cursor-pointer"
      data-name="button"
      href="https://calendly.com/ismail-socialsailor/30min?month=2025-12"
      target="_blank"
      rel="noreferrer"
    >
      <div className="absolute flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] left-[calc(50%-87.5px)] text-[#031c11] text-[14.9px] text-nowrap top-1/2 tracking-[1px] translate-y-[-50%] uppercase">
        <p className="leading-[15.984px]">SEE IF YOU ARE READY</p>
      </div>
    </a>
  );
}

function Group17() {
  return (
    <div
      className="[mask-clip:no-clip,no-clip] [mask-composite:intersect,intersect] [mask-mode:alpha,alpha] [mask-repeat:no-repeat,no-repeat] absolute inset-[-9.52%_-14.29%_-14.29%_-9.52%] mask-position-[1.988px,0px] mask-[20.88px_20.88px,25.851px_25.851px]"
      data-name="Group"
      style={{ maskImage: `url('${imgGroup}'), url('${imgGroup1}')` }}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 25.8514 25.8514"
      >
        <g id="Group">
          <path
            d={svgPaths.p21bc3f00}
            fill="url(#paint0_linear_1_2209)"
            id="Vector"
          />
        </g>
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_1_2209"
            x1="-2.2261"
            x2="26.2821"
            y1="26.551"
            y2="-0.462254"
          >
            <stop offset="0.0001" stopColor="#15BCDF" />
            <stop offset="0.615" stopColor="#0DDC7A" />
            <stop offset="1" stopColor="#15BCDF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function MaskGroup4() {
  return (
    <div
      className="absolute contents inset-[-9.52%_-14.29%_-14.29%_-9.52%]"
      data-name="Mask group"
    >
      <Group17 />
    </div>
  );
}

function Group18() {
  return (
    <div
      className="absolute contents inset-[-9.52%_-14.29%_-14.29%_-9.52%]"
      data-name="Group"
    >
      <MaskGroup4 />
    </div>
  );
}

function ClipPathGroup6() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group18 />
    </div>
  );
}

function Icon5() {
  return (
    <div
      className="absolute left-[calc(50%+0.94px)] overflow-clip size-[20.88px] top-[calc(50%+0.94px)] translate-x-[-50%] translate-y-[-50%]"
      data-name="Icon"
    >
      <div
        className="absolute left-[calc(50%-0.44px)] size-[17px] top-[calc(50%-0.44px)] translate-x-[-50%] translate-y-[-50%]"
        data-name="Vector"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 17 17"
        >
          <path d={svgPaths.p70c1900} fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function DivCircleIconB4() {
  return (
    <div
      className="absolute bg-white left-[249px] rounded-[41.891px] size-[45px] top-[273px]"
      data-name="Div [circle_icon_b]"
    >
      <Icon5 />
    </div>
  );
}

function Group44() {
  return (
    <div className="absolute contents left-[20px] top-[271px]">
      <Button4 />
      <DivCircleIconB4 />
    </div>
  );
}

function Frame46() {
  return (
    <div className="relative bg-black border-2 border-[#181818] border-solid h-[338px] overflow-clip rounded-[20px] w-[530px] shrink-0">
      <div
        className="absolute flex h-[516.262px] items-center justify-center left-[167px] top-[-156px] w-[495.669px]"
        style={
          {
            "--transform-inner-width": "0",
            "--transform-inner-height": "0",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-[211.822deg]">
          <Group43 />
        </div>
      </div>
      <div className="absolute capitalize flex flex-col font-['Poppins:Medium_Italic',sans-serif] h-[166px] italic justify-center leading-[0] left-[calc(50%-245px)] text-[36px] text-white top-[calc(50%+25px)] tracking-[-1px] translate-y-[-50%] w-[412px]">
        <p className="leading-[34px]">Content Creation</p>
      </div>
      <TripFillStreamlineRoundedFillMaterial2 />
      <Group44 />
    </div>
  );
}

function Group45() {
  return (
    <div className="h-[399.384px] relative w-[335.512px]">
      <div className="absolute inset-[-16%_-17.28%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 451.436 527.211"
        >
          <g id="Group 46">
            <g filter="url(#filter0_f_1_2150)" id="Ellipse 10">
              <ellipse
                cx="120.615"
                cy="167.343"
                fill="var(--fill-0, #4ABE8F)"
                fillOpacity="0.8"
                rx="120.615"
                ry="167.343"
                transform="matrix(0.939032 0.343831 -0.32565 0.94549 166.952 63.9137)"
              />
            </g>
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="527.211"
              id="filter0_f_1_2150"
              width="451.436"
              x="0"
              y="0"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_1_2150"
                stdDeviation="50"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function TripFillStreamlineRoundedFillMaterial3() {
  return (
    <div
      className="absolute left-[425px] size-[63px] top-[46px]"
      data-name="Trip-Fill--Streamline-Rounded-Fill-Material"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 63 63"
      >
        <g id="Trip-Fill--Streamline-Rounded-Fill-Material">
          <path d={svgPaths.p513bf00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <a
      className="absolute bg-white h-[44px] left-[22px] rounded-[64.8px] shadow-[1px_1px_10px_0px_#347c5e] top-[273px] w-[229px] cursor-pointer"
      data-name="button"
      href="https://calendly.com/ismail-socialsailor/30min?month=2025-12"
      target="_blank"
      rel="noreferrer"
    >
      <div className="absolute flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] left-[calc(50%-87.5px)] text-[#031c11] text-[14.9px] text-nowrap top-1/2 tracking-[1px] translate-y-[-50%] uppercase">
        <p className="leading-[15.984px]">SEE IF YOU ARE READY</p>
      </div>
    </a>
  );
}

function Group19() {
  return (
    <div
      className="[mask-clip:no-clip,no-clip] [mask-composite:intersect,intersect] [mask-mode:alpha,alpha] [mask-repeat:no-repeat,no-repeat] absolute inset-[-9.52%_-14.29%_-14.29%_-9.52%] mask-position-[1.988px,0px] mask-[20.88px_20.88px,25.851px_25.851px]"
      data-name="Group"
      style={{ maskImage: `url('${imgGroup}'), url('${imgGroup1}')` }}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 25.8514 25.8514"
      >
        <g id="Group">
          <path
            d={svgPaths.p21bc3f00}
            fill="url(#paint0_linear_1_2209)"
            id="Vector"
          />
        </g>
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_1_2209"
            x1="-2.2261"
            x2="26.2821"
            y1="26.551"
            y2="-0.462254"
          >
            <stop offset="0.0001" stopColor="#15BCDF" />
            <stop offset="0.615" stopColor="#0DDC7A" />
            <stop offset="1" stopColor="#15BCDF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function MaskGroup5() {
  return (
    <div
      className="absolute contents inset-[-9.52%_-14.29%_-14.29%_-9.52%]"
      data-name="Mask group"
    >
      <Group19 />
    </div>
  );
}

function Group20() {
  return (
    <div
      className="absolute contents inset-[-9.52%_-14.29%_-14.29%_-9.52%]"
      data-name="Group"
    >
      <MaskGroup5 />
    </div>
  );
}

function ClipPathGroup7() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group20 />
    </div>
  );
}

function Icon6() {
  return (
    <div
      className="absolute left-[calc(50%+0.94px)] overflow-clip size-[20.88px] top-[calc(50%+0.94px)] translate-x-[-50%] translate-y-[-50%]"
      data-name="Icon"
    >
      <div
        className="absolute left-[calc(50%-0.44px)] size-[17px] top-[calc(50%-0.44px)] translate-x-[-50%] translate-y-[-50%]"
        data-name="Vector"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 17 17"
        >
          <path d={svgPaths.p70c1900} fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function DivCircleIconB5() {
  return (
    <div
      className="absolute bg-white left-[249px] rounded-[41.891px] size-[45px] top-[273px]"
      data-name="Div [circle_icon_b]"
    >
      <Icon6 />
    </div>
  );
}

function Group46() {
  return (
    <div className="absolute contents left-[20px] top-[271px]">
      <Button5 />
      <DivCircleIconB5 />
    </div>
  );
}

function Frame47() {
  return (
    <div className="relative bg-black border-2 border-[#181818] border-solid h-[338px] overflow-clip rounded-[20px] w-[530px] shrink-0">
      <div
        className="absolute flex h-[516.262px] items-center justify-center left-[167px] top-[-156px] w-[495.669px]"
        style={
          {
            "--transform-inner-width": "0",
            "--transform-inner-height": "0",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-[211.822deg]">
          <Group45 />
        </div>
      </div>
      <div className="absolute capitalize flex flex-col font-['Poppins:Medium_Italic',sans-serif] h-[166px] italic justify-center leading-[0] left-[calc(50%-245px)] text-[36px] text-white top-[calc(50%+25px)] tracking-[-1px] translate-y-[-50%] w-[412px]">
        <p className="leading-[34px]">UI/Ux Design</p>
      </div>
      <TripFillStreamlineRoundedFillMaterial3 />
      <Group46 />
    </div>
  );
}

function Group47() {
  return (
    <div className="h-[399.384px] relative w-[335.512px]">
      <div className="absolute inset-[-16%_-17.28%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 451.436 527.211"
        >
          <g id="Group 46">
            <g filter="url(#filter0_f_1_2150)" id="Ellipse 10">
              <ellipse
                cx="120.615"
                cy="167.343"
                fill="var(--fill-0, #4ABE8F)"
                fillOpacity="0.8"
                rx="120.615"
                ry="167.343"
                transform="matrix(0.939032 0.343831 -0.32565 0.94549 166.952 63.9137)"
              />
            </g>
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="527.211"
              id="filter0_f_1_2150"
              width="451.436"
              x="0"
              y="0"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_1_2150"
                stdDeviation="50"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function TripFillStreamlineRoundedFillMaterial4() {
  return (
    <div
      className="absolute left-[425px] size-[63px] top-[46px]"
      data-name="Trip-Fill--Streamline-Rounded-Fill-Material"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 63 63"
      >
        <g id="Trip-Fill--Streamline-Rounded-Fill-Material">
          <path d={svgPaths.p513bf00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <a
      className="absolute bg-white h-[44px] left-[22px] rounded-[64.8px] shadow-[1px_1px_10px_0px_#347c5e] top-[273px] w-[229px] cursor-pointer"
      data-name="button"
      href="https://calendly.com/ismail-socialsailor/30min?month=2025-12"
      target="_blank"
      rel="noreferrer"
    >
      <div className="absolute flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] left-[calc(50%-87.5px)] text-[#031c11] text-[14.9px] text-nowrap top-1/2 tracking-[1px] translate-y-[-50%] uppercase">
        <p className="leading-[15.984px]">SEE IF YOU ARE READY</p>
      </div>
    </a>
  );
}

function Group21() {
  return (
    <div
      className="[mask-clip:no-clip,no-clip] [mask-composite:intersect,intersect] [mask-mode:alpha,alpha] [mask-repeat:no-repeat,no-repeat] absolute inset-[-9.52%_-14.29%_-14.29%_-9.52%] mask-position-[1.988px,0px] mask-[20.88px_20.88px,25.851px_25.851px]"
      data-name="Group"
      style={{ maskImage: `url('${imgGroup}'), url('${imgGroup1}')` }}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 25.8514 25.8514"
      >
        <g id="Group">
          <path
            d={svgPaths.p21bc3f00}
            fill="url(#paint0_linear_1_2209)"
            id="Vector"
          />
        </g>
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_1_2209"
            x1="-2.2261"
            x2="26.2821"
            y1="26.551"
            y2="-0.462254"
          >
            <stop offset="0.0001" stopColor="#15BCDF" />
            <stop offset="0.615" stopColor="#0DDC7A" />
            <stop offset="1" stopColor="#15BCDF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function MaskGroup6() {
  return (
    <div
      className="absolute contents inset-[-9.52%_-14.29%_-14.29%_-9.52%]"
      data-name="Mask group"
    >
      <Group21 />
    </div>
  );
}

function Group22() {
  return (
    <div
      className="absolute contents inset-[-9.52%_-14.29%_-14.29%_-9.52%]"
      data-name="Group"
    >
      <MaskGroup6 />
    </div>
  );
}

function ClipPathGroup8() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group22 />
    </div>
  );
}

function Icon7() {
  return (
    <div
      className="absolute left-[calc(50%+0.94px)] overflow-clip size-[20.88px] top-[calc(50%+0.94px)] translate-x-[-50%] translate-y-[-50%]"
      data-name="Icon"
    >
      <div
        className="absolute left-[calc(50%-0.44px)] size-[17px] top-[calc(50%-0.44px)] translate-x-[-50%] translate-y-[-50%]"
        data-name="Vector"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 17 17"
        >
          <path d={svgPaths.p70c1900} fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function DivCircleIconB6() {
  return (
    <div
      className="absolute bg-white left-[249px] rounded-[41.891px] size-[45px] top-[273px]"
      data-name="Div [circle_icon_b]"
    >
      <Icon7 />
    </div>
  );
}

function Group48() {
  return (
    <div className="absolute contents left-[20px] top-[271px]">
      <Button6 />
      <DivCircleIconB6 />
    </div>
  );
}

function Frame48() {
  return (
    <div className="relative bg-black border-2 border-[#181818] border-solid h-[338px] overflow-clip rounded-[20px] w-[530px] shrink-0">
      <div
        className="absolute flex h-[516.262px] items-center justify-center left-[167px] top-[-156px] w-[495.669px]"
        style={
          {
            "--transform-inner-width": "0",
            "--transform-inner-height": "0",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-[211.822deg]">
          <Group47 />
        </div>
      </div>
      <div className="absolute capitalize flex flex-col font-['Poppins:Medium_Italic',sans-serif] h-[166px] italic justify-center leading-[0] left-[calc(50%-245px)] text-[36px] text-white top-1/2 tracking-[-1px] translate-y-[-50%] w-[412px]">
        <p className="leading-[34px]">E-Commerce Consultancy</p>
      </div>
      <TripFillStreamlineRoundedFillMaterial4 />
      <Group48 />
    </div>
  );
}

function Group38() {
  return (
    <div className="flex flex-col gap-[24px] w-[530px] pb-[120px]">
      <Frame44 />
      <Frame45 />
      <Frame46 />
      <Frame47 />
      <Frame48 />
    </div>
  );
}

function Frame49() {
  return (
    <div
      className="absolute h-[850px] left-[24px] overflow-y-auto overscroll-contain top-[78px] w-[550px]"
      style={{ maxHeight: "850px", WebkitOverflowScrolling: "touch" }}
    >
      <Group38 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="absolute content-stretch flex h-[36px] items-center justify-center left-[24px] p-[12px] rounded-[12345px] top-0 w-[127px]">
      <div
        aria-hidden="true"
        className="absolute border-2 border-[#4b4b4b] border-dashed inset-0 pointer-events-none rounded-[12345px]"
      />
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[23px] relative shrink-0 text-[#b9b9b9] text-[16px] text-nowrap tracking-[1.12px]">
        SERVICES
      </p>
    </div>
  );
}

function Frame43() {
  return (
    <div className="absolute bg-[#111] h-[1212px] left-[36px] overflow-hidden rounded-[24px] top-0 w-[574px]">
      <Frame49 />
      <Frame23 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="absolute h-[950px] left-[96px] overflow-hidden top-[2246px] w-[1248px]">
      <p className="absolute font-['Poppins:Regular',sans-serif] h-[143px] leading-[56px] left-[660px] not-italic text-[#f9f9f9] text-[42px] top-[64px] tracking-[-2.1px] w-[553px]">
        <span className="font-['Poppins:Bold_Italic',sans-serif] italic tracking-[-0.8px]">
          Proven
        </span>
        <span>{` ways to scale your brand.`}</span>
      </p>
      <Group34 />
      <Button1 />
      <Frame21 />
      <Frame43 />
    </div>
  );
}

function DivCardImageContainer() {
  return (
    <div
      className="h-[264.96px] relative rounded-[10.08px] shrink-0 w-[338.33px]"
      data-name="Div [card-image-container]"
    >
      <div className="bg-clip-padding border-0 border-transparent border-solid overflow-clip relative rounded-[inherit] size-full">
        <div
          className="absolute h-[430px] left-[0.09px] top-[-35.91px] w-[344px]"
          data-name="image 21"
        >
          <img
            alt=""
            className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
            src={imgImage21}
          />
        </div>
      </div>
    </div>
  );
}

function ParagraphBlogCardRead() {
  return (
    <div
      className="h-[28.36px] opacity-60 relative rounded-[365.76px] shrink-0 w-[76.33px]"
      data-name="Paragraph [blog-card-read]"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#e2e2e2] border-solid inset-0 pointer-events-none rounded-[365.76px]"
      />
      <div className="bg-clip-padding border-0 border-transparent border-solid relative size-full">
        <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-[8.45px] not-italic text-[#1d1d1b] text-[15px] text-nowrap top-[14.08px] tracking-[-0.4752px] translate-y-[-50%]">
          <p className="leading-[20.592px]">#advice</p>
        </div>
      </div>
    </div>
  );
}

function ParagraphBlogCardRead1() {
  return (
    <div
      className="h-[28.36px] opacity-60 relative rounded-[365.76px] shrink-0 w-[87.73px]"
      data-name="Paragraph [blog-card-read]"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#e2e2e2] border-solid inset-0 pointer-events-none rounded-[365.76px]"
      />
      <div className="bg-clip-padding border-0 border-transparent border-solid relative size-full">
        <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-[8.45px] not-italic text-[#1d1d1b] text-[15px] text-nowrap top-[14.08px] tracking-[-0.4752px] translate-y-[-50%]">
          <p className="leading-[20.592px]">5 min read</p>
        </div>
      </div>
    </div>
  );
}

function DivBlogReadContainer() {
  return (
    <div
      className="h-[60px] relative shrink-0 w-[164.06px]"
      data-name="Div [blog-read-container]"
    >
      <div className="size-full">
        <div className="bg-clip-padding border-0 border-transparent border-solid content-stretch flex gap-[7.162px] items-start pb-[15.818px] pl-[7.906px] pr-[971.484px] pt-[15.828px] relative size-full">
          <ParagraphBlogCardRead />
          <ParagraphBlogCardRead1 />
        </div>
      </div>
    </div>
  );
}

function H3BlogCardTitle() {
  return (
    <div
      className="h-[108px] relative shrink-0 w-[338.36px]"
      data-name="H3 [blog-card-title]"
    >
      <div className="size-full">
        <div className="bg-clip-padding border-0 border-transparent border-solid content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold items-start leading-[0] not-italic pb-0 pl-[7.906px] pr-[16.028px] pt-0 relative size-full text-[#1d1d1b] text-[25.3px] text-nowrap">
          <div className="flex flex-col justify-center mb-[-0.006px] relative shrink-0">
            <p className="leading-[35.568px] text-nowrap">{`Your Sitemap: More Than `}</p>
          </div>
          <div className="flex flex-col justify-center mb-[-0.006px] relative shrink-0">
            <p className="leading-[35.568px] text-nowrap">{`Just a File, It's a Strategic `}</p>
          </div>
          <div className="flex flex-col justify-center mb-[-0.006px] relative shrink-0">
            <p className="leading-[35.568px] text-nowrap">
              Asset for SEO in 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Div() {
  return (
    <div className="h-[457px] relative shrink-0 w-[338px]" data-name="Div">
      <div className="size-full">
        <div className="bg-clip-padding border-0 border-transparent border-solid content-stretch flex flex-col items-start pb-0 pt-0 px-0 relative size-full">
          <DivCardImageContainer />
          <DivBlogReadContainer />
          <H3BlogCardTitle />
        </div>
      </div>
    </div>
  );
}

function BlogItemCardSmall() {
  return (
    <div
      className="absolute bg-white h-[507px] left-[954px] rounded-[15.984px] top-[377px] w-[356px]"
      data-name="blog item card/small"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#e2e2e2] border-solid inset-0 pointer-events-none rounded-[15.984px]"
      />
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pb-0 pt-[9.906px] px-[9.906px] relative size-full">
          <Div />
        </div>
      </div>
    </div>
  );
}

function ImageBlogCardImage() {
  return (
    <div
      className="absolute h-[264.96px] left-[0.26px] overflow-clip rounded-[10.08px] top-0 w-[338.33px]"
      data-name="Image [blog-card-image]"
    >
      <img
        alt=""
        className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none rounded-[10.08px] size-full"
        src={imgImageBlogCardImage}
      />
      <div
        className="absolute h-[449px] left-[-10.42px] top-[-6.91px] w-[366px]"
        data-name="image 18"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute h-[101.84%] left-[-0.05%] max-w-none top-0 w-[100.1%]"
            src={imgImage18}
          />
        </div>
      </div>
    </div>
  );
}

function DivCardImageContainer1() {
  return (
    <div
      className="h-[264.96px] relative rounded-[10.08px] shrink-0 w-[338.33px]"
      data-name="Div [card-image-container]"
    >
      <div className="bg-clip-padding border-0 border-transparent border-solid overflow-clip relative rounded-[inherit] size-full">
        <ImageBlogCardImage />
        <div
          className="absolute h-[458px] left-[-13.91px] top-[-79.91px] w-[366px]"
          data-name="image 20"
        >
          <img
            alt=""
            className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
            src={imgImage20}
          />
        </div>
      </div>
    </div>
  );
}

function ParagraphBlogCardRead2() {
  return (
    <div
      className="h-[28.36px] opacity-60 relative rounded-[365.76px] shrink-0 w-[76.33px]"
      data-name="Paragraph [blog-card-read]"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#e2e2e2] border-solid inset-0 pointer-events-none rounded-[365.76px]"
      />
      <div className="bg-clip-padding border-0 border-transparent border-solid relative size-full">
        <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-[8.45px] not-italic text-[#1d1d1b] text-[15px] text-nowrap top-[14.08px] tracking-[-0.4752px] translate-y-[-50%]">
          <p className="leading-[20.592px]">#advice</p>
        </div>
      </div>
    </div>
  );
}

function ParagraphBlogCardRead3() {
  return (
    <div
      className="h-[28.36px] opacity-60 relative rounded-[365.76px] shrink-0 w-[87.73px]"
      data-name="Paragraph [blog-card-read]"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#e2e2e2] border-solid inset-0 pointer-events-none rounded-[365.76px]"
      />
      <div className="bg-clip-padding border-0 border-transparent border-solid relative size-full">
        <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-[8.45px] not-italic text-[#1d1d1b] text-[15px] text-nowrap top-[14.08px] tracking-[-0.4752px] translate-y-[-50%]">
          <p className="leading-[20.592px]">5 min read</p>
        </div>
      </div>
    </div>
  );
}

function DivBlogReadContainer1() {
  return (
    <div
      className="h-[60px] relative shrink-0 w-[164.06px]"
      data-name="Div [blog-read-container]"
    >
      <div className="size-full">
        <div className="bg-clip-padding border-0 border-transparent border-solid content-stretch flex gap-[7.162px] items-start pb-[15.818px] pl-[7.906px] pr-[971.484px] pt-[15.828px] relative size-full">
          <ParagraphBlogCardRead2 />
          <ParagraphBlogCardRead3 />
        </div>
      </div>
    </div>
  );
}

function H3BlogCardTitle1() {
  return (
    <div
      className="h-[108px] relative shrink-0 w-[338.36px]"
      data-name="H3 [blog-card-title]"
    >
      <div className="size-full">
        <div className="bg-clip-padding border-0 border-transparent border-solid content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold items-start leading-[0] not-italic pb-[25993.828px] pl-[7.906px] pr-[16.028px] pt-0 relative size-full text-[#1d1d1b] text-[25.3px] text-nowrap">
          <div className="flex flex-col justify-center mb-[-0.006px] relative shrink-0">
            <p className="leading-[35.568px] text-nowrap">{`Your Sitemap: More Than `}</p>
          </div>
          <div className="flex flex-col justify-center mb-[-0.006px] relative shrink-0">
            <p className="leading-[35.568px] text-nowrap">{`Just a File, It's a Strategic `}</p>
          </div>
          <div className="flex flex-col justify-center mb-[-0.006px] relative shrink-0">
            <p className="leading-[35.568px] text-nowrap">
              Asset for SEO in 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Div1() {
  return (
    <div className="h-[457px] relative shrink-0 w-[338px]" data-name="Div">
      <div className="size-full">
        <div className="bg-clip-padding border-0 border-transparent border-solid content-stretch flex flex-col items-start pb-[25597.75px] pt-0 px-0 relative size-full">
          <DivCardImageContainer1 />
          <DivBlogReadContainer1 />
          <H3BlogCardTitle1 />
        </div>
      </div>
    </div>
  );
}

function BlogItemCardSmall1() {
  return (
    <div
      className="absolute bg-white h-[507px] left-[-62px] rounded-[15.984px] top-[377px] w-[356px]"
      data-name="blog item card/small"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#e2e2e2] border-solid inset-0 pointer-events-none rounded-[15.984px]"
      />
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pb-[25656.656px] pt-[9.906px] px-[9.906px] relative size-full">
          <Div1 />
        </div>
      </div>
    </div>
  );
}

function H3BlogCardTitle2() {
  return (
    <div
      className="absolute h-[72px] left-[15.09px] top-[540.09px] w-[542px]"
      data-name="H3 [blog-card-title]"
    >
      <div className="size-full">
        <div className="content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold items-start leading-[0] not-italic pb-[26208.813px] pl-[7.906px] pr-[52.372px] pt-0 relative size-full text-[#1d1d1b] text-[25.3px] text-nowrap">
          <div className="flex flex-col justify-center mb-[-0.006px] relative shrink-0">
            <p className="leading-[35.568px] text-nowrap">{`Robots.txt Optimization: How to Guide `}</p>
          </div>
          <div className="flex flex-col justify-center mb-[-0.006px] relative shrink-0">
            <p className="leading-[35.568px] text-nowrap">
              Search Engines Without Blocking Growth
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ParagraphBlogCardRead4() {
  return (
    <div
      className="h-[29.36px] opacity-60 relative rounded-[365.76px] shrink-0 w-[77.33px]"
      data-name="Paragraph [blog-card-read]"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#e2e2e2] border-dashed inset-0 pointer-events-none rounded-[366.26px]"
      />
      <div className="bg-clip-padding border-[0.5px] border-transparent border-solid relative size-full">
        <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-[8.19px] not-italic text-[#1d1d1b] text-[15px] text-nowrap top-[14.08px] tracking-[-0.4752px] translate-y-[-50%]">
          <p className="leading-[20.592px]">#advice</p>
        </div>
      </div>
    </div>
  );
}

function ParagraphBlogCardRead5() {
  return (
    <div
      className="h-[29.36px] opacity-60 relative rounded-[365.76px] shrink-0 w-[88.73px]"
      data-name="Paragraph [blog-card-read]"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#e2e2e2] border-dashed inset-0 pointer-events-none rounded-[366.26px]"
      />
      <div className="bg-clip-padding border-[0.5px] border-transparent border-solid relative size-full">
        <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-[8.19px] not-italic text-[#1d1d1b] text-[15px] text-nowrap top-[14.08px] tracking-[-0.4752px] translate-y-[-50%]">
          <p className="leading-[20.592px]">5 min read</p>
        </div>
      </div>
    </div>
  );
}

function DivBlogReadContainer2() {
  return (
    <div
      className="absolute h-[60px] left-[15.09px] top-[480.09px] w-[187px]"
      data-name="Div [blog-read-container]"
    >
      <div className="size-full">
        <div className="content-stretch flex gap-[7.162px] items-start pb-[15.818px] pl-[7.906px] pr-[363.813px] pt-[15.828px] relative size-full">
          <ParagraphBlogCardRead4 />
          <ParagraphBlogCardRead5 />
        </div>
      </div>
    </div>
  );
}

function DivCardImageContainer2() {
  return (
    <div
      className="absolute h-[264.96px] left-[0.19px] rounded-[10.08px] top-[0.19px] w-[338.33px]"
      data-name="Div [card-image-container]"
    />
  );
}

function DivCardImageContainer3() {
  return (
    <div
      className="absolute h-[468px] left-[calc(50%-0.41px)] overflow-clip rounded-[10.08px] top-[11.81px] translate-x-[-50%] w-[545px]"
      data-name="Div [card-image-container]"
    >
      <DivCardImageContainer2 />
      <div
        className="absolute h-[760px] left-[-37px] top-[0.28px] w-[619px]"
        data-name="image 18"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute h-[101.84%] left-[-0.05%] max-w-none top-0 w-[100.1%]"
            src={imgImage18}
          />
        </div>
      </div>
    </div>
  );
}

function Div2() {
  return (
    <div
      className="bg-white h-[691px] relative rounded-[24px] shrink-0 w-[570px]"
      data-name="Div"
    >
      <div className="bg-clip-padding border-0 border-transparent border-solid relative size-full">
        <H3BlogCardTitle2 />
        <DivBlogReadContainer2 />
        <DivCardImageContainer3 />
      </div>
    </div>
  );
}

function BlogItem() {
  return (
    <div
      className="absolute h-[700px] left-[330px] rounded-[15.984px] top-[377px] w-[588px]"
      data-name="Blog item"
    >
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pb-[25655.656px] pt-[8.906px] px-[8.906px] relative size-full">
          <Div2 />
        </div>
      </div>
    </div>
  );
}

function Group39() {
  return (
    <div className="absolute contents left-[-62px] top-[377px]">
      <BlogItemCardSmall />
      <BlogItemCardSmall1 />
      <BlogItem />
    </div>
  );
}

function Frame25() {
  return (
    <div className="absolute content-stretch flex h-[36px] items-center justify-center left-0 p-[12px] rounded-[12345px] top-[26px] w-[127px]">
      <div
        aria-hidden="true"
        className="absolute border-2 border-[#4b4b4b] border-dashed inset-0 pointer-events-none rounded-[12345px]"
      />
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[23px] relative shrink-0 text-[#b9b9b9] text-[16px] text-nowrap tracking-[1.12px]">
        BLOG
      </p>
    </div>
  );
}

function Frame51() {
  return (
    <div className="absolute h-[1201px] left-1/2 overflow-clip top-[4577px] translate-x-[-50%] w-[1248px]">
      <Group39 />
      <Frame25 />
      <div className="absolute flex flex-col font-['Poppins:Light',sans-serif] h-[198px] justify-center leading-[0] left-[305px] not-italic text-[0px] text-white top-[190px] tracking-[-3px] translate-y-[-50%] w-[735px]">
        <p className="leading-[50px] text-[42px]">
          <span className="font-['Poppins:SemiBold_Italic',sans-serif] italic tracking-[-3px]">{`Stay ahead `}</span>
          <span>{`with actionable insights and `}</span>
          <span className="font-['Poppins:SemiBold_Italic',sans-serif] italic tracking-[-3px]">
            growth-focused
          </span>
          <span>{` stories.`}</span>
        </p>
      </div>
    </div>
  );
}

function Frame30() {
  return (
    <div className="absolute content-stretch flex h-[36px] items-center justify-center left-[132px] p-[12px] rounded-[12345px] top-[45px] w-[127px]">
      <div
        aria-hidden="true"
        className="absolute border-2 border-[#4b4b4b] border-dashed inset-0 pointer-events-none rounded-[12345px]"
      />
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[23px] relative shrink-0 text-[#b9b9b9] text-[16px] text-nowrap tracking-[1.12px]">
        PROCESS
      </p>
    </div>
  );
}

function Icon8() {
  return (
    <div
      className="absolute left-[109px] size-[76px] top-[121px]"
      data-name="Icon"
    >
      <div className="absolute inset-[-51.32%_-53.95%_-53.95%_-51.32%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 156 156"
        >
          <g filter="url(#filter0_d_1_2134)" id="Icon">
            <rect
              fill="var(--fill-0, white)"
              height="76"
              rx="38"
              width="76"
              x="39"
              y="39"
            />
            <rect
              height="73.6"
              rx="36.8"
              stroke="var(--stroke-0, #F3F3F3)"
              strokeWidth="2.4"
              width="73.6"
              x="40.2"
              y="40.2"
            />
            <path
              d={svgPaths.p18f97b80}
              fill="var(--fill-0, white)"
              id="Vector"
            />
            <path
              d={svgPaths.pb00de00}
              fill="var(--fill-0, #1D1D1B)"
              id="Vector_2"
            />
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="156"
              id="filter0_d_1_2134"
              width="156"
              x="0"
              y="0"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feMorphology
                in="SourceAlpha"
                operator="dilate"
                radius="15"
                result="effect1_dropShadow_1_2134"
              />
              <feOffset dx="1" dy="1" />
              <feGaussianBlur stdDeviation="12.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.884615 0 0 0 0 1 0 0 0 0 0.957594 0 0 0 1 0"
              />
              <feBlend
                in2="BackgroundImageFix"
                mode="normal"
                result="effect1_dropShadow_1_2134"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_1_2134"
                mode="normal"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Frame58() {
  return (
    <div className="bg-black content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[100px] shrink-0 size-[28px]">
      <p className="font-['Manrope:SemiBold',sans-serif] font-semibold h-[25px] leading-[25px] relative shrink-0 text-[18px] text-center text-white tracking-[-0.72px] w-full">
        1
      </p>
    </div>
  );
}

function Frame59() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[24px] items-center left-[23px] p-[8px] rounded-[100px] top-[247px] w-[245px]">
      <Frame58 />
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[25px] relative shrink-0 text-[16px] text-black text-center text-nowrap tracking-[-0.32px]">
        Discovery call
      </p>
    </div>
  );
}

function Frame68() {
  return (
    <div className="bg-black content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[100px] shrink-0 size-[28px]">
      <p className="font-['Manrope:SemiBold',sans-serif] font-semibold h-[25px] leading-[25px] relative shrink-0 text-[18px] text-center text-white tracking-[-0.72px] w-full">
        2
      </p>
    </div>
  );
}

function Frame60() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[24px] items-center left-[23px] p-[8px] rounded-[100px] top-[297px] w-[245px]">
      <Frame68 />
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[25px] relative shrink-0 text-[16px] text-black text-center text-nowrap tracking-[-0.32px]">
        Brand Audit
      </p>
    </div>
  );
}

function Frame69() {
  return (
    <div className="bg-black content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[100px] shrink-0 size-[28px]">
      <p className="font-['Manrope:SemiBold',sans-serif] font-semibold h-[25px] leading-[25px] relative shrink-0 text-[18px] text-center text-white tracking-[-0.72px] w-full">
        3
      </p>
    </div>
  );
}

function Frame61() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[24px] items-center left-[23px] p-[8px] rounded-[100px] top-[347px] w-[245px]">
      <Frame69 />
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[25px] relative shrink-0 text-[16px] text-black text-center text-nowrap tracking-[-0.32px]">{`Goals & Goal Allignment`}</p>
    </div>
  );
}

function Frame70() {
  return (
    <div className="bg-black content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[100px] shrink-0 size-[28px]">
      <p className="font-['Manrope:SemiBold',sans-serif] font-semibold h-[25px] leading-[25px] relative shrink-0 text-[18px] text-center text-white tracking-[-0.72px] w-full">
        4
      </p>
    </div>
  );
}

function Frame62() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[24px] items-center left-[23px] p-[8px] rounded-[100px] top-[397px] w-[245px]">
      <Frame70 />
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[25px] relative shrink-0 text-[16px] text-black text-center text-nowrap tracking-[-0.32px]">{`Access & Account Setup`}</p>
    </div>
  );
}

function Frame54() {
  return (
    <div className="absolute bg-[#fbfbfb] border border-[#ddd] border-solid h-[544px] left-[132px] overflow-clip rounded-[16px] top-[413px] w-[294px]">
      <p className="absolute font-['Manrope:SemiBold',sans-serif] font-semibold leading-[25px] left-[21px] text-[#747474] text-[18px] text-nowrap top-[21px] tracking-[-0.72px]">
        [ 1 ]
      </p>
      <div className="absolute h-[69px] left-px top-[158px] w-[291px]">
        <div className="absolute inset-[-2.1%_-0.37%_-1.52%_-0.39%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 293.196 71.5"
          >
            <path
              d={svgPaths.p3105d3a0}
              id="Vector 1"
              stroke="var(--stroke-0, #E4E4E4)"
              strokeDasharray="10 10"
              strokeWidth="3"
            />
          </svg>
        </div>
      </div>
      <Icon8 />
      <p className="absolute font-['Manrope:SemiBold',sans-serif] font-semibold leading-[25px] left-[23px] text-[36px] text-black text-nowrap top-[70px] tracking-[-1.44px]">
        Onboarding
      </p>
      <Frame59 />
      <Frame60 />
      <Frame61 />
      <Frame62 />
    </div>
  );
}

function Icon9() {
  return (
    <div
      className="absolute left-[109px] size-[76px] top-[121px]"
      data-name="Icon"
    >
      <div className="absolute inset-[-51.32%_-53.95%_-53.95%_-51.32%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 156 156"
        >
          <g filter="url(#filter0_d_1_2146)" id="Icon">
            <rect
              fill="var(--fill-0, white)"
              height="76"
              rx="38"
              width="76"
              x="39"
              y="39"
            />
            <rect
              height="73.6"
              rx="36.8"
              stroke="var(--stroke-0, #F3F3F3)"
              strokeWidth="2.4"
              width="73.6"
              x="40.2"
              y="40.2"
            />
            <path
              d={svgPaths.p1513a380}
              fill="var(--fill-0, white)"
              id="Vector"
            />
            <path
              clipRule="evenodd"
              d={svgPaths.pcfd3d00}
              fill="var(--fill-0, black)"
              fillRule="evenodd"
              id="Union"
            />
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="156"
              id="filter0_d_1_2146"
              width="156"
              x="0"
              y="0"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feMorphology
                in="SourceAlpha"
                operator="dilate"
                radius="15"
                result="effect1_dropShadow_1_2146"
              />
              <feOffset dx="1" dy="1" />
              <feGaussianBlur stdDeviation="12.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.884615 0 0 0 0 1 0 0 0 0 0.957594 0 0 0 1 0"
              />
              <feBlend
                in2="BackgroundImageFix"
                mode="normal"
                result="effect1_dropShadow_1_2146"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_1_2146"
                mode="normal"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Frame71() {
  return (
    <div className="bg-black content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[100px] shrink-0 size-[28px]">
      <p className="font-['Manrope:SemiBold',sans-serif] font-semibold h-[25px] leading-[25px] relative shrink-0 text-[18px] text-center text-white tracking-[-0.72px] w-full">
        1
      </p>
    </div>
  );
}

function Frame72() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[24px] items-center left-[23px] p-[8px] rounded-[100px] top-[247px] w-[245px]">
      <Frame71 />
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[25px] relative shrink-0 text-[16px] text-black text-center text-nowrap tracking-[-0.32px]">
        Industry Research
      </p>
    </div>
  );
}

function Frame73() {
  return (
    <div className="bg-black content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[100px] shrink-0 size-[28px]">
      <p className="font-['Manrope:SemiBold',sans-serif] font-semibold h-[25px] leading-[25px] relative shrink-0 text-[18px] text-center text-white tracking-[-0.72px] w-full">
        2
      </p>
    </div>
  );
}

function Frame74() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[24px] items-center left-[23px] p-[8px] rounded-[100px] top-[297px] w-[245px]">
      <Frame73 />
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[25px] relative shrink-0 text-[16px] text-black text-center text-nowrap tracking-[-0.32px]">
        Unit Economics
      </p>
    </div>
  );
}

function Frame75() {
  return (
    <div className="bg-black content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[100px] shrink-0 size-[28px]">
      <p className="font-['Manrope:SemiBold',sans-serif] font-semibold h-[25px] leading-[25px] relative shrink-0 text-[18px] text-center text-white tracking-[-0.72px] w-full">
        3
      </p>
    </div>
  );
}

function Frame76() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[24px] items-center left-[23px] p-[8px] rounded-[100px] top-[347px] w-[245px]">
      <Frame75 />
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[25px] relative shrink-0 text-[16px] text-black text-center text-nowrap tracking-[-0.32px]">
        Creative Strategy Plan
      </p>
    </div>
  );
}

function Frame77() {
  return (
    <div className="bg-black content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[100px] shrink-0 size-[28px]">
      <p className="font-['Manrope:SemiBold',sans-serif] font-semibold h-[25px] leading-[25px] relative shrink-0 text-[18px] text-center text-white tracking-[-0.72px] w-full">
        4
      </p>
    </div>
  );
}

function Frame78() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[24px] items-center left-[23px] p-[8px] rounded-[100px] top-[397px] w-[245px]">
      <Frame77 />
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[25px] relative shrink-0 text-[16px] text-black text-center text-nowrap tracking-[-0.32px]">
        Marketplace Listing Plan
      </p>
    </div>
  );
}

function Frame79() {
  return (
    <div className="bg-black content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[100px] shrink-0 size-[28px]">
      <p className="font-['Manrope:SemiBold',sans-serif] font-semibold h-[25px] leading-[25px] relative shrink-0 text-[18px] text-center text-white tracking-[-0.72px] w-full">
        5
      </p>
    </div>
  );
}

function Frame63() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[24px] items-center left-[23px] p-[8px] rounded-[100px] top-[447px] w-[245px]">
      <Frame79 />
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[25px] relative shrink-0 text-[16px] text-black text-center text-nowrap tracking-[-0.32px]">{`Ad & Channel Startegy`}</p>
    </div>
  );
}

function Frame55() {
  return (
    <div className="absolute bg-[#fbfbfb] border border-[#ddd] border-solid h-[544px] left-[426px] overflow-clip rounded-[16px] top-[413px] w-[294px]">
      <p className="absolute font-['Manrope:SemiBold',sans-serif] font-semibold leading-[25px] left-[21px] text-[#747474] text-[18px] text-nowrap top-[21px] tracking-[-0.72px]">
        [ 2 ]
      </p>
      <div className="absolute h-[69px] left-px top-[158px] w-[291px]">
        <div className="absolute inset-[-2.1%_-0.37%_-1.52%_-0.39%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 293.196 71.5"
          >
            <path
              d={svgPaths.p3105d3a0}
              id="Vector 1"
              stroke="var(--stroke-0, #E4E4E4)"
              strokeDasharray="10 10"
              strokeWidth="3"
            />
          </svg>
        </div>
      </div>
      <Icon9 />
      <p className="absolute font-['Manrope:SemiBold',sans-serif] font-semibold leading-[25px] left-[23px] text-[36px] text-black text-nowrap top-[70px] tracking-[-1.44px]">
        Strategy
      </p>
      <Frame72 />
      <Frame74 />
      <Frame76 />
      <Frame78 />
      <Frame63 />
    </div>
  );
}

function ModulePuzzle3CodePuzzleModuleProgrammingPluginPiece() {
  return (
    <div
      className="absolute inset-[0.6%_5.42%_5.65%_0.83%]"
      data-name="module-puzzle-3--code-puzzle-module-programming-plugin-piece"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 30 30"
      >
        <g id="module-puzzle-3--code-puzzle-module-programming-plugin-piece">
          <path
            clipRule="evenodd"
            d={svgPaths.p122c4e80}
            fill="var(--fill-0, black)"
            fillRule="evenodd"
            id="Subtract"
          />
        </g>
      </svg>
    </div>
  );
}

function TrendingUpFillStreamlineRoundedFillMaterialProFree() {
  return (
    <div
      className="absolute left-[19.6px] overflow-clip size-[32px] top-[19.6px]"
      data-name="Trending Up Fill Streamline Rounded Fill - Material Pro Free"
    >
      <ModulePuzzle3CodePuzzleModuleProgrammingPluginPiece />
    </div>
  );
}

function Icon10() {
  return (
    <div
      className="absolute bg-white border-[#f3f3f3] border-[2.4px] border-solid left-[109px] overflow-clip rounded-[100px] shadow-[1px_1px_25px_15px_#e2fff4] size-[76px] top-[121px]"
      data-name="Icon"
    >
      <div
        className="absolute inset-[-2.4px_calc(4.17%-2.4px)_calc(4.17%-2.4px)_-2.4px]"
        data-name="Vector"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 72.8333 72.8333"
        >
          <path
            d={svgPaths.p19ca4b00}
            fill="var(--fill-0, white)"
            id="Vector"
          />
        </svg>
      </div>
      <TrendingUpFillStreamlineRoundedFillMaterialProFree />
    </div>
  );
}

function Frame80() {
  return (
    <div className="bg-black content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[100px] shrink-0 size-[28px]">
      <p className="font-['Manrope:SemiBold',sans-serif] font-semibold h-[25px] leading-[25px] relative shrink-0 text-[18px] text-center text-white tracking-[-0.72px] w-full">
        1
      </p>
    </div>
  );
}

function Frame81() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[24px] items-center left-[23px] p-[8px] rounded-[100px] top-[247px] w-[245px]">
      <Frame80 />
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[25px] relative shrink-0 text-[16px] text-black text-center text-nowrap tracking-[-0.32px]">{`Tracking & Pixel Setup`}</p>
    </div>
  );
}

function Frame82() {
  return (
    <div className="bg-black content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[100px] shrink-0 size-[28px]">
      <p className="font-['Manrope:SemiBold',sans-serif] font-semibold h-[25px] leading-[25px] relative shrink-0 text-[18px] text-center text-white tracking-[-0.72px] w-full">
        2
      </p>
    </div>
  );
}

function Frame83() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[24px] items-center left-[23px] p-[8px] rounded-[100px] top-[297px] w-[245px]">
      <Frame82 />
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[25px] relative shrink-0 text-[16px] text-black text-center text-nowrap tracking-[-0.32px]">
        Website Optimization
      </p>
    </div>
  );
}

function Frame84() {
  return (
    <div className="bg-black content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[100px] shrink-0 size-[28px]">
      <p className="font-['Manrope:SemiBold',sans-serif] font-semibold h-[25px] leading-[25px] relative shrink-0 text-[18px] text-center text-white tracking-[-0.72px] w-full">
        3
      </p>
    </div>
  );
}

function Frame85() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[24px] items-center left-[23px] p-[8px] rounded-[100px] top-[347px] w-[245px]">
      <Frame84 />
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[25px] relative shrink-0 text-[16px] text-black text-center text-nowrap tracking-[-0.32px]">
        Marketplace Onboarding
      </p>
    </div>
  );
}

function Frame88() {
  return (
    <div className="bg-black content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[100px] shrink-0 size-[28px]">
      <p className="font-['Manrope:SemiBold',sans-serif] font-semibold h-[25px] leading-[25px] relative shrink-0 text-[18px] text-center text-white tracking-[-0.72px] w-full">
        4
      </p>
    </div>
  );
}

function Frame89() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[24px] items-center left-[23px] p-[8px] rounded-[100px] top-[397px] w-[245px]">
      <Frame88 />
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[25px] relative shrink-0 text-[16px] text-black text-center text-nowrap tracking-[-0.32px]">
        Creative Production
      </p>
    </div>
  );
}

function Frame90() {
  return (
    <div className="bg-black content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[100px] shrink-0 size-[28px]">
      <p className="font-['Manrope:SemiBold',sans-serif] font-semibold h-[25px] leading-[25px] relative shrink-0 text-[18px] text-center text-white tracking-[-0.72px] w-full">
        5
      </p>
    </div>
  );
}

function Frame91() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[24px] items-center left-[23px] p-[8px] rounded-[100px] top-[447px] w-[245px]">
      <Frame90 />
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[25px] relative shrink-0 text-[16px] text-black text-center text-nowrap tracking-[-0.32px]">
        Campaign Setup
      </p>
    </div>
  );
}

function Frame56() {
  return (
    <div className="absolute bg-[#fbfbfb] border border-[#ddd] border-solid h-[544px] left-[720px] overflow-clip rounded-[16px] top-[413px] w-[294px]">
      <p className="absolute font-['Manrope:SemiBold',sans-serif] font-semibold leading-[25px] left-[21px] text-[#747474] text-[18px] text-nowrap top-[21px] tracking-[-0.72px]">
        [ 3 ]
      </p>
      <div className="absolute h-[69px] left-px top-[158px] w-[291px]">
        <div className="absolute inset-[-2.1%_-0.37%_-1.52%_-0.39%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 293.196 71.5"
          >
            <path
              d={svgPaths.p3105d3a0}
              id="Vector 1"
              stroke="var(--stroke-0, #E4E4E4)"
              strokeDasharray="10 10"
              strokeWidth="3"
            />
          </svg>
        </div>
      </div>
      <Icon10 />
      <p className="absolute font-['Manrope:SemiBold',sans-serif] font-semibold leading-[25px] left-[23px] text-[36px] text-black text-nowrap top-[70px] tracking-[-1.44px]">
        Execution
      </p>
      <Frame81 />
      <Frame83 />
      <Frame85 />
      <Frame89 />
      <Frame91 />
    </div>
  );
}

function TrendingUpFill() {
  return (
    <div
      className="absolute bottom-[18.75%] left-[3.13%] right-[9.38%] top-1/4"
      data-name="trending-up-fill"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 28 18"
      >
        <g id="trending-up-fill">
          <path d={svgPaths.p35976c80} fill="var(--fill-0, black)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function TrendingUpFillStreamlineRoundedFillMaterialProFree1() {
  return (
    <div
      className="absolute inset-[calc(28.95%-2.4px)] overflow-clip"
      data-name="Trending Up Fill Streamline Rounded Fill - Material Pro Free"
    >
      <TrendingUpFill />
    </div>
  );
}

function Icon11() {
  return (
    <div
      className="absolute bg-white border-[#f3f3f3] border-[2.4px] border-solid left-[109px] overflow-clip rounded-[100px] shadow-[1px_1px_25px_15px_#e2fff4] size-[76px] top-[121px]"
      data-name="Icon"
    >
      <div
        className="absolute inset-[-2.4px_calc(4.17%-2.4px)_calc(4.17%-2.4px)_-2.4px]"
        data-name="Vector"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 72.8333 72.8333"
        >
          <path
            d={svgPaths.p19ca4b00}
            fill="var(--fill-0, white)"
            id="Vector"
          />
        </svg>
      </div>
      <TrendingUpFillStreamlineRoundedFillMaterialProFree1 />
    </div>
  );
}

function Frame92() {
  return (
    <div className="bg-black content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[100px] shrink-0 size-[28px]">
      <p className="font-['Manrope:SemiBold',sans-serif] font-semibold h-[25px] leading-[25px] relative shrink-0 text-[18px] text-center text-white tracking-[-0.72px] w-full">
        1
      </p>
    </div>
  );
}

function Frame93() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[24px] items-center left-[23px] p-[8px] rounded-[100px] top-[247px] w-[245px]">
      <Frame92 />
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[25px] relative shrink-0 text-[16px] text-black text-center text-nowrap tracking-[-0.32px]">
        Weekly Reporting
      </p>
    </div>
  );
}

function Frame94() {
  return (
    <div className="bg-black content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[100px] shrink-0 size-[28px]">
      <p className="font-['Manrope:SemiBold',sans-serif] font-semibold h-[25px] leading-[25px] relative shrink-0 text-[18px] text-center text-white tracking-[-0.72px] w-full">
        2
      </p>
    </div>
  );
}

function Frame95() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[24px] items-center left-[23px] p-[8px] rounded-[100px] top-[297px] w-[245px]">
      <Frame94 />
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[25px] relative shrink-0 text-[16px] text-black text-center text-nowrap tracking-[-0.32px]">
        Performance Optimization
      </p>
    </div>
  );
}

function Frame96() {
  return (
    <div className="bg-black content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[100px] shrink-0 size-[28px]">
      <p className="font-['Manrope:SemiBold',sans-serif] font-semibold h-[25px] leading-[25px] relative shrink-0 text-[18px] text-center text-white tracking-[-0.72px] w-full">
        3
      </p>
    </div>
  );
}

function Frame97() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[24px] items-center left-[23px] p-[8px] rounded-[100px] top-[347px] w-[245px]">
      <Frame96 />
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[25px] relative shrink-0 text-[16px] text-black text-center text-nowrap tracking-[-0.32px]">
        Creative Refresh Cycles
      </p>
    </div>
  );
}

function Frame98() {
  return (
    <div className="bg-black content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[100px] shrink-0 size-[28px]">
      <p className="font-['Manrope:SemiBold',sans-serif] font-semibold h-[25px] leading-[25px] relative shrink-0 text-[18px] text-center text-white tracking-[-0.72px] w-full">
        4
      </p>
    </div>
  );
}

function Frame99() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[24px] items-center left-[23px] p-[8px] rounded-[100px] top-[397px] w-[245px]">
      <Frame98 />
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[25px] relative shrink-0 text-[16px] text-black text-center text-nowrap tracking-[-0.32px]">
        Scaling Strategies
      </p>
    </div>
  );
}

function Frame100() {
  return (
    <div className="bg-black content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[100px] shrink-0 size-[28px]">
      <p className="font-['Manrope:SemiBold',sans-serif] font-semibold h-[25px] leading-[25px] relative shrink-0 text-[18px] text-center text-white tracking-[-0.72px] w-full">
        5
      </p>
    </div>
  );
}

function Frame102() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[24px] items-center left-[23px] p-[8px] rounded-[100px] top-[447px] w-[245px]">
      <Frame100 />
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[25px] relative shrink-0 text-[16px] text-black text-center text-nowrap tracking-[-0.32px]">
        Brand Expansion Map
      </p>
    </div>
  );
}

function Frame57() {
  return (
    <div className="absolute bg-[#fbfbfb] border border-[#ddd] border-solid h-[544px] left-[1014px] overflow-clip rounded-[16px] top-[413px] w-[294px]">
      <p className="absolute font-['Manrope:SemiBold',sans-serif] font-semibold leading-[25px] left-[21px] text-[#747474] text-[18px] text-nowrap top-[21px] tracking-[-0.72px]">
        [ 4 ]
      </p>
      <div className="absolute h-[69px] left-px top-[158px] w-[291px]">
        <div className="absolute inset-[-2.1%_-0.37%_-1.52%_-0.39%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 293.196 71.5"
          >
            <path
              d={svgPaths.p3105d3a0}
              id="Vector 1"
              stroke="var(--stroke-0, #E4E4E4)"
              strokeDasharray="10 10"
              strokeWidth="3"
            />
          </svg>
        </div>
      </div>
      <Icon11 />
      <p className="absolute font-['Manrope:SemiBold',sans-serif] font-semibold leading-[25px] left-[23px] text-[36px] text-black text-nowrap top-[70px] tracking-[-1.44px]">
        Growth
      </p>
      <Frame93 />
      <Frame95 />
      <Frame97 />
      <Frame99 />
      <Frame102 />
    </div>
  );
}

function Frame53() {
  return (
    <div className="absolute bg-[#fbfbfb] h-[1053px] left-0 overflow-clip rounded-tl-[46px] rounded-tr-[46px] top-[3165px] w-[1440px]">
      <p className="absolute font-['Poppins:ExtraLight',sans-serif] h-[119px] leading-[132px] left-[calc(50%-374px)] not-italic text-[72px] text-black top-[122px] tracking-[-2.88px] w-[303px]">{`The way `}</p>
      <p className="absolute font-['Poppins:SemiBold_Italic',sans-serif] h-[111px] italic leading-[132px] left-[calc(50%-194px)] text-[96px] text-black top-[199px] tracking-[-3.84px] w-[387px]">
        we work
      </p>
      <Frame30 />
      <Frame54 />
      <Frame55 />
      <Frame56 />
      <Frame57 />
      <div className="absolute font-['Manrope:Regular',sans-serif] font-normal leading-[25px] left-[1014px] text-[16px] text-black text-nowrap top-[103px]">
        <p className="mb-0">With 10,000+ successful campaigns,</p>
        <p className="mb-0">
          <span className="font-['Manrope:Bold',sans-serif] font-bold">
            we know what works
          </span>
          <span>{`, what doesn't and `}</span>
        </p>
        <p>where to focus right from the start.</p>
      </div>
    </div>
  );
}

function Frame64() {
  return (
    <div className="absolute bg-linear-to-b from-[#fbfbfb] h-[363px] left-1/2 to-[#111111] top-[4214px] translate-x-[-50%] w-[1440px]" />
  );
}

function Icon12() {
  return (
    <div
      className="absolute left-[18px] size-[27.359px] top-[18px]"
      data-name="Icon"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 27.3594 27.3594"
      >
        <g clipPath="url(#clip0_1_2314)" id="Icon">
          <path
            d={svgPaths.p1e2dff40}
            fill="var(--fill-0, white)"
            id="Vector"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_2314">
            <rect fill="white" height="27.3594" width="27.3594" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ButtonFaqBtn() {
  return (
    <div
      className="absolute left-[814.03px] overflow-clip rounded-[63.359px] size-[63.36px] top-0"
      data-name="Button [faq-btn]"
    >
      <Icon12 />
    </div>
  );
}

function DivOpenFaqItem() {
  return (
    <div
      className="absolute h-[63.36px] left-0 top-[37px] w-[877.4px]"
      data-name="Div [open_faq_item]"
    >
      <ButtonFaqBtn />
      <div className="absolute flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] left-0 text-[25.1px] text-nowrap text-white top-[31.61px] translate-y-[-50%]">
        <p className="leading-[35.568px]">When will we see the first sales?</p>
      </div>
    </div>
  );
}

function ItemFaqItem() {
  return (
    <div
      className="h-[136.36px] relative shrink-0 w-[877.4px]"
      data-name="Item [faq-item]"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#414141] border-[1px_0px_0px] border-solid inset-0 pointer-events-none"
      />
      <div className="bg-clip-padding border-0 border-transparent border-solid relative size-full">
        <DivOpenFaqItem />
      </div>
    </div>
  );
}

function Icon13() {
  return (
    <div
      className="absolute left-[18px] size-[27.359px] top-[18px]"
      data-name="Icon"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 27.3594 27.3594"
      >
        <g clipPath="url(#clip0_1_2314)" id="Icon">
          <path
            d={svgPaths.p1e2dff40}
            fill="var(--fill-0, white)"
            id="Vector"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_2314">
            <rect fill="white" height="27.3594" width="27.3594" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ButtonFaqBtn1() {
  return (
    <div
      className="absolute left-[814.03px] overflow-clip rounded-[63.359px] size-[63.36px] top-0"
      data-name="Button [faq-btn]"
    >
      <Icon13 />
    </div>
  );
}

function DivOpenFaqItem1() {
  return (
    <div
      className="absolute h-[63.36px] left-0 top-[37px] w-[877.4px]"
      data-name="Div [open_faq_item]"
    >
      <ButtonFaqBtn1 />
      <div className="absolute flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] left-0 text-[25.1px] text-nowrap text-white top-[31.61px] translate-y-[-50%]">
        <p className="leading-[35.568px]">
          How do you measure the success of advertising campaigns?
        </p>
      </div>
    </div>
  );
}

function ItemFaqItem1() {
  return (
    <div
      className="h-[136.36px] relative shrink-0 w-[877.4px]"
      data-name="Item [faq-item]"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#414141] border-[1px_0px_0px] border-solid inset-0 pointer-events-none"
      />
      <div className="bg-clip-padding border-0 border-transparent border-solid relative size-full">
        <DivOpenFaqItem1 />
      </div>
    </div>
  );
}

function Icon14() {
  return (
    <div
      className="absolute left-[18px] size-[27.359px] top-[18px]"
      data-name="Icon"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 27.3594 27.3594"
      >
        <g clipPath="url(#clip0_1_2314)" id="Icon">
          <path
            d={svgPaths.p1e2dff40}
            fill="var(--fill-0, white)"
            id="Vector"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_2314">
            <rect fill="white" height="27.3594" width="27.3594" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ButtonFaqBtn2() {
  return (
    <div
      className="absolute left-[814.03px] overflow-clip rounded-[63.359px] size-[63.36px] top-0"
      data-name="Button [faq-btn]"
    >
      <Icon14 />
    </div>
  );
}

function DivOpenFaqItem2() {
  return (
    <div
      className="absolute h-[63.36px] left-0 top-[37px] w-[877.4px]"
      data-name="Div [open_faq_item]"
    >
      <ButtonFaqBtn2 />
      <div className="absolute flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] left-0 text-[25.1px] text-nowrap text-white top-[31.61px] translate-y-[-50%]">
        <p className="leading-[35.568px]">
          How often will I receive reports on campaign results?
        </p>
      </div>
    </div>
  );
}

function ItemFaqItem2() {
  return (
    <div
      className="h-[136.36px] relative shrink-0 w-[877.4px]"
      data-name="Item [faq-item]"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#414141] border-[1px_0px_0px] border-solid inset-0 pointer-events-none"
      />
      <div className="bg-clip-padding border-0 border-transparent border-solid relative size-full">
        <DivOpenFaqItem2 />
      </div>
    </div>
  );
}

function Icon15() {
  return (
    <div
      className="absolute left-[16.53px] size-[27.359px] top-[18px]"
      data-name="Icon"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 27.3594 27.3594"
      >
        <g clipPath="url(#clip0_1_2314)" id="Icon">
          <path
            d={svgPaths.p1e2dff40}
            fill="var(--fill-0, white)"
            id="Vector"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_2314">
            <rect fill="white" height="27.3594" width="27.3594" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ButtonFaqBtn3() {
  return (
    <div
      className="absolute h-[63.36px] left-[816.97px] overflow-clip rounded-[60.422px] top-[3.88px] w-[60.43px]"
      data-name="Button [faq-btn]"
    >
      <Icon15 />
    </div>
  );
}

function ParagraphFaqItemText() {
  return (
    <div
      className="absolute h-[72px] left-0 top-0 w-[802.58px]"
      data-name="Paragraph [faq-item-text]"
    >
      <div className="size-full">
        <div className="content-stretch flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold items-start leading-[0] not-italic pb-[28884.438px] pl-0 pr-[112.328px] pt-0 relative size-full text-[25.1px] text-nowrap text-white">
          <div className="flex flex-col justify-center mb-[-0.006px] relative shrink-0">
            <p className="leading-[35.568px] text-nowrap">{`What are the main differences between your agency and `}</p>
          </div>
          <div className="flex flex-col justify-center mb-[-0.006px] relative shrink-0">
            <p className="leading-[35.568px] text-nowrap">competitors?</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function DivOpenFaqItem3() {
  return (
    <div
      className="absolute h-[71.13px] left-0 top-[37px] w-[877.4px]"
      data-name="Div [open_faq_item]"
    >
      <ButtonFaqBtn3 />
      <ParagraphFaqItemText />
    </div>
  );
}

function ItemFaqItem3() {
  return (
    <div
      className="h-[144.13px] relative shrink-0 w-[877.4px]"
      data-name="Item [faq-item]"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#414141] border-[1px_0px_0px] border-solid inset-0 pointer-events-none"
      />
      <div className="bg-clip-padding border-0 border-transparent border-solid relative size-full">
        <DivOpenFaqItem3 />
      </div>
    </div>
  );
}

function Icon16() {
  return (
    <div
      className="absolute left-[18px] size-[27.359px] top-[18px]"
      data-name="Icon"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 27.3594 27.3594"
      >
        <g clipPath="url(#clip0_1_2314)" id="Icon">
          <path
            d={svgPaths.p1e2dff40}
            fill="var(--fill-0, white)"
            id="Vector"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_2314">
            <rect fill="white" height="27.3594" width="27.3594" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ButtonFaqBtn4() {
  return (
    <div
      className="absolute left-[814.03px] overflow-clip rounded-[63.359px] size-[63.36px] top-0"
      data-name="Button [faq-btn]"
    >
      <Icon16 />
    </div>
  );
}

function DivOpenFaqItem4() {
  return (
    <div
      className="absolute h-[63.36px] left-0 top-[37px] w-[877.4px]"
      data-name="Div [open_faq_item]"
    >
      <ButtonFaqBtn4 />
      <div className="absolute flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] left-0 text-[25.1px] text-nowrap text-white top-[31.61px] translate-y-[-50%]">
        <p className="leading-[35.568px]">
          Does your agency have a minimum advertising budget to start?
        </p>
      </div>
    </div>
  );
}

function ItemFaqItem4() {
  return (
    <div
      className="h-[136.36px] relative shrink-0 w-[877.4px]"
      data-name="Item [faq-item]"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#414141] border-[1px_0px_0px] border-solid inset-0 pointer-events-none"
      />
      <div className="bg-clip-padding border-0 border-transparent border-solid relative size-full">
        <DivOpenFaqItem4 />
      </div>
    </div>
  );
}

function Icon17() {
  return (
    <div
      className="absolute left-[18px] size-[27.359px] top-[18px]"
      data-name="Icon"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 27.3594 27.3594"
      >
        <g clipPath="url(#clip0_1_2314)" id="Icon">
          <path
            d={svgPaths.p1e2dff40}
            fill="var(--fill-0, white)"
            id="Vector"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_2314">
            <rect fill="white" height="27.3594" width="27.3594" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ButtonFaqBtn5() {
  return (
    <div
      className="absolute left-[814.03px] overflow-clip rounded-[63.359px] size-[63.36px] top-0"
      data-name="Button [faq-btn]"
    >
      <Icon17 />
    </div>
  );
}

function DivOpenFaqItem5() {
  return (
    <div
      className="absolute h-[63.36px] left-0 top-[37px] w-[877.4px]"
      data-name="Div [open_faq_item]"
    >
      <ButtonFaqBtn5 />
      <div className="absolute flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] left-0 text-[25.1px] text-nowrap text-white top-[31.61px] translate-y-[-50%]">
        <p className="leading-[35.568px]">
          How do you address low conversion rates on the website?
        </p>
      </div>
    </div>
  );
}

function ItemFaqItem5() {
  return (
    <div
      className="h-[136.36px] relative shrink-0 w-[877.4px]"
      data-name="Item [faq-item]"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#414141] border-[1px_0px_0px] border-solid inset-0 pointer-events-none"
      />
      <div className="bg-clip-padding border-0 border-transparent border-solid relative size-full">
        <DivOpenFaqItem5 />
      </div>
    </div>
  );
}

function Icon18() {
  return (
    <div
      className="absolute left-[18px] size-[27.359px] top-[18px]"
      data-name="Icon"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 27.3594 27.3594"
      >
        <g clipPath="url(#clip0_1_2314)" id="Icon">
          <path
            d={svgPaths.p1e2dff40}
            fill="var(--fill-0, white)"
            id="Vector"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_2314">
            <rect fill="white" height="27.3594" width="27.3594" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ButtonFaqBtn6() {
  return (
    <div
      className="absolute left-[814.03px] overflow-clip rounded-[63.359px] size-[63.36px] top-0"
      data-name="Button [faq-btn]"
    >
      <Icon18 />
    </div>
  );
}

function DivOpenFaqItem6() {
  return (
    <div
      className="absolute h-[63.36px] left-0 top-[37px] w-[877.4px]"
      data-name="Div [open_faq_item]"
    >
      <ButtonFaqBtn6 />
      <div className="absolute flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] left-0 text-[25.1px] text-nowrap text-white top-[31.61px] translate-y-[-50%]">
        <p className="leading-[35.568px]">Do you create creatives?</p>
      </div>
    </div>
  );
}

function ItemFaqItem6() {
  return (
    <div
      className="h-[136.36px] relative shrink-0 w-[877.4px]"
      data-name="Item [faq-item]"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#414141] border-[1px_0px_0px] border-solid inset-0 pointer-events-none"
      />
      <div className="bg-clip-padding border-0 border-transparent border-solid relative size-full">
        <DivOpenFaqItem6 />
      </div>
    </div>
  );
}

function Icon19() {
  return (
    <div
      className="absolute left-[18px] size-[27.359px] top-[18px]"
      data-name="Icon"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 27.3594 27.3594"
      >
        <g clipPath="url(#clip0_1_2314)" id="Icon">
          <path
            d={svgPaths.p1e2dff40}
            fill="var(--fill-0, white)"
            id="Vector"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_2314">
            <rect fill="white" height="27.3594" width="27.3594" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ButtonFaqBtn7() {
  return (
    <div
      className="absolute left-[814.03px] overflow-clip rounded-[63.359px] size-[63.36px] top-0"
      data-name="Button [faq-btn]"
    >
      <Icon19 />
    </div>
  );
}

function DivOpenFaqItem7() {
  return (
    <div
      className="absolute h-[63.36px] left-0 top-[37px] w-[877.4px]"
      data-name="Div [open_faq_item]"
    >
      <ButtonFaqBtn7 />
      <div className="absolute flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] left-0 text-[25.1px] text-nowrap text-white top-[31.61px] translate-y-[-50%]">
        <p className="leading-[35.568px]">
          How soon will we launch the first campaigns?
        </p>
      </div>
    </div>
  );
}

function ItemFaqItem7() {
  return (
    <div
      className="h-[136.36px] relative shrink-0 w-[877.4px]"
      data-name="Item [faq-item]"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#414141] border-[1px_0px_0px] border-solid inset-0 pointer-events-none"
      />
      <div className="bg-clip-padding border-0 border-transparent border-solid relative size-full">
        <DivOpenFaqItem7 />
      </div>
    </div>
  );
}

function Icon20() {
  return (
    <div
      className="absolute left-[18px] size-[27.359px] top-[18px]"
      data-name="Icon"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 27.3594 27.3594"
      >
        <g clipPath="url(#clip0_1_2314)" id="Icon">
          <path
            d={svgPaths.p1e2dff40}
            fill="var(--fill-0, white)"
            id="Vector"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_2314">
            <rect fill="white" height="27.3594" width="27.3594" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ButtonFaqBtn8() {
  return (
    <div
      className="absolute left-[814.03px] overflow-clip rounded-[63.359px] size-[63.36px] top-0"
      data-name="Button [faq-btn]"
    >
      <Icon20 />
    </div>
  );
}

function DivOpenFaqItem8() {
  return (
    <div
      className="absolute h-[63.36px] left-0 top-[37px] w-[877.4px]"
      data-name="Div [open_faq_item]"
    >
      <ButtonFaqBtn8 />
      <div className="absolute flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] left-0 text-[25.1px] text-nowrap text-white top-[31.61px] translate-y-[-50%]">
        <p className="leading-[35.568px]">
          Do you set up tracking on the website?
        </p>
      </div>
    </div>
  );
}

function ItemFaqItem8() {
  return (
    <div
      className="h-[136.36px] relative shrink-0 w-[877.4px]"
      data-name="Item [faq-item]"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#414141] border-[1px_0px_0px] border-solid inset-0 pointer-events-none"
      />
      <div className="bg-clip-padding border-0 border-transparent border-solid relative size-full">
        <DivOpenFaqItem8 />
      </div>
    </div>
  );
}

function Icon21() {
  return (
    <div
      className="absolute left-[18px] size-[27.359px] top-[18px]"
      data-name="Icon"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 27.3594 27.3594"
      >
        <g clipPath="url(#clip0_1_2314)" id="Icon">
          <path
            d={svgPaths.p1e2dff40}
            fill="var(--fill-0, white)"
            id="Vector"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_2314">
            <rect fill="white" height="27.3594" width="27.3594" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ButtonFaqBtn9() {
  return (
    <div
      className="absolute left-[814.03px] overflow-clip rounded-[63.359px] size-[63.36px] top-0"
      data-name="Button [faq-btn]"
    >
      <Icon21 />
    </div>
  );
}

function DivOpenFaqItem9() {
  return (
    <div
      className="absolute h-[63.36px] left-0 top-[37px] w-[877.4px]"
      data-name="Div [open_faq_item]"
    >
      <ButtonFaqBtn9 />
      <div className="absolute flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] left-0 text-[25.1px] text-nowrap text-white top-[31.61px] translate-y-[-50%]">
        <p className="leading-[35.568px]">What is your average ROAS?</p>
      </div>
    </div>
  );
}

function ItemFaqItem9() {
  return (
    <div
      className="h-[136.36px] relative shrink-0 w-[877.4px]"
      data-name="Item [faq-item]"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#414141] border-[1px_0px_0px] border-solid inset-0 pointer-events-none"
      />
      <div className="bg-clip-padding border-0 border-transparent border-solid relative size-full">
        <DivOpenFaqItem9 />
      </div>
    </div>
  );
}

function Icon22() {
  return (
    <div
      className="absolute left-[18px] size-[27.359px] top-[18px]"
      data-name="Icon"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 27.3594 27.3594"
      >
        <g clipPath="url(#clip0_1_2314)" id="Icon">
          <path
            d={svgPaths.p1e2dff40}
            fill="var(--fill-0, white)"
            id="Vector"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_2314">
            <rect fill="white" height="27.3594" width="27.3594" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ButtonFaqBtn10() {
  return (
    <div
      className="absolute left-[814.03px] overflow-clip rounded-[63.359px] size-[63.36px] top-0"
      data-name="Button [faq-btn]"
    >
      <Icon22 />
    </div>
  );
}

function DivOpenFaqItem10() {
  return (
    <div
      className="absolute h-[63.36px] left-0 top-[37px] w-[877.4px]"
      data-name="Div [open_faq_item]"
    >
      <ButtonFaqBtn10 />
      <div className="absolute flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] left-0 text-[25.1px] text-nowrap text-white top-[31.61px] translate-y-[-50%]">
        <p className="leading-[35.568px]">
          In which niches do you have experience?
        </p>
      </div>
    </div>
  );
}

function ItemFaqItem10() {
  return (
    <div
      className="h-[137.36px] relative shrink-0 w-[877.4px]"
      data-name="Item [faq-item]"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#414141] border-[1px_0px] border-solid inset-0 pointer-events-none"
      />
      <div className="bg-clip-padding border-0 border-transparent border-solid relative size-full">
        <DivOpenFaqItem10 />
      </div>
    </div>
  );
}

function ListFaqList() {
  return (
    <div
      className="min-h-[1508.73px] h-auto relative shrink-0 w-[877.4px]"
      data-name="List [faq-list]"
    >
      <div className="size-full">
        <div className="bg-clip-padding border-0 border-transparent border-solid content-stretch flex flex-col items-start pb-0 pt-0 px-0 relative size-full">
          <ItemFaqItem />
          <ItemFaqItem1 />
          <ItemFaqItem2 />
          <ItemFaqItem3 />
          <ItemFaqItem4 />
          <ItemFaqItem5 />
          <ItemFaqItem6 />
          <ItemFaqItem7 />
          <ItemFaqItem8 />
          <ItemFaqItem9 />
          <ItemFaqItem10 />
        </div>
      </div>
    </div>
  );
}

function Faq() {
  return (
    <div
      className="absolute min-h-[1593.73px] h-auto left-[calc(50%-0.3px)] top-[446px] translate-x-[-50%] w-[877.4px]"
      data-name="FAQ"
    >
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pb-0 pt-0 px-0 relative size-full">
          <ListFaqList />
        </div>
      </div>
    </div>
  );
}

function Frame32() {
  return (
    <div className="absolute content-stretch flex h-[36px] items-center justify-center left-[156px] p-[12px] rounded-[12345px] top-[125px] w-[127px]">
      <div
        aria-hidden="true"
        className="absolute border-2 border-[#4b4b4b] border-dashed inset-0 pointer-events-none rounded-[12345px]"
      />
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[23px] relative shrink-0 text-[#b9b9b9] text-[16px] text-nowrap tracking-[1.12px]">
        FAQ
      </p>
    </div>
  );
}

function Frame65() {
  return (
    <div className="absolute bg-[#111] min-h-[2140px] h-auto left-0 overflow-visible top-[7606px] w-[1440px]">
      <Faq />
      <Frame32 />
      <div className="absolute font-['Poppins:Light',sans-serif] leading-[0] left-[calc(50%-237px)] not-italic text-[42px] text-nowrap text-white top-[168px] tracking-[-1.68px]">
        <p className="leading-[46px] mb-0">{` Wondering something? `}</p>
        <p className="leading-[46px]">
          {" "}
          <span className="font-['Poppins:SemiBold_Italic',sans-serif] italic">
            Start Here.
          </span>
        </p>
      </div>
    </div>
  );
}

function H2HeadingForm() {
  return (
    <div
      className="h-[112px] relative shrink-0 w-[654.41px]"
      data-name="H2 [heading_form]"
    >
      <div className="size-full">
        <div className="bg-clip-padding border-0 border-transparent border-solid content-stretch flex flex-col gap-[0.003px] items-start leading-[0] not-italic pb-[7149.878px] pl-0 pr-[127.078px] pt-0 relative size-full text-[#161616] text-[51.2px] text-nowrap tracking-[-1.1088px]">
          <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center relative shrink-0">
            <p className="leading-[55.872px] text-nowrap">
              <span className="font-['Poppins:Bold_Italic',sans-serif] italic">
                Ready
              </span>
              <span>{` to discuss your `}</span>
            </p>
          </div>
          <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center relative shrink-0">
            <p className="leading-[55.872px] text-nowrap">project with us?</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function InputWpcf7FormControl() {
  return (
    <div
      className="absolute bg-white h-[64.79px] left-[355.13px] overflow-clip rounded-[1660px] top-0 w-[299.29px]"
      data-name="Input [wpcf7-form-control]"
    >
      <div className="absolute flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] left-[23.4px] overflow-ellipsis overflow-hidden text-[18.6px] text-black text-nowrap top-[32.39px] tracking-[-0.18px] translate-y-[-50%] uppercase w-[299.29px]">
        <p className="leading-[18px] overflow-ellipsis overflow-hidden">
          Send a message
        </p>
      </div>
    </div>
  );
}

function ParagraphDescForm() {
  return (
    <div
      className="absolute h-[38px] left-0 top-[14.23px] w-[299.27px]"
      data-name="Paragraph [desc_form]"
    >
      <div className="size-full">
        <div className="content-stretch flex flex-col font-['Manrope:Regular',sans-serif] font-normal items-start leading-[0] pb-[7645.781px] pt-0 px-0 relative size-full text-[#a2a2a2] text-[13.968px] text-nowrap">
          <div className="flex flex-col justify-center mb-[-0.002px] relative shrink-0">
            <p className="leading-[18.158px] text-nowrap">{`By sending this form I confirm that I have read `}</p>
          </div>
          <div className="flex flex-col justify-center mb-[-0.002px] relative shrink-0">
            <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[18.158px] text-nowrap">
              <span>{`and accept the `}</span>
              <span
                className="[text-decoration-skip-ink:none] [text-underline-position:from-font] bg-clip-text decoration-solid text-[rgba(0,0,0,0)] underline"
                style={{
                  WebkitTextFillColor: "transparent",
                  backgroundImage:
                    "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(7.96097deg, rgb(92, 214, 179) 3.08%, rgb(4, 184, 196) 3.09%, rgb(75, 250, 138) 98.66%)",
                }}
              >
                Privacy Policy
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function DivTwoColForm() {
  return (
    <div
      className="absolute h-[64.79px] left-0 top-[276.34px] w-[654.41px]"
      data-name="Div [two_col_form]"
    >
      <InputWpcf7FormControl />
      <ParagraphDescForm />
    </div>
  );
}

function InputWpcf7FormControl1() {
  return (
    <div
      className="absolute border-[#a2a2a2] border-[0px_0px_1px] border-solid h-[44.88px] left-0 overflow-clip top-[196.5px] w-[654.41px]"
      data-name="Input [wpcf7-form-control]"
    >
      <div className="absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[19.19px] justify-center leading-[0] left-[5px] overflow-ellipsis overflow-hidden text-[#161616] text-[15.984px] text-nowrap top-[11.5px] translate-y-[-50%] w-[654.41px]">
        <p className="leading-[19.181px] overflow-ellipsis overflow-hidden">
          About Project
        </p>
      </div>
    </div>
  );
}

function InputWpcf7FormControl2() {
  return (
    <div
      className="absolute border-[#a2a2a2] border-[0px_0px_1px] border-solid h-[44.88px] left-0 overflow-clip top-[112.2px] w-[654.41px]"
      data-name="Input [wpcf7-form-control]"
    >
      <div className="absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[19.19px] justify-center leading-[0] left-[5px] overflow-ellipsis overflow-hidden text-[#161616] text-[15.984px] text-nowrap top-[11.5px] translate-y-[-50%] w-[654.41px]">
        <p className="leading-[19.181px] overflow-ellipsis overflow-hidden">
          Link your store
        </p>
      </div>
    </div>
  );
}

function InputWpcf7FormControl3() {
  return (
    <div
      className="h-[44.88px] relative shrink-0 w-[299.27px]"
      data-name="Input [wpcf7-form-control]"
    >
      <div className="bg-clip-padding border-0 border-transparent border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[19.19px] justify-center leading-[0] left-[5px] overflow-ellipsis overflow-hidden text-[#161616] text-[15.984px] text-nowrap top-[11.5px] translate-y-[-50%] w-[299.27px]">
          <p className="leading-[19.181px] overflow-ellipsis overflow-hidden">
            Full Name
          </p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[#a2a2a2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function InputWpcf7FormControl4() {
  return (
    <div
      className="h-[44.88px] relative shrink-0 w-[299.29px]"
      data-name="Input [wpcf7-form-control]"
    >
      <div className="bg-clip-padding border-0 border-transparent border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[19.19px] justify-center leading-[0] left-[5px] overflow-ellipsis overflow-hidden text-[#161616] text-[15.984px] text-nowrap top-[11.5px] translate-y-[-50%] w-[299.29px]">
          <p className="leading-[19.181px] overflow-ellipsis overflow-hidden">
            E-mail
          </p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[#a2a2a2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function DivTwoColForm1() {
  return (
    <div
      className="absolute content-stretch flex gap-[55.859px] h-[72.79px] items-start left-0 pb-0 pt-[27.906px] px-0 top-0 w-[598.56px]"
      data-name="Div [two_col_form]"
    >
      <InputWpcf7FormControl3 />
      <InputWpcf7FormControl4 />
    </div>
  );
}

function FormWpcf7Form() {
  return (
    <div
      className="h-[341.13px] relative shrink-0 w-[654.41px]"
      data-name="Form [wpcf7-form]"
    >
      <div className="bg-clip-padding border-0 border-transparent border-solid relative size-full">
        <DivTwoColForm />
        <InputWpcf7FormControl1 />
        <InputWpcf7FormControl2 />
        <DivTwoColForm1 />
      </div>
    </div>
  );
}

function DivFormContent() {
  return (
    <div
      className="absolute h-[453.13px] left-0 top-0 w-[654.41px]"
      data-name="Div [form_content]"
    >
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[55.859px] items-start pb-[6864.625px] pt-0 px-0 relative size-full">
          <H2HeadingForm />
          <FormWpcf7Form />
        </div>
      </div>
    </div>
  );
}

function DivWrapForm() {
  return (
    <div
      className="absolute h-[508.74px] left-[59px] top-[163px] w-[654.41px]"
      data-name="Div [wrap_form]"
    >
      <DivFormContent />
    </div>
  );
}

function Frame38() {
  return (
    <div className="absolute content-stretch flex h-[36px] items-center justify-center left-[35px] p-[12px] rounded-[12345px] top-[40px] w-[140px]">
      <div
        aria-hidden="true"
        className="absolute border-2 border-[#4b4b4b] border-dashed inset-0 pointer-events-none rounded-[12345px]"
      />
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[23px] relative shrink-0 text-[#b9b9b9] text-[16px] text-nowrap tracking-[1.12px]">
        CONTACT US
      </p>
    </div>
  );
}

function Group49() {
  return (
    <div className="h-[393.311px] relative w-[576.18px]">
      <div className="absolute inset-[-16.39%_-4.83%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 631.795 522.236"
        >
          <g id="Group 46">
            <g filter="url(#filter0_f_1_2156)" id="Ellipse 10">
              <ellipse
                cx="198.746"
                cy="181.76"
                fill="var(--fill-0, #4ABE8F)"
                fillOpacity="0.8"
                rx="198.746"
                ry="181.76"
                transform="matrix(0.978659 0.20549 -0.514885 0.857259 214.978 64.4624)"
              />
            </g>
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="522.236"
              id="filter0_f_1_2156"
              width="631.795"
              x="-1.90735e-06"
              y="0"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_1_2156"
                stdDeviation="50"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function ParagraphTextReview() {
  return (
    <div
      className="h-[216px] relative shrink-0 w-[416.18px]"
      data-name="Paragraph [text_review]"
    >
      <div className="size-full">
        <div className="bg-clip-padding border-0 border-transparent border-solid content-stretch flex flex-col font-['Manrope:Medium',sans-serif] font-medium items-start leading-[0] pb-[7383.938px] pl-0 pr-[1.703px] pt-0 relative size-full text-[19px] text-nowrap text-white tracking-[-0.19px]">
          <div className="flex flex-col justify-center mb-[-0.004px] relative shrink-0">
            <p className="leading-[26.957px] text-nowrap">{`"Amazing experience with a lovely team! `}</p>
          </div>
          <div className="flex flex-col justify-center mb-[-0.004px] relative shrink-0">
            <p className="leading-[26.957px] text-nowrap">{`Great service, and insightful feedback from `}</p>
          </div>
          <div className="flex flex-col justify-center mb-[-0.004px] relative shrink-0">
            <p className="leading-[26.957px] text-nowrap">{`the team each time. Extremely organised `}</p>
          </div>
          <div className="flex flex-col justify-center mb-[-0.004px] relative shrink-0">
            <p className="leading-[26.957px] text-nowrap">{`organization - communication was done `}</p>
          </div>
          <div className="flex flex-col justify-center mb-[-0.004px] relative shrink-0">
            <p className="leading-[26.957px] text-nowrap">{`through slack and notion. They provide `}</p>
          </div>
          <div className="flex flex-col justify-center mb-[-0.004px] relative shrink-0">
            <p className="leading-[26.957px] text-nowrap">{`weekly, monthly, and quarterly reporting `}</p>
          </div>
          <div className="flex flex-col justify-center mb-[-0.004px] relative shrink-0">
            <p className="leading-[26.957px] text-nowrap">{`too. I will recommend working alongside the `}</p>
          </div>
          <div className="flex flex-col justify-center mb-[-0.004px] relative shrink-0">
            <p className="leading-[26.957px] text-nowrap">{`incredible Growth Sailor team."`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function DivLocationWork() {
  return (
    <div
      className="h-[22.38px] relative shrink-0 w-[416.18px]"
      data-name="Div [location_work]"
    >
      <div className="bg-clip-padding border-0 border-transparent border-solid relative size-full">
        <div className="absolute flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] left-[-0.17px] text-[15.984px] text-nowrap text-white top-[11.31px] tracking-[-0.1598px] translate-y-[-50%]">
          <p className="leading-[22.378px]">INDIA</p>
        </div>
      </div>
    </div>
  );
}

function DivSwiperSlide() {
  return (
    <div
      className="h-[238.38px] relative shrink-0 w-[416.18px]"
      data-name="Div [swiper-slide]"
    >
      <div className="size-full">
        <div className="bg-clip-padding border-0 border-transparent border-solid content-stretch flex flex-col gap-[40.5px] items-start pb-[7364.625px] pt-[23.891px] px-0 relative size-full">
          <ParagraphTextReview />
          <DivLocationWork />
        </div>
      </div>
    </div>
  );
}

function ParagraphTextReview1() {
  return (
    <div
      className="h-[135px] relative shrink-0 w-[416.18px]"
      data-name="Paragraph [text_review]"
    >
      <div className="size-full">
        <div className="bg-clip-padding border-0 border-transparent border-solid content-stretch flex flex-col font-['Manrope:Medium',sans-serif] font-medium items-start leading-[0] pb-[7383.938px] pl-0 pr-[49.25px] pt-0 relative size-full text-[19px] text-nowrap text-white tracking-[-0.19px]">
          <div className="flex flex-col justify-center mb-[-0.004px] relative shrink-0">
            <p className="leading-[26.957px] text-nowrap">{`"We collaborated with UM for several `}</p>
          </div>
          <div className="flex flex-col justify-center mb-[-0.004px] relative shrink-0">
            <p className="leading-[26.957px] text-nowrap">{`months on a google ads project. `}</p>
          </div>
          <div className="flex flex-col justify-center mb-[-0.004px] relative shrink-0">
            <p className="leading-[26.957px] text-nowrap">{`Communication was excellent and they `}</p>
          </div>
          <div className="flex flex-col justify-center mb-[-0.004px] relative shrink-0">
            <p className="leading-[26.957px] text-nowrap">{`were able to manage the project `}</p>
          </div>
          <div className="flex flex-col justify-center mb-[-0.004px] relative shrink-0">
            <p className="leading-[26.957px] text-nowrap">{`successfully."`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function DivLocationWork1() {
  return (
    <div
      className="h-[22.38px] relative shrink-0 w-[416.18px]"
      data-name="Div [location_work]"
    >
      <div className="bg-clip-padding border-0 border-transparent border-solid relative size-full">
        <div className="absolute flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] left-[-0.18px] text-[15.984px] text-nowrap text-white top-[11.31px] tracking-[-0.1598px] translate-y-[-50%] uppercase">
          <p className="leading-[22.378px]">Australia</p>
        </div>
      </div>
    </div>
  );
}

function DivSwiperSlide1() {
  return (
    <div
      className="h-[157.38px] relative shrink-0 w-[416.18px]"
      data-name="Div [swiper-slide]"
    >
      <div className="size-full">
        <div className="bg-clip-padding border-0 border-transparent border-solid content-stretch flex flex-col gap-[121.359px] items-start pb-[7364.625px] pt-[23.891px] px-0 relative size-full">
          <ParagraphTextReview1 />
          <DivLocationWork1 />
        </div>
      </div>
    </div>
  );
}

function ParagraphTextReview2() {
  return (
    <div
      className="h-[108px] relative shrink-0 w-[416.18px]"
      data-name="Paragraph [text_review]"
    >
      <div className="size-full">
        <div className="bg-clip-padding border-0 border-transparent border-solid content-stretch flex flex-col font-['Manrope:Medium',sans-serif] font-medium items-start leading-[0] pb-[7383.938px] pl-0 pr-[3.953px] pt-0 relative size-full text-[19px] text-nowrap text-white tracking-[-0.19px]">
          <div className="flex flex-col justify-center mb-[-0.004px] relative shrink-0">
            <p className="leading-[26.957px] text-nowrap">{`"Great marketing team! Really take time to `}</p>
          </div>
          <div className="flex flex-col justify-center mb-[-0.004px] relative shrink-0">
            <p className="leading-[26.957px] text-nowrap">{`help me go through everything and plan out `}</p>
          </div>
          <div className="flex flex-col justify-center mb-[-0.004px] relative shrink-0">
            <p className="leading-[26.957px] text-nowrap">{`a strategy, especially for my business! `}</p>
          </div>
          <div className="flex flex-col justify-center mb-[-0.004px] relative shrink-0">
            <p className="leading-[26.957px] text-nowrap">{`Patient and Professional!"`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function DivLocationWork2() {
  return (
    <div
      className="h-[22.38px] relative shrink-0 w-[416.18px]"
      data-name="Div [location_work]"
    >
      <div className="bg-clip-padding border-0 border-transparent border-solid relative size-full">
        <div className="absolute flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] left-[-0.36px] text-[15.984px] text-nowrap text-white top-[11.31px] tracking-[-0.1598px] translate-y-[-50%]">
          <p className="leading-[22.378px]">USA</p>
        </div>
      </div>
    </div>
  );
}

function DivSwiperSlide2() {
  return (
    <div
      className="h-[130.38px] relative shrink-0 w-[416.18px]"
      data-name="Div [swiper-slide]"
    >
      <div className="size-full">
        <div className="bg-clip-padding border-0 border-transparent border-solid content-stretch flex flex-col gap-[148.313px] items-start pb-[7364.625px] pt-[23.891px] px-0 relative size-full">
          <ParagraphTextReview2 />
          <DivLocationWork2 />
        </div>
      </div>
    </div>
  );
}

function DivSwiperWrapper() {
  return (
    <div
      className="absolute h-[302px] left-0 top-0 w-[432px]"
      data-name="Div [swiper-wrapper]"
    >
      <div className="size-full">
        <div className="content-stretch flex items-start pl-0 pr-[477.953px] py-0 relative size-full">
          <DivSwiperSlide />
          <DivSwiperSlide1 />
          <DivSwiperSlide2 />
        </div>
      </div>
    </div>
  );
}

function Testimonies() {
  return (
    <div
      className="absolute h-[302px] left-[34px] overflow-clip top-1/2 translate-y-[-50%] w-[416px]"
      data-name="TESTIMONIES"
    >
      <DivSwiperWrapper />
    </div>
  );
}

function Frame19() {
  return (
    <div className="absolute bg-white h-[9px] left-0 rounded-[36px] top-0 w-[106px]" />
  );
}

function Frame18() {
  return (
    <div className="absolute bg-[#cecece] h-[9px] left-[34px] overflow-clip rounded-[36px] top-[35px] w-[374px]">
      <Frame19 />
    </div>
  );
}

function Frame67() {
  return (
    <div className="absolute bg-black h-[486px] left-[766px] overflow-clip rounded-[24px] top-[154px] w-[445px]">
      <div
        className="absolute flex h-[638.001px] items-center justify-center left-[-114px] top-[38px] w-[696.96px]"
        style={
          {
            "--transform-inner-width": "0",
            "--transform-inner-height": "0",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-[211.822deg]">
          <Group49 />
        </div>
      </div>
      <Testimonies />
      <Frame18 />
    </div>
  );
}

function Frame66() {
  return (
    <div className="absolute bg-white h-[768px] left-[calc(50%+1px)] overflow-clip rounded-[24px] top-[5778px] translate-x-[-50%] w-[1248px]">
      <DivWrapForm />
      <Frame38 />
      <Frame67 />
    </div>
  );
}

function LineMask() {
  return (
    <div
      className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start"
      data-name="Line Mask"
    />
  );
}

function TitleWrapper() {
  return (
    <div
      className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[240px]"
      data-name="Title wrapper"
    >
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[28.8px] not-italic relative shrink-0 text-[24px] text-white tracking-[-0.96px] w-full">
        Join our newsletter
      </p>
      <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[19.2px] relative shrink-0 text-[#c8c8c8] text-[16px] w-full">
        Get updates straight to your inbox
      </p>
    </div>
  );
}

function Button7() {
  return (
    <div
      className="bg-white content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[99px] shrink-0"
      data-name="Button"
    >
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[16.8px] relative shrink-0 text-[#101010] text-[14px] text-nowrap">
        Submit
      </p>
    </div>
  );
}

function FormWrapper() {
  return (
    <div
      className="content-stretch flex items-end justify-between relative shrink-0 w-full"
      data-name="Form Wrapper"
    >
      <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[16.8px] relative shrink-0 text-[#c8c8c8] text-[14px] text-nowrap">
        enter your email
      </p>
      <Button7 />
    </div>
  );
}

function FormContainer() {
  return (
    <div className="relative shrink-0 w-full" data-name="Form container">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start pl-0 pr-[140px] py-0 relative w-full">
          <FormWrapper />
          <div className="h-0 relative shrink-0 w-full" data-name="Form Line">
            <div
              className="absolute inset-[-1px_0_0_0]"
              style={
                {
                  "--stroke-0": "rgba(255, 255, 255, 1)",
                } as React.CSSProperties
              }
            >
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 360 1"
              >
                <line
                  id="Form Line"
                  stroke="var(--stroke-0, white)"
                  x2="360"
                  y1="0.5"
                  y2="0.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function NewsletterWrapper() {
  return (
    <div
      className="content-stretch flex flex-col gap-[24px] items-start min-w-[500px] relative shrink-0"
      data-name="Newsletter wrapper"
    >
      <TitleWrapper />
      <FormContainer />
    </div>
  );
}

function ContactUsConentWrapper() {
  return (
    <div
      className="content-stretch flex flex-col font-['Manrope:Regular',sans-serif] font-normal gap-[8px] items-end leading-[19.2px] relative shrink-0 text-[#ededed] text-[16px] text-nowrap underline w-full"
      data-name="Contact us conent wrapper"
    >
      <p className="[text-underline-position:from-font] decoration-solid relative shrink-0">
        contact@socialsailor.com
      </p>
      <p className="[text-underline-position:from-font] decoration-solid relative shrink-0">
        ismail@socialsailor.com
      </p>
    </div>
  );
}

function ContactUsContainer() {
  return (
    <div
      className="content-stretch flex flex-col gap-[16px] items-end relative shrink-0"
      data-name="Contact us Container"
    >
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[28.8px] not-italic relative shrink-0 text-[24px] text-nowrap text-white tracking-[-0.96px]">
        Contact us
      </p>
      <ContactUsConentWrapper />
    </div>
  );
}

function TopContentWrapper() {
  return (
    <div
      className="content-start flex flex-wrap gap-[64px] items-start justify-between relative shrink-0 w-full"
      data-name="Top content wrapper"
    >
      <NewsletterWrapper />
      <ContactUsContainer />
    </div>
  );
}

function NavMenuLink() {
  return (
    <div
      className="content-stretch flex gap-[2px] items-center justify-center px-[8px] py-[4px] relative shrink-0"
      data-name="Nav Menu Link"
    >
      <p className="font-['Poppins:Medium',sans-serif] leading-[19.2px] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white tracking-[-0.64px]">
        Home
      </p>
    </div>
  );
}

function NavMenuLink1() {
  return (
    <div
      className="content-stretch flex gap-[2px] items-center justify-center px-[8px] py-[4px] relative shrink-0"
      data-name="Nav Menu Link"
    >
      <p className="font-['Poppins:Medium',sans-serif] leading-[19.2px] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white tracking-[-0.64px]">
        Services
      </p>
    </div>
  );
}

function NavMenuLink2() {
  return (
    <div
      className="content-stretch flex gap-[2px] items-center justify-center px-[8px] py-[4px] relative shrink-0"
      data-name="Nav Menu Link"
    >
      <p className="font-['Poppins:Medium',sans-serif] leading-[19.2px] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white tracking-[-0.64px]">
        About us
      </p>
    </div>
  );
}

function NavMenuLink3() {
  return (
    <div
      className="content-stretch flex gap-[2px] items-center justify-center px-[8px] py-[4px] relative shrink-0"
      data-name="Nav Menu Link"
    >
      <p className="font-['Poppins:Medium',sans-serif] leading-[19.2px] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white tracking-[-0.64px]">
        Portfolio
      </p>
    </div>
  );
}

function NavMenuLink4() {
  return (
    <div
      className="content-stretch flex gap-[2px] items-center justify-center px-[8px] py-[4px] relative shrink-0"
      data-name="Nav Menu Link"
    >
      <p className="font-['Poppins:Medium',sans-serif] leading-[19.2px] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white tracking-[-0.64px]">
        Pricing
      </p>
    </div>
  );
}

function NavMenuLink5() {
  return (
    <div
      className="content-stretch flex gap-[2px] items-center justify-center px-[8px] py-[4px] relative shrink-0"
      data-name="Nav Menu Link"
    >
      <p className="font-['Poppins:Medium',sans-serif] leading-[19.2px] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white tracking-[-0.64px]">
        Contact us
      </p>
    </div>
  );
}

function NavMenuWrapper() {
  return (
    <div
      className="content-center flex flex-wrap gap-[16px] items-center justify-between relative shrink-0 w-full"
      data-name="Nav Menu Wrapper"
    >
      <NavMenuLink />
      <NavMenuLink1 />
      <NavMenuLink2 />
      <NavMenuLink3 />
      <NavMenuLink4 />
      <NavMenuLink5 />
    </div>
  );
}

function ContentsWrapper() {
  return (
    <div
      className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full"
      data-name="Contents Wrapper"
    >
      <TopContentWrapper />
      <NavMenuWrapper />
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div
          className="absolute inset-[-1px_0_0_0]"
          style={
            { "--stroke-0": "rgba(105, 105, 105, 1)" } as React.CSSProperties
          }
        >
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 1064 1"
          >
            <line
              id="Divider"
              stroke="var(--stroke-0, #696969)"
              strokeLinecap="round"
              x1="0.5"
              x2="1063.5"
              y1="0.5"
              y2="0.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function CopyRightsWrapper() {
  return (
    <div
      className="content-stretch flex font-['Manrope:Regular',sans-serif] font-normal gap-[8px] items-center leading-[19.2px] relative shrink-0 text-[16px] text-nowrap text-white"
      data-name="Copy rights wrapper"
    >
      <p className="relative shrink-0">'© Growth Sailor</p>
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid relative shrink-0 underline">
        Privacy Policy
      </p>
    </div>
  );
}

function Youtube() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Youtube">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="Youtube">
          <path
            d={svgPaths.p12372de0}
            fill="var(--fill-0, white)"
            id="Youtube Triangle"
          />
        </g>
      </svg>
    </div>
  );
}

function Twitter() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Twitter">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="Twitter">
          <path
            d={svgPaths.p1cdaf900}
            fill="var(--fill-0, white)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Instagram() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Instagram">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="Instagram">
          <path
            d={svgPaths.p17001400}
            fill="var(--fill-0, white)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Linkein() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Linkein">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="Linkein">
          <path
            d={svgPaths.p16640000}
            fill="var(--fill-0, white)"
            id="Vector"
            stroke="var(--stroke-0, white)"
            strokeWidth="0.24"
          />
        </g>
      </svg>
    </div>
  );
}

function SocialMediaDiv() {
  return (
    <div
      className="content-stretch flex gap-[10px] items-center relative shrink-0"
      data-name="Social Media Div"
    >
      <Youtube />
      <Twitter />
      <Instagram />
      <Linkein />
    </div>
  );
}

function CopyrightContainer() {
  return (
    <div
      className="content-stretch flex items-center justify-between relative shrink-0 w-full"
      data-name="Copyright container"
    >
      <CopyRightsWrapper />
      <SocialMediaDiv />
    </div>
  );
}

function ContentsContainer() {
  return (
    <div
      className="content-stretch flex flex-col gap-[64px] items-start relative shrink-0 w-full"
      data-name="Contents Container"
    >
      <ContentsWrapper />
      <CopyrightContainer />
    </div>
  );
}

function GrowthSailor() {
  return (
    <div
      className="aspect-[1050.4/121.675] relative shrink-0 w-full"
      data-name="Growth Sailor"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 1064 123.251"
      >
        <g id="Growth Sailor">
          <path
            d={svgPaths.p365493f0}
            fill="url(#paint0_linear_1_2390)"
            id="Vector"
          />
          <path
            d={svgPaths.p30491c00}
            fill="url(#paint1_linear_1_2390)"
            id="Vector_2"
          />
          <path
            d={svgPaths.p226a4bc0}
            fill="url(#paint2_linear_1_2390)"
            id="Vector_3"
          />
          <path
            d={svgPaths.p3778e700}
            fill="url(#paint3_linear_1_2390)"
            id="Vector_4"
          />
          <path
            d={svgPaths.p34855480}
            fill="url(#paint4_linear_1_2390)"
            id="Vector_5"
          />
          <path
            d={svgPaths.p3dffd300}
            fill="url(#paint5_linear_1_2390)"
            id="Vector_6"
          />
          <path
            d={svgPaths.p3f504400}
            fill="url(#paint6_linear_1_2390)"
            id="Vector_7"
          />
          <path
            d={svgPaths.p3a542900}
            fill="url(#paint7_linear_1_2390)"
            id="Vector_8"
          />
          <path
            d={svgPaths.p2688fe80}
            fill="url(#paint8_linear_1_2390)"
            id="Vector_9"
          />
          <path
            d={svgPaths.p1d8b4b80}
            fill="url(#paint9_linear_1_2390)"
            id="Vector_10"
          />
          <path
            d={svgPaths.p3aea1480}
            fill="url(#paint10_linear_1_2390)"
            id="Vector_11"
          />
          <path
            d={svgPaths.p22b0f580}
            fill="url(#paint11_linear_1_2390)"
            id="Vector_12"
          />
        </g>
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_1_2390"
            x1="1038.33"
            x2="1038.33"
            y1="63.605"
            y2="121.524"
          >
            <stop stopColor="white" />
            <stop offset="0.874488" stopColor="#101010" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint1_linear_1_2390"
            x1="953.344"
            x2="953.344"
            y1="64.0548"
            y2="123.094"
          >
            <stop stopColor="white" />
            <stop offset="0.874488" stopColor="#101010" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint2_linear_1_2390"
            x1="880.191"
            x2="880.191"
            y1="36.3825"
            y2="121.525"
          >
            <stop stopColor="white" />
            <stop offset="0.874488" stopColor="#101010" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint3_linear_1_2390"
            x1="834.711"
            x2="834.711"
            y1="34.813"
            y2="121.524"
          >
            <stop stopColor="white" />
            <stop offset="0.874488" stopColor="#101010" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint4_linear_1_2390"
            x1="759.226"
            x2="759.226"
            y1="64.0998"
            y2="123.251"
          >
            <stop stopColor="white" />
            <stop offset="0.874488" stopColor="#101010" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint5_linear_1_2390"
            x1="662.233"
            x2="662.233"
            y1="48.1918"
            y2="123.251"
          >
            <stop stopColor="white" />
            <stop offset="0.874488" stopColor="#101010" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint6_linear_1_2390"
            x1="535.727"
            x2="535.727"
            y1="36.3825"
            y2="121.525"
          >
            <stop stopColor="white" />
            <stop offset="0.874488" stopColor="#101010" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint7_linear_1_2390"
            x1="447.029"
            x2="447.029"
            y1="43.6001"
            y2="122.868"
          >
            <stop stopColor="white" />
            <stop offset="0.874488" stopColor="#101010" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint8_linear_1_2390"
            x1="330.884"
            x2="330.884"
            y1="64.7255"
            y2="121.524"
          >
            <stop stopColor="white" />
            <stop offset="0.874488" stopColor="#101010" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint9_linear_1_2390"
            x1="208.632"
            x2="208.632"
            y1="64.0548"
            y2="123.094"
          >
            <stop stopColor="white" />
            <stop offset="0.874488" stopColor="#101010" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint10_linear_1_2390"
            x1="130.015"
            x2="130.015"
            y1="63.605"
            y2="121.524"
          >
            <stop stopColor="white" />
            <stop offset="0.874488" stopColor="#101010" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint11_linear_1_2390"
            x1="44.6686"
            x2="44.6686"
            y1="48.4828"
            y2="123.094"
          >
            <stop stopColor="white" />
            <stop offset="0.874488" stopColor="#101010" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function FooterWrapper() {
  return (
    <div className="relative shrink-0 w-full" data-name="Footer Wrapper">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[80px] items-center px-[80px] py-0 relative w-full">
          <ContentsContainer />
          <GrowthSailor />
        </div>
      </div>
    </div>
  );
}

function FooterContainer() {
  return (
    <div
      className="bg-[#101010] content-stretch flex flex-col items-center pb-0 pt-[80px] px-0 relative rounded-tl-[24px] rounded-tr-[24px] shrink-0 w-[1224px]"
      data-name="Footer Container"
    >
      <FooterWrapper />
    </div>
  );
}

function FooterSection() {
  return (
    <div
      className="absolute bg-white content-stretch flex flex-col items-center left-0 overflow-clip rounded-tl-[36px] rounded-tr-[36px] top-[9746px] w-[1440px]"
      data-name="FooterSection"
    >
      <div className="flex items-center justify-center leading-[0] relative shrink-0">
        <div className="flex-none -scale-y-100">
          <LineMask />
        </div>
      </div>
      <FooterContainer />
    </div>
  );
}

function Group53() {
  return (
    <div className="absolute inset-[calc(38.65%-1px)_calc(33.84%-1px)_calc(39.13%-1px)_calc(34.22%-1px)]">
      <div className="absolute inset-[-8.75%_-6.09%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 64.4982 47"
        >
          <g id="Group 74">
            <path
              d={svgPaths.p23c0a500}
              id="Vector"
              stroke="var(--stroke-0, #44A37D)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="7"
            />
            <path
              d={svgPaths.p28c67280}
              id="Vector_2"
              stroke="var(--stroke-0, #44A37D)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="7"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function DivGoogleItem() {
  return (
    <div
      className="absolute border border-[#414141] border-solid left-[-273.59px] rounded-[180px] size-[180px] top-[415.44px]"
      data-name="Div [google-item]"
      style={{
        backgroundImage:
          "linear-gradient(-45deg, rgb(17, 18, 21) 0%, rgb(39, 43, 46) 100%)",
      }}
    >
      <Group53 />
    </div>
  );
}

function DivTextItem() {
  return (
    <div
      className="absolute bg-[#4abe8f] border border-[#414141] border-solid left-[-72px] rounded-[139.672px] size-[198.72px] top-[408.25px]"
      data-name="Div [text-item]"
    >
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[50.02px] not-italic text-[#031c11] text-[20.7px] text-nowrap top-[97.4px] tracking-[-0.4608px] translate-y-[-50%]">
        <p className="leading-[29.952px]">Retention</p>
      </div>
    </div>
  );
}

function DivPostItem() {
  return (
    <div
      className="absolute left-[-172.8px] size-[180px] top-[588.23px]"
      data-name="Div [post-item]"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 180 180"
      >
        <g id="Div [post-item]">
          <path d={svgPaths.p16551800} fill="url(#paint0_linear_1_2508)" />
          <path d={svgPaths.p16551800} stroke="var(--stroke-0, #414141)" />
          <path
            d={svgPaths.p32737300}
            fill="var(--fill-0, #44A37D)"
            id="Vector"
          />
        </g>
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_1_2508"
            x1="180"
            x2="0"
            y1="180"
            y2="0"
          >
            <stop stopColor="#111215" />
            <stop offset="1" stopColor="#272B2E" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function DivDiscordItem() {
  return (
    <div
      className="absolute left-[43.2px] size-[180px] top-[588.23px]"
      data-name="Div [discord-item]"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 180 180"
      >
        <g id="Div [discord-item]">
          <path d={svgPaths.p16551800} fill="url(#paint0_linear_1_2104)" />
          <path d={svgPaths.p16551800} stroke="var(--stroke-0, #414141)" />
          <path
            clipRule="evenodd"
            d={svgPaths.pc97d480}
            fill="var(--fill-0, #44A37D)"
            fillRule="evenodd"
            id="Vector"
          />
        </g>
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_1_2104"
            x1="180"
            x2="0"
            y1="180"
            y2="0"
          >
            <stop stopColor="#111215" />
            <stop offset="1" stopColor="#272B2E" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function DivPaidContainer() {
  return (
    <div
      className="absolute bg-[#4abe8f] border border-[#414141] border-solid left-[734.39px] rounded-[139.672px] size-[198.72px] top-[442.08px]"
      data-name="Div [paid-container]"
    >
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[42.52px] not-italic text-[#031c11] text-[20.7px] text-nowrap top-[97.4px] tracking-[-0.4608px] translate-y-[-50%]">
        <p className="leading-[29.952px]">Acquisition</p>
      </div>
    </div>
  );
}

function LinkedinLogoStreamlineLogos() {
  return (
    <div
      className="absolute left-[calc(50%+0.27px)] size-[57px] top-[calc(50%+0.38px)] translate-x-[-50%] translate-y-[-50%]"
      data-name="Linkedin-Logo--Streamline-Logos"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 57 57"
      >
        <g id="Linkedin-Logo--Streamline-Logos">
          <path
            clipRule="evenodd"
            d={svgPaths.p30d81bf0}
            fill="var(--fill-0, #43A07B)"
            fillRule="evenodd"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function DivTwitterItem() {
  return (
    <div
      className="absolute border border-[#414141] border-solid left-[878.39px] rounded-[139.672px] size-[139.68px] top-[341.28px]"
      data-name="Div [twitter-item]"
      style={{
        backgroundImage:
          "linear-gradient(-45deg, rgb(17, 18, 21) 0%, rgb(39, 43, 46) 100%)",
      }}
    >
      <LinkedinLogoStreamlineLogos />
    </div>
  );
}

function GoogleAdsenseLogoStreamlineLogos() {
  return (
    <div
      className="absolute left-[calc(50%-0.32px)] size-[59px] top-[calc(50%+0.39px)] translate-x-[-50%] translate-y-[-50%]"
      data-name="Google-Adsense-Logo--Streamline-Logos"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 59 59"
      >
        <g id="Google-Adsense-Logo--Streamline-Logos">
          <path
            clipRule="evenodd"
            d={svgPaths.p1fc6c200}
            fill="var(--fill-0, #43A07B)"
            fillRule="evenodd"
            id="Vector"
          />
          <path
            d={svgPaths.p22f74530}
            fill="var(--fill-0, #43A07B)"
            id="Vector_2"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p17c63100}
            fill="var(--fill-0, #43A07B)"
            fillRule="evenodd"
            id="Vector_3"
          />
        </g>
      </svg>
    </div>
  );
}

function DivTiktokItem() {
  return (
    <div
      className="absolute border border-[#414141] border-solid left-[935.98px] rounded-[139.672px] size-[139.68px] top-[485.27px]"
      data-name="Div [tiktok-item]"
      style={{
        backgroundImage:
          "linear-gradient(-45deg, rgb(17, 18, 21) 0%, rgb(39, 43, 46) 100%)",
      }}
    >
      <GoogleAdsenseLogoStreamlineLogos />
    </div>
  );
}

function DivGogleItem() {
  return (
    <div
      className="absolute left-[863.98px] size-[139.68px] top-[614.88px]"
      data-name="Div [gogle-item]"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 139.68 139.68"
      >
        <g id="Div [gogle-item]">
          <path d={svgPaths.p26721880} fill="url(#paint0_linear_1_2096)" />
          <path d={svgPaths.p26721880} stroke="var(--stroke-0, #414141)" />
          <path
            clipRule="evenodd"
            d={svgPaths.p358e5b80}
            fill="var(--fill-0, #43A07B)"
            fillRule="evenodd"
            id="Vector"
          />
        </g>
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_1_2096"
            x1="139.68"
            x2="0"
            y1="139.68"
            y2="0"
          >
            <stop stopColor="#111215" />
            <stop offset="1" stopColor="#272B2E" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function XTwitterLogoStreamlineLogos() {
  return (
    <div
      className="absolute left-[calc(50%-0.34px)] size-[49px] top-[calc(50%-0.01px)] translate-x-[-50%] translate-y-[-50%]"
      data-name="X-Twitter-Logo--Streamline-Logos"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 49 49"
      >
        <g id="X-Twitter-Logo--Streamline-Logos">
          <path
            clipRule="evenodd"
            d={svgPaths.pe63b300}
            fill="var(--fill-0, #43A07B)"
            fillRule="evenodd"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function DivFacebookItem() {
  return (
    <div
      className="absolute border border-[#414141] border-solid left-[720px] rounded-[139.672px] size-[139.68px] top-[643.67px]"
      data-name="Div [facebook-item]"
      style={{
        backgroundImage:
          "linear-gradient(-45deg, rgb(17, 18, 21) 0%, rgb(39, 43, 46) 100%)",
      }}
    >
      <XTwitterLogoStreamlineLogos />
    </div>
  );
}

function FreeRemixComputerDevicesInstagram() {
  return (
    <div
      className="absolute inset-[calc(25.86%-1px)_calc(25.4%-1px)_calc(25.45%-1px)_calc(25.92%-1px)]"
      data-name="Free Remix/Computer Devices/instagram"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 68.0005 68"
      >
        <g id="Free Remix/Computer Devices/instagram">
          <path
            clipRule="evenodd"
            d={svgPaths.p2550f700}
            fill="var(--fill-0, black)"
            fillRule="evenodd"
            id="Union"
          />
        </g>
      </svg>
    </div>
  );
}

function DivYoutubeItem() {
  return (
    <div
      className="absolute bg-[#4abe8f] border border-[#414141] border-solid left-[604.8px] rounded-[139.672px] size-[139.68px] top-[542.88px]"
      data-name="Div [youtube-item]"
    >
      <FreeRemixComputerDevicesInstagram />
    </div>
  );
}

function Image() {
  return (
    <div
      className="absolute left-[40.33px] size-[57px] top-[40.33px]"
      data-name="Image"
    />
  );
}

function DivPinterestItem() {
  return (
    <div
      className="absolute bg-[#4abe8f] border border-[#414141] border-solid left-[734.39px] rounded-[139.672px] size-[139.68px] top-[298.08px]"
      data-name="Div [pinterest-item]"
    >
      <Image />
      <div
        className="absolute left-[26.61px] size-[84px] top-[26.92px]"
        data-name="image 27"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
          src={imgImage27}
        />
      </div>
    </div>
  );
}

function DivUnderMarkerContainer() {
  return (
    <div
      className="absolute border border-[#414141] border-solid h-[44.63px] left-[362.16px] rounded-[365.76px] top-[806.41px] w-[106.55px]"
      data-name="Div [under-marker-container]"
      style={{
        backgroundImage:
          "linear-gradient(163.654deg, rgba(10, 17, 33, 0.06) 0%, rgba(22, 29, 50, 0) 100%)",
      }}
    >
      <div
        className="absolute bg-clip-text flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[15.67px] not-italic text-[14.2px] text-[rgba(0,0,0,0)] text-nowrap top-[21.22px] tracking-[-0.4752px] translate-y-[-50%]"
        style={{
          WebkitTextFillColor: "transparent",
          backgroundImage:
            "linear-gradient(90deg, rgb(64, 150, 116) 0%, rgb(85, 134, 103) 100%)",
        }}
      >
        <p className="leading-[20.592px]">Customers</p>
      </div>
    </div>
  );
}

function Group23() {
  return (
    <div
      className="[mask-clip:no-clip,no-clip] [mask-composite:intersect,intersect] [mask-mode:alpha,alpha] [mask-repeat:no-repeat,no-repeat] absolute inset-[-9.52%_-14.29%_-14.29%_-9.52%] mask-position-[1.988px,0px] mask-[20.88px_20.88px,25.851px_25.851px]"
      data-name="Group"
      style={{ maskImage: `url('${imgGroup}'), url('${imgGroup1}')` }}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 25.8514 25.8514"
      >
        <g id="Group">
          <path
            d={svgPaths.p21bc3f00}
            fill="url(#paint0_linear_1_2209)"
            id="Vector"
          />
        </g>
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_1_2209"
            x1="-2.2261"
            x2="26.2821"
            y1="26.551"
            y2="-0.462254"
          >
            <stop offset="0.0001" stopColor="#15BCDF" />
            <stop offset="0.615" stopColor="#0DDC7A" />
            <stop offset="1" stopColor="#15BCDF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function MaskGroup7() {
  return (
    <div
      className="absolute contents inset-[-9.52%_-14.29%_-14.29%_-9.52%]"
      data-name="Mask group"
    >
      <Group23 />
    </div>
  );
}

function Group24() {
  return (
    <div
      className="absolute contents inset-[-9.52%_-14.29%_-14.29%_-9.52%]"
      data-name="Group"
    >
      <MaskGroup7 />
    </div>
  );
}

function ClipPathGroup9() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group24 />
    </div>
  );
}

function Group25() {
  return (
    <div
      className="[mask-clip:no-clip,no-clip] [mask-composite:intersect,intersect] [mask-mode:alpha,alpha] [mask-repeat:no-repeat,no-repeat] absolute inset-[-9.52%_-14.29%_-14.29%_-9.52%] mask-position-[1.988px,0px] mask-[20.88px_20.88px,25.851px_25.851px]"
      data-name="Group"
      style={{ maskImage: `url('${imgGroup}'), url('${imgGroup1}')` }}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 25.8514 25.8514"
      >
        <g id="Group">
          <path
            d={svgPaths.p21bc3f00}
            fill="url(#paint0_linear_1_2209)"
            id="Vector"
          />
        </g>
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_1_2209"
            x1="-2.2261"
            x2="26.2821"
            y1="26.551"
            y2="-0.462254"
          >
            <stop offset="0.0001" stopColor="#15BCDF" />
            <stop offset="0.615" stopColor="#0DDC7A" />
            <stop offset="1" stopColor="#15BCDF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function MaskGroup8() {
  return (
    <div
      className="absolute contents inset-[-9.52%_-14.29%_-14.29%_-9.52%]"
      data-name="Mask group"
    >
      <Group25 />
    </div>
  );
}

function Group26() {
  return (
    <div
      className="absolute contents inset-[-9.52%_-14.29%_-14.29%_-9.52%]"
      data-name="Group"
    >
      <MaskGroup8 />
    </div>
  );
}

function ClipPathGroup10() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group26 />
    </div>
  );
}

function Icon23() {
  return (
    <div
      className="absolute inset-[-7.71%_1.95%_7.71%_-1.95%] overflow-clip"
      data-name="Icon"
    >
      <ClipPathGroup10 />
      <div
        className="absolute inset-[11.82%_8.7%_6.76%_9.88%]"
        data-name="Vector"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 17 17"
        >
          <path d={svgPaths.p70c1900} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Icon24() {
  return (
    <div
      className="absolute left-[10.5px] overflow-clip size-[20.88px] top-[10.5px]"
      data-name="Icon"
    >
      <Icon23 />
    </div>
  );
}

function DivCircleIconB7() {
  return (
    <div
      className="absolute bg-transparent left-[220.44px] rounded-[41.891px] size-[41.9px] top-[13.03px]"
      data-name="Div [circle_icon_b]"
    >
      <Icon24 />
    </div>
  );
}

function LinkResultBtn() {
  return (
    <div
      className="absolute border border-[#949494] border-solid h-[69.97px] left-[275.47px] rounded-[64.8px] shadow-[1px_1px_10px_0px_rgba(204,195,195,0.25)] top-[578.08px] w-[279.93px]"
      data-name="Link [result-btn]"
      style={{
        backgroundImage:
          "linear-gradient(16.0421deg, rgb(41, 41, 41) 0%, rgb(74, 190, 143) 61.5%, rgb(137, 255, 214) 100%)",
      }}
    >
      <DivCircleIconB7 />
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[33px] not-italic text-[#031c11] text-[14.9px] text-nowrap top-[33.99px] tracking-[-0.1598px] translate-y-[-50%] uppercase">
        <p className="leading-[15.984px]">Free Strategy Call</p>
      </div>
    </div>
  );
}

function ParagraphCicrcleText() {
  return (
    <div
      className="absolute font-['Manrope:Regular',sans-serif] font-normal h-[82.38px] leading-[0] left-[224.64px] text-[#a0a0a0] text-[15.84px] text-nowrap top-[458.27px] tracking-[-0.3168px] w-[381.6px]"
      data-name="Paragraph [cicrcle-text]"
    >
      <div className="absolute flex flex-col justify-center left-[76.22px] top-[71.98px] translate-y-[-50%]">
        <p className="leading-[20.592px] text-nowrap">
          available resources and budgets.
        </p>
      </div>
      <div className="absolute flex flex-col justify-center left-[2.67px] top-[51.39px] translate-y-[-50%]">
        <p className="leading-[20.592px] text-nowrap">{`formulated to maximize synergy and align actions with `}</p>
      </div>
      <div className="absolute flex flex-col justify-center left-[17.91px] top-[30.8px] translate-y-[-50%]">
        <p className="leading-[20.592px] text-nowrap">{`cost, risks, and dependencies, and the roadmap is `}</p>
      </div>
      <div className="absolute flex flex-col justify-center left-[10.34px] top-[10.2px] translate-y-[-50%]">
        <p className="leading-[20.592px] text-nowrap">{`Each of these points is evaluated in terms of impact, `}</p>
      </div>
    </div>
  );
}

function Frame87() {
  return (
    <div className="absolute content-stretch flex h-[53px] items-center justify-center left-[-7.59px] p-[8px] rounded-[100px] top-[59.19px]">
      <div
        aria-hidden="true"
        className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[100px]"
      />
      <div className="flex flex-col font-['Libre_Baskerville:Italic',sans-serif] italic justify-center leading-[0] relative shrink-0 text-[40px] text-nowrap text-white tracking-[-0.8928px]">
        <p className="leading-[49.104px]">interaction</p>
      </div>
    </div>
  );
}

function Frame86() {
  return (
    <div className="absolute content-stretch flex h-[52px] items-center justify-center left-[130.41px] p-[8px] rounded-[1000px] top-[2.19px] w-[262px]">
      <div
        aria-hidden="true"
        className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[1000px]"
      />
      <div className="flex flex-col font-['Libre_Baskerville:Italic',sans-serif] italic justify-center leading-[0] relative shrink-0 text-[38px] text-nowrap text-white tracking-[-0.8928px]">
        <p className="leading-[49.104px]">{`multichannel `}</p>
      </div>
    </div>
  );
}

function SpanRequiresSpan() {
  return (
    <div
      className="absolute h-[106px] left-[95.56px] top-[-3px] w-[385px]"
      data-name="Span [requires-span]"
    >
      <Frame87 />
      <Frame86 />
    </div>
  );
}

function H3RequireCircleTitle() {
  return (
    <div
      className="absolute h-[249.55px] left-[163.44px] top-[182.81px] w-[504px]"
      data-name="H3 [require-circle-title]"
    >
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[160.55px] not-italic text-[41.3px] text-nowrap text-white top-[224.89px] tracking-[-0.8928px] translate-y-[-50%]">
        <p className="leading-[49.104px]">strategies</p>
      </div>
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[21.98px] not-italic text-[41.3px] text-nowrap text-white top-[175.78px] tracking-[-0.8928px] translate-y-[-50%]">
        <p className="leading-[49.104px]">{`acquisition and retention `}</p>
      </div>
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[76.13px] not-italic text-[41.3px] text-nowrap text-white top-[126.67px] tracking-[-0.8928px] translate-y-[-50%]">
        <p className="leading-[49.104px]">{`customers through `}</p>
      </div>
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[19.64px] not-italic text-[41.3px] text-nowrap text-white top-[26.45px] tracking-[-0.8928px] translate-y-[-50%]">
        <p className="leading-[49.104px]">{`Creating a `}</p>
      </div>
      <SpanRequiresSpan />
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[299.56px] not-italic text-[41.3px] text-nowrap text-white top-[77.56px] tracking-[-0.8928px] translate-y-[-50%]">
        <p className="leading-[49.104px]">{` with `}</p>
      </div>
    </div>
  );
}

function Strategy() {
  return (
    <div
      className="absolute left-[calc(50%+0.44px)] size-[830.88px] top-[6676px] translate-x-[-50%]"
      data-name="Strategy"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img
          alt=""
          className="absolute left-0 max-w-none size-full top-0"
          src={imgStrategy}
        />
      </div>
      <DivGoogleItem />
      <DivTextItem />
      <DivPostItem />
      <DivDiscordItem />
      <DivPaidContainer />
      <DivTwitterItem />
      <DivTiktokItem />
      <DivGogleItem />
      <DivFacebookItem />
      <DivYoutubeItem />
      <DivPinterestItem />
      <DivUnderMarkerContainer />
      <LinkResultBtn />
      <ParagraphCicrcleText />
      <H3RequireCircleTitle />
    </div>
  );
}

function Group50() {
  return (
    <div className="h-[279.506px] relative w-[244.356px]">
      <div className="absolute inset-[-35.78%_-49.11%_-28.62%_-40.92%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 464.356 459.506"
        >
          <g id="Group 44">
            <g filter="url(#filter0_f_1_2477)" id="Ellipse 10">
              <ellipse
                cx="169.641"
                cy="175.545"
                fill="var(--fill-0, #4ABE8F)"
                rx="69.6411"
                ry="75.5454"
              />
            </g>
            <g filter="url(#filter1_f_1_2477)" id="Ellipse 11">
              <ellipse
                cx="270.525"
                cy="242.246"
                fill="var(--fill-0, #4ABE8F)"
                rx="73.8311"
                ry="80.1239"
              />
            </g>
            <g filter="url(#filter2_f_1_2477)" id="Ellipse 12">
              <ellipse
                cx="187.132"
                cy="311.81"
                fill="var(--fill-0, #4ABE8F)"
                rx="62.4169"
                ry="67.6965"
              />
            </g>
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="351.091"
              id="filter0_f_1_2477"
              width="339.282"
              x="0"
              y="0"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_1_2477"
                stdDeviation="50"
              />
            </filter>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="400.248"
              id="filter1_f_1_2477"
              width="387.662"
              x="76.6941"
              y="42.1221"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_1_2477"
                stdDeviation="60"
              />
            </filter>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="295.393"
              id="filter2_f_1_2477"
              width="284.834"
              x="44.7149"
              y="164.113"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_1_2477"
                stdDeviation="40"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute bg-black h-[339px] left-0 overflow-clip rounded-tl-[34px] rounded-tr-[34px] top-[306px] w-[426px]">
      <div
        className="absolute flex h-[314.021px] items-center justify-center left-[-131.08px] top-[-119.69px] w-[337.665px]"
        style={
          {
            "--transform-inner-width": "0",
            "--transform-inner-height": "0",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-[106.599deg]">
          <Group50 />
        </div>
      </div>
      <p className="absolute font-['Poppins:Light',sans-serif] h-[80px] leading-[23px] left-[calc(50%-179px)] not-italic text-[16px] text-white top-[62px] tracking-[-0.48px] w-[372px]">
        Boosted digital discoverability and accelerated sales for plant and
        decor SKUs across leading e-commerce channels.
      </p>
    </div>
  );
}

function Frame39() {
  return (
    <div className="absolute bg-white h-[9px] left-0 rounded-[36px] top-0 w-[106px]" />
  );
}

function Frame40() {
  return (
    <div className="absolute bg-[#cecece] h-[9px] left-[23px] overflow-clip rounded-[36px] top-[35px] w-[380px]">
      <Frame39 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex h-[34px] items-center justify-center left-[22px] p-[8px] rounded-[36px] top-[554px] w-[266px]">
      <div
        aria-hidden="true"
        className="absolute border border-[#878787] border-dashed inset-0 pointer-events-none rounded-[36px]"
      />
      <p className="font-['Poppins:Medium',sans-serif] leading-[23px] not-italic relative shrink-0 text-[16px] text-nowrap text-white uppercase">
        Marketplace Onboarding
      </p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex h-[34px] items-center justify-center left-[311px] p-[8px] rounded-[36px] top-[554px] w-[92px]">
      <div
        aria-hidden="true"
        className="absolute border border-[#878787] border-dashed inset-0 pointer-events-none rounded-[36px]"
      />
      <p className="font-['Poppins:Medium',sans-serif] leading-[23px] not-italic relative shrink-0 text-[16px] text-nowrap text-white uppercase">
        Listing
      </p>
    </div>
  );
}

function Group54() {
  return (
    <div className="absolute left-0 top-0">
      <div
        className="absolute h-[853px] left-[-220px] top-[-195px] w-[828px]"
        data-name="image 12"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute h-full left-[-23.78%] max-w-none top-[7.57%] w-[324.85%]"
            src={imgImage12}
          />
        </div>
      </div>
      <Frame9 />
      <div className="absolute h-[135px] left-[131px] top-[84px] w-[151px]">
        <div className="absolute inset-[-37.04%_-33.11%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 251 235"
          >
            <g filter="url(#filter0_f_1_2089)" id="Ellipse 13">
              <ellipse
                cx="125.5"
                cy="117.5"
                fill="var(--fill-0, white)"
                rx="75.5"
                ry="67.5"
              />
            </g>
            <defs>
              <filter
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
                height="235"
                id="filter0_f_1_2089"
                width="251"
                x="0"
                y="0"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  mode="normal"
                  result="shape"
                />
                <feGaussianBlur
                  result="effect1_foregroundBlur_1_2089"
                  stdDeviation="25"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div
        className="absolute h-[37px] left-[132px] top-[133px] w-[125px]"
        data-name="image 8"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full grayscale"
          src={imgImage8}
        />
      </div>
      <Frame40 />
      <Frame1 />
      <Frame2 />
    </div>
  );
}

function Kyari() {
  return (
    <div
      className="absolute h-[644px] left-0 overflow-clip rounded-tl-[24px] rounded-tr-[24px] top-0 w-[426px]"
      data-name="kyari"
    >
      <img
        alt=""
        className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-tl-[24px] rounded-tr-[24px] size-full grayscale"
        src={imgImage8}
      />
      <Group54 />
    </div>
  );
}

function Group51() {
  return (
    <div className="h-[279.506px] relative w-[244.356px]">
      <div className="absolute inset-[-35.78%_-49.11%_-28.62%_-40.92%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 464.356 459.506"
        >
          <g id="Group 44">
            <g filter="url(#filter0_f_1_2477)" id="Ellipse 10">
              <ellipse
                cx="169.641"
                cy="175.545"
                fill="var(--fill-0, #4ABE8F)"
                rx="69.6411"
                ry="75.5454"
              />
            </g>
            <g filter="url(#filter1_f_1_2477)" id="Ellipse 11">
              <ellipse
                cx="270.525"
                cy="242.246"
                fill="var(--fill-0, #4ABE8F)"
                rx="73.8311"
                ry="80.1239"
              />
            </g>
            <g filter="url(#filter2_f_1_2477)" id="Ellipse 12">
              <ellipse
                cx="187.132"
                cy="311.81"
                fill="var(--fill-0, #4ABE8F)"
                rx="62.4169"
                ry="67.6965"
              />
            </g>
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="351.091"
              id="filter0_f_1_2477"
              width="339.282"
              x="0"
              y="0"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_1_2477"
                stdDeviation="50"
              />
            </filter>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="400.248"
              id="filter1_f_1_2477"
              width="387.662"
              x="76.6941"
              y="42.1221"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_1_2477"
                stdDeviation="60"
              />
            </filter>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="295.393"
              id="filter2_f_1_2477"
              width="284.834"
              x="44.7149"
              y="164.113"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_1_2477"
                stdDeviation="40"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="absolute bg-black h-[339px] left-0 overflow-clip rounded-tl-[34px] rounded-tr-[34px] top-[306px] w-[426px]">
      <div
        className="absolute flex h-[314.021px] items-center justify-center left-[-131.08px] top-[-119.69px] w-[337.665px]"
        style={
          {
            "--transform-inner-width": "0",
            "--transform-inner-height": "0",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-[106.599deg]">
          <Group51 />
        </div>
      </div>
      <p className="absolute font-['Poppins:Light',sans-serif] h-[80px] leading-[23px] left-[calc(50%-179px)] not-italic text-[16px] text-white top-[62px] tracking-[-0.48px] w-[372px]">
        Boosted digital discoverability and accelerated sales for plant and
        décor SKUs across leading e-commerce channels.
      </p>
    </div>
  );
}

function Frame41() {
  return (
    <div className="absolute bg-white h-[9px] left-[137px] rounded-[36px] top-0 w-[106px]" />
  );
}

function Frame42() {
  return (
    <div className="absolute bg-[#cecece] h-[9px] left-[23px] overflow-clip rounded-[36px] top-[35px] w-[380px]">
      <Frame41 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex h-[34px] items-center justify-center left-[22px] p-[8px] rounded-[36px] top-[554px] w-[266px]">
      <div
        aria-hidden="true"
        className="absolute border border-[#878787] border-dashed inset-0 pointer-events-none rounded-[36px]"
      />
      <p className="font-['Poppins:Medium',sans-serif] leading-[23px] not-italic relative shrink-0 text-[16px] text-nowrap text-white uppercase">
        Marketplace Onboarding
      </p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute content-stretch flex h-[34px] items-center justify-center left-[311px] p-[8px] rounded-[36px] top-[554px] w-[92px]">
      <div
        aria-hidden="true"
        className="absolute border border-[#878787] border-dashed inset-0 pointer-events-none rounded-[36px]"
      />
      <p className="font-['Poppins:Medium',sans-serif] leading-[23px] not-italic relative shrink-0 text-[16px] text-nowrap text-white uppercase">
        Listing
      </p>
    </div>
  );
}

function HealthyMaster() {
  return (
    <div
      className="absolute h-[644px] left-[924px] overflow-clip rounded-tl-[24px] rounded-tr-[24px] top-0 w-[426px]"
      data-name="healthy master"
    >
      <img
        alt=""
        className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-tl-[24px] rounded-tr-[24px] size-full grayscale"
        src={imgImage8}
      />
      <div
        className="absolute h-[558px] left-[-43px] top-[-158px] w-[500px]"
        data-name="image 29"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute h-[89.61%] left-0 max-w-none top-0 w-full grayscale"
            src={imgImage29}
          />
        </div>
      </div>
      <Frame10 />
      <Frame42 />
      <Frame3 />
      <Frame4 />
      <div
        className="absolute flex h-[222px] items-center justify-center left-1/2 top-[calc(50%-156px)] translate-x-[-50%] translate-y-[-50%] w-[166px]"
        style={
          {
            "--transform-inner-width": "0",
            "--transform-inner-height": "0",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-90">
          <div className="h-[166px] relative w-[222px]">
            <div className="absolute inset-[-30.12%_-22.52%]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 322 266"
              >
                <g filter="url(#filter0_f_1_2212)" id="Ellipse 20">
                  <ellipse
                    cx="161"
                    cy="133"
                    fill="url(#paint0_radial_1_2212)"
                    rx="111"
                    ry="83"
                  />
                </g>
                <defs>
                  <filter
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                    height="266"
                    id="filter0_f_1_2212"
                    width="322"
                    x="0"
                    y="0"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      mode="normal"
                      result="shape"
                    />
                    <feGaussianBlur
                      result="effect1_foregroundBlur_1_2212"
                      stdDeviation="25"
                    />
                  </filter>
                  <radialGradient
                    cx="0"
                    cy="0"
                    gradientTransform="translate(161 133) rotate(90) scale(108.87 145.597)"
                    gradientUnits="userSpaceOnUse"
                    id="paint0_radial_1_2212"
                    r="1"
                  >
                    <stop stopColor="white" />
                    <stop offset="1" stopColor="white" />
                  </radialGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute left-[103px] size-[209px] top-[55px]"
        data-name="image 31"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full grayscale"
          src={imgImage31}
        />
      </div>
    </div>
  );
}

function HealthyMaster1() {
  return (
    <div
      className="absolute contents left-[924px] top-0"
      data-name="healthy master"
    >
      <HealthyMaster />
    </div>
  );
}

function Group55() {
  return (
    <div className="absolute contents left-0 top-0">
      <Kyari />
      <HealthyMaster1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute h-[383px] left-1/2 overflow-clip top-[-34px] translate-x-[-50%] w-[426px]">
      <div
        className="absolute h-[631px] left-[-18px] top-[-138px] w-[443px]"
        data-name="image 7"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute h-[134.34%] left-[-52.41%] max-w-none top-[2.73%] w-[191.35%] grayscale"
            src={imgImage7}
          />
        </div>
      </div>
      <div className="absolute h-[115px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[222px]">
        <div className="absolute inset-[-43.48%_-22.52%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 322 215"
          >
            <g filter="url(#filter0_f_1_2091)" id="Ellipse 20">
              <ellipse
                cx="161"
                cy="107.5"
                fill="url(#paint0_radial_1_2091)"
                rx="111"
                ry="57.5"
              />
            </g>
            <defs>
              <filter
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
                height="215"
                id="filter0_f_1_2091"
                width="322"
                x="0"
                y="0"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  mode="normal"
                  result="shape"
                />
                <feGaussianBlur
                  result="effect1_foregroundBlur_1_2091"
                  stdDeviation="25"
                />
              </filter>
              <radialGradient
                cx="0"
                cy="0"
                gradientTransform="translate(161 107.5) rotate(90) scale(75.4221 145.597)"
                gradientUnits="userSpaceOnUse"
                id="paint0_radial_1_2091"
                r="1"
              >
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div
        className="absolute h-[91px] left-[127px] top-[151px] w-[172px]"
        data-name="image 6"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full grayscale"
          src={imgImage6}
        />
      </div>
    </div>
  );
}

function Group52() {
  return (
    <div className="h-[279.506px] relative w-[244.356px]">
      <div className="absolute inset-[-35.78%_-49.11%_-28.62%_-40.92%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 464.356 459.506"
        >
          <g id="Group 44">
            <g filter="url(#filter0_f_1_2477)" id="Ellipse 10">
              <ellipse
                cx="169.641"
                cy="175.545"
                fill="var(--fill-0, #4ABE8F)"
                rx="69.6411"
                ry="75.5454"
              />
            </g>
            <g filter="url(#filter1_f_1_2477)" id="Ellipse 11">
              <ellipse
                cx="270.525"
                cy="242.246"
                fill="var(--fill-0, #4ABE8F)"
                rx="73.8311"
                ry="80.1239"
              />
            </g>
            <g filter="url(#filter2_f_1_2477)" id="Ellipse 12">
              <ellipse
                cx="187.132"
                cy="311.81"
                fill="var(--fill-0, #4ABE8F)"
                rx="62.4169"
                ry="67.6965"
              />
            </g>
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="351.091"
              id="filter0_f_1_2477"
              width="339.282"
              x="0"
              y="0"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_1_2477"
                stdDeviation="50"
              />
            </filter>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="400.248"
              id="filter1_f_1_2477"
              width="387.662"
              x="76.6941"
              y="42.1221"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_1_2477"
                stdDeviation="60"
              />
            </filter>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="295.393"
              id="filter2_f_1_2477"
              width="284.834"
              x="44.7149"
              y="164.113"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_1_2477"
                stdDeviation="40"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="absolute bg-black h-[339px] left-0 overflow-clip rounded-tl-[34px] rounded-tr-[34px] top-[306px] w-[426px]">
      <div
        className="absolute flex h-[314.021px] items-center justify-center left-[-131.08px] top-[-119.69px] w-[337.665px]"
        style={
          {
            "--transform-inner-width": "0",
            "--transform-inner-height": "0",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-[106.599deg]">
          <Group52 />
        </div>
      </div>
      <p className="absolute font-['Poppins:Light',sans-serif] h-[80px] leading-[23px] left-[calc(50%-179px)] not-italic text-[16px] text-white top-[62px] tracking-[-0.48px] w-[372px]">
        Boosted digital discoverability and accelerated sales for plant and
        décor SKUs across leading e-commerce channels.
      </p>
    </div>
  );
}

function Frame50() {
  return (
    <div className="absolute bg-white h-[9px] left-[274px] rounded-[36px] top-0 w-[106px]" />
  );
}

function Frame52() {
  return (
    <div className="absolute bg-[#cecece] h-[9px] left-[23px] overflow-clip rounded-[36px] top-[35px] w-[380px]">
      <Frame50 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute content-stretch flex h-[34px] items-center justify-center left-[22px] p-[8px] rounded-[36px] top-[554px] w-[266px]">
      <div
        aria-hidden="true"
        className="absolute border border-[#878787] border-dashed inset-0 pointer-events-none rounded-[36px]"
      />
      <p className="font-['Poppins:Medium',sans-serif] leading-[23px] not-italic relative shrink-0 text-[16px] text-nowrap text-white uppercase">
        Marketplace Onboarding
      </p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute content-stretch flex h-[34px] items-center justify-center left-[311px] p-[8px] rounded-[36px] top-[554px] w-[92px]">
      <div
        aria-hidden="true"
        className="absolute border border-[#878787] border-dashed inset-0 pointer-events-none rounded-[36px]"
      />
      <p className="font-['Poppins:Medium',sans-serif] leading-[23px] not-italic relative shrink-0 text-[16px] text-nowrap text-white uppercase">
        Listing
      </p>
    </div>
  );
}

function SpicePlatter() {
  return (
    <div
      className="absolute h-[644px] left-[462px] overflow-clip rounded-tl-[24px] rounded-tr-[24px] top-0 w-[426px]"
      data-name="spice platter"
    >
      <img
        alt=""
        className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-tl-[24px] rounded-tr-[24px] size-full grayscale"
        src={imgImage8}
      />
      <Frame />
      <Frame11 />
      <Frame52 />
      <Frame5 />
      <Frame6 />
    </div>
  );
}

function SharkTankHero() {
  return (
    <div
      className="absolute contents left-[462px] top-0"
      data-name="shark tank/ hero"
    >
      <SpicePlatter />
    </div>
  );
}

function Group56() {
  return (
    <div className="absolute contents left-0 top-0">
      <Group55 />
      <SharkTankHero />
    </div>
  );
}

function Frame101() {
  return (
    <div className="absolute h-[644px] left-[-3px] overflow-clip top-[3px] w-[426px]">
      <Group56 />
    </div>
  );
}

// Individual card wrapper components for the carousel - EXACT copies of original components
function KyariCard() {
  // Kyari card with plant image background
  return (
    <div className="relative h-[644px] w-[426px] shrink-0 overflow-clip rounded-tl-[24px] rounded-tr-[24px]">
      {/* Background layer - dark gradient */}
      <div className="absolute inset-0 bg-black rounded-tl-[24px] rounded-tr-[24px]" />
      {/* Content layer with Kyari brand details */}
      <Group54 />
    </div>
  );
}

function SpicePlatterCard() {
  // Spice Platter card with spices image background
  return (
    <div className="relative h-[644px] w-[426px] shrink-0 overflow-clip rounded-tl-[24px] rounded-tr-[24px]">
      {/* Background layer - dark gradient */}
      <div className="absolute inset-0 bg-black rounded-tl-[24px] rounded-tr-[24px]" />
      {/* Content layers with spice image and brand details */}
      <Frame />
      <Frame11 />
      <Frame52 />
      <Frame5 />
      <Frame6 />
    </div>
  );
}

function HealthyMasterCard() {
  return (
    <div className="relative h-[644px] w-[426px] shrink-0 overflow-clip rounded-tl-[24px] rounded-tr-[24px]">
      <img
        alt=""
        className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-tl-[24px] rounded-tr-[24px] size-full grayscale"
        src={imgImage8}
      />
      <div
        className="absolute h-[558px] left-[-43px] top-[-158px] w-[500px]"
        data-name="image 29"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute h-[89.61%] left-0 max-w-none top-0 w-full grayscale"
            src={imgImage29}
          />
        </div>
      </div>
      <Frame10 />
      <Frame52 />
      <Frame3 />
      <Frame4 />
      <div
        className="absolute flex h-[222px] items-center justify-center left-1/2 top-[calc(50%-156px)] translate-x-[-50%] translate-y-[-50%] w-[166px]"
        style={
          {
            "--transform-inner-width": "0",
            "--transform-inner-height": "0",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-90">
          <div className="h-[166px] relative w-[222px]">
            <div className="absolute inset-[-30.12%_-22.52%]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 322 266"
              >
                <g filter="url(#filter0_f_1_2212)" id="Ellipse 20">
                  <ellipse
                    cx="161"
                    cy="133"
                    fill="url(#paint0_radial_1_2212)"
                    rx="111"
                    ry="83"
                  />
                </g>
                <defs>
                  <filter
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                    height="266"
                    id="filter0_f_1_2212"
                    width="322"
                    x="0"
                    y="0"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      mode="normal"
                      result="shape"
                    />
                    <feGaussianBlur
                      result="effect1_foregroundBlur_1_2212"
                      stdDeviation="25"
                    />
                  </filter>
                  <radialGradient
                    cx="0"
                    cy="0"
                    gradientTransform="translate(161 133) rotate(90) scale(108.87 145.597)"
                    gradientUnits="userSpaceOnUse"
                    id="paint0_radial_1_2212"
                    r="1"
                  >
                    <stop stopColor="white" />
                    <stop offset="1" stopColor="white" />
                  </radialGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute left-[103px] size-[209px] top-[55px]"
        data-name="image 31"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
          src={imgImage31}
        />
      </div>
    </div>
  );
}

function Frame103() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cards = [KyariCard, SpicePlatterCard, HealthyMasterCard];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 3000); // 3 second delay between card transitions

    return () => clearInterval(interval);
  }, [cards.length]);

  return (
    <div
      className="absolute h-[644px] left-[calc(66.67%-39px)] overflow-hidden top-[318px] w-[426px]"
      style={{ zIndex: 10 }}
    >
      <div
        className="flex transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 426}px)` }}
      >
        {cards.map((Card, index) => (
          <Card key={index} />
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-[#111] relative w-full h-[10400px]" data-name="Home">
      <div
        className="absolute h-[54px] left-[86px] top-[96px] w-[141px]"
        data-name="logo white big 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
          src={imgLogoWhiteBig1}
        />
      </div>
      <NavBar />
      <LinkLetsTalk />
      <Frame7 />
      <Frame17 />
      <Frame20 />
      <Frame24 />
      <BrandCollabSection />
      <Frame31 />
      <Frame51 />
      {/* Work cards carousel shown on the right of the hero/work pill section */}
      <Frame103 />
      <Frame53 />
      <Frame64 />
      <Frame66 />
      <Strategy />
      <Frame65 />
      <FooterSection />
    </div>
  );
}
