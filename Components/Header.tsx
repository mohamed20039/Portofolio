import Link from 'next/link';
import React from 'react';
import { links } from '@/Data';

const Header = () => {
    return (
      <div className="flex justify-center items-center fixed top-0 left-1/2 transform -translate-x-1/2 z-50 pt-4 font-medium">
        <nav className="bg-white text-black py-3 px-4 rounded-md">
          <ul className="flex gap-4 justify-center items-center">
            {links.map((link, index) => (
              <li key={index}>
                <Link href={link.hash}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    );
  };

  export default Header
    