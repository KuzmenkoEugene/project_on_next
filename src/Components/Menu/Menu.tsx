import Link from "next/link";

type MenuItem = {
  href: string;
  nameItem: string;
};

type HeaderMenuProps = {
  arrayItems: MenuItem[];
  additionalStyles: string;
};

export default function Menu({
  arrayItems,
  additionalStyles,
}: HeaderMenuProps) {
  return (
    <ul className={additionalStyles}>
      {arrayItems.map((el) => (
        <Link
          className="text-[#707C87] text-base not-italic font-medium"
          key={el.nameItem}
          href={el.href}
        >
          {el.nameItem}
        </Link>
      ))}
    </ul>
  );
}
