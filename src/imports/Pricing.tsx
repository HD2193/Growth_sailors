import React from "react";
import svgPaths from "./svg-nmo4fzujol";
import imgImage28 from "figma:asset/90c7836d9737eadb2c1a161949b92c21b1ffdc1f.png";
import imgLogoWhiteBig1 from "figma:asset/221e78b67b6af7a968c919083e537e0c2aa870b6.png";
import { imgGroup, imgGroup1 } from "./svg-f7p0x";
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
      className="absolute h-[585px] left-[68px] rounded-[24px] top-0 w-[131px]"
      data-name="Base"
    >
      <div className="absolute backdrop-blur-[50px] backdrop-filter bg-linear-to-r from-[rgba(255,255,255,0)] inset-0 mix-blend-overlay to-[rgba(255,255,255,0)] via-[16.667%] via-[rgba(59,59,59,0.2)]" />
    </div>
  );
}

function Base1() {
  return (
    <div
      className="absolute blur-[25px] filter h-[434px] left-1/2 rounded-[24px] top-[95px] translate-x-[-50%] w-[1440px]"
      data-name="Base"
    >
      <div className="absolute backdrop-blur-[50px] backdrop-filter bg-linear-to-r from-[rgba(255,255,255,0)] inset-0 mix-blend-overlay to-[rgba(255,255,255,0)] via-[16.667%] via-[rgba(59,59,59,0.2)]" />
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute bg-white h-[585px] left-0 overflow-clip top-[222px] w-[1440px]">
      <div
        className="absolute h-[691px] left-[-51px] top-[-34px] w-[1491px]"
        data-name="image 28"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute h-[141.59%] left-[-1.84%] max-w-none top-[-16.82%] w-[116.74%]"
            src={imgImage28}
          />
        </div>
      </div>
      <Base />
      <Base1 />
      <div className="absolute flex flex-col font-['Pacifico:Regular',sans-serif] justify-center leading-[0] left-[calc(50%-0.5px)] not-italic text-[72px] text-center text-white top-[243px] tracking-[-2.88px] translate-x-[-50%] translate-y-[-50%] w-[993px]">
        <p className="leading-[82px]">
          <span className="font-['Poppins:Regular',sans-serif] not-italic">{`Your `}</span>
          <span className="font-['Poppins:SemiBold_Italic',sans-serif] italic">
            brand,
          </span>
          <span className="font-['Poppins:Regular',sans-serif] not-italic">{` built `}</span>
          <span className="font-['Poppins:Medium',sans-serif] not-italic">
            once.
          </span>
          <span className="font-['Poppins:Regular',sans-serif] not-italic">{` Your `}</span>
          <span className="font-['Poppins:SemiBold_Italic',sans-serif] italic">{`growth, `}</span>
          <span className="font-['Poppins:Regular',sans-serif] not-italic">{`built to `}</span>
          <span className="font-['Poppins:Medium',sans-serif] not-italic">
            last.
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

function Group25() {
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
          <Group25 />
        </div>
      </div>
      <Testimonies />
      <Frame />
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute bg-[#f4f4f4] h-[768px] left-1/2 overflow-clip rounded-[24px] top-[2147px] translate-x-[-50%] w-[1248px]">
      <DivWrapForm />
      <Frame2 />
      <Frame5 />
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

function Button() {
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
      <Button />
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
            d={svgPaths.p3c3caa00}
            fill="url(#paint0_linear_3_5525)"
            id="Vector"
          />
          <path
            d={svgPaths.p2879bd00}
            fill="url(#paint1_linear_3_5525)"
            id="Vector_2"
          />
          <path
            d={svgPaths.p128b1400}
            fill="url(#paint2_linear_3_5525)"
            id="Vector_3"
          />
          <path
            d={svgPaths.p119d70f0}
            fill="url(#paint3_linear_3_5525)"
            id="Vector_4"
          />
          <path
            d={svgPaths.p27857a00}
            fill="url(#paint4_linear_3_5525)"
            id="Vector_5"
          />
          <path
            d={svgPaths.p2f0203c0}
            fill="url(#paint5_linear_3_5525)"
            id="Vector_6"
          />
          <path
            d={svgPaths.p31fa7b00}
            fill="url(#paint6_linear_3_5525)"
            id="Vector_7"
          />
          <path
            d={svgPaths.p35a48500}
            fill="url(#paint7_linear_3_5525)"
            id="Vector_8"
          />
          <path
            d={svgPaths.p7ca5f00}
            fill="url(#paint8_linear_3_5525)"
            id="Vector_9"
          />
          <path
            d={svgPaths.p217fbf00}
            fill="url(#paint9_linear_3_5525)"
            id="Vector_10"
          />
          <path
            d={svgPaths.p2af3ec00}
            fill="url(#paint10_linear_3_5525)"
            id="Vector_11"
          />
          <path
            d={svgPaths.p22b0f580}
            fill="url(#paint11_linear_3_5525)"
            id="Vector_12"
          />
        </g>
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_3_5525"
            x1="1038.33"
            x2="1038.33"
            y1="63.596"
            y2="121.515"
          >
            <stop stopColor="white" />
            <stop offset="0.874488" stopColor="#101010" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint1_linear_3_5525"
            x1="953.346"
            x2="953.346"
            y1="64.0458"
            y2="123.085"
          >
            <stop stopColor="white" />
            <stop offset="0.874488" stopColor="#101010" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint2_linear_3_5525"
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
            id="paint3_linear_3_5525"
            x1="834.713"
            x2="834.713"
            y1="34.813"
            y2="121.524"
          >
            <stop stopColor="white" />
            <stop offset="0.874488" stopColor="#101010" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint4_linear_3_5525"
            x1="759.22"
            x2="759.22"
            y1="64.0907"
            y2="123.242"
          >
            <stop stopColor="white" />
            <stop offset="0.874488" stopColor="#101010" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint5_linear_3_5525"
            x1="662.227"
            x2="662.227"
            y1="48.1918"
            y2="123.251"
          >
            <stop stopColor="white" />
            <stop offset="0.874488" stopColor="#101010" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint6_linear_3_5525"
            x1="535.721"
            x2="535.721"
            y1="36.3825"
            y2="121.525"
          >
            <stop stopColor="white" />
            <stop offset="0.874488" stopColor="#101010" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint7_linear_3_5525"
            x1="447.024"
            x2="447.024"
            y1="43.6001"
            y2="122.868"
          >
            <stop stopColor="white" />
            <stop offset="0.874488" stopColor="#101010" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint8_linear_3_5525"
            x1="330.883"
            x2="330.883"
            y1="64.7165"
            y2="121.515"
          >
            <stop stopColor="white" />
            <stop offset="0.874488" stopColor="#101010" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint9_linear_3_5525"
            x1="208.631"
            x2="208.631"
            y1="64.0458"
            y2="123.085"
          >
            <stop stopColor="white" />
            <stop offset="0.874488" stopColor="#101010" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint10_linear_3_5525"
            x1="130.014"
            x2="130.014"
            y1="63.596"
            y2="121.515"
          >
            <stop stopColor="white" />
            <stop offset="0.874488" stopColor="#101010" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint11_linear_3_5525"
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
      className="absolute bg-white content-stretch flex flex-col gap-[120px] items-center left-1/2 overflow-clip pb-0 pt-[120px] px-[108px] rounded-tl-[36px] rounded-tr-[36px] top-[3107px] translate-x-[-50%] w-[1440px]"
      data-name="FooterSection"
    >
      <LineMask />
      <FooterContainer />
    </div>
  );
}

function Container() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#fbfbfb] text-[17.8px] w-full">
        <p className="leading-[30px]">Starter</p>
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div
      className="content-stretch flex flex-col items-start pb-0 pt-[10px] px-0 relative shrink-0 w-full"
      data-name="Margin"
    >
      <Container />
    </div>
  );
}

function Container1() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#fbfbfb] text-[13.1px] text-nowrap">
        <p className="leading-[21px]">Get the basics right</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#fbfbfb] text-[16px] text-nowrap">
        <p className="leading-[24px]">$</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#fbfbfb] text-[32px] text-nowrap">
        <p className="leading-[48px]">1000</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div
      className="content-stretch flex gap-[5.01px] items-center relative shrink-0 w-full"
      data-name="Container"
    >
      <Container2 />
      <Container3 />
    </div>
  );
}

function Container5() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#fbfbfb] text-[19.4px] w-full">
        <p className="leading-[30px]">What You Get</p>
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div
      className="content-stretch flex flex-col items-start pb-0 pt-[10px] px-0 relative shrink-0 w-full"
      data-name="Margin"
    >
      <Container5 />
    </div>
  );
}

function Group() {
  return (
    <div
      className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-[0px] mask-size-[15px_15px]"
      data-name="Group"
      style={{ maskImage: `url('${imgGroup}')` }}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 15 15"
      >
        <g id="Group">
          <path
            d={svgPaths.p2761e300}
            fill="var(--fill-0, white)"
            id="Vector"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p2c00a880}
            fill="var(--fill-0, black)"
            fillRule="evenodd"
            id="Vector_2"
          />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group />
    </div>
  );
}

function Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201Svg() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-[15px]"
      data-name="68c92b7243f69c0b565cfae6_68ba8636b5d233f4c4fab950_tick%20(4)%201%201.svg"
    >
      <ClipPathGroup />
    </div>
  );
}

function Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201SvgFill() {
  return (
    <div
      className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[15px]"
      data-name="68c92b7243f69c0b565cfae6_68ba8636b5d233f4c4fab950_tick%20(4)%201%201.svg fill"
    >
      <Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201Svg />
    </div>
  );
}

function Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201Svg1() {
  return (
    <div
      className="relative shrink-0 size-[15px]"
      data-name="68c92b7243f69c0b565cfae6_68ba8636b5d233f4c4fab950_tick%20(4)%201%201.svg"
    >
      <div className="bg-clip-padding border-0 border-transparent border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201SvgFill />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-transparent border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#fbfbfb] text-[13.3px] text-nowrap">
          <p className="leading-[21px]">Master Company Profile</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div
      className="content-stretch flex gap-[10px] items-center pb-[11px] pt-[10px] px-0 relative shrink-0 w-full"
      data-name="HorizontalBorder"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#333] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201Svg1 />
      <Container6 />
    </div>
  );
}

function Group1() {
  return (
    <div
      className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-[0px] mask-size-[15px_15px]"
      data-name="Group"
      style={{ maskImage: `url('${imgGroup}')` }}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 15 15"
      >
        <g id="Group">
          <path
            d={svgPaths.p2761e300}
            fill="var(--fill-0, white)"
            id="Vector"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p2c00a880}
            fill="var(--fill-0, black)"
            fillRule="evenodd"
            id="Vector_2"
          />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup1() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group1 />
    </div>
  );
}

function Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201Svg2() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-[15px]"
      data-name="68c92b7243f69c0b565cfae6_68ba8636b5d233f4c4fab950_tick%20(4)%201%201.svg"
    >
      <ClipPathGroup1 />
    </div>
  );
}

function Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201SvgFill1() {
  return (
    <div
      className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[15px]"
      data-name="68c92b7243f69c0b565cfae6_68ba8636b5d233f4c4fab950_tick%20(4)%201%201.svg fill"
    >
      <Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201Svg2 />
    </div>
  );
}

function Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201Svg3() {
  return (
    <div
      className="relative shrink-0 size-[15px]"
      data-name="68c92b7243f69c0b565cfae6_68ba8636b5d233f4c4fab950_tick%20(4)%201%201.svg"
    >
      <div className="bg-clip-padding border-0 border-transparent border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201SvgFill1 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-transparent border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#fbfbfb] text-[13.2px] text-nowrap">
          <p className="leading-[21px]">Corporate Identity Documents</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder1() {
  return (
    <div
      className="content-stretch flex gap-[10px] items-center pb-[11px] pt-[10px] px-0 relative shrink-0 w-full"
      data-name="HorizontalBorder"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#333] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201Svg3 />
      <Container7 />
    </div>
  );
}

function Group2() {
  return (
    <div
      className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-[0px] mask-size-[15px_15px]"
      data-name="Group"
      style={{ maskImage: `url('${imgGroup}')` }}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 15 15"
      >
        <g id="Group">
          <path
            d={svgPaths.p2761e300}
            fill="var(--fill-0, white)"
            id="Vector"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p2c00a880}
            fill="var(--fill-0, black)"
            fillRule="evenodd"
            id="Vector_2"
          />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup2() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group2 />
    </div>
  );
}

function Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201Svg4() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-[15px]"
      data-name="68c92b7243f69c0b565cfae6_68ba8636b5d233f4c4fab950_tick%20(4)%201%201.svg"
    >
      <ClipPathGroup2 />
    </div>
  );
}

function Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201SvgFill2() {
  return (
    <div
      className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[15px]"
      data-name="68c92b7243f69c0b565cfae6_68ba8636b5d233f4c4fab950_tick%20(4)%201%201.svg fill"
    >
      <Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201Svg4 />
    </div>
  );
}

function Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201Svg5() {
  return (
    <div
      className="relative shrink-0 size-[15px]"
      data-name="68c92b7243f69c0b565cfae6_68ba8636b5d233f4c4fab950_tick%20(4)%201%201.svg"
    >
      <div className="bg-clip-padding border-0 border-transparent border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201SvgFill2 />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-transparent border-solid content-stretch flex flex-col items-start pl-0 pr-[49.23px] py-0 relative">
        <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[21px] relative shrink-0 text-[#fbfbfb] text-[13.3px] text-nowrap">
          <p className="mb-0">{`Email Signatures, Social Media Avatars & Banners,`}</p>
          <p className="mb-0">Favicon/App Icons, Zoom Backgrounds, Digital</p>
          <p>Wallpapers + more</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder2() {
  return (
    <div
      className="content-stretch flex gap-[10px] items-center pb-[11px] pt-[10px] px-0 relative shrink-0 w-full"
      data-name="HorizontalBorder"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#333] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201Svg5 />
      <Container8 />
    </div>
  );
}

function Container9() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#fbfbfb] text-[19.5px] w-full">
        <p className="leading-[30px]">Outcome KPIs</p>
      </div>
    </div>
  );
}

function Margin2() {
  return (
    <div
      className="content-stretch flex flex-col items-start pb-0 pt-[10px] px-0 relative shrink-0 w-full"
      data-name="Margin"
    >
      <Container9 />
    </div>
  );
}

function Group3() {
  return (
    <div
      className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-[0px] mask-size-[15px_15px]"
      data-name="Group"
      style={{ maskImage: `url('${imgGroup}')` }}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 15 15"
      >
        <g id="Group">
          <path
            d={svgPaths.p2761e300}
            fill="var(--fill-0, white)"
            id="Vector"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p2c00a880}
            fill="var(--fill-0, black)"
            fillRule="evenodd"
            id="Vector_2"
          />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup3() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group3 />
    </div>
  );
}

function Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201Svg6() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-[15px]"
      data-name="68c92b7243f69c0b565cfae6_68ba8636b5d233f4c4fab950_tick%20(4)%201%201.svg"
    >
      <ClipPathGroup3 />
    </div>
  );
}

function Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201SvgFill3() {
  return (
    <div
      className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[15px]"
      data-name="68c92b7243f69c0b565cfae6_68ba8636b5d233f4c4fab950_tick%20(4)%201%201.svg fill"
    >
      <Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201Svg6 />
    </div>
  );
}

function Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201Svg7() {
  return (
    <div
      className="relative shrink-0 size-[15px]"
      data-name="68c92b7243f69c0b565cfae6_68ba8636b5d233f4c4fab950_tick%20(4)%201%201.svg"
    >
      <div className="bg-clip-padding border-0 border-transparent border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201SvgFill3 />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-transparent border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#fbfbfb] text-[13.1px] text-nowrap">
          <p className="leading-[21px]">
            +15% higher first-reply rate on outreach (credibility lift)
          </p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder3() {
  return (
    <div
      className="content-stretch flex gap-[10px] items-center pb-[11px] pt-[10px] px-0 relative shrink-0 w-full"
      data-name="HorizontalBorder"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#333] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201Svg7 />
      <Container10 />
    </div>
  );
}

function Group4() {
  return (
    <div
      className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-[0px] mask-size-[15px_15px]"
      data-name="Group"
      style={{ maskImage: `url('${imgGroup}')` }}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 15 15"
      >
        <g id="Group">
          <path
            d={svgPaths.p2761e300}
            fill="var(--fill-0, white)"
            id="Vector"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p2c00a880}
            fill="var(--fill-0, black)"
            fillRule="evenodd"
            id="Vector_2"
          />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup4() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group4 />
    </div>
  );
}

function Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201Svg8() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-[15px]"
      data-name="68c92b7243f69c0b565cfae6_68ba8636b5d233f4c4fab950_tick%20(4)%201%201.svg"
    >
      <ClipPathGroup4 />
    </div>
  );
}

function Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201SvgFill4() {
  return (
    <div
      className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[15px]"
      data-name="68c92b7243f69c0b565cfae6_68ba8636b5d233f4c4fab950_tick%20(4)%201%201.svg fill"
    >
      <Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201Svg8 />
    </div>
  );
}

function Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201Svg9() {
  return (
    <div
      className="relative shrink-0 size-[15px]"
      data-name="68c92b7243f69c0b565cfae6_68ba8636b5d233f4c4fab950_tick%20(4)%201%201.svg"
    >
      <div className="bg-clip-padding border-0 border-transparent border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201SvgFill4 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-transparent border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#fbfbfb] text-[13.2px] text-nowrap">
          <p className="leading-[21px]">
            'ˆ’30% faster time-to-proposal (centralized master doc)
          </p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder4() {
  return (
    <div
      className="content-stretch flex gap-[10px] items-center pb-[11px] pt-[10px] px-0 relative shrink-0 w-full"
      data-name="HorizontalBorder"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#333] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201Svg9 />
      <Container11 />
    </div>
  );
}

function Group5() {
  return (
    <div
      className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-[0px] mask-size-[15px_15px]"
      data-name="Group"
      style={{ maskImage: `url('${imgGroup}')` }}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 15 15"
      >
        <g id="Group">
          <path
            d={svgPaths.p2761e300}
            fill="var(--fill-0, white)"
            id="Vector"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p2c00a880}
            fill="var(--fill-0, black)"
            fillRule="evenodd"
            id="Vector_2"
          />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup5() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group5 />
    </div>
  );
}

function Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201Svg10() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-[15px]"
      data-name="68c92b7243f69c0b565cfae6_68ba8636b5d233f4c4fab950_tick%20(4)%201%201.svg"
    >
      <ClipPathGroup5 />
    </div>
  );
}

function Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201SvgFill5() {
  return (
    <div
      className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[15px]"
      data-name="68c92b7243f69c0b565cfae6_68ba8636b5d233f4c4fab950_tick%20(4)%201%201.svg fill"
    >
      <Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201Svg10 />
    </div>
  );
}

function Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201Svg11() {
  return (
    <div
      className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 size-[15px]"
      data-name="68c92b7243f69c0b565cfae6_68ba8636b5d233f4c4fab950_tick%20(4)%201%201.svg"
    >
      <Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201SvgFill5 />
    </div>
  );
}

function Container12() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#fbfbfb] text-[13.3px] text-nowrap">
        <p className="leading-[21px]">{`90% adoption of signature & avatar assets within 7 days`}</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div
      className="content-stretch flex gap-[10px] items-center px-0 py-[10px] relative shrink-0 w-full"
      data-name="Container"
    >
      <Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201Svg11 />
      <Container12 />
    </div>
  );
}

function Link5() {
  return (
    <div
      className="bg-[#fbfbfb] relative rounded-[8px] shrink-0 w-full"
      data-name="Link"
    >
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[15px] py-[9px] relative w-full">
          <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[12px] text-black text-center text-nowrap uppercase">
            <p className="leading-[18px]">Get Started</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function P() {
  return (
    <div
      className="absolute content-stretch flex flex-col gap-[10px] items-start left-[64px] min-h-[500px] p-[20px] rounded-[20px] top-[1055px]"
      data-name="P1"
      style={{
        backgroundImage:
          "linear-gradient(-6.64143deg, rgb(0, 0, 0) 0%, rgb(0, 0, 0) 28%, rgb(0, 0, 0) 59%, rgb(36, 84, 87) 77%, rgb(56, 200, 142) 100%)",
      }}
    >
      <Margin />
      <Container1 />
      <Container4 />
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#fbfbfb] text-[16px] text-nowrap">
        <p className="leading-[24px]">Timeline: 3-4 Weeks</p>
      </div>
      <Margin1 />
      <HorizontalBorder />
      <HorizontalBorder1 />
      <HorizontalBorder2 />
      <Margin2 />
      <HorizontalBorder3 />
      <HorizontalBorder4 />
      <Container13 />
      <Link5 />
    </div>
  );
}

function Margin3() {
  return (
    <div
      className="content-stretch flex flex-col items-start pb-0 pt-[10px] px-0 relative shrink-0"
      data-name="Margin"
    >
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#fbfbfb] text-[20.5px] text-nowrap">
        <p className="leading-[33px]">Growth (Most Popular)</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#fbfbfb] text-[17.6px] text-nowrap">
        <p className="leading-[26.4px]">$</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#fbfbfb] text-[35.2px] text-nowrap">
        <p className="leading-[52.8px]">2100</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div
      className="content-stretch flex gap-[5.5px] items-center relative shrink-0"
      data-name="Container"
    >
      <Container14 />
      <Container15 />
    </div>
  );
}

function Margin4() {
  return (
    <div
      className="content-stretch flex flex-col items-start pb-0 pt-[10px] px-0 relative shrink-0"
      data-name="Margin"
    >
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#fbfbfb] text-[21.3px] text-nowrap">
        <p className="leading-[33px]">What You Get</p>
      </div>
    </div>
  );
}

function Group6() {
  return (
    <div
      className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-[0px] mask-size-[16.5px_16.5px]"
      data-name="Group"
      style={{ maskImage: `url('${imgGroup1}')` }}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16.5 16.5"
      >
        <g id="Group">
          <path d={svgPaths.p57abb00} fill="var(--fill-0, white)" id="Vector" />
          <path
            clipRule="evenodd"
            d={svgPaths.p59ddb00}
            fill="var(--fill-0, black)"
            fillRule="evenodd"
            id="Vector_2"
          />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup6() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group6 />
    </div>
  );
}

function Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201Svg12() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-[16.5px]"
      data-name="68c92b7243f69c0b565cfae6_68ba8636b5d233f4c4fab950_tick%20(4)%201%201.svg"
    >
      <ClipPathGroup6 />
    </div>
  );
}

function Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201SvgFill6() {
  return (
    <div
      className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16.5px]"
      data-name="68c92b7243f69c0b565cfae6_68ba8636b5d233f4c4fab950_tick%20(4)%201%201.svg fill"
    >
      <Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201Svg12 />
    </div>
  );
}

function Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201Svg13() {
  return (
    <div
      className="relative shrink-0 size-[16.5px]"
      data-name="68c92b7243f69c0b565cfae6_68ba8636b5d233f4c4fab950_tick%20(4)%201%201.svg"
    >
      <div className="bg-clip-padding border-0 border-transparent border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201SvgFill6 />
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-transparent border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#fbfbfb] text-[14.4px] text-nowrap">
          <p className="leading-[23.1px]">Everything in Starter</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder5() {
  return (
    <div
      className="content-stretch flex gap-[11px] items-center pb-[12.1px] pt-[11px] px-0 relative shrink-0 w-[417.12px]"
      data-name="HorizontalBorder"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#fbfbfb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201Svg13 />
      <Container17 />
    </div>
  );
}

function Group7() {
  return (
    <div
      className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-[0px] mask-size-[16.5px_16.5px]"
      data-name="Group"
      style={{ maskImage: `url('${imgGroup1}')` }}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16.5 16.5"
      >
        <g id="Group">
          <path d={svgPaths.p57abb00} fill="var(--fill-0, white)" id="Vector" />
          <path
            clipRule="evenodd"
            d={svgPaths.p59ddb00}
            fill="var(--fill-0, black)"
            fillRule="evenodd"
            id="Vector_2"
          />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup7() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group7 />
    </div>
  );
}

function Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201Svg14() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-[16.5px]"
      data-name="68c92b7243f69c0b565cfae6_68ba8636b5d233f4c4fab950_tick%20(4)%201%201.svg"
    >
      <ClipPathGroup7 />
    </div>
  );
}

function Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201SvgFill7() {
  return (
    <div
      className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16.5px]"
      data-name="68c92b7243f69c0b565cfae6_68ba8636b5d233f4c4fab950_tick%20(4)%201%201.svg fill"
    >
      <Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201Svg14 />
    </div>
  );
}

function Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201Svg15() {
  return (
    <div
      className="relative shrink-0 size-[16.5px]"
      data-name="68c92b7243f69c0b565cfae6_68ba8636b5d233f4c4fab950_tick%20(4)%201%201.svg"
    >
      <div className="bg-clip-padding border-0 border-transparent border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201SvgFill7 />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-transparent border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#fbfbfb] text-[14.8px] text-nowrap">
          <p className="leading-[23.1px]">{`Master Product & Sales Decks / PPTs`}</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder6() {
  return (
    <div
      className="content-stretch flex gap-[11px] items-center pb-[12.1px] pt-[11px] px-0 relative shrink-0 w-[417.12px]"
      data-name="HorizontalBorder"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#fbfbfb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201Svg15 />
      <Container18 />
    </div>
  );
}

function Group8() {
  return (
    <div
      className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-[0px] mask-size-[16.5px_16.5px]"
      data-name="Group"
      style={{ maskImage: `url('${imgGroup1}')` }}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16.5 16.5"
      >
        <g id="Group">
          <path d={svgPaths.p57abb00} fill="var(--fill-0, white)" id="Vector" />
          <path
            clipRule="evenodd"
            d={svgPaths.p59ddb00}
            fill="var(--fill-0, black)"
            fillRule="evenodd"
            id="Vector_2"
          />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup8() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group8 />
    </div>
  );
}

function Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201Svg16() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-[16.5px]"
      data-name="68c92b7243f69c0b565cfae6_68ba8636b5d233f4c4fab950_tick%20(4)%201%201.svg"
    >
      <ClipPathGroup8 />
    </div>
  );
}

function Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201SvgFill8() {
  return (
    <div
      className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16.5px]"
      data-name="68c92b7243f69c0b565cfae6_68ba8636b5d233f4c4fab950_tick%20(4)%201%201.svg fill"
    >
      <Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201Svg16 />
    </div>
  );
}

function Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201Svg17() {
  return (
    <div
      className="relative shrink-0 size-[16.5px]"
      data-name="68c92b7243f69c0b565cfae6_68ba8636b5d233f4c4fab950_tick%20(4)%201%201.svg"
    >
      <div className="bg-clip-padding border-0 border-transparent border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201SvgFill8 />
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-transparent border-solid content-stretch flex flex-col items-start pl-0 pr-[23.32px] py-0 relative">
        <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[23.1px] relative shrink-0 text-[#fbfbfb] text-[14.4px] text-nowrap">
          <p className="mb-0">
            Full Employee Branding Setup (profiles, assets, internal
          </p>
          <p>rollout) + more</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder7() {
  return (
    <div
      className="content-stretch flex gap-[11px] items-center pb-[12.1px] pt-[11px] px-0 relative shrink-0 w-[417.12px]"
      data-name="HorizontalBorder"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#fbfbfb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201Svg17 />
      <Container19 />
    </div>
  );
}

function Group9() {
  return (
    <div
      className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-[0px] mask-size-[16.5px_16.5px]"
      data-name="Group"
      style={{ maskImage: `url('${imgGroup1}')` }}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16.5 16.5"
      >
        <g id="Group">
          <path d={svgPaths.p57abb00} fill="var(--fill-0, white)" id="Vector" />
          <path
            clipRule="evenodd"
            d={svgPaths.p59ddb00}
            fill="var(--fill-0, black)"
            fillRule="evenodd"
            id="Vector_2"
          />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup9() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group9 />
    </div>
  );
}

function Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201Svg18() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-[16.5px]"
      data-name="68c92b7243f69c0b565cfae6_68ba8636b5d233f4c4fab950_tick%20(4)%201%201.svg"
    >
      <ClipPathGroup9 />
    </div>
  );
}

function Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201SvgFill9() {
  return (
    <div
      className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16.5px]"
      data-name="68c92b7243f69c0b565cfae6_68ba8636b5d233f4c4fab950_tick%20(4)%201%201.svg fill"
    >
      <Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201Svg18 />
    </div>
  );
}

function Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201Svg19() {
  return (
    <div
      className="relative shrink-0 size-[16.5px]"
      data-name="68c92b7243f69c0b565cfae6_68ba8636b5d233f4c4fab950_tick%20(4)%201%201.svg"
    >
      <div className="bg-clip-padding border-0 border-transparent border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201SvgFill9 />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-transparent border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#fbfbfb] text-[14.7px] text-nowrap">
          <p className="leading-[23.1px]">Social Media Design Refresh</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder8() {
  return (
    <div
      className="content-stretch flex gap-[11px] items-center pb-[12.1px] pt-[11px] px-0 relative shrink-0 w-[417.12px]"
      data-name="HorizontalBorder"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#fbfbfb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201Svg19 />
      <Container20 />
    </div>
  );
}

function Group10() {
  return (
    <div
      className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-[0px] mask-size-[16.5px_16.5px]"
      data-name="Group"
      style={{ maskImage: `url('${imgGroup1}')` }}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16.5 16.5"
      >
        <g id="Group">
          <path d={svgPaths.p57abb00} fill="var(--fill-0, white)" id="Vector" />
          <path
            clipRule="evenodd"
            d={svgPaths.p59ddb00}
            fill="var(--fill-0, black)"
            fillRule="evenodd"
            id="Vector_2"
          />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup10() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group10 />
    </div>
  );
}

function Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201Svg20() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-[16.5px]"
      data-name="68c92b7243f69c0b565cfae6_68ba8636b5d233f4c4fab950_tick%20(4)%201%201.svg"
    >
      <ClipPathGroup10 />
    </div>
  );
}

function Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201SvgFill10() {
  return (
    <div
      className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16.5px]"
      data-name="68c92b7243f69c0b565cfae6_68ba8636b5d233f4c4fab950_tick%20(4)%201%201.svg fill"
    >
      <Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201Svg20 />
    </div>
  );
}

function Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201Svg21() {
  return (
    <div
      className="relative shrink-0 size-[16.5px]"
      data-name="68c92b7243f69c0b565cfae6_68ba8636b5d233f4c4fab950_tick%20(4)%201%201.svg"
    >
      <div className="bg-clip-padding border-0 border-transparent border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201SvgFill10 />
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-transparent border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#fbfbfb] text-[14.7px] text-nowrap">
          <p className="leading-[23.1px]">Website Hero Section Revamp</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder9() {
  return (
    <div
      className="content-stretch flex gap-[11px] items-center pb-[12.1px] pt-[11px] px-0 relative shrink-0 w-[417.12px]"
      data-name="HorizontalBorder"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#fbfbfb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201Svg21 />
      <Container21 />
    </div>
  );
}

function Group11() {
  return (
    <div
      className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-[0px] mask-size-[16.5px_16.5px]"
      data-name="Group"
      style={{ maskImage: `url('${imgGroup1}')` }}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16.5 16.5"
      >
        <g id="Group">
          <path d={svgPaths.p57abb00} fill="var(--fill-0, white)" id="Vector" />
          <path
            clipRule="evenodd"
            d={svgPaths.p59ddb00}
            fill="var(--fill-0, black)"
            fillRule="evenodd"
            id="Vector_2"
          />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup11() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group11 />
    </div>
  );
}

function Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201Svg22() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-[16.5px]"
      data-name="68c92b7243f69c0b565cfae6_68ba8636b5d233f4c4fab950_tick%20(4)%201%201.svg"
    >
      <ClipPathGroup11 />
    </div>
  );
}

function Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201SvgFill11() {
  return (
    <div
      className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16.5px]"
      data-name="68c92b7243f69c0b565cfae6_68ba8636b5d233f4c4fab950_tick%20(4)%201%201.svg fill"
    >
      <Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201Svg22 />
    </div>
  );
}

function Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201Svg23() {
  return (
    <div
      className="relative shrink-0 size-[16.5px]"
      data-name="68c92b7243f69c0b565cfae6_68ba8636b5d233f4c4fab950_tick%20(4)%201%201.svg"
    >
      <div className="bg-clip-padding border-0 border-transparent border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201SvgFill11 />
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-transparent border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#fbfbfb] text-[14.8px] text-nowrap">
          <p className="leading-[23.1px]">SLA's and Proposal Templates</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder10() {
  return (
    <div
      className="content-stretch flex gap-[11px] items-center pb-[12.1px] pt-[11px] px-0 relative shrink-0 w-[417.12px]"
      data-name="HorizontalBorder"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#fbfbfb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201Svg23 />
      <Container22 />
    </div>
  );
}

function Group12() {
  return (
    <div
      className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-[0px] mask-size-[16.5px_16.5px]"
      data-name="Group"
      style={{ maskImage: `url('${imgGroup1}')` }}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16.5 16.5"
      >
        <g id="Group">
          <path d={svgPaths.p57abb00} fill="var(--fill-0, white)" id="Vector" />
          <path
            clipRule="evenodd"
            d={svgPaths.p59ddb00}
            fill="var(--fill-0, black)"
            fillRule="evenodd"
            id="Vector_2"
          />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup12() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group12 />
    </div>
  );
}

function Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201Svg24() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-[16.5px]"
      data-name="68c92b7243f69c0b565cfae6_68ba8636b5d233f4c4fab950_tick%20(4)%201%201.svg"
    >
      <ClipPathGroup12 />
    </div>
  );
}

function Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201SvgFill12() {
  return (
    <div
      className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16.5px]"
      data-name="68c92b7243f69c0b565cfae6_68ba8636b5d233f4c4fab950_tick%20(4)%201%201.svg fill"
    >
      <Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201Svg24 />
    </div>
  );
}

function Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201Svg25() {
  return (
    <div
      className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 size-[16.5px]"
      data-name="68c92b7243f69c0b565cfae6_68ba8636b5d233f4c4fab950_tick%20(4)%201%201.svg"
    >
      <Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201SvgFill12 />
    </div>
  );
}

function Container23() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#fbfbfb] text-[14.7px] text-nowrap">
        <p className="leading-[23.1px]">Custom Iconography</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div
      className="content-stretch flex gap-[11px] items-center px-0 py-[11px] relative shrink-0 w-[417.12px]"
      data-name="Container"
    >
      <Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201Svg25 />
      <Container23 />
    </div>
  );
}

function Margin5() {
  return (
    <div
      className="content-stretch flex flex-col items-start pb-0 pt-[10px] px-0 relative shrink-0"
      data-name="Margin"
    >
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#fbfbfb] text-[21.5px] text-nowrap">
        <p className="leading-[33px]">Outcome KPIs</p>
      </div>
    </div>
  );
}

function Group13() {
  return (
    <div
      className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-[0px] mask-size-[16.5px_16.5px]"
      data-name="Group"
      style={{ maskImage: `url('${imgGroup1}')` }}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16.5 16.5"
      >
        <g id="Group">
          <path d={svgPaths.p57abb00} fill="var(--fill-0, white)" id="Vector" />
          <path
            clipRule="evenodd"
            d={svgPaths.p59ddb00}
            fill="var(--fill-0, black)"
            fillRule="evenodd"
            id="Vector_2"
          />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup13() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group13 />
    </div>
  );
}

function Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201Svg26() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-[16.5px]"
      data-name="68c92b7243f69c0b565cfae6_68ba8636b5d233f4c4fab950_tick%20(4)%201%201.svg"
    >
      <ClipPathGroup13 />
    </div>
  );
}

function Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201SvgFill13() {
  return (
    <div
      className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16.5px]"
      data-name="68c92b7243f69c0b565cfae6_68ba8636b5d233f4c4fab950_tick%20(4)%201%201.svg fill"
    >
      <Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201Svg26 />
    </div>
  );
}

function Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201Svg27() {
  return (
    <div
      className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 size-[16.5px]"
      data-name="68c92b7243f69c0b565cfae6_68ba8636b5d233f4c4fab950_tick%20(4)%201%201.svg"
    >
      <Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201SvgFill13 />
    </div>
  );
}

function Container25() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#fbfbfb] text-[14.8px] text-nowrap">
        <p className="leading-[23.1px]">+25% deck'demo/meeting rate</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div
      className="content-stretch flex gap-[11px] items-center px-0 py-[11px] relative shrink-0 w-[417.12px]"
      data-name="Container"
    >
      <Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201Svg27 />
      <Container25 />
    </div>
  );
}

function Group14() {
  return (
    <div
      className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-[0px] mask-size-[16.5px_16.5px]"
      data-name="Group"
      style={{ maskImage: `url('${imgGroup1}')` }}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16.5 16.5"
      >
        <g id="Group">
          <path d={svgPaths.p57abb00} fill="var(--fill-0, white)" id="Vector" />
          <path
            clipRule="evenodd"
            d={svgPaths.p59ddb00}
            fill="var(--fill-0, black)"
            fillRule="evenodd"
            id="Vector_2"
          />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup14() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group14 />
    </div>
  );
}

function Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201Svg28() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-[16.5px]"
      data-name="68c92b7243f69c0b565cfae6_68ba8636b5d233f4c4fab950_tick%20(4)%201%201.svg"
    >
      <ClipPathGroup14 />
    </div>
  );
}

function Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201SvgFill14() {
  return (
    <div
      className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16.5px]"
      data-name="68c92b7243f69c0b565cfae6_68ba8636b5d233f4c4fab950_tick%20(4)%201%201.svg fill"
    >
      <Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201Svg28 />
    </div>
  );
}

function Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201Svg29() {
  return (
    <div
      className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 size-[16.5px]"
      data-name="68c92b7243f69c0b565cfae6_68ba8636b5d233f4c4fab950_tick%20(4)%201%201.svg"
    >
      <Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201SvgFill14 />
    </div>
  );
}

function Container27() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#fbfbfb] text-[15px] text-nowrap">
        <p className="leading-[23.1px]">+20% proposal acceptance / win rate</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div
      className="content-stretch flex gap-[11px] items-center px-0 py-[11px] relative shrink-0 w-[417.12px]"
      data-name="Container"
    >
      <Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201Svg29 />
      <Container27 />
    </div>
  );
}

function Group15() {
  return (
    <div
      className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-[0px] mask-size-[16.5px_16.5px]"
      data-name="Group"
      style={{ maskImage: `url('${imgGroup1}')` }}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16.5 16.5"
      >
        <g id="Group">
          <path d={svgPaths.p57abb00} fill="var(--fill-0, white)" id="Vector" />
          <path
            clipRule="evenodd"
            d={svgPaths.p59ddb00}
            fill="var(--fill-0, black)"
            fillRule="evenodd"
            id="Vector_2"
          />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup15() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group15 />
    </div>
  );
}

function Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201Svg30() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-[16.5px]"
      data-name="68c92b7243f69c0b565cfae6_68ba8636b5d233f4c4fab950_tick%20(4)%201%201.svg"
    >
      <ClipPathGroup15 />
    </div>
  );
}

function Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201SvgFill15() {
  return (
    <div
      className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16.5px]"
      data-name="68c92b7243f69c0b565cfae6_68ba8636b5d233f4c4fab950_tick%20(4)%201%201.svg fill"
    >
      <Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201Svg30 />
    </div>
  );
}

function Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201Svg31() {
  return (
    <div
      className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 size-[16.5px]"
      data-name="68c92b7243f69c0b565cfae6_68ba8636b5d233f4c4fab950_tick%20(4)%201%201.svg"
    >
      <Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201SvgFill15 />
    </div>
  );
}

function Container29() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#fbfbfb] text-[15px] text-nowrap">
        <p className="leading-[23.1px]">'ˆ’25% revision cycles on SOWs</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div
      className="content-stretch flex gap-[11px] items-center px-0 py-[11px] relative shrink-0 w-[417.12px]"
      data-name="Container"
    >
      <Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201Svg31 />
      <Container29 />
    </div>
  );
}

function Link6() {
  return (
    <div
      className="bg-[#fbfbfb] content-stretch flex flex-col items-center pb-[10.35px] pt-[9.25px] px-[15px] relative rounded-[8px] shrink-0 w-[417.12px]"
      data-name="Link"
    >
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[13.2px] text-black text-center text-nowrap uppercase">
        <p className="leading-[19.8px]">Get Started</p>
      </div>
    </div>
  );
}

function P1() {
  return (
    <div
      className="absolute content-stretch flex flex-col gap-[10px] items-start left-[490.23px] min-h-[550px] p-[20px] rounded-[20px] top-[1055px]"
      data-name="P2"
      style={{
        backgroundImage:
          "linear-gradient(-6.05197deg, rgb(0, 0, 0) 0%, rgb(0, 0, 0) 28%, rgb(0, 0, 0) 59%, rgb(36, 84, 87) 77%, rgb(56, 200, 142) 100%)",
      }}
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#5f5f5f] border-solid inset-0 pointer-events-none rounded-[20px]"
      />
      <Margin3 />
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[26.15px] justify-center leading-[0] relative shrink-0 text-[#fbfbfb] text-[14.4px] w-[114.651px]">
        <p className="leading-[23.1px]">Close more deals</p>
      </div>
      <Container16 />
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[30.4px] justify-center leading-[0] relative shrink-0 text-[#fbfbfb] text-[17.6px] w-[165.01px]">
        <p className="leading-[26.4px]">Timeline: 5-7 Weeks</p>
      </div>
      <Margin4 />
      <HorizontalBorder5 />
      <HorizontalBorder6 />
      <HorizontalBorder7 />
      <HorizontalBorder8 />
      <HorizontalBorder9 />
      <HorizontalBorder10 />
      <Container24 />
      <Margin5 />
      <Container26 />
      <Container28 />
      <Container30 />
      <Link6 />
    </div>
  );
}

function Container31() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#fbfbfb] text-[18.4px] w-full">
        <p className="leading-[30px]">Enterprise</p>
      </div>
    </div>
  );
}

function Margin6() {
  return (
    <div
      className="content-stretch flex flex-col items-start pb-0 pt-[10px] px-0 relative shrink-0 w-full"
      data-name="Margin"
    >
      <Container31 />
    </div>
  );
}

function Container32() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#fbfbfb] text-[13.3px] text-nowrap">
        <p className="leading-[21px]">Full Physical Roll-out</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#fbfbfb] text-[16px] text-nowrap">
        <p className="leading-[24px]">$</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#fbfbfb] text-[32px] text-nowrap">
        <p className="leading-[48px]">3000</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div
      className="content-stretch flex gap-[5.01px] items-center relative shrink-0"
      data-name="Container"
    >
      <Container33 />
      <Container34 />
    </div>
  );
}

function Container36() {
  return (
    <div
      className="content-stretch flex items-center relative shrink-0 w-full"
      data-name="Container"
    >
      <Container35 />
    </div>
  );
}

function Container37() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#fbfbfb] text-[19.4px] w-full">
        <p className="leading-[30px]">What You Get</p>
      </div>
    </div>
  );
}

function Margin7() {
  return (
    <div
      className="content-stretch flex flex-col items-start pb-0 pt-[10px] px-0 relative shrink-0 w-full"
      data-name="Margin"
    >
      <Container37 />
    </div>
  );
}

function Group16() {
  return (
    <div
      className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-[0px] mask-size-[15px_15px]"
      data-name="Group"
      style={{ maskImage: `url('${imgGroup}')` }}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 15 15"
      >
        <g id="Group">
          <path
            d={svgPaths.p2761e300}
            fill="var(--fill-0, white)"
            id="Vector"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p2c00a880}
            fill="var(--fill-0, black)"
            fillRule="evenodd"
            id="Vector_2"
          />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup16() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group16 />
    </div>
  );
}

function Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201Svg32() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-[15px]"
      data-name="68c92b7243f69c0b565cfae6_68ba8636b5d233f4c4fab950_tick%20(4)%201%201.svg"
    >
      <ClipPathGroup16 />
    </div>
  );
}

function Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201SvgFill16() {
  return (
    <div
      className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[15px]"
      data-name="68c92b7243f69c0b565cfae6_68ba8636b5d233f4c4fab950_tick%20(4)%201%201.svg fill"
    >
      <Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201Svg32 />
    </div>
  );
}

function Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201Svg33() {
  return (
    <div
      className="relative shrink-0 size-[15px]"
      data-name="68c92b7243f69c0b565cfae6_68ba8636b5d233f4c4fab950_tick%20(4)%201%201.svg"
    >
      <div className="bg-clip-padding border-0 border-transparent border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201SvgFill16 />
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-transparent border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#fbfbfb] text-[14px] text-nowrap">
          <p className="leading-[21px]">Growth Plan +</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder11() {
  return (
    <div
      className="content-stretch flex gap-[10px] items-center pb-[11px] pt-[10px] px-0 relative shrink-0 w-full"
      data-name="HorizontalBorder"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#333] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201Svg33 />
      <Container38 />
    </div>
  );
}

function Group17() {
  return (
    <div
      className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-[0px] mask-size-[15px_15px]"
      data-name="Group"
      style={{ maskImage: `url('${imgGroup}')` }}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 15 15"
      >
        <g id="Group">
          <path
            d={svgPaths.p2761e300}
            fill="var(--fill-0, white)"
            id="Vector"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p2c00a880}
            fill="var(--fill-0, black)"
            fillRule="evenodd"
            id="Vector_2"
          />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup17() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group17 />
    </div>
  );
}

function Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201Svg34() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-[15px]"
      data-name="68c92b7243f69c0b565cfae6_68ba8636b5d233f4c4fab950_tick%20(4)%201%201.svg"
    >
      <ClipPathGroup17 />
    </div>
  );
}

function Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201SvgFill17() {
  return (
    <div
      className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[15px]"
      data-name="68c92b7243f69c0b565cfae6_68ba8636b5d233f4c4fab950_tick%20(4)%201%201.svg fill"
    >
      <Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201Svg34 />
    </div>
  );
}

function Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201Svg35() {
  return (
    <div
      className="relative shrink-0 size-[15px]"
      data-name="68c92b7243f69c0b565cfae6_68ba8636b5d233f4c4fab950_tick%20(4)%201%201.svg"
    >
      <div className="bg-clip-padding border-0 border-transparent border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201SvgFill17 />
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-transparent border-solid content-stretch flex flex-col items-start pl-0 pr-[22.5px] py-0 relative">
        <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[21px] relative shrink-0 text-[#fbfbfb] text-[13.5px] text-nowrap">
          <p className="mb-0">
            Booth Kit, Reception Backdrop, Wayfinding/Signage +
          </p>
          <p>more</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder12() {
  return (
    <div
      className="content-stretch flex gap-[10px] items-center pb-[11px] pt-[10px] px-0 relative shrink-0 w-full"
      data-name="HorizontalBorder"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#333] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201Svg35 />
      <Container39 />
    </div>
  );
}

function Group18() {
  return (
    <div
      className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-[0px] mask-size-[15px_15px]"
      data-name="Group"
      style={{ maskImage: `url('${imgGroup}')` }}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 15 15"
      >
        <g id="Group">
          <path
            d={svgPaths.p2761e300}
            fill="var(--fill-0, white)"
            id="Vector"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p2c00a880}
            fill="var(--fill-0, black)"
            fillRule="evenodd"
            id="Vector_2"
          />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup18() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group18 />
    </div>
  );
}

function Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201Svg36() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-[15px]"
      data-name="68c92b7243f69c0b565cfae6_68ba8636b5d233f4c4fab950_tick%20(4)%201%201.svg"
    >
      <ClipPathGroup18 />
    </div>
  );
}

function Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201SvgFill18() {
  return (
    <div
      className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[15px]"
      data-name="68c92b7243f69c0b565cfae6_68ba8636b5d233f4c4fab950_tick%20(4)%201%201.svg fill"
    >
      <Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201Svg36 />
    </div>
  );
}

function Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201Svg37() {
  return (
    <div
      className="relative shrink-0 size-[15px]"
      data-name="68c92b7243f69c0b565cfae6_68ba8636b5d233f4c4fab950_tick%20(4)%201%201.svg"
    >
      <div className="bg-clip-padding border-0 border-transparent border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201SvgFill18 />
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-transparent border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#fbfbfb] text-[13.6px] text-nowrap">
          <p className="leading-[21px]">
            Barcodes/Labels, Shelf Talkers for D2C + more
          </p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder13() {
  return (
    <div
      className="content-stretch flex gap-[10px] items-center pb-[11px] pt-[10px] px-0 relative shrink-0 w-full"
      data-name="HorizontalBorder"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#333] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201Svg37 />
      <Container40 />
    </div>
  );
}

function Group19() {
  return (
    <div
      className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-[0px] mask-size-[15px_15px]"
      data-name="Group"
      style={{ maskImage: `url('${imgGroup}')` }}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 15 15"
      >
        <g id="Group">
          <path
            d={svgPaths.p2761e300}
            fill="var(--fill-0, white)"
            id="Vector"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p2c00a880}
            fill="var(--fill-0, black)"
            fillRule="evenodd"
            id="Vector_2"
          />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup19() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group19 />
    </div>
  );
}

function Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201Svg38() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-[15px]"
      data-name="68c92b7243f69c0b565cfae6_68ba8636b5d233f4c4fab950_tick%20(4)%201%201.svg"
    >
      <ClipPathGroup19 />
    </div>
  );
}

function Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201SvgFill19() {
  return (
    <div
      className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[15px]"
      data-name="68c92b7243f69c0b565cfae6_68ba8636b5d233f4c4fab950_tick%20(4)%201%201.svg fill"
    >
      <Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201Svg38 />
    </div>
  );
}

function Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201Svg39() {
  return (
    <div
      className="relative shrink-0 size-[15px]"
      data-name="68c92b7243f69c0b565cfae6_68ba8636b5d233f4c4fab950_tick%20(4)%201%201.svg"
    >
      <div className="bg-clip-padding border-0 border-transparent border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201SvgFill19 />
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-transparent border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#fbfbfb] text-[14px] text-nowrap">
          <p className="leading-[21px]">{`EVP, JD/Ad Kit, Offer & Welcome Pack + more`}</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder14() {
  return (
    <div
      className="content-stretch flex gap-[10px] items-center pb-[11px] pt-[10px] px-0 relative shrink-0 w-full"
      data-name="HorizontalBorder"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#333] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201Svg39 />
      <Container41 />
    </div>
  );
}

function Group20() {
  return (
    <div
      className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-[0px] mask-size-[15px_15px]"
      data-name="Group"
      style={{ maskImage: `url('${imgGroup}')` }}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 15 15"
      >
        <g id="Group">
          <path
            d={svgPaths.p2761e300}
            fill="var(--fill-0, white)"
            id="Vector"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p2c00a880}
            fill="var(--fill-0, black)"
            fillRule="evenodd"
            id="Vector_2"
          />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup20() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group20 />
    </div>
  );
}

function Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201Svg40() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-[15px]"
      data-name="68c92b7243f69c0b565cfae6_68ba8636b5d233f4c4fab950_tick%20(4)%201%201.svg"
    >
      <ClipPathGroup20 />
    </div>
  );
}

function Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201SvgFill20() {
  return (
    <div
      className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[15px]"
      data-name="68c92b7243f69c0b565cfae6_68ba8636b5d233f4c4fab950_tick%20(4)%201%201.svg fill"
    >
      <Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201Svg40 />
    </div>
  );
}

function Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201Svg41() {
  return (
    <div
      className="relative shrink-0 size-[15px]"
      data-name="68c92b7243f69c0b565cfae6_68ba8636b5d233f4c4fab950_tick%20(4)%201%201.svg"
    >
      <div className="bg-clip-padding border-0 border-transparent border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201SvgFill20 />
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-transparent border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#fbfbfb] text-[13.7px] text-nowrap">
          <p className="leading-[21px]">
            30/60/90 Playbook, Internal Newsletter + more
          </p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder15() {
  return (
    <div
      className="content-stretch flex gap-[10px] items-center pb-[11px] pt-[10px] px-0 relative shrink-0 w-full"
      data-name="HorizontalBorder"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#333] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201Svg41 />
      <Container42 />
    </div>
  );
}

function Group21() {
  return (
    <div
      className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-[0px] mask-size-[15px_15px]"
      data-name="Group"
      style={{ maskImage: `url('${imgGroup}')` }}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 15 15"
      >
        <g id="Group">
          <path
            d={svgPaths.p2761e300}
            fill="var(--fill-0, white)"
            id="Vector"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p2c00a880}
            fill="var(--fill-0, black)"
            fillRule="evenodd"
            id="Vector_2"
          />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup21() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group21 />
    </div>
  );
}

function Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201Svg42() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-[15px]"
      data-name="68c92b7243f69c0b565cfae6_68ba8636b5d233f4c4fab950_tick%20(4)%201%201.svg"
    >
      <ClipPathGroup21 />
    </div>
  );
}

function Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201SvgFill21() {
  return (
    <div
      className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[15px]"
      data-name="68c92b7243f69c0b565cfae6_68ba8636b5d233f4c4fab950_tick%20(4)%201%201.svg fill"
    >
      <Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201Svg42 />
    </div>
  );
}

function Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201Svg43() {
  return (
    <div
      className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 size-[15px]"
      data-name="68c92b7243f69c0b565cfae6_68ba8636b5d233f4c4fab950_tick%20(4)%201%201.svg"
    >
      <Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201SvgFill21 />
    </div>
  );
}

function Container43() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#fbfbfb] text-[13.3px] text-nowrap">
        <p className="leading-[21px]">
          Review/Approval Workflow, Pre-flight Checklist + more
        </p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div
      className="content-stretch flex gap-[10px] items-center px-0 py-[10px] relative shrink-0 w-full"
      data-name="Container"
    >
      <Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201Svg43 />
      <Container43 />
    </div>
  );
}

function Container45() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#fbfbfb] text-[19.5px] w-full">
        <p className="leading-[30px]">Outcome KPIs</p>
      </div>
    </div>
  );
}

function Margin8() {
  return (
    <div
      className="content-stretch flex flex-col items-start pb-0 pt-[10px] px-0 relative shrink-0 w-full"
      data-name="Margin"
    >
      <Container45 />
    </div>
  );
}

function Group22() {
  return (
    <div
      className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-[0px] mask-size-[15px_15px]"
      data-name="Group"
      style={{ maskImage: `url('${imgGroup}')` }}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 15 15"
      >
        <g id="Group">
          <path
            d={svgPaths.p2761e300}
            fill="var(--fill-0, white)"
            id="Vector"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p2c00a880}
            fill="var(--fill-0, black)"
            fillRule="evenodd"
            id="Vector_2"
          />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup22() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group22 />
    </div>
  );
}

function Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201Svg44() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-[15px]"
      data-name="68c92b7243f69c0b565cfae6_68ba8636b5d233f4c4fab950_tick%20(4)%201%201.svg"
    >
      <ClipPathGroup22 />
    </div>
  );
}

function Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201SvgFill22() {
  return (
    <div
      className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[15px]"
      data-name="68c92b7243f69c0b565cfae6_68ba8636b5d233f4c4fab950_tick%20(4)%201%201.svg fill"
    >
      <Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201Svg44 />
    </div>
  );
}

function Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201Svg45() {
  return (
    <div
      className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 size-[15px]"
      data-name="68c92b7243f69c0b565cfae6_68ba8636b5d233f4c4fab950_tick%20(4)%201%201.svg"
    >
      <Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201SvgFill22 />
    </div>
  );
}

function Container46() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#fbfbfb] text-[13.3px] text-nowrap">
        <p className="leading-[21px]">{`+35% expo lead capture (events & booth kit)`}</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div
      className="content-stretch flex gap-[10px] items-center px-0 py-[10px] relative shrink-0 w-full"
      data-name="Container"
    >
      <Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201Svg45 />
      <Container46 />
    </div>
  );
}

function Group23() {
  return (
    <div
      className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-[0px] mask-size-[15px_15px]"
      data-name="Group"
      style={{ maskImage: `url('${imgGroup}')` }}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 15 15"
      >
        <g id="Group">
          <path
            d={svgPaths.p2761e300}
            fill="var(--fill-0, white)"
            id="Vector"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p2c00a880}
            fill="var(--fill-0, black)"
            fillRule="evenodd"
            id="Vector_2"
          />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup23() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group23 />
    </div>
  );
}

function Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201Svg46() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-[15px]"
      data-name="68c92b7243f69c0b565cfae6_68ba8636b5d233f4c4fab950_tick%20(4)%201%201.svg"
    >
      <ClipPathGroup23 />
    </div>
  );
}

function Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201SvgFill23() {
  return (
    <div
      className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[15px]"
      data-name="68c92b7243f69c0b565cfae6_68ba8636b5d233f4c4fab950_tick%20(4)%201%201.svg fill"
    >
      <Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201Svg46 />
    </div>
  );
}

function Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201Svg47() {
  return (
    <div
      className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 size-[15px]"
      data-name="68c92b7243f69c0b565cfae6_68ba8636b5d233f4c4fab950_tick%20(4)%201%201.svg"
    >
      <Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201SvgFill23 />
    </div>
  );
}

function Container48() {
  return (
    <div
      className="content-stretch flex flex-col items-start pl-0 pr-[32.84px] py-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[21px] relative shrink-0 text-[#fbfbfb] text-[13.5px] text-nowrap">
        <p className="mb-0">{`+25% site visit & demo bookings (wayfinding + sales`}</p>
        <p>room assets)</p>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div
      className="content-stretch flex gap-[10px] items-center px-0 py-[10px] relative shrink-0 w-full"
      data-name="Container"
    >
      <Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201Svg47 />
      <Container48 />
    </div>
  );
}

function Group24() {
  return (
    <div
      className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-[0px] mask-size-[15px_15px]"
      data-name="Group"
      style={{ maskImage: `url('${imgGroup}')` }}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 15 15"
      >
        <g id="Group">
          <path
            d={svgPaths.p2761e300}
            fill="var(--fill-0, white)"
            id="Vector"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p2c00a880}
            fill="var(--fill-0, black)"
            fillRule="evenodd"
            id="Vector_2"
          />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup24() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group24 />
    </div>
  );
}

function Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201Svg48() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-[15px]"
      data-name="68c92b7243f69c0b565cfae6_68ba8636b5d233f4c4fab950_tick%20(4)%201%201.svg"
    >
      <ClipPathGroup24 />
    </div>
  );
}

function Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201SvgFill24() {
  return (
    <div
      className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[15px]"
      data-name="68c92b7243f69c0b565cfae6_68ba8636b5d233f4c4fab950_tick%20(4)%201%201.svg fill"
    >
      <Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201Svg48 />
    </div>
  );
}

function Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201Svg49() {
  return (
    <div
      className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 size-[15px]"
      data-name="68c92b7243f69c0b565cfae6_68ba8636b5d233f4c4fab950_tick%20(4)%201%201.svg"
    >
      <Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201SvgFill24 />
    </div>
  );
}

function Container50() {
  return (
    <div
      className="content-stretch flex flex-col items-start pl-0 pr-[28.67px] py-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[21px] relative shrink-0 text-[#fbfbfb] text-[13.5px] text-nowrap">
        <p className="mb-0">
          'ˆ’35% onboarding time to brand-ready output across
        </p>
        <p>teams</p>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div
      className="content-stretch flex gap-[10px] items-center px-0 py-[10px] relative shrink-0 w-full"
      data-name="Container"
    >
      <Component68C92B7243F69C0B565Cfae668Ba8636B5D233F4C4Fab950Tick204201201Svg49 />
      <Container50 />
    </div>
  );
}

function Link7() {
  return (
    <div
      className="bg-[#fbfbfb] relative rounded-[8px] shrink-0 w-full"
      data-name="Link"
    >
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[15px] py-[9px] relative w-full">
          <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[12px] text-black text-center text-nowrap uppercase">
            <p className="leading-[18px]">Get Started</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function P2() {
  return (
    <div
      className="absolute content-stretch flex flex-col gap-[10px] items-start left-[957.35px] min-h-[500px] p-[20px] rounded-[20px] top-[1055px]"
      data-name="P3"
      style={{
        backgroundImage:
          "linear-gradient(-6.60041deg, rgb(0, 0, 0) 0%, rgb(0, 0, 0) 28%, rgb(0, 0, 0) 59%, rgb(36, 84, 87) 77%, rgb(56, 200, 142) 100%)",
      }}
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#5f5f5f] border-solid inset-0 pointer-events-none rounded-[20px]"
      />
      <Margin6 />
      <Container32 />
      <Container36 />
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#fbfbfb] text-[15.5px] text-nowrap">
        <p className="leading-[24px]">Timeline: 8-9 Weeks</p>
      </div>
      <Margin7 />
      <HorizontalBorder11 />
      <HorizontalBorder12 />
      <HorizontalBorder13 />
      <HorizontalBorder14 />
      <HorizontalBorder15 />
      <Container44 />
      <Margin8 />
      <Container47 />
      <Container49 />
      <Container51 />
      <Link7 />
    </div>
  );
}

function Group27() {
  return (
    <div className="absolute bottom-[1813.4px] contents left-[64px] top-[1055px]">
      <P />
      <P1 />
      <P2 />
    </div>
  );
}

function Group26() {
  return (
    <div className="absolute bottom-[1813.4px] contents left-[64px] top-[1055px]">
      <Group27 />
    </div>
  );
}

function Tab() {
  return (
    <div
      className="bg-[#38c78d] max-w-[170.75px] mr-[-0.01px] relative rounded-[10px] shrink-0"
      data-name="Tab"
    >
      <div className="bg-clip-padding border-0 border-transparent border-solid content-stretch flex items-start max-w-[inherit] px-[30px] py-[9px] relative">
        <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#131212] text-[12px] text-nowrap">
          <p className="leading-[18px]">USD</p>
        </div>
      </div>
    </div>
  );
}

function Tab1() {
  return (
    <div
      className="max-w-[170.75px] mr-[-0.01px] relative rounded-[10px] shrink-0"
      data-name="Tab"
    >
      <div className="bg-clip-padding border-0 border-transparent border-solid content-stretch flex items-start max-w-[inherit] px-[30px] py-[9px] relative">
        <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#38c78d] text-[12px] text-nowrap">
          <p className="leading-[18px]">INR</p>
        </div>
      </div>
    </div>
  );
}

function Tablist() {
  return (
    <div
      className="absolute content-stretch flex items-start left-[635px] pl-[4px] pr-[4.01px] py-[4px] rounded-[12px] top-[963px]"
      data-name="Tablist"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#4abe8f] border-solid inset-0 pointer-events-none rounded-[12px]"
      />
      <Tab />
      <Tab1 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex h-[36px] items-center justify-center left-[64px] p-[12px] rounded-[12345px] top-[953px] w-[140px]">
      <div
        aria-hidden="true"
        className="absolute border-2 border-[#4b4b4b] border-dashed inset-0 pointer-events-none rounded-[12345px]"
      />
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[23px] relative shrink-0 text-[#b9b9b9] text-[16px] text-nowrap tracking-[1.12px]">
        PRICING
      </p>
    </div>
  );
}

function Group28() {
  return (
    <div className="absolute contents left-[64px] top-[953px]">
      <Group26 />
      <Tablist />
      <Frame3 />
    </div>
  );
}

export default function Pricing() {
  return (
    <div
      className="bg-[#111] relative w-full min-h-screen overflow-x-hidden"
      data-name="Pricing"
    >
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
      <SharedNavBar />
      <SharedLinkLetsTalk />
      <Frame6 />
      <Frame4 />
      <FooterSection />
      <Group28 />
    </div>
  );
}
