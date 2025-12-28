import svgPaths from "./svg-jardic1lys";

function LineMask() {
  return <div className="absolute contents right-0 top-0" data-name="Line Mask" />;
}

function TitleWrapper() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[240px]" data-name="Title wrapper">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[28.8px] not-italic relative shrink-0 text-[24px] text-white tracking-[-0.96px] w-full">Join our newsletter</p>
      <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[19.2px] relative shrink-0 text-[#c8c8c8] text-[16px] w-full">Get updates straight to your inbox</p>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[99px] shrink-0" data-name="Button">
      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[16.8px] relative shrink-0 text-[#101010] text-[14px] text-nowrap">Submit</p>
    </div>
  );
}

function FormWrapper() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Form Wrapper">
      <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[16.8px] relative shrink-0 text-[#c8c8c8] text-[14px] text-nowrap">enter your email</p>
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
            <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 360 1">
                <line id="Form Line" stroke="var(--stroke-0, white)" x2="360" y1="0.5" y2="0.5" />
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
    <div className="content-stretch flex flex-col gap-[24px] items-start min-w-[500px] relative shrink-0" data-name="Newsletter wrapper">
      <TitleWrapper />
      <FormContainer />
    </div>
  );
}

function ContactUsConentWrapper() {
  return (
    <div className="content-stretch flex flex-col font-['Manrope:Regular',sans-serif] font-normal gap-[8px] items-end leading-[19.2px] relative shrink-0 text-[#ededed] text-[16px] text-nowrap underline w-full" data-name="Contact us conent wrapper">
      <p className="[text-underline-position:from-font] decoration-solid relative shrink-0">contact@socialsailor.com</p>
      <p className="[text-underline-position:from-font] decoration-solid relative shrink-0">ismail@socialsailor.com</p>
    </div>
  );
}

function ContactUsContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-end relative shrink-0" data-name="Contact us Container">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[28.8px] not-italic relative shrink-0 text-[24px] text-nowrap text-white tracking-[-0.96px]">Contact us</p>
      <ContactUsConentWrapper />
    </div>
  );
}

function TopContentWrapper() {
  return (
    <div className="content-start flex flex-wrap gap-[64px] items-start justify-between relative shrink-0 w-full" data-name="Top content wrapper">
      <NewsletterWrapper />
      <ContactUsContainer />
    </div>
  );
}

function NavMenuLink() {
  return (
    <div className="content-stretch flex gap-[2px] items-center justify-center px-[8px] py-[4px] relative shrink-0" data-name="Nav Menu Link">
      <p className="font-['Poppins:Medium',sans-serif] leading-[19.2px] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white tracking-[-0.64px]">Home</p>
    </div>
  );
}

function NavMenuLink1() {
  return (
    <div className="content-stretch flex gap-[2px] items-center justify-center px-[8px] py-[4px] relative shrink-0" data-name="Nav Menu Link">
      <p className="font-['Poppins:Medium',sans-serif] leading-[19.2px] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white tracking-[-0.64px]">Services</p>
    </div>
  );
}

function NavMenuLink2() {
  return (
    <div className="content-stretch flex gap-[2px] items-center justify-center px-[8px] py-[4px] relative shrink-0" data-name="Nav Menu Link">
      <p className="font-['Poppins:Medium',sans-serif] leading-[19.2px] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white tracking-[-0.64px]">About us</p>
    </div>
  );
}

function NavMenuLink3() {
  return (
    <div className="content-stretch flex gap-[2px] items-center justify-center px-[8px] py-[4px] relative shrink-0" data-name="Nav Menu Link">
      <p className="font-['Poppins:Medium',sans-serif] leading-[19.2px] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white tracking-[-0.64px]">Portfolio</p>
    </div>
  );
}

function NavMenuLink4() {
  return (
    <div className="content-stretch flex gap-[2px] items-center justify-center px-[8px] py-[4px] relative shrink-0" data-name="Nav Menu Link">
      <p className="font-['Poppins:Medium',sans-serif] leading-[19.2px] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white tracking-[-0.64px]">Pricing</p>
    </div>
  );
}

function NavMenuLink5() {
  return (
    <div className="content-stretch flex gap-[2px] items-center justify-center px-[8px] py-[4px] relative shrink-0" data-name="Nav Menu Link">
      <p className="font-['Poppins:Medium',sans-serif] leading-[19.2px] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white tracking-[-0.64px]">Contact us</p>
    </div>
  );
}

function NavMenuWrapper() {
  return (
    <div className="content-center flex flex-wrap gap-[16px] items-center justify-between relative shrink-0 w-full" data-name="Nav Menu Wrapper">
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
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full" data-name="Contents Wrapper">
      <TopContentWrapper />
      <NavMenuWrapper />
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(105, 105, 105, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1064 1">
            <line id="Divider" stroke="var(--stroke-0, #696969)" strokeLinecap="round" x1="0.5" x2="1063.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function CopyRightsWrapper() {
  return (
    <div className="content-stretch flex font-['Manrope:Regular',sans-serif] font-normal gap-[8px] items-center leading-[19.2px] relative shrink-0 text-[16px] text-nowrap text-white" data-name="Copy rights wrapper">
      <p className="relative shrink-0">© Growth Sailor</p>
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid relative shrink-0 underline">Privacy Policy</p>
    </div>
  );
}

function Youtube() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Youtube">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Youtube">
          <path d={svgPaths.p12372de0} fill="var(--fill-0, white)" id="Youtube Triangle" />
        </g>
      </svg>
    </div>
  );
}

function Twitter() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Twitter">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Twitter">
          <path d={svgPaths.p1cdaf900} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Instagram() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Instagram">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Instagram">
          <path d={svgPaths.p17001400} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Linkein() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Linkein">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Linkein">
          <path d={svgPaths.p16640000} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, white)" strokeWidth="0.24" />
        </g>
      </svg>
    </div>
  );
}

function SocialMediaDiv() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Social Media Div">
      <Youtube />
      <Twitter />
      <Instagram />
      <Linkein />
    </div>
  );
}

function CopyrightContainer() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Copyright container">
      <CopyRightsWrapper />
      <SocialMediaDiv />
    </div>
  );
}

function ContentsContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-start relative shrink-0 w-full" data-name="Contents Container">
      <ContentsWrapper />
      <CopyrightContainer />
    </div>
  );
}

function GrowthSailor() {
  return (
    <div className="aspect-[1050.4/121.675] relative shrink-0 w-full" data-name="Growth Sailor">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1064 123.251">
        <g id="Growth Sailor">
          <path d={svgPaths.p171e3000} fill="url(#paint0_linear_1_4775)" id="Vector" />
          <path d={svgPaths.p11b2c000} fill="url(#paint1_linear_1_4775)" id="Vector_2" />
          <path d={svgPaths.p1b6b780} fill="url(#paint2_linear_1_4775)" id="Vector_3" />
          <path d={svgPaths.p1474c200} fill="url(#paint3_linear_1_4775)" id="Vector_4" />
          <path d={svgPaths.p39b1ee80} fill="url(#paint4_linear_1_4775)" id="Vector_5" />
          <path d={svgPaths.p3db64f00} fill="url(#paint5_linear_1_4775)" id="Vector_6" />
          <path d={svgPaths.p2b7a6e80} fill="url(#paint6_linear_1_4775)" id="Vector_7" />
          <path d={svgPaths.p110e8100} fill="url(#paint7_linear_1_4775)" id="Vector_8" />
          <path d={svgPaths.p1df0c980} fill="url(#paint8_linear_1_4775)" id="Vector_9" />
          <path d={svgPaths.p12820080} fill="url(#paint9_linear_1_4775)" id="Vector_10" />
          <path d={svgPaths.p1d1e5c80} fill="url(#paint10_linear_1_4775)" id="Vector_11" />
          <path d={svgPaths.p22b0f580} fill="url(#paint11_linear_1_4775)" id="Vector_12" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_4775" x1="1038.33" x2="1038.33" y1="63.605" y2="121.524">
            <stop stopColor="white" />
            <stop offset="0.874488" stopColor="#101010" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_4775" x1="953.345" x2="953.345" y1="64.0548" y2="123.094">
            <stop stopColor="white" />
            <stop offset="0.874488" stopColor="#101010" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_4775" x1="880.192" x2="880.192" y1="36.3825" y2="121.525">
            <stop stopColor="white" />
            <stop offset="0.874488" stopColor="#101010" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_1_4775" x1="834.712" x2="834.712" y1="34.813" y2="121.524">
            <stop stopColor="white" />
            <stop offset="0.874488" stopColor="#101010" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_1_4775" x1="759.219" x2="759.219" y1="64.0998" y2="123.251">
            <stop stopColor="white" />
            <stop offset="0.874488" stopColor="#101010" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint5_linear_1_4775" x1="662.227" x2="662.227" y1="48.1918" y2="123.251">
            <stop stopColor="white" />
            <stop offset="0.874488" stopColor="#101010" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint6_linear_1_4775" x1="535.721" x2="535.721" y1="36.3825" y2="121.525">
            <stop stopColor="white" />
            <stop offset="0.874488" stopColor="#101010" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint7_linear_1_4775" x1="447.024" x2="447.024" y1="43.6001" y2="122.868">
            <stop stopColor="white" />
            <stop offset="0.874488" stopColor="#101010" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint8_linear_1_4775" x1="330.883" x2="330.883" y1="64.7255" y2="121.524">
            <stop stopColor="white" />
            <stop offset="0.874488" stopColor="#101010" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint9_linear_1_4775" x1="208.631" x2="208.631" y1="64.0548" y2="123.094">
            <stop stopColor="white" />
            <stop offset="0.874488" stopColor="#101010" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint10_linear_1_4775" x1="130.014" x2="130.014" y1="63.605" y2="121.524">
            <stop stopColor="white" />
            <stop offset="0.874488" stopColor="#101010" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint11_linear_1_4775" x1="44.6686" x2="44.6686" y1="48.4828" y2="123.094">
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
    <div className="bg-[#101010] content-stretch flex flex-col items-center pb-0 pt-[80px] px-0 relative rounded-tl-[24px] rounded-tr-[24px] shrink-0 w-full" data-name="Footer Container">
      <FooterWrapper />
    </div>
  );
}

export default function FooterSection() {
  return (
    <div className="bg-white relative rounded-tl-[36px] rounded-tr-[36px] size-full" data-name="FooterSection">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[120px] items-center overflow-clip pb-0 pt-[120px] px-[108px] relative size-full">
          <LineMask />
          <FooterContainer />
        </div>
      </div>
    </div>
  );
}