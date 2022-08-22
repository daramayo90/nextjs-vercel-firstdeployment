import styles from "./Navbar.module.css";
import { ActiveLink } from "./ActiveLink";

const menuItems = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "About",
    href: "/about",
  },
  {
    text: "Contact",
    href: "/contact",
  },
  {
    text: "Pricing",
    href: "/pricing",
  },
];

export const Navbar = () => {
  return (
    <nav className={styles.menuContainer}>
      {menuItems.map((menu, index) => (
        <ActiveLink key={index} text={menu.text} href={menu.href} />
      ))}
    </nav>
  );
};
