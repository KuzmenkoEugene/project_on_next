import Image from "next/image";
import Inputs from "../Inputs/Inputs";
import InputDate from "../InputDate/InputDate";
import Button from "../Button/Button";
import arrows_icon from "../../assets/icons/arrows.svg";

export default function Conversion() {
  return (
    <div className="flex justify-center items-center w-[1366px] h-[557px] shrink-0 bg-[#F6F7FF]">
      <div className="flex flex-col w-[962px] pt-[53px] pb-[55px] pl-[65px] pr-[65px] bg-[#FFF] rounded-[4px]">
        <h2 className="text-[#1F1E25] text-[40px] font-bold not-italic leading-10 mb-[70px]">
          Конвертер валют
        </h2>
        <div className="flex justify-items-center justify-between">
          <div className="flex flex-col gap-[20px]">
            <Inputs label={"В мене є"} />
            <InputDate />
          </div>
          <Image
            className="cursor-pointer"
            src={arrows_icon}
            alt="arrows"
          ></Image>
          <div className="flex flex-col items-end gap-[24px]">
            <Inputs label={"Хочу придбати"} />
            <div>
              <Button
                text="Зберегти результат"
                additionalStyles="w-[220px] h-[60px] text-[#F6F7FF] bg-[#2C36F2] text-[18px] leading-6"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
