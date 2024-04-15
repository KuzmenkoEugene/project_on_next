import Image from "next/image";
import Button from "../Button/Button";
import arrow_icon from "../../assets/icons/arrow_icon.svg";
import Сurrency_exchange_card from "../../Components/Сurrency_exchange_card/Сurrency_exchange_card";

export default function Conversion_history() {
  return (
    <div className="w-[1366px] bg-[#FFF] pt-[80px] pb-[80px] pr-[202px] pl-[202px] shrink-0">
      <div className="w-[962px] h-[397px] bg-[#F6F7FF] pt-[40px] pb-[58px] pr-[65px] pl-[65px] rounded-[4px] shrink-0">
        <div className="flex justify-between">
          <h4 className="flex flex-col justify-center w-[371px] h-[47px] text-[#1F1E3F] text-[28px] not-italic font-medium leading-9">
            Історія конвертації
          </h4>

          <Button
            text={"Очистити історію"}
            additionalStyles={
              "w-[187px] h-[51px] text-base text-[#F6F7FF] bg-[#2C36F2] text-base leading-6"
            }
          />
        </div>

        <div className="inline-grid grid-cols-1 gap-[20px] mt-[32px]">
          <Сurrency_exchange_card
            time={"25.11.2020"}
            firstValue={"1000 UAH"}
            secondValue={"36,65 USD"}
          />

          <Сurrency_exchange_card
            time={"25.11.2020"}
            firstValue={"1000 UAH"}
            secondValue={"36,65 USD"}
          />
        </div>

      </div>
    </div>
  );
}
