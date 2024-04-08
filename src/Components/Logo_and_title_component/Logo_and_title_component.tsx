import Image from "next/image";
import header_logo from "../../assets/img/header_logo.svg";

export const Logo_and_title_component = () => {
  return (
    <>
      <Image
        src={header_logo}
        alt="header logo"
        className="h-[23px] w-[23px]"
      />
      <h1 className="font-workSans leading-normal font-bold text-xl">
        Чіп Чендж
      </h1>
    </>
  );
};
