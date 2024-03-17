'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import navLinkStyles from './navLink.module.css'
const DashboardNavLink = ({ href, children }) => {
  const pathname = usePathname();
  const active = href === pathname;

  return (
    <Link
      href={href}
      className={`${navLinkStyles.textStyles} ${
        active ? `${navLinkStyles.selectedText}` : `${navLinkStyles.unselectedText}`
      }`}
    >
      {children}
    </Link>
  );
};

export default DashboardNavLink;
