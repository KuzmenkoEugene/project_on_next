import Image from "next/image";
import { Logo_and_title } from "./Logo_and_title/Logo_and_title";
import Menu from "./Menu/Menu";
import menuArray from "@/constants/menuData";
import social_networks_icon from "./../assets/icons/social_networks_icon.svg";
import phone_icon from "./../assets/icons/phone_icon.svg";
import handset_icon from "./../assets/icons/phone_number_icon.svg";
import Number_block from "./Number_block/Number_block";

export default function Footer() {
  return (
    <div className="flex justify-between w-[1366px] bg-[#F6F7FF] pt-14 pb-14 pl-24 pr-24">
      <div className="flex flex-col gap-5 w-[252px]">
        <Logo_and_title additionalStyles="flex flex-row items-center space-x-3 w-[153px]"/>
        <p className="text-xs font-normal	not-italic text-[#707C87]">
          04128, м.Київ, вул. Хрещатик, 19 Ліцензія НБУ №156 Ⓒ ПАТ ЧіпЧендж,
          2019-2023
        </p>
      </div>
      <Menu
        arrayItems={menuArray}
        additionalStyles={"flex flex-col gap-[20px] shrink-0"}
      />
      <Number_block
        img={phone_icon}
        imgAlt={"phone icon"}
        number={"3773"}
        text={"Цілодобова підтримка"}
        additionalStyles={"w-[215px]"}
        iconStyles={'w-[10px] h-[16px]'}
      />
      <Number_block
        img={handset_icon}
        imgAlt={"handset icon"}
        number={"8 800 111 22 33"}
        text={"Безкожтовно для дзвінків в межах України"}
        additionalStyles={"w-[183px]"}
        iconStyles={'w-[16px] h-[16px]'}
      />
      <div>
        <Image
          className="block"
          src={social_networks_icon}
          alt="social networks icon"
        />
      </div>
    </div>
  );
}
