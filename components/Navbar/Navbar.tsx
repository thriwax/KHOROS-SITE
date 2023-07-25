import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../styles/Navbar.module.scss"

const navigation = [
  { id: 1, title: 'HOME', path: '/' },
  { id: 2, title: 'DISCOGRAPHY', path: '/albums' },
  { id: 3, title: 'PODCASTS', path: '/podcasts' },
  { id: 4, title: 'ABOUT US', path: '/about-us' },
  { id: 5, title: 'CONTACTS', path: '/contacts' }
];

const Navbar = () => {
  const { pathname } = useRouter();

  return (
    <nav>
      <div className={styles.navbar}>
        {navigation.map(({ id, title, path }) => (
          <Link legacyBehavior key={id} href={path}>
            <a>{title}</a>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;













