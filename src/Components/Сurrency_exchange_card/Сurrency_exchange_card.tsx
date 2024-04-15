import Image from "next/image";
import arrow_icon from "../../assets/icons/arrow_icon.svg";

interface CardProps {
    time: string;
    firstValue: string;
    secondValue: string;
  }

const Сurrency_exchange_card: React.FC<CardProps> = ({
    time,
    firstValue,
    secondValue
}) => {
  return (
    <div className="flex justify-between items-center w-[392px] h-[42px] pb-[15px] pt-[15px] pl-[16px] pr-[40px] bg-[#FFF] rounded-[4px] shrink-0">
      <span className="text-[#C1C2CA] text-lg not-italic font-normal leading-6">
        {time}
      </span>
      <span className="text-[#707C87] text-lg not-italic font-semibold leading-6">
        {firstValue}
      </span>
      <Image className="w-[14px] h-[10px]" alt="arrow" src={arrow_icon} />
      <span className="text-[#707C87] text-lg not-italic font-semibold leading-6">
        {secondValue}
      </span>
    </div>
  );
}

export default Сurrency_exchange_card