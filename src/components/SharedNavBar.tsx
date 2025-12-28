import React from "react";

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

export default function SharedNavBar() {
  return (
    <div
      className="absolute h-[66px] left-[calc(54.17%+5.5px)] top-[96px] translate-x-[-50%] w-[357px]"
      data-name="Nav bar"
    >
      <ListPrimaryMenu />
    </div>
  );
}
