import styles from "./Navbar.module.scss";
import { classNames } from "shared/lib/helpers/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  const { navbar } = styles;

  return (
    <div className={classNames(navbar)}>
      <AppLink to="/">Главная</AppLink>
      <AppLink theme={AppLinkTheme.SECONDARY} to="/about">
        О нас
      </AppLink>
    </div>
  );
}
