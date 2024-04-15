import Image from "next/image";
import header_logo from "../../assets/img/header_logo.svg";
import Link from "next/link";

type LogoAndTitleProps = {
  additionalStyles?: string
};

export const Logo_and_title = ({additionalStyles}: LogoAndTitleProps) => {
  return (
    <Link className={additionalStyles} href="./">
      <Image
        src={header_logo}
        alt="header logo"
        className="h-[23px] w-[23px]"
      />
      <h1 className="font-workSans leading-normal font-bold text-xl">
        Чіп Чендж
      </h1>
    </Link>
  );
};
