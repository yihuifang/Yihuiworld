import img from "figma:asset/90d419115cf76aadcdeb3d1e26f6df21c8e7821e.png";
import img2 from "figma:asset/e173519df058b38c77dd57115aa25f0ad735dfe8.png";
import { img1 } from "./svg-nuhj6";

function Group1() {
  return (
    <div className="absolute contents left-[519px] top-[1404px]">
      <p className="absolute font-['PingFang_SC:Regular',sans-serif] leading-[normal] left-[630px] not-italic text-[16px] text-[rgba(3,9,17,0.6)] text-nowrap top-[1404px]">离开云设计工具的提示：</p>
      <div className="absolute h-[166px] left-[519px] shadow-[0px_4px_16px_0px_rgba(3,9,17,0.08)] top-[1454px] w-[397px]" data-name="位图">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={img} />
        </div>
      </div>
    </div>
  );
}

function Component() {
  return (
    <div className="absolute contents left-[591px] top-[1754px]" data-name="位图">
      <div className="absolute bg-[#d8d8d8] h-[201px] left-[591px] rounded-[8px] top-[1754px] w-[255px]" data-name="蒙版" />
      <div className="absolute h-[201px] left-[591px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[255px_201px] top-[1754px] w-[255px]" data-name="位图" style={{ maskImage: `url('${img1}')` }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={img2} />
        </div>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[591px] top-[1718px]">
      <p className="absolute font-['PingFang_SC:Regular',sans-serif] leading-[normal] left-[623px] not-italic text-[16px] text-[rgba(3,9,17,0.6)] text-nowrap top-[1718px]">关闭浏览器标签页的提示：</p>
      <Component />
    </div>
  );
}

export default function Component1() {
  return (
    <div className="bg-white relative size-full" data-name="2.触发机制">
      <div className="absolute bg-[#071d34] h-[187px] left-0 top-0 w-[1440px]" data-name="矩形" />
      <div className="absolute flex flex-col font-['PingFang_SC:Semibold',sans-serif] justify-end leading-[0] left-[76px] not-italic text-[40px] text-nowrap text-white top-[122px] tracking-[1.3333px] translate-y-[-100%]">
        <p className="leading-[normal]">保存 | Save：触发机制</p>
      </div>
      <div className="absolute font-['PingFang_SC:Regular',sans-serif] leading-[24px] left-[127px] not-italic text-[16px] text-[rgba(3,9,17,0.6)] text-nowrap top-[409px]">
        <p className="mb-0">以一定的时间间隔（通常采用几分钟 ~ 1 小时）周期性地自动触发保存。</p>
        <p className="mb-0">这是酷家乐云设计工具目前采用的保存方式。</p>
        <p>这种自动保存能减少因软件崩溃、断电等特殊原因造成的数据丢失的影响，但仍无法避免数据丢失，需要手动保存作为辅助。</p>
      </div>
      <div className="absolute font-['PingFang_SC:Regular',sans-serif] leading-[0] left-[127px] not-italic text-[16px] text-[rgba(3,9,17,0.6)] text-nowrap top-[979px]">
        <p className="leading-[24px] mb-0">
          <span className="font-['PingFang_SC:Regular',sans-serif] not-italic">指用户手动点击</span>「保存」<span className="font-['PingFang_SC:Medium',sans-serif] not-italic text-[rgba(3,9,17,0.8)]">{`按钮 `}</span>
          <span className="font-['PingFang_SC:Regular',sans-serif] not-italic">或</span> <span className="font-['PingFang_SC:Medium',sans-serif] not-italic text-[rgba(3,9,17,0.8)]">快捷键</span> <span className="font-['PingFang_SC:Regular',sans-serif] not-italic">触发方案保存。</span>
        </p>
        <p className="leading-[24px]">
          对于一个没有<span className="font-['PingFang_SC:Regular',sans-serif] not-italic">实时保存</span>的系统<span className="font-['PingFang_SC:Regular',sans-serif] not-italic">，</span>
          <span className="font-['PingFang_SC:Semibold',sans-serif] not-italic text-[rgba(3,9,17,0.8)]">必须</span>
          <span className="font-['PingFang_SC:Regular',sans-serif] not-italic">{` 提供手动触发保存的途径`}</span>（部分无需保存机制的独立环境除外）。
        </p>
      </div>
      <div className="absolute font-['PingFang_SC:Regular',sans-serif] h-[83px] leading-[24px] left-[127px] not-italic text-[16px] text-[rgba(3,9,17,0.6)] top-[736px] w-[1172px]">
        <p className="mb-0">只要数据发生改变，立即触发自动保存，无需用户手动保存（尽管一些产品考虑到用户习惯，仍会保留手动保存的交互）。</p>
        <p className="mb-0">{`部分产品会用间隔几秒钟的自动保存（如  Microsoft 365），效果基本等同于实时保存。`}</p>
        <p>实时保存能最大程度避免数据丢失，是在线设计工具理想的保存触发方式。但是因为技术原因，并非所有设计工具都能够用实时保存，如云设计工具目前就无法使用。</p>
      </div>
      <div className="absolute font-['PingFang_SC:Regular',sans-serif] leading-[24px] left-[127px] not-italic text-[16px] text-[rgba(3,9,17,0.6)] text-nowrap top-[566px]">
        <p className="mb-0">
          <span className="font-['PingFang_SC:Regular',sans-serif] not-italic text-[rgba(3,9,17,0.6)]">特定的用户行为会触发方案自动保存</span>，<span className="font-['PingFang_SC:Regular',sans-serif] not-italic text-[rgba(3,9,17,0.6)]">如云设计工具环境切换、新建楼层等。</span>
        </p>
        <p className="mb-0">具体哪些行为需要触发保存，则要结合业务逻辑和技术实现来共同确定。</p>
        <p>要注意的是，这类保存通常因技术原因而采用，用户对其没有预期，尽量不要让它打断或干扰用户的操作。</p>
      </div>
      <div className="absolute font-['PingFang_SC:Regular',sans-serif] leading-[24px] left-[127px] not-italic text-[16px] text-[rgba(3,9,17,0.6)] text-nowrap top-[1226px]">
        <p className="mb-0">当用户离开工具或某个独立环境时，若程序监测到有未保存的内容会丢失，则将此风险暴露给用户，用户可以选择保存或者直接离开。</p>
        <p>如果用户通过直接关闭浏览器/标签页的方式离开，也可以在浏览器上设置类似的兜底提示对话框，但是对话框上的文案无法定制。</p>
      </div>
      <p className="absolute font-['PingFang_SC:Medium',sans-serif] leading-[normal] left-[76px] not-italic text-[#131415] text-[32px] text-nowrap top-[266px]">机制1. 自动触发保存</p>
      <p className="absolute font-['PingFang_SC:Medium',sans-serif] leading-[normal] left-[76px] not-italic text-[#131415] text-[32px] text-nowrap top-[904px]">机制2. 手动触发保存</p>
      <p className="absolute font-['PingFang_SC:Medium',sans-serif] leading-[normal] left-[76px] not-italic text-[#131415] text-[32px] text-nowrap top-[1136px]">机制3. 提示保存（兜底）</p>
      <p className="absolute font-['PingFang_SC:Medium',sans-serif] leading-[normal] left-[127px] not-italic text-[#131415] text-[20px] text-nowrap top-[365px]">a. 定时触发保存</p>
      <p className="absolute font-['PingFang_SC:Medium',sans-serif] leading-[normal] left-[127px] not-italic text-[#131415] text-[20px] text-nowrap top-[687px]">c. 实时保存</p>
      <p className="absolute font-['PingFang_SC:Medium',sans-serif] leading-[normal] left-[127px] not-italic text-[#131415] text-[20px] text-nowrap top-[527px]">b. 条件触发保存</p>
      <p className="absolute font-['PingFang_SC:Medium',sans-serif] leading-[normal] left-[76px] not-italic text-[#131415] text-[32px] text-nowrap top-[2158px]">设计准则：如何选择触发机制？</p>
      <ol className="absolute block font-['PingFang_SC:Regular',sans-serif] leading-[0] left-[78px] list-decimal not-italic text-[16px] text-[rgba(3,9,17,0.6)] text-nowrap top-[2239px]" start="1">
        <li className="mb-0 ms-[24px]">
          <span className="leading-[24px]">「实时保存」保障性最好，在技术允许时推荐采用；</span>
        </li>
        <li className="mb-0 ms-[24px]">
          <span className="leading-[24px]">因技术原因无法采用「实时保存」时，推荐使用「定时触发保存」 + 「手动保存」共同作用，也能较好地保障数据；</span>
        </li>
        <li className="mb-0 ms-[24px]">
          <span className="leading-[24px]">「条件触发保存」通常是因技术原因而采用，用户对其没有预期，尽量不要让它打断或干扰用户的操作；</span>
        </li>
        <li className="ms-[24px]">
          <span className="leading-[24px]">在数据有丢失风险的时候需要提示用户保存，可根据用户的操作路径选用工具自身的提示或浏览器的提示。</span>
        </li>
      </ol>
      <div className="absolute bg-[#f7f7f7] h-[714px] left-[76px] top-[1331px] w-[1284px]" data-name="矩形" />
      <Group1 />
      <Group />
      <div className="absolute border border-[#d1d1d1] border-solid h-[815px] left-[79px] top-[7581px] w-[1282px]" data-name="矩形" />
    </div>
  );
}