"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { locales } from "~/config";
import { LocalLink } from "./LocalLink";

type LocaleItem = "en" | "de";

const NAV_LINKS = ["Shop", "Cart"];

export const Header = () => {
  const [selected, setSelected] = useState<LocaleItem>();
  const pathname = usePathname();

  const localePath = pathname.split("/")[1];

  const handleChangeLocale = (item: LocaleItem) => {
    setSelected(item);
  };

  useEffect(() => {
    setSelected(localePath as LocaleItem);
  }, [localePath]);

  return (
    <header className='flex items-center justify-between'>
      <h1>Tech Shop</h1>

      <ul className='flex items-center gap-2'>
        {NAV_LINKS.map((nav) => (
          <li key={nav}>
            <Link href='#'>{nav}</Link>
          </li>
        ))}
      </ul>
      <div className='relative flex items-center justify-center rounded-full'>
        <ul className='bg-white flex'>
          {locales.map((locale, i) => (
            <li
              key={i}
              onClick={() => handleChangeLocale(locale as LocaleItem)}
              className={`border-l border-t border-b last:border-r ${
                selected === locale ? "bg-gray-100" : ""
              }`}
            >
              <LocalLink
                locale={locale}
                className={`flex p-4 items-center gap-2`}
              >
                <Image
                  src={`/icons/${locale}.svg`}
                  alt=''
                  height={20}
                  width={20}
                  className='rounded-full'
                />
                <h4 className='uppercase text-sm'>{locale}</h4>
              </LocalLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};
