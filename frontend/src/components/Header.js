import React from 'react';
import { Link } from 'gatsby';

function Header() {
  return (
    <header className="bg-gray-100 p-4 ">
      <ul className="flex justify-end">
        <li className="mr-2">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="mr-2">
          <Link to="/signup">signup</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
