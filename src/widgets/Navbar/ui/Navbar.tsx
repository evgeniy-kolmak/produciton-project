import styles from "./Navbar.module.scss";
import { classNames } from "shared/lib/helpers/classNames";
import { AppLink } from "shared/ui/AppLink/AppLink";

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  const { navbar, links } = styles;

  return (
    <div className={classNames(navbar, [className])}>
      <div className={links}>
        <AppLink to="/">Главная</AppLink>
        <AppLink to="/about">О нас</AppLink>
      </div>
    </div>
  );
}
