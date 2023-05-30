'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavbarProps {
  list: string[];
  className: string | undefined;
}

const Navbar = ({ list, className }: NavbarProps) => {
  const pathname = usePathname();
  const currentlist = list.filter((item) => item !== pathname);

  return (
    <ul className={className}>
      {currentlist?.map((link: string, index) => (
        <li key={index}>
          <Link href={`${link}`}>{link === '/' ? 'home' : link.slice(1)}</Link>
        </li>
      ))}
    </ul>
  );
};
export default Navbar;

//const blogLink = "https://gfouz.github.io/next-blog-2023";
