import { useState, useEffect } from "react";
import svgPaths from "./svg-xef7fiarew";
import imgImage24 from "figma:asset/d6fb9b882959519863a4c0bb3e5de69c4733f049.png";
import imgFrame188 from "figma:asset/391d4fd8453e4723fb92f1e8b28302358bc6af0f.png";
import imgImage12 from "figma:asset/f4a111ed0c18b661845ed72c92322fec8ebb6002.png";
import imgImage8 from "figma:asset/391d4fd8453e4723fb92f1e8b28302358bc6af0f.png";
import imgImage29 from "figma:asset/8690bc71a95c0ccd8492edb342cf34ea353a4028.png";
import imgImage31 from "figma:asset/792e14a5fa5b43a831b2bb9b4ea460a360a27c5d.png";
import imgLogoWhiteBig1 from "figma:asset/221e78b67b6af7a968c919083e537e0c2aa870b6.png";
import { imgGroup, imgGroup1 } from "./svg-d4ry5";

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
      className="absolute content-stretch flex gap-[45.922px] h-[18px] items-start left-[3px] pl-0 pr-[192.781px] py-0 top-[24px] w-[379px]"
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
      className="absolute h-[66px] left-1/2 top-[96px] translate-x-[-50%] w-[488px]"
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
      className="absolute border border-[rgba(255,255,255,0.3)] border-solid h-[57.83px] left-[1161px] rounded-[1000px] top-[97px] w-[183.24px]"
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

function Base() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px mr-[-5px] relative rounded-[24px] shrink-0"
      data-name="Base"
    >
      <div className="absolute backdrop-blur-[80px] backdrop-filter bg-black/30 inset-0 rounded-[24px]" />
    </div>
  );
}

function GlassEffect() {
  return (
    <div
      className="absolute content-stretch flex h-[415px] items-start left-0 pl-0 pr-[5px] py-0 rounded-[24px] top-[calc(50%-0.5px)] translate-y-[-50%] w-[1421px]"
      data-name="Glass effect 1"
    >
      {[...Array(11).keys()].map((_, i) => (
        <Base key={i} />
      ))}
    </div>
  );
}

function Frame54() {
  return (
    <div className="absolute content-stretch flex h-[92px] items-center justify-center left-[229px] p-[8px] rounded-[100px] top-[138px] w-[275px]">
      <div
        aria-hidden="true"
        className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[100px]"
      />
      <div className="flex flex-col font-['Libre_Baskerville:Italic',sans-serif] italic justify-center leading-[0] relative shrink-0 text-[64px] text-nowrap text-white">
        <p className="leading-[65px]">work</p>
      </div>
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute contents left-[92px] top-[137px]">
      <div className="absolute flex flex-col font-['Poppins:Regular',sans-serif] h-[93px] justify-center leading-[0] left-[92px] not-italic text-[72px] text-white top-[183.5px] tracking-[-4px] translate-y-[-50%] w-[128px]">
        <p className="leading-[65px]">{`The `}</p>
      </div>
      <div className="absolute flex flex-col font-['Poppins:Regular',sans-serif] h-[93px] justify-center leading-[0] left-[92px] not-italic text-[72px] text-white top-[283.5px] tracking-[-4px] translate-y-[-50%] w-[359px]">
        <p className="leading-[65px]">behind the</p>
      </div>
      <div className="absolute flex flex-col font-['Poppins:SemiBold_Italic',sans-serif] h-[93px] italic justify-center leading-[0] left-[459px] text-[72px] text-white top-[283.5px] tracking-[-4px] translate-y-[-50%] w-[261px]">
        <p className="leading-[65px]">wins</p>
      </div>
      <Frame54 />
    </div>
  );
}

function Group() {
  return (
    <div
      className="[mask-clip:no-clip,no-clip] [mask-composite:intersect,intersect] [mask-mode:alpha,alpha] [mask-repeat:no-repeat,no-repeat] absolute inset-[-9.52%_-14.31%_-14.29%_-9.5%] mask-position-[1.984px,0px_1.988px,0px] mask-[20.88px_20.88px,25.851px_25.851px]"
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
      className="absolute contents inset-[-9.52%_-14.31%_-14.29%_-9.5%]"
      data-name="Mask group"
    >
      <Group />
    </div>
  );
}

function Group1() {
  return (
    <div
      className="absolute contents inset-[-9.52%_-14.31%_-14.29%_-9.5%]"
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
      className="absolute bg-[#4abe8f] left-[230px] rounded-[41.891px] size-[41.9px] top-[10px]"
      data-name="Div [circle_icon_b]"
    >
      <Icon1 />
    </div>
  );
}

function Button() {
  return (
    <div
      className="absolute bg-white h-[61px] left-[920px] rounded-[64.8px] shadow-[1px_1px_20px_0px_rgba(131,131,131,0.4)] top-[292px] w-[280px]"
      data-name="button"
    >
      <DivCircleIconB />
      <div className="absolute flex flex-col font-['Manrope:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] left-[calc(50%-113px)] text-[#031c11] text-[14.9px] text-nowrap top-[calc(50%+0.5px)] tracking-[1px] translate-y-[-50%] uppercase">
        <p className="leading-[15.984px]">EXPLORE CASES</p>
      </div>
    </div>
  );
}

function Frame55() {
  return (
    <div className="absolute bg-white h-[466px] left-0 overflow-clip top-[222px] w-[1440px]">
      <div
        className="absolute flex h-[2487.779px] items-center justify-center left-[-572.2px] top-[-875.28px] w-[2445.799px]"
        style={
          {
            "--transform-inner-width": "0",
            "--transform-inner-height": "0",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-[41.587deg]">
          <div
            className="h-[1996.717px] relative w-[1498.047px]"
            data-name="image 24"
          >
            <img
              alt=""
              className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
              src={imgImage24}
            />
          </div>
        </div>
      </div>
      <GlassEffect />
      <Group14 />
      <div className="absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[127px] justify-center leading-[0] left-[925px] text-[18px] text-white top-[183.5px] translate-y-[-50%] w-[418px]">
        <p className="leading-[31px]">
          A collection of brands we've helped scale through performance,
          content, commerce, and design - showcased with clarity, strategy, and
          real impact.
        </p>
      </div>
      <Button />
    </div>
  );
}

function Container() {
  return (
    <div
      className="absolute h-[435px] left-[566px] top-[3251px] w-[778px]"
      data-name="Container"
    />
  );
}

function Frame58() {
  return <div className="absolute left-[437px] size-[24px] top-[52px]" />;
}

function Group15() {
  return (
    <div className="absolute contents font-['Inter:Regular',sans-serif] font-normal leading-[0] left-1/2 not-italic text-[#5e5e5e] text-[48px] text-center top-[calc(50%+47.5px)] tracking-[-3px] translate-x-[-50%] translate-y-[-50%]">
      <div className="absolute flex flex-col h-[50.246px] justify-center left-[calc(50%-0.5px)] top-[calc(50%-285.38px)] translate-x-[-50%] translate-y-[-50%] w-[170px]">
        <p className="leading-none">Clothing</p>
      </div>
      <div className="absolute flex flex-col h-[50.246px] justify-center left-[calc(50%-0.5px)] top-[calc(50%-118.94px)] translate-x-[-50%] translate-y-[-50%] w-[220px]">
        <p className="leading-none">Electronics</p>
      </div>
      <div className="absolute flex flex-col h-[50.246px] justify-center left-1/2 top-[calc(50%+47.5px)] translate-x-[-50%] translate-y-[-50%] w-[267px]">
        <p className="leading-none">Supplements</p>
      </div>
      <div className="absolute flex flex-col h-[50.246px] justify-center left-[calc(50%-0.5px)] top-[calc(50%+213.94px)] translate-x-[-50%] translate-y-[-50%] w-[216px]">
        <p className="leading-none">Cosmetics</p>
      </div>
      <div className="absolute flex flex-col h-[50.246px] justify-center left-1/2 top-[calc(50%+380.38px)] translate-x-[-50%] translate-y-[-50%] w-[139px]">
        <p className="leading-none">Others</p>
      </div>
    </div>
  );
}

function Frame60() {
  return (
    <div className="absolute h-[1029px] left-[72px] top-[-334px] w-[267px]">
      <Group15 />
    </div>
  );
}

function Frame59() {
  return (
    <div className="absolute h-[307px] left-[26px] overflow-hidden rounded-[12px] top-[calc(50%-1px)] translate-y-[-50%] w-[411px]">
      <Frame60 />
    </div>
  );
}

function Group4() {
  return (
    <div className="h-[279.504px] relative w-[244.356px]">
      <div className="absolute inset-[-35.78%_-49.11%_-28.62%_-40.92%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 464.356 459.504"
        >
          <g id="Group 44">
            <g filter="url(#filter0_f_1_4094)" id="Ellipse 10">
              <ellipse
                cx="169.641"
                cy="175.545"
                fill="var(--fill-0, #4ABE8F)"
                rx="69.6411"
                ry="75.5454"
              />
            </g>
            <g filter="url(#filter1_f_1_4094)" id="Ellipse 11">
              <ellipse
                cx="270.525"
                cy="242.246"
                fill="var(--fill-0, #4ABE8F)"
                rx="73.8311"
                ry="80.1239"
              />
            </g>
            <g filter="url(#filter2_f_1_4094)" id="Ellipse 12">
              <ellipse
                cx="187.132"
                cy="311.808"
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
              id="filter0_f_1_4094"
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
                result="effect1_foregroundBlur_1_4094"
                stdDeviation="50"
              />
            </filter>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="400.248"
              id="filter1_f_1_4094"
              width="387.662"
              x="76.6934"
              y="42.1219"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_1_4094"
                stdDeviation="60"
              />
            </filter>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="295.393"
              id="filter2_f_1_4094"
              width="284.834"
              x="44.7151"
              y="164.111"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_1_4094"
                stdDeviation="40"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="absolute bg-black h-[339px] left-0 overflow-clip rounded-tl-[34px] rounded-tr-[34px] top-[306px] w-[426px]">
      <div
        className="absolute flex h-[308.371px] items-center justify-center left-[-128.86px] top-[-116.86px] w-[333.224px]"
        style={
          {
            "--transform-inner-width": "0",
            "--transform-inner-height": "0",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-285">
          <Group4 />
        </div>
      </div>
      <p className="absolute font-['Poppins:Light',sans-serif] h-[80px] leading-[23px] left-[calc(50%-179px)] not-italic text-[16px] text-white top-[62px] tracking-[-0.48px] w-[372px]">
        Boosted digital discoverability and accelerated sales for plant and
        décor SKUs across leading e-commerce channels.
      </p>
    </div>
  );
}

function Frame23() {
  return (
    <div className="absolute bg-white h-[9px] left-0 rounded-[36px] top-0 w-[106px]" />
  );
}

function Frame22() {
  return (
    <div className="absolute bg-[#cecece] h-[9px] left-[23px] overflow-clip rounded-[36px] top-[35px] w-[380px]">
      <Frame23 />
    </div>
  );
}

function Frame() {
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

function Frame1() {
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

function Frame14() {
  return (
    <div className="absolute h-[644px] overflow-clip rounded-tl-[24px] rounded-tr-[24px] top-[calc(50%-1.5px)] translate-y-[-50%] w-[426px]">
      <img
        alt=""
        className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-tl-[24px] rounded-tr-[24px] size-full"
        src={imgFrame188}
      />
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
      <Frame13 />
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
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
          src={imgFrame188}
        />
      </div>
      <Frame22 />
      <Frame />
      <Frame1 />
    </div>
  );
}

function Group5() {
  return (
    <div className="h-[279.504px] relative w-[244.356px]">
      <div className="absolute inset-[-35.78%_-49.11%_-28.62%_-40.92%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 464.356 459.504"
        >
          <g id="Group 44">
            <g filter="url(#filter0_f_1_4094)" id="Ellipse 10">
              <ellipse
                cx="169.641"
                cy="175.545"
                fill="var(--fill-0, #4ABE8F)"
                rx="69.6411"
                ry="75.5454"
              />
            </g>
            <g filter="url(#filter1_f_1_4094)" id="Ellipse 11">
              <ellipse
                cx="270.525"
                cy="242.246"
                fill="var(--fill-0, #4ABE8F)"
                rx="73.8311"
                ry="80.1239"
              />
            </g>
            <g filter="url(#filter2_f_1_4094)" id="Ellipse 12">
              <ellipse
                cx="187.132"
                cy="311.808"
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
              id="filter0_f_1_4094"
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
                result="effect1_foregroundBlur_1_4094"
                stdDeviation="50"
              />
            </filter>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="400.248"
              id="filter1_f_1_4094"
              width="387.662"
              x="76.6934"
              y="42.1219"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_1_4094"
                stdDeviation="60"
              />
            </filter>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="295.393"
              id="filter2_f_1_4094"
              width="284.834"
              x="44.7151"
              y="164.111"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_1_4094"
                stdDeviation="40"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="absolute bg-black h-[339px] left-0 overflow-clip rounded-tl-[34px] rounded-tr-[34px] top-[306px] w-[426px]">
      <div
        className="absolute flex h-[308.371px] items-center justify-center left-[-128.86px] top-[-116.86px] w-[333.224px]"
        style={
          {
            "--transform-inner-width": "0",
            "--transform-inner-height": "0",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-285">
          <Group5 />
        </div>
      </div>
      <p className="absolute font-['Poppins:Light',sans-serif] h-[80px] leading-[23px] left-[calc(50%-179px)] not-italic text-[16px] text-white top-[62px] tracking-[-0.48px] w-[372px]">
        Boosted digital discoverability and accelerated sales for plant and
        décor SKUs across leading e-commerce channels.
      </p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="absolute bg-white h-[9px] left-0 rounded-[36px] top-0 w-[106px]" />
  );
}

function Frame26() {
  return (
    <div className="absolute bg-[#cecece] h-[9px] left-[23px] overflow-clip rounded-[36px] top-[35px] w-[380px]">
      <Frame25 />
    </div>
  );
}

function Frame2() {
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

function Frame3() {
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

function Frame16() {
  return (
    <div className="absolute h-[644px] overflow-clip rounded-tl-[24px] rounded-tr-[24px] top-[calc(50%-1.5px)] translate-y-[-50%] w-[426px]">
      <img
        alt=""
        className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-tl-[24px] rounded-tr-[24px] size-full"
        src={imgFrame188}
      />
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
      <Frame15 />
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
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
          src={imgFrame188}
        />
      </div>
      <Frame26 />
      <Frame2 />
      <Frame3 />
    </div>
  );
}

function Group7() {
  return (
    <div className="h-[279.504px] relative w-[244.356px]">
      <div className="absolute inset-[-35.78%_-49.11%_-28.62%_-40.92%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 464.356 459.504"
        >
          <g id="Group 44">
            <g filter="url(#filter0_f_1_4094)" id="Ellipse 10">
              <ellipse
                cx="169.641"
                cy="175.545"
                fill="var(--fill-0, #4ABE8F)"
                rx="69.6411"
                ry="75.5454"
              />
            </g>
            <g filter="url(#filter1_f_1_4094)" id="Ellipse 11">
              <ellipse
                cx="270.525"
                cy="242.246"
                fill="var(--fill-0, #4ABE8F)"
                rx="73.8311"
                ry="80.1239"
              />
            </g>
            <g filter="url(#filter2_f_1_4094)" id="Ellipse 12">
              <ellipse
                cx="187.132"
                cy="311.808"
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
              id="filter0_f_1_4094"
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
                result="effect1_foregroundBlur_1_4094"
                stdDeviation="50"
              />
            </filter>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="400.248"
              id="filter1_f_1_4094"
              width="387.662"
              x="76.6934"
              y="42.1219"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_1_4094"
                stdDeviation="60"
              />
            </filter>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="295.393"
              id="filter2_f_1_4094"
              width="284.834"
              x="44.7151"
              y="164.111"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_1_4094"
                stdDeviation="40"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="absolute bg-black h-[339px] left-0 overflow-clip rounded-tl-[34px] rounded-tr-[34px] top-[306px] w-[426px]">
      <div
        className="absolute flex h-[308.371px] items-center justify-center left-[-128.86px] top-[-116.86px] w-[333.224px]"
        style={
          {
            "--transform-inner-width": "0",
            "--transform-inner-height": "0",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-285">
          <Group7 />
        </div>
      </div>
      <p className="absolute font-['Poppins:Light',sans-serif] h-[80px] leading-[23px] left-[calc(50%-179px)] not-italic text-[16px] text-white top-[62px] tracking-[-0.48px] w-[372px]">
        Boosted digital discoverability and accelerated sales for plant and
        décor SKUs across leading e-commerce channels.
      </p>
    </div>
  );
}

function Frame27() {
  return (
    <div className="absolute bg-white h-[9px] left-0 rounded-[36px] top-0 w-[106px]" />
  );
}

function Frame28() {
  return (
    <div className="absolute bg-[#cecece] h-[9px] left-[23px] overflow-clip rounded-[36px] top-[35px] w-[380px]">
      <Frame27 />
    </div>
  );
}

function Frame4() {
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

function Frame5() {
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

function Frame12() {
  return (
    <div className="absolute h-[644px] overflow-clip rounded-tl-[24px] rounded-tr-[24px] top-[calc(50%-1.5px)] translate-y-[-50%] w-[426px]">
      <img
        alt=""
        className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-tl-[24px] rounded-tr-[24px] size-full"
        src={imgFrame188}
      />
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
      <Frame17 />
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
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
          src={imgFrame188}
        />
      </div>
      <Frame28 />
      <Frame4 />
      <Frame5 />
    </div>
  );
}

function Frame69() {
  return (
    <div className="absolute h-[644px] overflow-clip rounded-tl-[24px] rounded-tr-[24px] top-[calc(50%-1.5px)] translate-y-[-50%] w-[426px]">
      <img
        alt=""
        className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-tl-[24px] rounded-tr-[24px] size-full"
        src={imgFrame188}
      />
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
      <Frame17 />
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
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
          src={imgFrame188}
        />
      </div>
      <Frame28 />
      <Frame4 />
      <Frame5 />
    </div>
  );
}

// Simplified card components for Industries section carousel
function KyariCardSimple() {
  return (
    <div className="relative h-[644px] w-[426px] shrink-0 overflow-clip rounded-[24px]">
      <img
        alt="Kyari"
        className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
        src={imgFrame188}
      />
      <div className="absolute h-[853px] left-[-220px] top-[-195px] w-[828px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute h-full left-[-23.78%] max-w-none top-[7.57%] w-[324.85%]"
            src={imgImage12}
          />
        </div>
      </div>
      <div className="absolute bg-black/70 bottom-0 left-0 right-0 p-6 rounded-b-[24px]">
        <p className="font-['Poppins:Light',sans-serif] text-white text-[16px] leading-[23px]">
          Boosted digital discoverability and accelerated sales for plant and
          decor SKUs across leading e-commerce channels.
        </p>
      </div>
    </div>
  );
}

function SpicePlatterCardSimple() {
  return (
    <div className="relative h-[644px] w-[426px] shrink-0 overflow-clip rounded-[24px]">
      <img
        alt="Spice Platter"
        className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
        src={imgImage8}
      />
      <div className="absolute bg-black/70 bottom-0 left-0 right-0 p-6 rounded-b-[24px]">
        <p className="font-['Poppins:Light',sans-serif] text-white text-[16px] leading-[23px]">
          Elevated brand presence and drove organic growth for premium spice
          products through targeted marketplace strategies.
        </p>
      </div>
    </div>
  );
}

function HealthyMasterCardSimple() {
  return (
    <div className="relative h-[644px] w-[426px] shrink-0 overflow-clip rounded-[24px]">
      <img
        alt="Healthy Master"
        className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
        src={imgImage8}
      />
      <div className="absolute h-[558px] left-[-43px] top-[-158px] w-[500px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute h-[89.61%] left-0 max-w-none top-0 w-full"
            src={imgImage29}
          />
        </div>
      </div>
      <div className="absolute left-[103px] size-[209px] top-[55px]">
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
          src={imgImage31}
        />
      </div>
      <div className="absolute bg-black/70 bottom-0 left-0 right-0 p-6 rounded-b-[24px]">
        <p className="font-['Poppins:Light',sans-serif] text-white text-[16px] leading-[23px]">
          Scaled health supplement brand with strategic marketplace optimization
          and enhanced product visibility.
        </p>
      </div>
    </div>
  );
}

// Industries section carousel with 3 cards, clickable dots, and auto-rotation
function IndustriesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cards = [
    KyariCardSimple,
    SpicePlatterCardSimple,
    HealthyMasterCardSimple,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 3000); // 3 second auto-rotation

    return () => clearInterval(interval);
  }, [cards.length]);

  return (
    <div className="absolute bg-[#111] h-[681px] left-[calc(50%+218.5px)] overflow-hidden rounded-bl-[38px] rounded-tl-[38px] top-[calc(50%-6px)] translate-x-[-50%] translate-y-[-50%] w-[450px]">
      <div
        className="flex transition-transform duration-300 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 426}px)`,
          paddingTop: "18px",
          paddingLeft: "12px",
        }}
      >
        {cards.map((Card, index) => (
          <Card key={index} />
        ))}
      </div>
      {/* Carousel Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {cards.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-white scale-110" : "bg-white/40"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function Frame57() {
  return <IndustriesCarousel />;
}

function Group16({
  activeSlide = 0,
  onDotClick,
}: {
  activeSlide?: number;
  onDotClick?: (index: number) => void;
}) {
  // This component is no longer needed as dots are now inside IndustriesCarousel
  return null;
}

function Frame24() {
  return (
    <div className="absolute content-stretch flex h-[36px] items-center justify-center left-[26px] p-[12px] rounded-[12345px] top-[28px] w-[127px]">
      <div
        aria-hidden="true"
        className="absolute border-2 border-[#4b4b4b] border-dashed inset-0 pointer-events-none rounded-[12345px]"
      />
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[23px] relative shrink-0 text-[#b9b9b9] text-[16px] text-nowrap tracking-[1.12px]">
        INDUSTRIES
      </p>
    </div>
  );
}

function Group2() {
  return (
    <div
      className="[mask-clip:no-clip,no-clip] [mask-composite:intersect,intersect] [mask-mode:alpha,alpha] [mask-repeat:no-repeat,no-repeat] absolute inset-[-9.52%_-14.31%_-14.29%_-9.5%] mask-position-[1.984px,0px_1.988px,0px] mask-[20.88px_20.88px,25.851px_25.851px]"
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
      className="absolute contents inset-[-9.52%_-14.31%_-14.29%_-9.5%]"
      data-name="Mask group"
    >
      <Group2 />
    </div>
  );
}

function Group3() {
  return (
    <div
      className="absolute contents inset-[-9.52%_-14.31%_-14.29%_-9.5%]"
      data-name="Group"
    >
      <MaskGroup1 />
    </div>
  );
}

function ClipPathGroup1() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group3 />
    </div>
  );
}

function Icon2() {
  return (
    <div
      className="absolute left-[10.5px] overflow-clip size-[20.88px] top-[10.5px]"
      data-name="Icon"
    >
      <ClipPathGroup1 />
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
      className="absolute bg-[#4abe8f] left-[230px] rounded-[41.891px] size-[41.9px] top-[10px]"
      data-name="Div [circle_icon_b]"
    >
      <Icon2 />
    </div>
  );
}

function Button1() {
  return (
    <div
      className="absolute bg-black h-[61px] left-[109px] rounded-[64.8px] shadow-[1px_1px_20px_0px_rgba(131,131,131,0.2)] top-[663px] w-[280px]"
      data-name="button"
    >
      <DivCircleIconB1 />
      <div className="absolute flex flex-col font-['Manrope:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] left-[calc(50%-113px)] text-[14.9px] text-nowrap text-white top-[calc(50%+0.5px)] tracking-[1px] translate-y-[-50%] uppercase">
        <p className="leading-[15.984px]">Free Strategy Call</p>
      </div>
    </div>
  );
}

function Frame56({
  activeSlide,
  onDotClick,
}: {
  activeSlide?: number;
  onDotClick?: (index: number) => void;
}) {
  return (
    <div className="absolute bg-white h-[779px] left-0 overflow-clip rounded-bl-[32px] rounded-tl-[32px] top-[1057px] w-[1440px]">
      <Frame59 />
      <div className="absolute flex h-[117px] items-center justify-center left-[-27px] top-[425px] w-[531px]">
        <div className="flex-none rotate-180">
          <div className="bg-linear-to-b from-[#ffffff] h-[117px] to-[rgba(255,255,255,0)] w-[531px]" />
        </div>
      </div>
      <div className="absolute bg-linear-to-b from-[#ffffff] h-[117px] left-[-26px] to-[rgba(255,255,255,0)] top-[235px] w-[531px]" />
      <Frame57 />
      <Group16 activeSlide={activeSlide} onDotClick={onDotClick} />
      <Frame24 />
      <Button1 />
    </div>
  );
}

function Group8() {
  return (
    <div className="h-[279.501px] relative w-[244.356px]">
      <div className="absolute inset-[-35.78%_-49.11%_-28.62%_-40.92%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 464.356 459.501"
        >
          <g id="Group 44">
            <g filter="url(#filter0_f_1_4083)" id="Ellipse 10">
              <ellipse
                cx="169.641"
                cy="175.545"
                fill="var(--fill-0, #4ABE8F)"
                rx="69.6411"
                ry="75.5454"
              />
            </g>
            <g filter="url(#filter1_f_1_4083)" id="Ellipse 11">
              <ellipse
                cx="270.525"
                cy="242.246"
                fill="var(--fill-0, #4ABE8F)"
                rx="73.8311"
                ry="80.1239"
              />
            </g>
            <g filter="url(#filter2_f_1_4083)" id="Ellipse 12">
              <ellipse
                cx="187.131"
                cy="311.804"
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
              id="filter0_f_1_4083"
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
                result="effect1_foregroundBlur_1_4083"
                stdDeviation="50"
              />
            </filter>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="400.248"
              id="filter1_f_1_4083"
              width="387.662"
              x="76.6934"
              y="42.1219"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_1_4083"
                stdDeviation="60"
              />
            </filter>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="295.393"
              id="filter2_f_1_4083"
              width="284.834"
              x="44.7141"
              y="164.108"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_1_4083"
                stdDeviation="40"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="absolute bg-black h-[339px] left-0 overflow-clip rounded-tl-[34px] rounded-tr-[34px] top-[306px] w-[426px]">
      <div
        className="absolute flex h-[308.37px] items-center justify-center left-[-128.86px] top-[-116.86px] w-[333.221px]"
        style={
          {
            "--transform-inner-width": "0",
            "--transform-inner-height": "0",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-285">
          <Group8 />
        </div>
      </div>
      <p className="absolute font-['Poppins:Light',sans-serif] h-[80px] leading-[23px] left-[calc(50%-179px)] not-italic text-[16px] text-white top-[62px] tracking-[-0.48px] w-[372px]">
        Boosted digital discoverability and accelerated sales for plant and
        décor SKUs across leading e-commerce channels.
      </p>
    </div>
  );
}

function Frame29() {
  return (
    <div className="absolute bg-white h-[9px] left-0 rounded-[36px] top-0 w-[106px]" />
  );
}

function Frame30() {
  return (
    <div className="absolute bg-[#cecece] h-[9px] left-[23px] overflow-clip rounded-[36px] top-[35px] w-[380px]">
      <Frame29 />
    </div>
  );
}

function Frame6() {
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

function Frame7() {
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

function Frame61() {
  return (
    <div className="absolute h-[644px] left-0 overflow-clip rounded-tl-[24px] rounded-tr-[24px] top-1/2 translate-y-[-50%] w-[426px]">
      <img
        alt=""
        className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-tl-[24px] rounded-tr-[24px] size-full"
        src={imgFrame188}
      />
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
      <Frame18 />
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
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
          src={imgFrame188}
        />
      </div>
      <Frame30 />
      <Frame6 />
      <Frame7 />
    </div>
  );
}

function Group9() {
  return (
    <div className="h-[279.504px] relative w-[244.356px]">
      <div className="absolute inset-[-35.78%_-49.11%_-28.62%_-40.92%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 464.356 459.504"
        >
          <g id="Group 44">
            <g filter="url(#filter0_f_1_4094)" id="Ellipse 10">
              <ellipse
                cx="169.641"
                cy="175.545"
                fill="var(--fill-0, #4ABE8F)"
                rx="69.6411"
                ry="75.5454"
              />
            </g>
            <g filter="url(#filter1_f_1_4094)" id="Ellipse 11">
              <ellipse
                cx="270.525"
                cy="242.246"
                fill="var(--fill-0, #4ABE8F)"
                rx="73.8311"
                ry="80.1239"
              />
            </g>
            <g filter="url(#filter2_f_1_4094)" id="Ellipse 12">
              <ellipse
                cx="187.132"
                cy="311.808"
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
              id="filter0_f_1_4094"
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
                result="effect1_foregroundBlur_1_4094"
                stdDeviation="50"
              />
            </filter>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="400.248"
              id="filter1_f_1_4094"
              width="387.662"
              x="76.6934"
              y="42.1219"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_1_4094"
                stdDeviation="60"
              />
            </filter>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="295.393"
              id="filter2_f_1_4094"
              width="284.834"
              x="44.7151"
              y="164.111"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_1_4094"
                stdDeviation="40"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="absolute bg-black h-[339px] left-0 overflow-clip rounded-tl-[34px] rounded-tr-[34px] top-[306px] w-[426px]">
      <div
        className="absolute flex h-[308.371px] items-center justify-center left-[-128.86px] top-[-116.86px] w-[333.224px]"
        style={
          {
            "--transform-inner-width": "0",
            "--transform-inner-height": "0",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-285">
          <Group9 />
        </div>
      </div>
      <p className="absolute font-['Poppins:Light',sans-serif] h-[80px] leading-[23px] left-[calc(50%-179px)] not-italic text-[16px] text-white top-[62px] tracking-[-0.48px] w-[372px]">
        Boosted digital discoverability and accelerated sales for plant and
        décor SKUs across leading e-commerce channels.
      </p>
    </div>
  );
}

function Frame31() {
  return (
    <div className="absolute bg-white h-[9px] left-0 rounded-[36px] top-0 w-[106px]" />
  );
}

function Frame32() {
  return (
    <div className="absolute bg-[#cecece] h-[9px] left-[23px] overflow-clip rounded-[36px] top-[35px] w-[380px]">
      <Frame31 />
    </div>
  );
}

function Frame8() {
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

function Frame9() {
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

function Frame64() {
  return (
    <div className="absolute h-[644px] left-[1404px] overflow-clip rounded-tl-[24px] rounded-tr-[24px] top-1/2 translate-y-[-50%] w-[426px]">
      <img
        alt=""
        className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-tl-[24px] rounded-tr-[24px] size-full"
        src={imgFrame188}
      />
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
      <Frame19 />
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
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
          src={imgFrame188}
        />
      </div>
      <Frame32 />
      <Frame8 />
      <Frame9 />
    </div>
  );
}

function Group10() {
  return (
    <div className="h-[279.501px] relative w-[244.356px]">
      <div className="absolute inset-[-35.78%_-49.11%_-28.62%_-40.92%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 464.356 459.501"
        >
          <g id="Group 44">
            <g filter="url(#filter0_f_1_4083)" id="Ellipse 10">
              <ellipse
                cx="169.641"
                cy="175.545"
                fill="var(--fill-0, #4ABE8F)"
                rx="69.6411"
                ry="75.5454"
              />
            </g>
            <g filter="url(#filter1_f_1_4083)" id="Ellipse 11">
              <ellipse
                cx="270.525"
                cy="242.246"
                fill="var(--fill-0, #4ABE8F)"
                rx="73.8311"
                ry="80.1239"
              />
            </g>
            <g filter="url(#filter2_f_1_4083)" id="Ellipse 12">
              <ellipse
                cx="187.131"
                cy="311.804"
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
              id="filter0_f_1_4083"
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
                result="effect1_foregroundBlur_1_4083"
                stdDeviation="50"
              />
            </filter>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="400.248"
              id="filter1_f_1_4083"
              width="387.662"
              x="76.6934"
              y="42.1219"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_1_4083"
                stdDeviation="60"
              />
            </filter>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="295.393"
              id="filter2_f_1_4083"
              width="284.834"
              x="44.7141"
              y="164.108"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_1_4083"
                stdDeviation="40"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="absolute bg-black h-[339px] left-0 overflow-clip rounded-tl-[34px] rounded-tr-[34px] top-[306px] w-[426px]">
      <div
        className="absolute flex h-[308.37px] items-center justify-center left-[-128.86px] top-[-116.86px] w-[333.221px]"
        style={
          {
            "--transform-inner-width": "0",
            "--transform-inner-height": "0",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-285">
          <Group10 />
        </div>
      </div>
      <p className="absolute font-['Poppins:Light',sans-serif] h-[80px] leading-[23px] left-[calc(50%-179px)] not-italic text-[16px] text-white top-[62px] tracking-[-0.48px] w-[372px]">
        Boosted digital discoverability and accelerated sales for plant and
        décor SKUs across leading e-commerce channels.
      </p>
    </div>
  );
}

function Frame33() {
  return (
    <div className="absolute bg-white h-[9px] left-0 rounded-[36px] top-0 w-[106px]" />
  );
}

function Frame34() {
  return (
    <div className="absolute bg-[#cecece] h-[9px] left-[23px] overflow-clip rounded-[36px] top-[35px] w-[380px]">
      <Frame33 />
    </div>
  );
}

function Frame10() {
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

function Frame11() {
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

function Frame62() {
  return (
    <div className="absolute h-[644px] left-[468px] overflow-clip rounded-tl-[24px] rounded-tr-[24px] top-1/2 translate-y-[-50%] w-[426px]">
      <img
        alt=""
        className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-tl-[24px] rounded-tr-[24px] size-full"
        src={imgFrame188}
      />
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
      <Frame20 />
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
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
          src={imgFrame188}
        />
      </div>
      <Frame34 />
      <Frame10 />
      <Frame11 />
    </div>
  );
}

function Group11() {
  return (
    <div className="h-[279.504px] relative w-[244.356px]">
      <div className="absolute inset-[-35.78%_-49.11%_-28.62%_-40.92%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 464.356 459.504"
        >
          <g id="Group 44">
            <g filter="url(#filter0_f_1_4094)" id="Ellipse 10">
              <ellipse
                cx="169.641"
                cy="175.545"
                fill="var(--fill-0, #4ABE8F)"
                rx="69.6411"
                ry="75.5454"
              />
            </g>
            <g filter="url(#filter1_f_1_4094)" id="Ellipse 11">
              <ellipse
                cx="270.525"
                cy="242.246"
                fill="var(--fill-0, #4ABE8F)"
                rx="73.8311"
                ry="80.1239"
              />
            </g>
            <g filter="url(#filter2_f_1_4094)" id="Ellipse 12">
              <ellipse
                cx="187.132"
                cy="311.808"
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
              id="filter0_f_1_4094"
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
                result="effect1_foregroundBlur_1_4094"
                stdDeviation="50"
              />
            </filter>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="400.248"
              id="filter1_f_1_4094"
              width="387.662"
              x="76.6934"
              y="42.1219"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_1_4094"
                stdDeviation="60"
              />
            </filter>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="295.393"
              id="filter2_f_1_4094"
              width="284.834"
              x="44.7151"
              y="164.111"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_1_4094"
                stdDeviation="40"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="absolute bg-black h-[339px] left-0 overflow-clip rounded-tl-[34px] rounded-tr-[34px] top-[306px] w-[426px]">
      <div
        className="absolute flex h-[308.371px] items-center justify-center left-[-128.86px] top-[-116.86px] w-[333.224px]"
        style={
          {
            "--transform-inner-width": "0",
            "--transform-inner-height": "0",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-285">
          <Group11 />
        </div>
      </div>
      <p className="absolute font-['Poppins:Light',sans-serif] h-[80px] leading-[23px] left-[calc(50%-179px)] not-italic text-[16px] text-white top-[62px] tracking-[-0.48px] w-[372px]">
        Boosted digital discoverability and accelerated sales for plant and
        décor SKUs across leading e-commerce channels.
      </p>
    </div>
  );
}

function Frame35() {
  return (
    <div className="absolute bg-white h-[9px] left-0 rounded-[36px] top-0 w-[106px]" />
  );
}

function Frame36() {
  return (
    <div className="absolute bg-[#cecece] h-[9px] left-[23px] overflow-clip rounded-[36px] top-[35px] w-[380px]">
      <Frame35 />
    </div>
  );
}

function Frame37() {
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

function Frame38() {
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

function Frame65() {
  return (
    <div className="absolute h-[644px] left-[1872px] overflow-clip rounded-tl-[24px] rounded-tr-[24px] top-1/2 translate-y-[-50%] w-[426px]">
      <img
        alt=""
        className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-tl-[24px] rounded-tr-[24px] size-full"
        src={imgFrame188}
      />
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
      <Frame21 />
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
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
          src={imgFrame188}
        />
      </div>
      <Frame36 />
      <Frame37 />
      <Frame38 />
    </div>
  );
}

function Group12() {
  return (
    <div className="h-[279.504px] relative w-[244.356px]">
      <div className="absolute inset-[-35.78%_-49.11%_-28.62%_-40.92%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 464.356 459.504"
        >
          <g id="Group 44">
            <g filter="url(#filter0_f_1_4094)" id="Ellipse 10">
              <ellipse
                cx="169.641"
                cy="175.545"
                fill="var(--fill-0, #4ABE8F)"
                rx="69.6411"
                ry="75.5454"
              />
            </g>
            <g filter="url(#filter1_f_1_4094)" id="Ellipse 11">
              <ellipse
                cx="270.525"
                cy="242.246"
                fill="var(--fill-0, #4ABE8F)"
                rx="73.8311"
                ry="80.1239"
              />
            </g>
            <g filter="url(#filter2_f_1_4094)" id="Ellipse 12">
              <ellipse
                cx="187.132"
                cy="311.808"
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
              id="filter0_f_1_4094"
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
                result="effect1_foregroundBlur_1_4094"
                stdDeviation="50"
              />
            </filter>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="400.248"
              id="filter1_f_1_4094"
              width="387.662"
              x="76.6934"
              y="42.1219"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_1_4094"
                stdDeviation="60"
              />
            </filter>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="295.393"
              id="filter2_f_1_4094"
              width="284.834"
              x="44.7151"
              y="164.111"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_1_4094"
                stdDeviation="40"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Frame39() {
  return (
    <div className="absolute bg-black h-[339px] left-0 overflow-clip rounded-tl-[34px] rounded-tr-[34px] top-[306px] w-[426px]">
      <div
        className="absolute flex h-[308.371px] items-center justify-center left-[-128.86px] top-[-116.86px] w-[333.224px]"
        style={
          {
            "--transform-inner-width": "0",
            "--transform-inner-height": "0",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-285">
          <Group12 />
        </div>
      </div>
      <p className="absolute font-['Poppins:Light',sans-serif] h-[80px] leading-[23px] left-[calc(50%-179px)] not-italic text-[16px] text-white top-[62px] tracking-[-0.48px] w-[372px]">
        Boosted digital discoverability and accelerated sales for plant and
        décor SKUs across leading e-commerce channels.
      </p>
    </div>
  );
}

function Frame40() {
  return (
    <div className="absolute bg-white h-[9px] left-0 rounded-[36px] top-0 w-[106px]" />
  );
}

function Frame41() {
  return (
    <div className="absolute bg-[#cecece] h-[9px] left-[23px] overflow-clip rounded-[36px] top-[35px] w-[380px]">
      <Frame40 />
    </div>
  );
}

function Frame42() {
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

function Frame43() {
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

function Frame63() {
  return (
    <div className="absolute h-[644px] left-[936px] overflow-clip rounded-tl-[24px] rounded-tr-[24px] top-1/2 translate-y-[-50%] w-[426px]">
      <img
        alt=""
        className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-tl-[24px] rounded-tr-[24px] size-full"
        src={imgFrame188}
      />
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
      <Frame39 />
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
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
          src={imgFrame188}
        />
      </div>
      <Frame41 />
      <Frame42 />
      <Frame43 />
    </div>
  );
}

function Group13() {
  return (
    <div className="h-[279.504px] relative w-[244.356px]">
      <div className="absolute inset-[-35.78%_-49.11%_-28.62%_-40.92%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 464.356 459.504"
        >
          <g id="Group 44">
            <g filter="url(#filter0_f_1_4094)" id="Ellipse 10">
              <ellipse
                cx="169.641"
                cy="175.545"
                fill="var(--fill-0, #4ABE8F)"
                rx="69.6411"
                ry="75.5454"
              />
            </g>
            <g filter="url(#filter1_f_1_4094)" id="Ellipse 11">
              <ellipse
                cx="270.525"
                cy="242.246"
                fill="var(--fill-0, #4ABE8F)"
                rx="73.8311"
                ry="80.1239"
              />
            </g>
            <g filter="url(#filter2_f_1_4094)" id="Ellipse 12">
              <ellipse
                cx="187.132"
                cy="311.808"
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
              id="filter0_f_1_4094"
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
                result="effect1_foregroundBlur_1_4094"
                stdDeviation="50"
              />
            </filter>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="400.248"
              id="filter1_f_1_4094"
              width="387.662"
              x="76.6934"
              y="42.1219"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_1_4094"
                stdDeviation="60"
              />
            </filter>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="295.393"
              id="filter2_f_1_4094"
              width="284.834"
              x="44.7151"
              y="164.111"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_1_4094"
                stdDeviation="40"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Frame44() {
  return (
    <div className="absolute bg-black h-[339px] left-0 overflow-clip rounded-tl-[34px] rounded-tr-[34px] top-[306px] w-[426px]">
      <div
        className="absolute flex h-[308.371px] items-center justify-center left-[-128.86px] top-[-116.86px] w-[333.224px]"
        style={
          {
            "--transform-inner-width": "0",
            "--transform-inner-height": "0",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-285">
          <Group13 />
        </div>
      </div>
      <p className="absolute font-['Poppins:Light',sans-serif] h-[80px] leading-[23px] left-[calc(50%-179px)] not-italic text-[16px] text-white top-[62px] tracking-[-0.48px] w-[372px]">
        Boosted digital discoverability and accelerated sales for plant and
        décor SKUs across leading e-commerce channels.
      </p>
    </div>
  );
}

function Frame45() {
  return (
    <div className="absolute bg-white h-[9px] left-0 rounded-[36px] top-0 w-[106px]" />
  );
}

function Frame46() {
  return (
    <div className="absolute bg-[#cecece] h-[9px] left-[23px] overflow-clip rounded-[36px] top-[35px] w-[380px]">
      <Frame45 />
    </div>
  );
}

function Frame47() {
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

function Frame48() {
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

function Frame66() {
  return (
    <div className="absolute h-[644px] left-[2340px] overflow-clip rounded-tl-[24px] rounded-tr-[24px] top-1/2 translate-y-[-50%] w-[426px]">
      <img
        alt=""
        className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-tl-[24px] rounded-tr-[24px] size-full"
        src={imgFrame188}
      />
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
      <Frame44 />
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
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
          src={imgFrame188}
        />
      </div>
      <Frame46 />
      <Frame47 />
      <Frame48 />
    </div>
  );
}

function Group17() {
  return (
    <div
      className="flex gap-6 animate-[industries-marquee_20s_linear_infinite]"
      style={{ paddingTop: "18px", paddingLeft: "24px" }}
    >
      <KyariCardSimple />
      <SpicePlatterCardSimple />
      <HealthyMasterCardSimple />
      {/* Duplicate for seamless loop */}
      <KyariCardSimple />
      <SpicePlatterCardSimple />
      <HealthyMasterCardSimple />
      {/* Triple for wider container */}
      <KyariCardSimple />
      <SpicePlatterCardSimple />
      <HealthyMasterCardSimple />
    </div>
  );
}

function Frame67() {
  return (
    <div className="absolute h-[680px] left-0 top-[53px] w-full overflow-hidden">
      <Group17 />
    </div>
  );
}

function Frame68() {
  return (
    <div className="absolute bg-black border border-black border-solid h-[798px] left-[calc(50%-0.5px)] overflow-clip rounded-[36px] top-[2049px] translate-x-[-50%] w-[1369px]">
      <Frame67 />
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
      className="absolute h-[64.79px] left-[355.13px] overflow-clip rounded-[1660px] top-0 w-[299.29px]"
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

function Frame49() {
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

function Group6() {
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
            <g filter="url(#filter0_f_1_4099)" id="Ellipse 10">
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
              id="filter0_f_1_4099"
              width="631.795"
              x="-1.90735e-06"
              y="3.8147e-06"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_1_4099"
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
      className="absolute h-[302px] left-[31px] overflow-clip top-1/2 translate-y-[-50%] w-[407px]"
      data-name="TESTIMONIES"
    >
      <DivSwiperWrapper />
    </div>
  );
}

function Frame50() {
  return (
    <div className="absolute bg-white h-[9px] left-0 rounded-[36px] top-0 w-[106px]" />
  );
}

function Frame51() {
  return (
    <div className="absolute bg-[#cecece] h-[9px] left-[23px] overflow-clip rounded-[36px] top-[35px] w-[380px]">
      <Frame50 />
    </div>
  );
}

function Frame53() {
  return (
    <div className="absolute bg-black h-[486px] left-[763px] overflow-clip rounded-[24px] top-[163px] w-[438px]">
      <div
        className="absolute flex h-[638.001px] items-center justify-center left-[-6px] top-[38px] w-[696.96px]"
        style={
          {
            "--transform-inner-width": "0",
            "--transform-inner-height": "0",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-[211.822deg]">
          <Group6 />
        </div>
      </div>
      <Testimonies />
      <Frame51 />
    </div>
  );
}

function Frame52() {
  return (
    <div className="absolute bg-[#f4f4f4] h-[768px] left-1/2 overflow-clip rounded-[24px] top-[2955px] translate-x-[-50%] w-[1248px]">
      <DivWrapForm />
      <Frame49 />
      <Frame53 />
    </div>
  );
}

function LineMask() {
  return (
    <div className="absolute contents right-0 top-0" data-name="Line Mask" />
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

function Button2() {
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
      <Button2 />
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
      <p className="relative shrink-0">'� Growth Sailor</p>
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
            fill="url(#paint0_linear_1_4069)"
            id="Vector"
          />
          <path
            d={svgPaths.p11b2c000}
            fill="url(#paint1_linear_1_4069)"
            id="Vector_2"
          />
          <path
            d={svgPaths.p1b6b780}
            fill="url(#paint2_linear_1_4069)"
            id="Vector_3"
          />
          <path
            d={svgPaths.p15e81400}
            fill="url(#paint3_linear_1_4069)"
            id="Vector_4"
          />
          <path
            d={svgPaths.pc0eda00}
            fill="url(#paint4_linear_1_4069)"
            id="Vector_5"
          />
          <path
            d={svgPaths.p3ba15100}
            fill="url(#paint5_linear_1_4069)"
            id="Vector_6"
          />
          <path
            d={svgPaths.p2f023480}
            fill="url(#paint6_linear_1_4069)"
            id="Vector_7"
          />
          <path
            d={svgPaths.p1eb5b800}
            fill="url(#paint7_linear_1_4069)"
            id="Vector_8"
          />
          <path
            d={svgPaths.p3b91aa80}
            fill="url(#paint8_linear_1_4069)"
            id="Vector_9"
          />
          <path
            d={svgPaths.p12820080}
            fill="url(#paint9_linear_1_4069)"
            id="Vector_10"
          />
          <path
            d={svgPaths.p1d1e5c80}
            fill="url(#paint10_linear_1_4069)"
            id="Vector_11"
          />
          <path
            d={svgPaths.p22b0f580}
            fill="url(#paint11_linear_1_4069)"
            id="Vector_12"
          />
        </g>
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_1_4069"
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
            id="paint1_linear_1_4069"
            x1="953.345"
            x2="953.345"
            y1="64.0548"
            y2="123.094"
          >
            <stop stopColor="white" />
            <stop offset="0.874488" stopColor="#101010" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint2_linear_1_4069"
            x1="880.192"
            x2="880.192"
            y1="36.3825"
            y2="121.525"
          >
            <stop stopColor="white" />
            <stop offset="0.874488" stopColor="#101010" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint3_linear_1_4069"
            x1="834.708"
            x2="834.708"
            y1="34.813"
            y2="121.524"
          >
            <stop stopColor="white" />
            <stop offset="0.874488" stopColor="#101010" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint4_linear_1_4069"
            x1="759.216"
            x2="759.216"
            y1="64.0998"
            y2="123.251"
          >
            <stop stopColor="white" />
            <stop offset="0.874488" stopColor="#101010" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint5_linear_1_4069"
            x1="662.223"
            x2="662.223"
            y1="48.1918"
            y2="123.251"
          >
            <stop stopColor="white" />
            <stop offset="0.874488" stopColor="#101010" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint6_linear_1_4069"
            x1="535.717"
            x2="535.717"
            y1="36.3825"
            y2="121.525"
          >
            <stop stopColor="white" />
            <stop offset="0.874488" stopColor="#101010" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint7_linear_1_4069"
            x1="447.02"
            x2="447.02"
            y1="43.6001"
            y2="122.868"
          >
            <stop stopColor="white" />
            <stop offset="0.874488" stopColor="#101010" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint8_linear_1_4069"
            x1="330.883"
            x2="330.883"
            y1="64.7255"
            y2="121.524"
          >
            <stop stopColor="white" />
            <stop offset="0.874488" stopColor="#101010" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint9_linear_1_4069"
            x1="208.631"
            x2="208.631"
            y1="64.0548"
            y2="123.094"
          >
            <stop stopColor="white" />
            <stop offset="0.874488" stopColor="#101010" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint10_linear_1_4069"
            x1="130.014"
            x2="130.014"
            y1="63.605"
            y2="121.524"
          >
            <stop stopColor="white" />
            <stop offset="0.874488" stopColor="#101010" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint11_linear_1_4069"
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
      className="bg-[#101010] content-stretch flex flex-col items-center pb-0 pt-[80px] px-0 relative rounded-tl-[24px] rounded-tr-[24px] shrink-0 w-full"
      data-name="Footer Container"
    >
      <FooterWrapper />
    </div>
  );
}

function FooterSection() {
  return (
    <div
      className="absolute bg-white content-stretch flex flex-col gap-[120px] items-center left-0 overflow-clip pb-0 pt-[120px] px-[108px] rounded-tl-[36px] rounded-tr-[36px] top-[4005px] w-[1440px]"
      data-name="FooterSection"
    >
      <LineMask />
      <FooterContainer />
    </div>
  );
}

export default function Why({
  activeSlide,
  onDotClick,
}: { activeSlide?: number; onDotClick?: (index: number) => void } = {}) {
  return (
    <div className="bg-[#111] relative size-full" data-name="Why">
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
      <Frame55 />
      <Container />
      <div className="absolute flex flex-col font-['Poppins:Regular',sans-serif] h-[139px] justify-center leading-[0] left-[calc(50%-0.5px)] not-italic text-[42px] text-center text-white top-[910.5px] tracking-[-3px] translate-x-[-50%] translate-y-[-50%] w-[465px]">
        <p className="leading-[43px]">
          <span>{`Real `}</span>
          <span className="font-['Poppins:Bold_Italic',sans-serif] italic">
            stories.
          </span>
          <span>{` Real `}</span>
          <span className="font-['Poppins:Bold_Italic',sans-serif] italic">{`growth. `}</span>
          <span>{`Real `}</span>
          <span className="font-['Poppins:Bold_Italic',sans-serif] italic">
            numbers.
          </span>
        </p>
      </div>
      <Frame56 activeSlide={activeSlide} onDotClick={onDotClick} />
      <Frame68 />
      <p className="absolute font-['Poppins:SemiBold_Italic',sans-serif] italic leading-[23px] left-[48px] text-[36px] text-nowrap text-white top-[1955px] tracking-[-1.44px]">
        Featured Work
      </p>
      <Frame52 />
      <FooterSection />
    </div>
  );
}
