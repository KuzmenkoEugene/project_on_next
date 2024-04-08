type MenuItem = {
  href: string;
  nameItem: string;
};

export const header_menu = (arrayItems: MenuItem[]): JSX.Element[] => {
  return arrayItems.map((el) => (
    <a
      className="text-[#707C87] text-base not-italic font-medium"
      key={el.nameItem}
      href={el.href}
    >
      {el.nameItem}
    </a>
  ));
};
