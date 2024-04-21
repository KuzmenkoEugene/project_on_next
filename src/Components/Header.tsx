import Menu from "./Menu/Menu";
import {menuArray} from "@/constants/menuData";
import { Logo_and_title } from "./Logo_and_title/Logo_and_title";
import Log_in from "./Log_in/Log_in";

export default function Header() {
  return (
    <header className="flex flex-row items-center h-[91px] w-[1366px] pl-[100px] bg-[#F6F7FF]">
      <Logo_and_title additionalStyles="flex flex-row items-center space-x-3 mr-[80px] h-[23px] w-37" />
      <Menu arrayItems={menuArray} additionalStyles={'flex flex-row justify-between w-[548px] mr-[180px]'}/>
      <Log_in/>
    </header>
  );
}
