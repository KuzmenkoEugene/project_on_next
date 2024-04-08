import Image from "next/image";
import Button from "../Button/Button";
import converter_img from "../../assets/img/converter_img.jpg";

export default function Convert_currency_component() {
  return (
    <div className="flex justify-center justify-between items-center pl-[250px] pr-[250px] w-[1366px] h-[554px] shrink-0">
      <div>
        <h3 className="text-[#1F1E25] text-[40px] not-italic font-bold leading-[3.3rem] mb-[10px]">
          Конвертер валют
        </h3>
        <p className="w-[379px] text-[#707C87] text-xl not-italic font-normal leading-7">
          Переважна діяльність банківської групи за останні чотири звітні
          квартали становить 50 і більше відсотків.
        </p>
        <Button
          text={"Конвертувати валюту"}
          additionalStyles={
            "w-[251px] h-[60px] text-[#F6F7FF] bg-[#2C36F2] leading-6 mt-[26px]"
          }
        />
      </div>

      <Image
        className="w-[436px] h-[314px] shrink-0"
        src={converter_img}
        alt="card"
      />
    </div>
  );
}
