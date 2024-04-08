import Image from "next/image";
import { Logo_and_title_component } from "../Logo_and_title_component/Logo_and_title_component";
import { header_menu } from "@/utils/header_menu";
import social_networks_icon from "../../assets/icons/social_networks_icon.svg";
import phone_icon from "../../assets/icons/phone_icon.svg";

const menu = [
  {
    href: "./",
    nameItem: "Послуги",
  },
  {
    href: "./",
    nameItem: "Конвертер валют",
  },
  {
    href: "./",
    nameItem: "Контакти",
  },
  {
    href: "./",
    nameItem: "Задати питання",
  },
];

export default function Footer() {
  return (
    <div className="flex justify-between w-[1366px] bg-[#F6F7FF] pt-14 pl-24 pr-24 pb-14  ">
      <div className="flex flex-col gap-5 w-[252px]">
        <div className="flex flex-row items-center space-x-3">
          <Logo_and_title_component />
        </div>

        <p className="text-xs font-normal	not-italic text-[#707C87]">
          04128, м.Київ, вул. Хрещатик, 19
          <br />
          Ліцензія НБУ №156
          <br />Ⓒ ПАТ ЧіпЧендж, 2019-2023
        </p>
      </div>

      <div className="flex flex-col gap-5 shrink-0 ">{header_menu(menu)}</div>

      <div className="flex flex-col">
        <div className="flex gap-5">
          <Image src={phone_icon} alt="phone icon" />
          <p className="font-medium not-italic text-base text=[#1F1E25]">
            3773
          </p>
        </div>
        <div className="mt-[10px] ml-[29px]">
          <p className="w-[186px] text-xs font-normal	not-italic text-[#707C87]">
            Цілодобова підтримка
          </p>
        </div>
      </div>

      <div className="flex flex-col w-[183px]">
        <div className="flex gap-5">
          <Image src={phone_icon} alt="phone icon" />
          <p className="font-medium not-italic text-base text=[#1F1E25]">
            8 800 111 22 33
          </p>
        </div>
        <div className="mt-[10px]">
          <p className="pl-[30px] text-xs font-normal	not-italic text-[#707C87]">
            Безкожтовно для дзвінків в межах України
          </p>
        </div>
      </div>
      <div>
        <Image src={social_networks_icon} alt="social networks icon" />
      </div>
    </div>
  );
}
