import Image from "next/image";

interface NumberBlockProps {
  img: string;
  imgAlt: string;
  number: string;
  text: string;
  additionalStyles?: string
  iconStyles?: string
}

const Number_block: React.FC<NumberBlockProps> = ({
  img,
  imgAlt,
  number,
  text,
  additionalStyles,
  iconStyles,
}) => {
  return (
    <div className={`flex flex-col ${additionalStyles}`}>
      <div className="flex items-center gap-5">
        <Image className={`${iconStyles}`} src={img} alt={`${imgAlt}`} />
        <p className="font-medium not-italic text-base text=[#1F1E25]">
          {number}
        </p>
      </div>
      <div className="mt-[10px] ml-[29px]">
        <p className="text-xs font-normal	not-italic text-[#707C87]">{text}</p>
      </div>
    </div>
  );
};

export default Number_block