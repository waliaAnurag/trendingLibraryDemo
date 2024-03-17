import Image from 'next/image';
import Link from 'next/link';
import HeaderNavLink from './headerNavLink';
import SearchField from '../searchField';
import HeaderStyles from '../styles/header.module.css';

const menuItems = [
  { label: `Home`, url: `/app-router-demo` },
  { label: `Dashboard`, url: `/app-router-demo/appDashboard/analytics` },
  { label: `React server Components`, url: `/app-router-demo/newsletter` },
];

const Header = () => {
  return (
    <header className={HeaderStyles.headerContainer}>
      <div>
        <Link href="/">
          <Image
            width={36}
            height={36}
            src="/favicon.ico"
            className="w-8 md:w-9"
            alt="logo"
          />
        </Link>
        <nav>
          <ul className={HeaderStyles.headerListItems}>
            {menuItems.map(({ url, label }, index) => (
              <li key={index}>
                <HeaderNavLink href={url}>{label}</HeaderNavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <SearchField />
    </header>
  );
};

export default Header;
