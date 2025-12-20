import svgPaths from "./svg-c9d5a6kijk";

function WorkButton() {
  return (
    <div className="bg-[#51e9d6] content-stretch flex h-[48px] items-center justify-center px-[32px] py-[10px] relative rounded-[100px] shrink-0" data-name="Work Button">
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[20px] text-black text-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Work
      </p>
    </div>
  );
}

function AboutButton() {
  return (
    <div className="content-stretch flex h-[48px] items-center justify-center px-[32px] py-[10px] relative rounded-[100px] shrink-0" data-name="About Button">
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[20px] text-nowrap text-white" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        About
      </p>
    </div>
  );
}

function Navigation() {
  return (
    <div className="absolute content-stretch flex gap-[20px] items-center left-[calc(50%+0.5px)] top-[30px] translate-x-[-50%]" data-name="Navigation">
      <WorkButton />
      <AboutButton />
    </div>
  );
}

export default function Hero() {
  return (
    <div className="bg-[#2e2e2e] relative size-full" data-name="HERO">
      <Navigation />
      <div className="absolute font-['Nunito_Sans:Black',sans-serif] font-black leading-[normal] left-1/2 text-[80px] text-center text-nowrap text-white top-[220px] translate-x-[-50%]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        <p className="mb-0">Hi. I’m Yihui.</p>
        <p>A Product Designer.</p>
      </div>
      <div className="absolute h-[21.131px] left-[759px] top-[300.87px] w-[193px]">
        <div className="absolute inset-[-11.35%_-0.05%_-10.07%_0.04%]" style={{ "--stroke-0": "rgba(81, 233, 214, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 193.027 25.6568">
            <path d={svgPaths.p25f67080} fill="var(--stroke-0, #51E9D6)" id="Vector 4" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[normal] left-1/2 text-[24px] text-center text-white top-[478px] translate-x-[-50%] w-[710px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        I’m passionate about crafting experiences that turning complex systems into clear, usable stories.
      </p>
    </div>
  );
}