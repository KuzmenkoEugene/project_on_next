import Image from "next/image";
import calendar_icon from "../../assets/icons/calendar.svg";

export default function InputDate() {
  return (
    <div className="block relative w-[220px] h-[60px]">
      <input
        className="w-[220px] h-[60px] pt-[16px] pb-[16px] text-center shrink-0 rounded border-[1px] border-[#C1C2CA] text-[#707C87] text-xl not-italic font-medium leading-7 cursor-pointer focus-visible:outline-none"
        type="date"
      />
      <Image
        className="w-[25px] h-[28px] top-[15px] right-[17px] absolute shrink-0 pointer-events-none"
        src={calendar_icon}
        alt="calendar"
      ></Image>
    </div>
  );
}
