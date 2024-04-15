import Image from "next/image";
import arrowDown from "../../assets/icons/arrowDown.svg";

type InputsPropsType = {
  label?: string;
};

const Inputs: React.FC<InputsPropsType> = ({ label }) => {
  return (
    <div className="flex flex-col">
      <label
        className="text-[#707C87] text-xl not-italic font-medium leading-7 mb-[48px]"
        htmlFor="number"
      >
        {label}:
      </label>
      <div className="flex">
        <input
          className="w-[220px] h-[60px] pt-[16px] pb-[16px] mr-[15px] text-center shrink-0 rounded border-[1px] border-[#C1C2CA] text-[#707C87] text-xl not-italic font-medium leading-7 focus-visible:outline-none"
          type="number"
          id="number"
        />
        <div className="block relative">
          <select className="w-[120px] h-[60px] pt-[16px] pb-[16px] pl-[18px] shrink-0 rounded border-[1px] border-[#C1C2CA] text-[#707C87] text-xl not-italic font-medium leading-7 focus-visible:outline-none ">
            <option>UAH</option>
            <option>USD</option>
          </select>

          <Image
            className="w-[16px] h-[8px] shrink-0 top-[26px] right-[17px] absolute pointer-events-none"
            src={arrowDown}
            alt="arrow down"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Inputs;
