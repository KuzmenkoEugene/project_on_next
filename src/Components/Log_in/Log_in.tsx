import Image from "next/image";
import Link from "next/link";
import logIn_icon from "../../assets/icons/login_icon.svg";

export default function Log_in() {
  return (
    <div className="flex flex-row items-center">
      <Image
        src={logIn_icon}
        alt="log in icon"
        className="h-[20px] w-[22px] mr-1.5"
      />
      <Link href="./">Особистий кабінет</Link>
    </div>
  );
}
