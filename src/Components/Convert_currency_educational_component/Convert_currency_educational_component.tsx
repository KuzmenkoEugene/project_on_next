import Image from "next/image";
import Button from "../Button/Button";
import mastercard_card_img from "../../assets/img/mastercard-card_img.png";

export default function Convert_currency_educational_component() {
  return (
    <div className="flex justify-center justify-between pl-[250px] pr-[250px] w-[1366px] h-[400px] shrink-0 bg-convert_currency_educational_component_background">
      <div className="w-[311px] mt-[85px]">
        <h2 className="text-[#F6F7FF] text-[56px] not-italic font-bold leading-normal">
          Чіп Чендж
        </h2>
        <p className="text-[#E0E1EA] text-xl not-italic font-medium leading-normal">
          Обмінник валют - навчальний
        </p>
        <Button
          text={"Конвертер валют"}
          additionalStyles={
            "w-[234px] h-[53px] text-[#707C87] bg-[#F6F7FF] leading-normal mt-[29px]"
          }
        />
      </div>

      <Image
        className="w-[341px] h-[216px] mt-[85px] shrink-0"
        src={mastercard_card_img}
        alt="mastercard card"
      />
    </div>
  );
}
