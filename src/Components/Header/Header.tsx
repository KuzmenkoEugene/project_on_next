import Image from "next/image";
import logIn_icon from "../../assets/icons/login_icon.svg";
import { header_menu } from "@/utils/header_menu";
import { Logo_and_title_component } from "../Logo_and_title_component/Logo_and_title_component";

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

export default function Header() {
  return (
    <header className="flex flex-row items-center h-[91px] w-[1366px] bg-[#F6F7FF]">
      <div className="flex flex-row items-center space-x-3 ml-[100px] mr-[80px] h-[23px] w-37">
        <Logo_and_title_component />
      </div>
      <div className="flex flex-row justify-between w-[588px] mr-[180px]">
        {header_menu(menu)}
      </div>
      <div className="flex flex-row items-center">
        <Image
          src={logIn_icon}
          alt="log in icon"
          className="h-[20px] w-[22px] mr-1.5"
        />
        <a href="./">Особистий кабінет</a>
      </div>
    </header>
  );
}
