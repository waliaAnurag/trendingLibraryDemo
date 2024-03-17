'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import headerNavTextStyles from '../dashboardNavLink/navLink.module.css'
const HeaderNavLink = ({ href, children }) => {
  const pathname = usePathname();
  const active = href === pathname;

  return (
    <Link
      href={href}
      className={`${headerNavTextStyles.textStyles} ${
        active ||
        (href.startsWith('/app-router-demo/appDashboard') &&
          pathname.startsWith('/app-router-demo/appDashboard'))
          ? `${headerNavTextStyles.selectedText}`
          : `${headerNavTextStyles.unselectedText}`
      }`}
    >
      {children}
    </Link>
  );
};

export default HeaderNavLink;
