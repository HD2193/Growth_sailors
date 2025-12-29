import React from "react";
import svgPaths from "./svg-ii7jhs8tz2";
import imgImage23 from "figma:asset/e29111c94e62ab57f0518447107ce4f00804c21e.png";
import imgLogoWhiteBig1 from "figma:asset/221e78b67b6af7a968c919083e537e0c2aa870b6.png";
import { imgGroup, imgGroup1 } from "./svg-jdp87";
import SharedNavBar from "../components/SharedNavBar";
import SharedLinkLetsTalk from "../components/SharedLinkLetsTalk";

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
      <div className="absolute backdrop-blur-[150px] backdrop-filter bg-linear-to-r from-[rgba(255,255,255,0)] inset-0 mix-blend-overlay to-[rgba(255,255,255,0)] via-[16.667%] via-[rgba(59,59,59,0.2)]" />
    </div>
  );
}

function GlassEffect() {
  return (
    <div
      className="absolute content-stretch flex h-[415px] items-start left-[23.02px] pl-0 pr-[5px] py-0 rounded-[24px] top-1/2 translate-y-[-50%] w-[1392.967px]"
      data-name="Glass effect 1"
    >
      {[...Array(11).keys()].map((_, i) => (
        <Base key={i} />
      ))}
    </div>
  );
}

function Group21() {
  return (
    <div className="absolute contents -left-px top-0">
      <div
        className="absolute h-[463px] -left-px top-0 w-[1441px]"
        data-name="image 23"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute h-[185.82%] left-[-3.19%] max-w-none top-0 w-[106.39%]"
            src={imgImage23}
          />
        </div>
      </div>
      <GlassEffect />
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute content-stretch flex h-[92px] items-center justify-center left-[378px] p-[8px] rounded-[100px] top-[97px] w-[275px]">
      <div
        aria-hidden="true"
        className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[100px]"
      />
      <div className="flex flex-col font-['Libre_Baskerville:Italic',sans-serif] italic justify-center leading-[0] relative shrink-0 text-[64px] text-nowrap text-white">
        <p className="leading-[65px]">systems</p>
      </div>
    </div>
  );
}

function Group22() {
  return (
    <div className="absolute contents left-[105px] top-[89px]">
      <div className="absolute flex flex-col font-['Poppins:Regular',sans-serif] h-[93px] justify-center leading-[0] left-[105px] not-italic text-[72px] text-white top-[135.5px] tracking-[-4px] translate-y-[-50%] w-[278px]">
        <p className="leading-[65px]">Building</p>
      </div>
      <div className="absolute flex flex-col font-['Poppins:Regular',sans-serif] h-[93px] justify-center leading-[0] left-[105px] not-italic text-[72px] text-white top-[235.5px] tracking-[-4px] translate-y-[-50%] w-[326px]">
        <p className="leading-[65px]">that help</p>
      </div>
      <div className="absolute flex flex-col font-['Poppins:Regular',sans-serif] h-[93px] justify-center leading-[0] left-[105px] not-italic text-[72px] text-white top-[328.5px] tracking-[-4px] translate-y-[-50%] w-[259px]">
        <p className="leading-[65px]">brands</p>
      </div>
      <div className="absolute flex flex-col font-['Poppins:SemiBold_Italic',sans-serif] h-[93px] italic justify-center leading-[0] left-[355px] text-[72px] text-white top-[328.5px] tracking-[-4px] translate-y-[-50%] w-[261px]">
        <p className="leading-[65px]">{`scale>`}</p>
      </div>
      <Frame7 />
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

function GroupGlassEffect() {
  return (
    <div
      className="absolute content-stretch flex h-[381px] items-start left-[-21px] pl-0 pr-[5px] py-0 rounded-[24px] top-[calc(50%-0.5px)] translate-y-[-50%] w-[951px]"
      data-name="Glass effect 2"
    >
      <div
        className="basis-0 grow h-full min-h-px min-w-px mr-[-5px] relative rounded-[24px] shrink-0"
        data-name="Base"
      >
        <div className="absolute backdrop-blur-[50px] backdrop-filter bg-linear-to-r from-[rgba(255,255,255,0)] inset-0 mix-blend-overlay to-[rgba(255,255,255,0)] via-[16.667%] via-[rgba(59,59,59,0.2)]" />
      </div>
      <div
        className="basis-0 grow h-full min-h-px min-w-px mr-[-5px] relative rounded-[24px] shrink-0"
        data-name="Base"
      >
        <div className="absolute backdrop-blur-[50px] backdrop-filter bg-linear-to-r from-[rgba(255,255,255,0)] inset-0 mix-blend-overlay to-[rgba(255,255,255,0)] via-[16.667%] via-[rgba(59,59,59,0.2)]" />
      </div>
      <div
        className="basis-0 grow h-full min-h-px min-w-px mr-[-5px] relative rounded-[24px] shrink-0"
        data-name="Base"
      >
        <div className="absolute backdrop-blur-[50px] backdrop-filter bg-linear-to-r from-[rgba(255,255,255,0)] inset-0 mix-blend-overlay to-[rgba(255,255,255,0)] via-[16.667%] via-[rgba(59,59,59,0.2)]" />
      </div>
      <div
        className="basis-0 grow h-full min-h-px min-w-px mr-[-5px] relative rounded-[24px] shrink-0"
        data-name="Base"
      >
        <div className="absolute backdrop-blur-[50px] backdrop-filter bg-linear-to-r from-[rgba(255,255,255,0)] inset-0 mix-blend-overlay to-[rgba(255,255,255,0)] via-[16.667%] via-[rgba(59,59,59,0.2)]" />
      </div>
      <div
        className="basis-0 grow h-full min-h-px min-w-px mr-[-5px] relative rounded-[24px] shrink-0"
        data-name="Base"
      >
        <div className="absolute backdrop-blur-[50px] backdrop-filter bg-linear-to-r from-[rgba(255,255,255,0)] inset-0 mix-blend-overlay to-[rgba(255,255,255,0)] via-[16.667%] via-[rgba(59,59,59,0.2)]" />
      </div>
      <div
        className="basis-0 grow h-full min-h-px min-w-px mr-[-5px] relative rounded-[24px] shrink-0"
        data-name="Base"
      >
        <div className="absolute backdrop-blur-[50px] backdrop-filter bg-linear-to-r from-[rgba(255,255,255,0)] inset-0 mix-blend-overlay to-[rgba(255,255,255,0)] via-[16.667%] via-[rgba(59,59,59,0.2)]" />
      </div>
      <div
        className="basis-0 grow h-full min-h-px min-w-px mr-[-5px] relative rounded-[24px] shrink-0"
        data-name="Base"
      >
        <div className="absolute backdrop-blur-[50px] backdrop-filter bg-linear-to-r from-[rgba(255,255,255,0)] inset-0 mix-blend-overlay to-[rgba(255,255,255,0)] via-[16.667%] via-[rgba(59,59,59,0.2)]" />
      </div>
      <div
        className="basis-0 grow h-full min-h-px min-w-px mr-[-5px] relative rounded-[24px] shrink-0"
        data-name="Base"
      >
        <div className="absolute backdrop-blur-[50px] backdrop-filter bg-linear-to-r from-[rgba(255,255,255,0)] inset-0 mix-blend-overlay to-[rgba(255,255,255,0)] via-[16.667%] via-[rgba(59,59,59,0.2)]" />
      </div>
      <div
        className="basis-0 grow h-full min-h-px min-w-px mr-[-5px] relative rounded-[24px] shrink-0"
        data-name="Base"
      >
        <div className="absolute backdrop-blur-[50px] backdrop-filter bg-linear-to-r from-[rgba(255,255,255,0)] inset-0 mix-blend-overlay to-[rgba(255,255,255,0)] via-[16.667%] via-[rgba(59,59,59,0.2)]" />
      </div>
      <div
        className="basis-0 grow h-full min-h-px min-w-px mr-[-5px] relative rounded-[24px] shrink-0"
        data-name="Base"
      >
        <div className="absolute backdrop-blur-[50px] backdrop-filter bg-linear-to-r from-[rgba(255,255,255,0)] inset-0 mix-blend-overlay to-[rgba(255,255,255,0)] via-[16.667%] via-[rgba(59,59,59,0.2)]" />
      </div>
      <div
        className="basis-0 grow h-full min-h-px min-w-px mr-[-5px] relative rounded-[24px] shrink-0"
        data-name="Base"
      >
        <div className="absolute backdrop-blur-[50px] backdrop-filter bg-linear-to-r from-[rgba(255,255,255,0)] inset-0 mix-blend-overlay to-[rgba(255,255,255,0)] via-[16.667%] via-[rgba(59,59,59,0.2)]" />
      </div>
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
        <p className="leading-[15.984px]">Free Strategy Call</p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute bg-white h-[463px] left-0 overflow-clip top-[222px] w-[1440px]">
      <Group21 />
      <Group22 />
      <div className="absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[127px] justify-center leading-[0] left-[925px] text-[18px] text-white top-[160.5px] translate-y-[-50%] w-[418px]">
        <p className="leading-[31px]">
          Explore how Growth Sailor combines performance, creative content,
          commerce strategy, and design to deliver predictable brand growth.
        </p>
      </div>
      <Button />
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
      <div className="absolute flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] left-[23.4px] overflow-hidden text-ellipsis text-[18.6px] text-black text-nowrap top-[32.39px] tracking-[-0.18px] translate-y-[-50%] uppercase w-[299.29px]">
        <p className="leading-[18px] overflow-hidden text-ellipsis">
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
      <div className="absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[19.19px] justify-center leading-[0] left-[5px] overflow-hidden text-ellipsis text-[#161616] text-[15.984px] text-nowrap top-[11.5px] translate-y-[-50%] w-[654.41px]">
        <p className="leading-[19.181px] overflow-hidden text-ellipsis">
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
      <div className="absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[19.19px] justify-center leading-[0] left-[5px] overflow-hidden text-ellipsis text-[#161616] text-[15.984px] text-nowrap top-[11.5px] translate-y-[-50%] w-[654.41px]">
        <p className="leading-[19.181px] overflow-hidden text-ellipsis">
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
        <div className="absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[19.19px] justify-center leading-[0] left-[5px] overflow-hidden text-ellipsis text-[#161616] text-[15.984px] text-nowrap top-[11.5px] translate-y-[-50%] w-[299.27px]">
          <p className="leading-[19.181px] overflow-hidden text-ellipsis">
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
        <div className="absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[19.19px] justify-center leading-[0] left-[5px] overflow-hidden text-ellipsis text-[#161616] text-[15.984px] text-nowrap top-[11.5px] translate-y-[-50%] w-[299.29px]">
          <p className="leading-[19.181px] overflow-hidden text-ellipsis">
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

function Frame2() {
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

function Group12() {
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
            <g filter="url(#filter0_f_1_3547)" id="Ellipse 10">
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
              id="filter0_f_1_3547"
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
                result="effect1_foregroundBlur_1_3547"
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

function Frame1() {
  return (
    <div className="absolute bg-white h-[9px] left-0 rounded-[36px] top-0 w-[106px]" />
  );
}

function Frame() {
  return (
    <div className="absolute bg-[#cecece] h-[9px] left-[23px] overflow-clip rounded-[36px] top-[35px] w-[380px]">
      <Frame1 />
    </div>
  );
}

function Frame5() {
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
          <Group12 />
        </div>
      </div>
      <Testimonies />
      <Frame />
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute bg-[#f4f4f4] h-[768px] left-1/2 overflow-clip rounded-[24px] top-[4365px] translate-x-[-50%] w-[1248px]">
      <DivWrapForm />
      <Frame2 />
      <Frame5 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex h-[36px] items-center justify-center left-[92px] p-[12px] rounded-[12345px] top-[71px] w-[140px]">
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

function H2HeadingForm1() {
  return (
    <div
      className="absolute h-[112px] left-[calc(50%-0.5px)] top-[71px] translate-x-[-50%] w-[249px]"
      data-name="H2 [heading_form]"
    >
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[0.003px] items-start leading-[0] pb-[135px] pl-0 pr-[127.078px] pt-0 relative size-full text-[#161616] text-[51.2px] text-nowrap tracking-[-1.1088px]">
          <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center not-italic relative shrink-0">
            <p className="leading-[55.872px] text-nowrap">We</p>
          </div>
          <div className="flex flex-col font-['Poppins:SemiBold_Italic',sans-serif] italic justify-center relative shrink-0">
            <p className="leading-[55.872px] text-nowrap">specialize</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="absolute bg-white h-[450px] left-[347.03px] rounded-[12px] top-[246px] w-[231.866px]">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute flex flex-col font-['Libre_Baskerville:Italic',sans-serif] h-[88px] italic justify-center leading-[0] left-[-32px] text-[96px] text-black top-[269px] tracking-[-1.1088px] translate-y-[-50%] w-[435px]">
          <p className="leading-[55.872px]">Cosmetics</p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#c6c6c6] border-solid -inset-px pointer-events-none rounded-[13px]"
      />
    </div>
  );
}

function Icon2() {
  return (
    <div
      className="absolute h-[59.9px] left-[508.55px] top-[260px] w-[57.592px]"
      data-name="Icon"
    >
      <div className="absolute inset-[-1.67%_-1.74%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 59.5925 61.9"
        >
          <g id="Icon">
            <rect
              fill="var(--fill-0, #EEEEEE)"
              height="60.9"
              rx="29.2962"
              width="58.5925"
              x="0.5"
              y="0.5"
            />
            <rect
              height="60.9"
              rx="29.2962"
              stroke="var(--stroke-0, #C6C6C6)"
              width="58.5925"
              x="0.5"
              y="0.5"
            />
            <g id="Vector" opacity="0.2"></g>
            <path
              d={svgPaths.p15456600}
              id="Vector_2"
              stroke="var(--stroke-0, black)"
              strokeLinecap="round"
              strokeWidth="2"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group25() {
  return (
    <div className="absolute contents left-[347.03px] top-[246px]">
      <Frame18 />
      <Icon2 />
      <div className="absolute flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] left-[calc(50%-308px)] text-[#818181] text-[20px] text-nowrap top-[642px] translate-y-[-50%]">
        <p className="leading-[55.872px]">Cosmetics</p>
      </div>
    </div>
  );
}

function Group30() {
  return (
    <div className="absolute contents left-[347.03px] top-[219px]">
      <Group25 />
      <div className="absolute flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] left-[496px] text-[#b2b2b2] text-[16px] top-[229px] translate-y-[-50%] w-[70px]">
        <p className="leading-[55.872px]">08 Cases</p>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="absolute bg-white h-[450px] left-[602.07px] rounded-[12px] top-[246px] w-[231.866px]">
      <div className="leading-[0] overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute flex flex-col font-['Libre_Baskerville:Italic',sans-serif] h-[88px] italic justify-center left-[-32px] text-[96px] text-black top-[269px] tracking-[-1.1088px] translate-y-[-50%] w-[488px]">
          <p className="leading-[55.872px]">Electronics</p>
        </div>
        <div className="absolute flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center left-[calc(50%-53px)] text-[#818181] text-[20px] text-nowrap top-[396px] translate-y-[-50%]">
          <p className="leading-[55.872px]">Electronics</p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#c6c6c6] border-solid -inset-px pointer-events-none rounded-[13px]"
      />
    </div>
  );
}

function Icon3() {
  return (
    <div
      className="absolute h-[59.9px] left-[763.59px] top-[260px] w-[57.592px]"
      data-name="Icon"
    >
      <div className="absolute inset-[-1.67%_-1.74%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 59.5925 61.9"
        >
          <g id="Icon">
            <rect
              fill="var(--fill-0, #EEEEEE)"
              height="60.9"
              rx="29.2962"
              width="58.5925"
              x="0.5"
              y="0.5"
            />
            <rect
              height="60.9"
              rx="29.2962"
              stroke="var(--stroke-0, #C6C6C6)"
              width="58.5925"
              x="0.5"
              y="0.5"
            />
            <g id="Vector" opacity="0.2"></g>
            <path
              d={svgPaths.p15456600}
              id="Vector_2"
              stroke="var(--stroke-0, black)"
              strokeLinecap="round"
              strokeWidth="2"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group26() {
  return (
    <div className="absolute contents left-[602.07px] top-[246px]">
      <Frame19 />
      <Icon3 />
    </div>
  );
}

function Group31() {
  return (
    <div className="absolute contents left-[602.07px] top-[215px]">
      <Group26 />
      <div className="absolute flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] left-[764px] text-[#b2b2b2] text-[16px] top-[225px] translate-y-[-50%] w-[70px]">
        <p className="leading-[55.872px]">19 Cases</p>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="absolute bg-white h-[450px] left-[857.1px] rounded-[12px] top-[246px] w-[231.866px]">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute flex flex-col font-['Libre_Baskerville:Italic',sans-serif] h-[88px] italic justify-center leading-[0] left-[-32px] text-[96px] text-black top-[269px] tracking-[-1.1088px] translate-y-[-50%] w-[568px]">
          <p className="leading-[55.872px]">Supplements</p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#c6c6c6] border-solid -inset-px pointer-events-none rounded-[13px]"
      />
    </div>
  );
}

function Icon4() {
  return (
    <div
      className="absolute h-[59.9px] left-[1018.63px] top-[260px] w-[57.592px]"
      data-name="Icon"
    >
      <div className="absolute inset-[-1.67%_-1.74%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 59.5925 61.9"
        >
          <g id="Icon">
            <rect
              fill="var(--fill-0, #EEEEEE)"
              height="60.9"
              rx="29.2962"
              width="58.5925"
              x="0.5"
              y="0.5"
            />
            <rect
              height="60.9"
              rx="29.2962"
              stroke="var(--stroke-0, #C6C6C6)"
              width="58.5925"
              x="0.5"
              y="0.5"
            />
            <g id="Vector" opacity="0.2"></g>
            <path
              d={svgPaths.p15456600}
              id="Vector_2"
              stroke="var(--stroke-0, black)"
              strokeLinecap="round"
              strokeWidth="2"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group27() {
  return (
    <div className="absolute contents left-[857.1px] top-[246px]">
      <Frame20 />
      <Icon4 />
      <div className="absolute flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] left-[calc(50%+191px)] text-[#818181] text-[20px] text-nowrap top-[642px] translate-y-[-50%]">
        <p className="leading-[55.872px]">Supplements</p>
      </div>
    </div>
  );
}

function Group32() {
  return (
    <div className="absolute contents left-[857.1px] top-[215px]">
      <div className="absolute flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] left-[1006px] text-[#b2b2b2] text-[16px] top-[225px] translate-y-[-50%] w-[70px]">
        <p className="leading-[55.872px]">04 Cases</p>
      </div>
      <Group27 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="absolute bg-white h-[450px] left-[1112.13px] rounded-[12px] top-[246px] w-[231.866px]">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute flex flex-col font-['Libre_Baskerville:Italic',sans-serif] h-[88px] italic justify-center leading-[0] left-[-32px] text-[96px] text-black top-[269px] tracking-[-1.1088px] translate-y-[-50%] w-[568px]">
          <p className="leading-[55.872px]">Others</p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#c6c6c6] border-solid -inset-px pointer-events-none rounded-[13px]"
      />
    </div>
  );
}

function Icon5() {
  return (
    <div
      className="absolute h-[59.9px] left-[1273.66px] top-[260px] w-[57.592px]"
      data-name="Icon"
    >
      <div className="absolute inset-[-1.67%_-1.74%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 59.5925 61.9"
        >
          <g id="Icon">
            <rect
              fill="var(--fill-0, #EEEEEE)"
              height="60.9"
              rx="29.2962"
              width="58.5925"
              x="0.5"
              y="0.5"
            />
            <rect
              height="60.9"
              rx="29.2962"
              stroke="var(--stroke-0, #C6C6C6)"
              width="58.5925"
              x="0.5"
              y="0.5"
            />
            <g id="Vector" opacity="0.2"></g>
            <path
              d={svgPaths.p15456600}
              id="Vector_2"
              stroke="var(--stroke-0, black)"
              strokeLinecap="round"
              strokeWidth="2"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group28() {
  return (
    <div className="absolute contents left-[1112.13px] top-[246px]">
      <Frame21 />
      <Icon5 />
      <div className="absolute flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] left-[calc(50%+447px)] text-[#818181] text-[20px] text-nowrap top-[642px] translate-y-[-50%]">
        <p className="leading-[55.872px]">Other niches</p>
      </div>
    </div>
  );
}

function Group33() {
  return (
    <div className="absolute contents left-[1112.13px] top-[215px]">
      <div className="absolute flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] left-[1261px] text-[#b2b2b2] text-[16px] top-[225px] translate-y-[-50%] w-[70px]">
        <p className="leading-[55.872px]">11 Cases</p>
      </div>
      <Group28 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="absolute bg-white h-[450px] left-[92px] rounded-[12px] top-[246px] w-[231.866px]">
      <div className="leading-[0] overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute flex flex-col font-['Libre_Baskerville:Italic',sans-serif] h-[88px] italic justify-center left-[-13px] text-[96px] text-black top-[269px] tracking-[-1.1088px] translate-y-[-50%] w-[435px]">
          <p className="leading-[55.872px]">Clothing</p>
        </div>
        <div className="absolute flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center left-[69px] text-[#818181] text-[20px] text-nowrap top-[396px] translate-y-[-50%]">
          <p className="leading-[55.872px]">Clothing</p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#c6c6c6] border-solid -inset-px pointer-events-none rounded-[13px]"
      />
    </div>
  );
}

function Icon6() {
  return (
    <div
      className="absolute h-[59.9px] left-[253.53px] top-[260px] w-[57.592px]"
      data-name="Icon"
    >
      <div className="absolute inset-[-1.67%_-1.74%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 59.5925 61.9"
        >
          <g id="Icon">
            <rect
              fill="var(--fill-0, #EEEEEE)"
              height="60.9"
              rx="29.2962"
              width="58.5925"
              x="0.5"
              y="0.5"
            />
            <rect
              height="60.9"
              rx="29.2962"
              stroke="var(--stroke-0, #C6C6C6)"
              width="58.5925"
              x="0.5"
              y="0.5"
            />
            <g id="Vector" opacity="0.2"></g>
            <path
              d={svgPaths.p15456600}
              id="Vector_2"
              stroke="var(--stroke-0, black)"
              strokeLinecap="round"
              strokeWidth="2"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group24() {
  return (
    <div className="absolute contents left-[92px] top-[246px]">
      <Frame22 />
      <Icon6 />
    </div>
  );
}

function Group29() {
  return (
    <div className="absolute contents left-[92px] top-[219px]">
      <Group24 />
      <div className="absolute flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] left-[257px] text-[#b2b2b2] text-[16px] top-[229px] translate-y-[-50%] w-[67px]">
        <p className="leading-[55.872px]">13 Cases</p>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="absolute bg-[#f4f4f4] h-[768px] left-1/2 overflow-clip rounded-[24px] top-[3450px] translate-x-[-50%] w-[1440px]">
      <Frame3 />
      <H2HeadingForm1 />
      <Group30 />
      <Group31 />
      <Group32 />
      <Group33 />
      <Group29 />
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

function Button1() {
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
      <Button1 />
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
            d={svgPaths.p171e3000}
            fill="url(#paint0_linear_1_3533)"
            id="Vector"
          />
          <path
            d={svgPaths.p22cd9032}
            fill="url(#paint1_linear_1_3533)"
            id="Vector_2"
          />
          <path
            d={svgPaths.p319b7bf0}
            fill="url(#paint2_linear_1_3533)"
            id="Vector_3"
          />
          <path
            d={svgPaths.p202caf00}
            fill="url(#paint3_linear_1_3533)"
            id="Vector_4"
          />
          <path
            d={svgPaths.p1c6a9200}
            fill="url(#paint4_linear_1_3533)"
            id="Vector_5"
          />
          <path
            d={svgPaths.pdc9bb00}
            fill="url(#paint5_linear_1_3533)"
            id="Vector_6"
          />
          <path
            d={svgPaths.p17b8c300}
            fill="url(#paint6_linear_1_3533)"
            id="Vector_7"
          />
          <path
            d={svgPaths.p20219600}
            fill="url(#paint7_linear_1_3533)"
            id="Vector_8"
          />
          <path
            d={svgPaths.p2688fe80}
            fill="url(#paint8_linear_1_3533)"
            id="Vector_9"
          />
          <path
            d={svgPaths.p1d8b4b80}
            fill="url(#paint9_linear_1_3533)"
            id="Vector_10"
          />
          <path
            d={svgPaths.p3aea1480}
            fill="url(#paint10_linear_1_3533)"
            id="Vector_11"
          />
          <path
            d={svgPaths.p22b0f580}
            fill="url(#paint11_linear_1_3533)"
            id="Vector_12"
          />
        </g>
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_1_3533"
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
            id="paint1_linear_1_3533"
            x1="953.34"
            x2="953.34"
            y1="64.0548"
            y2="123.094"
          >
            <stop stopColor="white" />
            <stop offset="0.874488" stopColor="#101010" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint2_linear_1_3533"
            x1="880.187"
            x2="880.187"
            y1="36.3825"
            y2="121.525"
          >
            <stop stopColor="white" />
            <stop offset="0.874488" stopColor="#101010" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint3_linear_1_3533"
            x1="834.716"
            x2="834.716"
            y1="34.813"
            y2="121.524"
          >
            <stop stopColor="white" />
            <stop offset="0.874488" stopColor="#101010" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint4_linear_1_3533"
            x1="759.223"
            x2="759.223"
            y1="64.0998"
            y2="123.251"
          >
            <stop stopColor="white" />
            <stop offset="0.874488" stopColor="#101010" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint5_linear_1_3533"
            x1="662.226"
            x2="662.226"
            y1="48.1918"
            y2="123.251"
          >
            <stop stopColor="white" />
            <stop offset="0.874488" stopColor="#101010" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint6_linear_1_3533"
            x1="535.719"
            x2="535.719"
            y1="36.3825"
            y2="121.525"
          >
            <stop stopColor="white" />
            <stop offset="0.874488" stopColor="#101010" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint7_linear_1_3533"
            x1="447.021"
            x2="447.021"
            y1="43.6001"
            y2="122.868"
          >
            <stop stopColor="white" />
            <stop offset="0.874488" stopColor="#101010" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint8_linear_1_3533"
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
            id="paint9_linear_1_3533"
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
            id="paint10_linear_1_3533"
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
            id="paint11_linear_1_3533"
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
      className="absolute bg-white content-stretch flex flex-col gap-[120px] items-center left-0 overflow-clip pb-0 pt-[120px] px-[108px] rounded-tl-[36px] rounded-tr-[36px] top-[5286px] w-[1440px]"
      data-name="FooterSection"
    >
      <LineMask />
      <FooterContainer />
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute bg-linear-to-b from-[#4abe8f] h-[381px] left-[calc(50%-260.5px)] rounded-br-[24px] rounded-tr-[24px] to-[#225842] top-[calc(50%-0.5px)] translate-x-[-50%] translate-y-[-50%] w-[731px]" />
  );
}

function Base1() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px mr-[-5px] relative rounded-[24px] shrink-0"
      data-name="Base"
    >
      <div className="absolute backdrop-blur-[50px] backdrop-filter bg-linear-to-r from-[rgba(255,255,255,0)] inset-0 mix-blend-overlay to-[rgba(255,255,255,0)] via-[16.667%] via-[rgba(59,59,59,0.2)]" />
    </div>
  );
}

function GlassEffect1() {
  return (
    <div
      className="absolute content-stretch flex h-[381px] items-start left-[-21px] pl-0 pr-[5px] py-0 rounded-[24px] top-[calc(50%-0.5px)] translate-y-[-50%] w-[951px]"
      data-name="Glass effect 2"
    >
      {[...Array(11).keys()].map((_, i) => (
        <Base1 key={i} />
      ))}
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex h-[42px] items-center justify-center pl-[8px] pr-0 py-[8px] relative rounded-[100px] shrink-0 w-[133px]">
      <div
        aria-hidden="true"
        className="absolute border border-[#181818] border-dashed -inset-px pointer-events-none rounded-[101px]"
      />
      <div className="capitalize flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[42px] justify-center leading-[0] relative shrink-0 text-[16px] text-black w-[96px]">
        <p className="leading-[79px]">Conversions</p>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex h-[42px] items-center justify-center pl-[8px] pr-0 py-[8px] relative rounded-[100px] shrink-0 w-[133px]">
      <div
        aria-hidden="true"
        className="absolute border border-[#181818] border-dashed -inset-px pointer-events-none rounded-[101px]"
      />
      <div className="capitalize flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[42px] justify-center leading-[0] relative shrink-0 text-[16px] text-black w-[106px]">
        <p className="leading-[79px]">Optimization</p>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex h-[42px] items-center justify-center pl-[8px] pr-0 py-[8px] relative rounded-[100px] shrink-0 w-[133px]">
      <div
        aria-hidden="true"
        className="absolute border border-[#181818] border-dashed -inset-px pointer-events-none rounded-[101px]"
      />
      <div className="capitalize flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[42px] justify-center leading-[0] relative shrink-0 text-[16px] text-black w-[63px]">
        <p className="leading-[79px]">scaling</p>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[32px] top-[330px] w-[629px]">
      <Frame10 />
      <Frame11 />
      <Frame12 />
    </div>
  );
}

function Button2() {
  return (
    <div
      className="absolute bg-white h-[44px] left-[827px] rounded-[64.8px] shadow-[1px_1px_10px_0px_#6ed0a7] top-[332px] w-[229px]"
      data-name="button"
    >
      <div className="absolute flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] left-[calc(50%-87.5px)] text-[#031c11] text-[14.9px] text-nowrap top-1/2 tracking-[1px] translate-y-[-50%] uppercase">
        <p className="leading-[15.984px]">SEE IF YOU ARE READY</p>
      </div>
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

function Icon7() {
  return (
    <div
      className="absolute left-[calc(50%+0.94px)] overflow-clip size-[20.88px] top-[calc(50%+0.94px)] translate-x-[-50%] translate-y-[-50%]"
      data-name="Icon"
    >
      <ClipPathGroup1 />
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

function DivCircleIconB1() {
  return (
    <div
      className="absolute bg-white left-[1054px] rounded-[41.891px] size-[45px] top-[332px]"
      data-name="Div [circle_icon_b]"
    >
      <Icon7 />
    </div>
  );
}

function Group18() {
  return (
    <div className="absolute contents left-[825px] top-[330px]">
      <Button2 />
      <DivCircleIconB1 />
    </div>
  );
}

function Group13() {
  return (
    <div className="h-[242.39px] relative w-[268.555px]">
      <div className="absolute inset-[-32.22%_-24.71%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 401.258 398.587"
        >
          <g id="Group 46">
            <g filter="url(#filter0_f_1_3530)" id="Ellipse 10">
              <ellipse
                cx="94.0866"
                cy="105.469"
                fill="var(--fill-0, #4ABE8F)"
                fillOpacity="0.8"
                rx="94.0866"
                ry="105.469"
                transform="matrix(0.963555 0.26751 -0.41358 0.910468 153.591 78.0989)"
              />
            </g>
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="398.587"
              id="filter0_f_1_3530"
              width="401.258"
              x="0"
              y="-1.90735e-06"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_1_3530"
                stdDeviation="50"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div
      className="absolute left-[672px] size-[59.9px] top-[37px]"
      data-name="Icon"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 59.9 59.9"
      >
        <g id="Icon">
          <g id="Vector" opacity="0.2"></g>
          <path
            d={svgPaths.p1d870780}
            id="Vector_2"
            stroke="var(--stroke-0, black)"
            strokeLinecap="round"
            strokeWidth="5"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute bg-[rgba(17,17,17,0.07)] border-2 border-[#272727] border-solid h-[432px] left-[15px] overflow-clip rounded-[24px] top-[-5px] w-[1252px]">
      <Frame9 />
      <GroupGlassEffect />
      <div className="absolute capitalize flex flex-col font-['Poppins:Medium_Italic',sans-serif] h-[160px] italic justify-center leading-[0] left-[calc(50%-594px)] text-[72px] text-black top-[calc(50%-63px)] tracking-[-1px] translate-y-[-50%] w-[811px]">
        <p className="leading-[79px]">
          Performance
          <br />
          Marketing
        </p>
      </div>
      <Frame13 />
      <Group18 />
      <div
        className="absolute flex h-[347.56px] items-center justify-center left-[1003px] top-[-151px] w-[355.996px]"
        style={
          {
            "--transform-inner-width": "0",
            "--transform-inner-height": "0",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-[211.822deg]">
          <Group13 />
        </div>
      </div>
      <div className="absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[75px] justify-center leading-[0] left-[825px] text-[24px] text-white top-[66.5px] translate-y-[-50%] w-[393px]">
        <p className="leading-[25px]">
          Performance Marketing that actually scales
        </p>
      </div>
      <div className="absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[127px] justify-center leading-[21px] left-[825px] text-[18px] text-white top-[218.5px] translate-y-[-50%] w-[406px]">
        <p className="mb-0">
          Data-backed strategies, high-performing creatives, and precision
          execution across Meta and Google — engineered to drive consistent
          revenue and predictable growth.
        </p>
        <p>&nbsp;</p>
      </div>
      <Icon8 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="absolute bg-linear-to-b from-[#4abe8f] h-[381px] left-[calc(50%-260.5px)] rounded-br-[24px] rounded-tr-[24px] to-[#225842] top-[calc(50%-0.5px)] translate-x-[-50%] translate-y-[-50%] w-[731px]" />
  );
}

function Base2() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px mr-[-5px] relative rounded-[24px] shrink-0"
      data-name="Base"
    >
      <div className="absolute backdrop-blur-[50px] backdrop-filter bg-linear-to-r from-[rgba(255,255,255,0)] inset-0 mix-blend-overlay to-[rgba(255,255,255,0)] via-[16.667%] via-[rgba(59,59,59,0.2)]" />
    </div>
  );
}

function GlassEffect2() {
  return (
    <div
      className="absolute content-stretch flex h-[381px] items-start left-[-21px] pl-0 pr-[5px] py-0 rounded-[24px] top-[calc(50%-0.5px)] translate-y-[-50%] w-[951px]"
      data-name="Glass effect 2"
    >
      {[...Array(11).keys()].map((_, i) => (
        <Base2 key={i} />
      ))}
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex h-[42px] items-center justify-center pl-[8px] pr-0 py-[8px] relative rounded-[100px] shrink-0 w-[133px]">
      <div
        aria-hidden="true"
        className="absolute border border-[#181818] border-dashed -inset-px pointer-events-none rounded-[101px]"
      />
      <div className="capitalize flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[42px] justify-center leading-[0] relative shrink-0 text-[16px] text-black w-[96px]">
        <p className="leading-[79px]">Conversions</p>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex h-[42px] items-center justify-center pl-[8px] pr-0 py-[8px] relative rounded-[100px] shrink-0 w-[133px]">
      <div
        aria-hidden="true"
        className="absolute border border-[#181818] border-dashed -inset-px pointer-events-none rounded-[101px]"
      />
      <div className="capitalize flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[42px] justify-center leading-[0] relative shrink-0 text-[16px] text-black w-[106px]">
        <p className="leading-[79px]">Optimization</p>
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex h-[42px] items-center justify-center pl-[8px] pr-0 py-[8px] relative rounded-[100px] shrink-0 w-[133px]">
      <div
        aria-hidden="true"
        className="absolute border border-[#181818] border-dashed -inset-px pointer-events-none rounded-[101px]"
      />
      <div className="capitalize flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[42px] justify-center leading-[0] relative shrink-0 text-[16px] text-black w-[63px]">
        <p className="leading-[79px]">scaling</p>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[32px] top-[330px] w-[629px]">
      <Frame17 />
      <Frame23 />
      <Frame24 />
    </div>
  );
}

function Button3() {
  return (
    <div
      className="absolute bg-white h-[44px] left-[827px] rounded-[64.8px] shadow-[1px_1px_10px_0px_#6ed0a7] top-[332px] w-[229px]"
      data-name="button"
    >
      <div className="absolute flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] left-[calc(50%-87.5px)] text-[#031c11] text-[14.9px] text-nowrap top-1/2 tracking-[1px] translate-y-[-50%] uppercase">
        <p className="leading-[15.984px]">SEE IF YOU ARE READY</p>
      </div>
    </div>
  );
}

function Group4() {
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

function MaskGroup2() {
  return (
    <div
      className="absolute contents inset-[-9.52%_-14.31%_-14.29%_-9.5%]"
      data-name="Mask group"
    >
      <Group4 />
    </div>
  );
}

function Group5() {
  return (
    <div
      className="absolute contents inset-[-9.52%_-14.31%_-14.29%_-9.5%]"
      data-name="Group"
    >
      <MaskGroup2 />
    </div>
  );
}

function ClipPathGroup2() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group5 />
    </div>
  );
}

function Icon9() {
  return (
    <div
      className="absolute left-[calc(50%+0.94px)] overflow-clip size-[20.88px] top-[calc(50%+0.94px)] translate-x-[-50%] translate-y-[-50%]"
      data-name="Icon"
    >
      <ClipPathGroup2 />
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
      className="absolute bg-white left-[1054px] rounded-[41.891px] size-[45px] top-[332px]"
      data-name="Div [circle_icon_b]"
    >
      <Icon9 />
    </div>
  );
}

function Group19() {
  return (
    <div className="absolute contents left-[825px] top-[330px]">
      <Button3 />
      <DivCircleIconB2 />
    </div>
  );
}

function Group14() {
  return (
    <div className="h-[242.39px] relative w-[268.555px]">
      <div className="absolute inset-[-32.22%_-24.71%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 401.258 398.587"
        >
          <g id="Group 46">
            <g filter="url(#filter0_f_1_3527)" id="Ellipse 10">
              <ellipse
                cx="94.0866"
                cy="105.469"
                fill="var(--fill-0, #4ABE8F)"
                fillOpacity="0.8"
                rx="94.0866"
                ry="105.469"
                transform="matrix(0.963555 0.26751 -0.41358 0.910468 153.591 78.0989)"
              />
            </g>
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="398.587"
              id="filter0_f_1_3527"
              width="401.258"
              x="0"
              y="-1.90735e-06"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_1_3527"
                stdDeviation="50"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div
      className="absolute left-[672px] size-[59.9px] top-[37px]"
      data-name="Icon"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 59.9 59.9"
      >
        <g id="Icon">
          <g id="Vector" opacity="0.2"></g>
          <path
            d={svgPaths.p1d870780}
            id="Vector_2"
            stroke="var(--stroke-0, black)"
            strokeLinecap="round"
            strokeWidth="5"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame26() {
  return (
    <div className="absolute bg-[rgba(17,17,17,0.07)] border-2 border-[#272727] border-solid h-[432px] left-[15px] overflow-clip rounded-[24px] top-[1819px] w-[1252px]">
      <Frame16 />
      <GroupGlassEffect />
      <div className="absolute capitalize flex flex-col font-['Poppins:Medium_Italic',sans-serif] h-[160px] italic justify-center leading-[0] left-[calc(50%-634px)] text-[72px] text-black top-[calc(50%-63px)] tracking-[-1px] translate-y-[-50%] w-[811px]">
        <p className="leading-[79px]">E- Commerce Consultancy</p>
      </div>
      <Frame25 />
      <Group19 />
      <div
        className="absolute flex h-[347.56px] items-center justify-center left-[1003px] top-[-151px] w-[355.996px]"
        style={
          {
            "--transform-inner-width": "0",
            "--transform-inner-height": "0",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-[211.822deg]">
          <Group14 />
        </div>
      </div>
      <div className="absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[75px] justify-center leading-[0] left-[825px] text-[24px] text-white top-[66.5px] translate-y-[-50%] w-[393px]">
        <p className="leading-[25px]">
          Performance Marketing that actually scales
        </p>
      </div>
      <div className="absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[127px] justify-center leading-[21px] left-[825px] text-[18px] text-white top-[218.5px] translate-y-[-50%] w-[406px]">
        <p className="mb-0">
          Data-backed strategies, high-performing creatives, and precision
          execution across Meta and Google — engineered to drive consistent
          revenue and predictable growth.
        </p>
        <p>&nbsp;</p>
      </div>
      <Icon10 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="absolute bg-[#4abe8f] h-[381px] left-[calc(50%-260.5px)] rounded-br-[24px] rounded-tr-[24px] top-[calc(50%-0.5px)] translate-x-[-50%] translate-y-[-50%] w-[731px]" />
  );
}

function Base3() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px mr-[-5px] relative rounded-[24px] shrink-0"
      data-name="Base"
    >
      <div className="absolute backdrop-blur-[50px] backdrop-filter bg-linear-to-r from-[rgba(255,255,255,0)] inset-0 mix-blend-overlay to-[rgba(255,255,255,0)] via-[16.667%] via-[rgba(59,59,59,0.2)]" />
    </div>
  );
}

function GlassEffect3() {
  return (
    <div
      className="absolute content-stretch flex h-[381px] items-start left-[-21px] pl-0 pr-[5px] py-0 rounded-[24px] top-[calc(50%-0.5px)] translate-y-[-50%] w-[951px]"
      data-name="Glass effect 2"
    >
      {[...Array(11).keys()].map((_, i) => (
        <Base3 key={i} />
      ))}
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex h-[42px] items-center justify-center pl-[8px] pr-0 py-[8px] relative rounded-[100px] shrink-0 w-[133px]">
      <div
        aria-hidden="true"
        className="absolute border border-[#646464] border-dashed -inset-px pointer-events-none rounded-[101px]"
      />
      <div className="capitalize flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[42px] justify-center leading-[0] relative shrink-0 text-[16px] text-black w-[96px]">
        <p className="leading-[79px]">Conversions</p>
      </div>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex h-[42px] items-center justify-center pl-[8px] pr-0 py-[8px] relative rounded-[100px] shrink-0 w-[133px]">
      <div
        aria-hidden="true"
        className="absolute border border-[#646464] border-dashed -inset-px pointer-events-none rounded-[101px]"
      />
      <div className="capitalize flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[42px] justify-center leading-[0] relative shrink-0 text-[16px] text-black w-[106px]">
        <p className="leading-[79px]">Optimization</p>
      </div>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex h-[42px] items-center justify-center pl-[8px] pr-0 py-[8px] relative rounded-[100px] shrink-0 w-[133px]">
      <div
        aria-hidden="true"
        className="absolute border border-[#646464] border-dashed -inset-px pointer-events-none rounded-[101px]"
      />
      <div className="capitalize flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[42px] justify-center leading-[0] relative shrink-0 text-[16px] text-black w-[63px]">
        <p className="leading-[79px]">scaling</p>
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[32px] top-[330px] w-[629px]">
      <Frame28 />
      <Frame29 />
      <Frame30 />
    </div>
  );
}

function Button4() {
  return (
    <div
      className="absolute bg-white h-[44px] left-[827px] rounded-[64.8px] shadow-[1px_1px_10px_0px_#6ed0a7] top-[332px] w-[229px]"
      data-name="button"
    >
      <div className="absolute flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] left-[calc(50%-87.5px)] text-[#031c11] text-[14.9px] text-nowrap top-1/2 tracking-[1px] translate-y-[-50%] uppercase">
        <p className="leading-[15.984px]">SEE IF YOU ARE READY</p>
      </div>
    </div>
  );
}

function Group6() {
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

function MaskGroup3() {
  return (
    <div
      className="absolute contents inset-[-9.52%_-14.31%_-14.29%_-9.5%]"
      data-name="Mask group"
    >
      <Group6 />
    </div>
  );
}

function Group7() {
  return (
    <div
      className="absolute contents inset-[-9.52%_-14.31%_-14.29%_-9.5%]"
      data-name="Group"
    >
      <MaskGroup3 />
    </div>
  );
}

function ClipPathGroup3() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group7 />
    </div>
  );
}

function Icon11() {
  return (
    <div
      className="absolute left-[calc(50%+0.94px)] overflow-clip size-[20.88px] top-[calc(50%+0.94px)] translate-x-[-50%] translate-y-[-50%]"
      data-name="Icon"
    >
      <ClipPathGroup3 />
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
      className="absolute bg-white left-[1054px] rounded-[41.891px] size-[45px] top-[332px]"
      data-name="Div [circle_icon_b]"
    >
      <Icon11 />
    </div>
  );
}

function Group20() {
  return (
    <div className="absolute contents left-[825px] top-[330px]">
      <Button4 />
      <DivCircleIconB3 />
    </div>
  );
}

function Group15() {
  return (
    <div className="h-[242.39px] relative w-[268.555px]">
      <div className="absolute inset-[-32.22%_-24.71%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 401.258 398.587"
        >
          <g id="Group 46">
            <g filter="url(#filter0_f_1_3527)" id="Ellipse 10">
              <ellipse
                cx="94.0866"
                cy="105.469"
                fill="var(--fill-0, #4ABE8F)"
                fillOpacity="0.8"
                rx="94.0866"
                ry="105.469"
                transform="matrix(0.963555 0.26751 -0.41358 0.910468 153.591 78.0989)"
              />
            </g>
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="398.587"
              id="filter0_f_1_3527"
              width="401.258"
              x="0"
              y="-1.90735e-06"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_1_3527"
                stdDeviation="50"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Icon12() {
  return (
    <div
      className="absolute left-[672px] size-[59.9px] top-[37px]"
      data-name="Icon"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 59.9 59.9"
      >
        <g id="Icon">
          <g id="Vector" opacity="0.2"></g>
          <path
            d={svgPaths.p1d870780}
            id="Vector_2"
            stroke="var(--stroke-0, black)"
            strokeLinecap="round"
            strokeWidth="5"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame32() {
  return (
    <div className="absolute bg-[rgba(17,17,17,0.07)] border-2 border-[#272727] border-solid h-[432px] left-[15px] overflow-clip rounded-[24px] top-[451px] w-[1252px]">
      <Frame27 />
      <GroupGlassEffect />
      <div className="absolute capitalize flex flex-col font-['Poppins:Medium_Italic',sans-serif] h-[65px] italic justify-center leading-[0] left-[calc(50%-634px)] text-[72px] text-black top-[calc(50%-98.5px)] tracking-[-1px] translate-y-[-50%] w-[811px]">
        <p className="leading-[79px]">Branding</p>
      </div>
      <Frame31 />
      <Group20 />
      <div
        className="absolute flex h-[347.56px] items-center justify-center left-[1003px] top-[-151px] w-[355.996px]"
        style={
          {
            "--transform-inner-width": "0",
            "--transform-inner-height": "0",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-[211.822deg]">
          <Group15 />
        </div>
      </div>
      <div className="absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[75px] justify-center leading-[0] left-[825px] text-[24px] text-white top-[66.5px] translate-y-[-50%] w-[393px]">
        <p className="leading-[25px]">
          Performance Marketing that actually scales
        </p>
      </div>
      <div className="absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[127px] justify-center leading-[21px] left-[825px] text-[18px] text-white top-[218.5px] translate-y-[-50%] w-[406px]">
        <p className="mb-0">
          Data-backed strategies, high-performing creatives, and precision
          execution across Meta and Google — engineered to drive consistent
          revenue and predictable growth.
        </p>
        <p>&nbsp;</p>
      </div>
      <Icon12 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="absolute bg-[#4abe8f] h-[381px] left-[calc(50%-260.5px)] rounded-br-[24px] rounded-tr-[24px] top-[calc(50%-0.5px)] translate-x-[-50%] translate-y-[-50%] w-[731px]" />
  );
}

function Base4() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px mr-[-5px] relative rounded-[24px] shrink-0"
      data-name="Base"
    >
      <div className="absolute backdrop-blur-[50px] backdrop-filter bg-linear-to-r from-[rgba(255,255,255,0)] inset-0 mix-blend-overlay to-[rgba(255,255,255,0)] via-[16.667%] via-[rgba(59,59,59,0.2)]" />
    </div>
  );
}

function GlassEffect4() {
  return (
    <div
      className="absolute content-stretch flex h-[381px] items-start left-[-21px] pl-0 pr-[5px] py-0 rounded-[24px] top-[calc(50%-0.5px)] translate-y-[-50%] w-[951px]"
      data-name="Glass effect 2"
    >
      {[...Array(11).keys()].map((_, i) => (
        <Base4 key={i} />
      ))}
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex h-[42px] items-center justify-center pl-[8px] pr-0 py-[8px] relative rounded-[100px] shrink-0 w-[133px]">
      <div
        aria-hidden="true"
        className="absolute border border-[#646464] border-dashed -inset-px pointer-events-none rounded-[101px]"
      />
      <div className="capitalize flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[42px] justify-center leading-[0] relative shrink-0 text-[16px] text-black w-[96px]">
        <p className="leading-[79px]">Conversions</p>
      </div>
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex h-[42px] items-center justify-center pl-[8px] pr-0 py-[8px] relative rounded-[100px] shrink-0 w-[133px]">
      <div
        aria-hidden="true"
        className="absolute border border-[#646464] border-dashed -inset-px pointer-events-none rounded-[101px]"
      />
      <div className="capitalize flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[42px] justify-center leading-[0] relative shrink-0 text-[16px] text-black w-[106px]">
        <p className="leading-[79px]">Optimization</p>
      </div>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex h-[42px] items-center justify-center pl-[8px] pr-0 py-[8px] relative rounded-[100px] shrink-0 w-[133px]">
      <div
        aria-hidden="true"
        className="absolute border border-[#646464] border-dashed -inset-px pointer-events-none rounded-[101px]"
      />
      <div className="capitalize flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[42px] justify-center leading-[0] relative shrink-0 text-[16px] text-black w-[63px]">
        <p className="leading-[79px]">scaling</p>
      </div>
    </div>
  );
}

function Frame37() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[32px] top-[330px] w-[629px]">
      <Frame34 />
      <Frame35 />
      <Frame36 />
    </div>
  );
}

function Button5() {
  return (
    <div
      className="absolute bg-white h-[44px] left-[827px] rounded-[64.8px] shadow-[1px_1px_10px_0px_#6ed0a7] top-[332px] w-[229px]"
      data-name="button"
    >
      <div className="absolute flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] left-[calc(50%-87.5px)] text-[#031c11] text-[14.9px] text-nowrap top-1/2 tracking-[1px] translate-y-[-50%] uppercase">
        <p className="leading-[15.984px]">SEE IF YOU ARE READY</p>
      </div>
    </div>
  );
}

function Group8() {
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

function MaskGroup4() {
  return (
    <div
      className="absolute contents inset-[-9.52%_-14.31%_-14.29%_-9.5%]"
      data-name="Mask group"
    >
      <Group8 />
    </div>
  );
}

function Group9() {
  return (
    <div
      className="absolute contents inset-[-9.52%_-14.31%_-14.29%_-9.5%]"
      data-name="Group"
    >
      <MaskGroup4 />
    </div>
  );
}

function ClipPathGroup4() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group9 />
    </div>
  );
}

function Icon13() {
  return (
    <div
      className="absolute left-[calc(50%+0.94px)] overflow-clip size-[20.88px] top-[calc(50%+0.94px)] translate-x-[-50%] translate-y-[-50%]"
      data-name="Icon"
    >
      <ClipPathGroup4 />
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
      className="absolute bg-white left-[1054px] rounded-[41.891px] size-[45px] top-[332px]"
      data-name="Div [circle_icon_b]"
    >
      <Icon13 />
    </div>
  );
}

function Group34() {
  return (
    <div className="absolute contents left-[825px] top-[330px]">
      <Button5 />
      <DivCircleIconB4 />
    </div>
  );
}

function Group16() {
  return (
    <div className="h-[242.39px] relative w-[268.555px]">
      <div className="absolute inset-[-32.22%_-24.71%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 401.258 398.587"
        >
          <g id="Group 46">
            <g filter="url(#filter0_f_1_3527)" id="Ellipse 10">
              <ellipse
                cx="94.0866"
                cy="105.469"
                fill="var(--fill-0, #4ABE8F)"
                fillOpacity="0.8"
                rx="94.0866"
                ry="105.469"
                transform="matrix(0.963555 0.26751 -0.41358 0.910468 153.591 78.0989)"
              />
            </g>
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="398.587"
              id="filter0_f_1_3527"
              width="401.258"
              x="0"
              y="-1.90735e-06"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_1_3527"
                stdDeviation="50"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Icon14() {
  return (
    <div
      className="absolute left-[672px] size-[59.9px] top-[37px]"
      data-name="Icon"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 59.9 59.9"
      >
        <g id="Icon">
          <g id="Vector" opacity="0.2"></g>
          <path
            d={svgPaths.p1d870780}
            id="Vector_2"
            stroke="var(--stroke-0, black)"
            strokeLinecap="round"
            strokeWidth="5"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame38() {
  return (
    <div className="absolute bg-[rgba(17,17,17,0.07)] border-2 border-[#272727] border-solid h-[432px] left-[15px] overflow-clip rounded-[24px] top-[907px] w-[1252px]">
      <Frame33 />
      <GroupGlassEffect />
      <div className="absolute capitalize flex flex-col font-['Poppins:Medium_Italic',sans-serif] h-[65px] italic justify-center leading-[0] left-[calc(50%-634px)] text-[72px] text-black top-[calc(50%-98.5px)] tracking-[-1px] translate-y-[-50%] w-[811px]">
        <p className="leading-[79px]">Content Creation</p>
      </div>
      <Frame37 />
      <Group34 />
      <div
        className="absolute flex h-[347.56px] items-center justify-center left-[1003px] top-[-151px] w-[355.996px]"
        style={
          {
            "--transform-inner-width": "0",
            "--transform-inner-height": "0",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-[211.822deg]">
          <Group16 />
        </div>
      </div>
      <div className="absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[75px] justify-center leading-[0] left-[825px] text-[24px] text-white top-[66.5px] translate-y-[-50%] w-[393px]">
        <p className="leading-[25px]">
          Performance Marketing that actually scales
        </p>
      </div>
      <div className="absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[127px] justify-center leading-[21px] left-[825px] text-[18px] text-white top-[218.5px] translate-y-[-50%] w-[406px]">
        <p className="mb-0">
          Data-backed strategies, high-performing creatives, and precision
          execution across Meta and Google — engineered to drive consistent
          revenue and predictable growth.
        </p>
        <p>&nbsp;</p>
      </div>
      <Icon14 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="absolute bg-[#4abe8f] h-[381px] left-[calc(50%-260.5px)] rounded-br-[24px] rounded-tr-[24px] top-[calc(50%-0.5px)] translate-x-[-50%] translate-y-[-50%] w-[731px]" />
  );
}

function Base5() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px mr-[-5px] relative rounded-[24px] shrink-0"
      data-name="Base"
    >
      <div className="absolute backdrop-blur-[50px] backdrop-filter bg-linear-to-r from-[rgba(255,255,255,0)] inset-0 mix-blend-overlay to-[rgba(255,255,255,0)] via-[16.667%] via-[rgba(59,59,59,0.2)]" />
    </div>
  );
}

function GlassEffect5() {
  return (
    <div
      className="absolute content-stretch flex h-[381px] items-start left-[-21px] pl-0 pr-[5px] py-0 rounded-[24px] top-[calc(50%-0.5px)] translate-y-[-50%] w-[951px]"
      data-name="Glass effect 2"
    >
      {[...Array(11).keys()].map((_, i) => (
        <Base5 key={i} />
      ))}
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex h-[42px] items-center justify-center pl-[8px] pr-0 py-[8px] relative rounded-[100px] shrink-0 w-[133px]">
      <div
        aria-hidden="true"
        className="absolute border border-[#646464] border-dashed -inset-px pointer-events-none rounded-[101px]"
      />
      <div className="capitalize flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[42px] justify-center leading-[0] relative shrink-0 text-[16px] text-black w-[96px]">
        <p className="leading-[79px]">Conversions</p>
      </div>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex h-[42px] items-center justify-center pl-[8px] pr-0 py-[8px] relative rounded-[100px] shrink-0 w-[133px]">
      <div
        aria-hidden="true"
        className="absolute border border-[#646464] border-dashed -inset-px pointer-events-none rounded-[101px]"
      />
      <div className="capitalize flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[42px] justify-center leading-[0] relative shrink-0 text-[16px] text-black w-[106px]">
        <p className="leading-[79px]">Optimization</p>
      </div>
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex h-[42px] items-center justify-center pl-[8px] pr-0 py-[8px] relative rounded-[100px] shrink-0 w-[133px]">
      <div
        aria-hidden="true"
        className="absolute border border-[#646464] border-dashed -inset-px pointer-events-none rounded-[101px]"
      />
      <div className="capitalize flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[42px] justify-center leading-[0] relative shrink-0 text-[16px] text-black w-[63px]">
        <p className="leading-[79px]">scaling</p>
      </div>
    </div>
  );
}

function Frame43() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[32px] top-[330px] w-[629px]">
      <Frame40 />
      <Frame41 />
      <Frame42 />
    </div>
  );
}

function Button6() {
  return (
    <div
      className="absolute bg-white h-[44px] left-[827px] rounded-[64.8px] shadow-[1px_1px_10px_0px_#6ed0a7] top-[332px] w-[229px]"
      data-name="button"
    >
      <div className="absolute flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] left-[calc(50%-87.5px)] text-[#031c11] text-[14.9px] text-nowrap top-1/2 tracking-[1px] translate-y-[-50%] uppercase">
        <p className="leading-[15.984px]">SEE IF YOU ARE READY</p>
      </div>
    </div>
  );
}

function Group10() {
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

function MaskGroup5() {
  return (
    <div
      className="absolute contents inset-[-9.52%_-14.31%_-14.29%_-9.5%]"
      data-name="Mask group"
    >
      <Group10 />
    </div>
  );
}

function Group11() {
  return (
    <div
      className="absolute contents inset-[-9.52%_-14.31%_-14.29%_-9.5%]"
      data-name="Group"
    >
      <MaskGroup5 />
    </div>
  );
}

function ClipPathGroup5() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group11 />
    </div>
  );
}

function Icon15() {
  return (
    <div
      className="absolute left-[calc(50%+0.94px)] overflow-clip size-[20.88px] top-[calc(50%+0.94px)] translate-x-[-50%] translate-y-[-50%]"
      data-name="Icon"
    >
      <ClipPathGroup5 />
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
      className="absolute bg-white left-[1054px] rounded-[41.891px] size-[45px] top-[332px]"
      data-name="Div [circle_icon_b]"
    >
      <Icon15 />
    </div>
  );
}

function Group35() {
  return (
    <div className="absolute contents left-[825px] top-[330px]">
      <Button6 />
      <DivCircleIconB5 />
    </div>
  );
}

function Group17() {
  return (
    <div className="h-[242.39px] relative w-[268.555px]">
      <div className="absolute inset-[-32.22%_-24.71%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 401.258 398.587"
        >
          <g id="Group 46">
            <g filter="url(#filter0_f_1_3530)" id="Ellipse 10">
              <ellipse
                cx="94.0866"
                cy="105.469"
                fill="var(--fill-0, #4ABE8F)"
                fillOpacity="0.8"
                rx="94.0866"
                ry="105.469"
                transform="matrix(0.963555 0.26751 -0.41358 0.910468 153.591 78.0989)"
              />
            </g>
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="398.587"
              id="filter0_f_1_3530"
              width="401.258"
              x="0"
              y="-1.90735e-06"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_1_3530"
                stdDeviation="50"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Icon16() {
  return (
    <div
      className="absolute left-[672px] size-[59.9px] top-[37px]"
      data-name="Icon"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 59.9 59.9"
      >
        <g id="Icon">
          <g id="Vector" opacity="0.2"></g>
          <path
            d={svgPaths.p1d870780}
            id="Vector_2"
            stroke="var(--stroke-0, black)"
            strokeLinecap="round"
            strokeWidth="5"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame44() {
  return (
    <div className="absolute bg-[rgba(17,17,17,0.07)] border-2 border-[#272727] border-solid h-[432px] left-[15px] overflow-clip rounded-[24px] top-[1363px] w-[1252px]">
      <Frame39 />
      <GroupGlassEffect />
      <div className="absolute capitalize flex flex-col font-['Poppins:Medium_Italic',sans-serif] h-[65px] italic justify-center leading-[0] left-[calc(50%-634px)] text-[72px] text-black top-[calc(50%-98.5px)] tracking-[-1px] translate-y-[-50%] w-[811px]">
        <p className="leading-[79px]">UI/uX Design</p>
      </div>
      <Frame43 />
      <Group35 />
      <div
        className="absolute flex h-[347.56px] items-center justify-center left-[1003px] top-[-151px] w-[355.996px]"
        style={
          {
            "--transform-inner-width": "0",
            "--transform-inner-height": "0",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-[211.822deg]">
          <Group17 />
        </div>
      </div>
      <div className="absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[75px] justify-center leading-[0] left-[825px] text-[24px] text-white top-[66.5px] translate-y-[-50%] w-[393px]">
        <p className="leading-[25px]">
          Performance Marketing that actually scales
        </p>
      </div>
      <div className="absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[127px] justify-center leading-[21px] left-[825px] text-[18px] text-white top-[218.5px] translate-y-[-50%] w-[406px]">
        <p className="mb-0">
          Data-backed strategies, high-performing creatives, and precision
          execution across Meta and Google — engineered to drive consistent
          revenue and predictable growth.
        </p>
        <p>&nbsp;</p>
      </div>
      <Icon16 />
    </div>
  );
}

function Group23() {
  return (
    <div className="absolute contents left-[15px] top-[-5px]">
      <Frame8 />
      <Frame26 />
      <Frame32 />
      <Frame38 />
      <Frame44 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="absolute h-[2256px] left-[77px] overflow-clip top-[1083px] w-[1313px]">
      <Group23 />
    </div>
  );
}

export default function What() {
  return (
    <div className="bg-[#111] relative size-full" data-name="What">
      <div
        className="absolute h-[54px] left-[86px] top-[96px] w-[141px]"
        data-name="logo white big 1"
      >
        <img
          alt="Growth Sailor Logo"
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
          src={imgLogoWhiteBig1}
        />
      </div>
      <SharedNavBar />
      <SharedLinkLetsTalk />
      <Frame6 />
      <div className="absolute flex flex-col font-['Poppins:Regular',sans-serif] h-[139px] justify-center leading-[0] left-[calc(50%-233px)] not-italic text-[42px] text-white top-[884.5px] tracking-[-3px] translate-y-[-50%] w-[465px]">
        <p className="leading-[65px]">
          <span>{`Our core `}</span>
          <span className="font-['Poppins:Bold_Italic',sans-serif] italic">
            competencies
          </span>
        </p>
      </div>
      <div className="absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[74px] justify-center leading-[0] left-[492px] text-[18px] text-white top-[963px] translate-y-[-50%] w-[418px]">
        <p className="leading-[31px]">
          Designed to accelerate revenue, efficiency, and brand presence.
        </p>
      </div>
      <Frame4 />
      <Frame15 />
      <FooterSection />
      <Frame14 />
    </div>
  );
}
