import styles from "./ThemeSwitcher.module.scss";
import { classNames } from "shared/lib/helpers/classNames";
import { useTheme, Theme } from "app/providers/ThemeProvider";
import { Button } from "shared/ui/Button/Button";
import DarkIcon from "shared/assets/icons/theme-dark.svg";
import LightIcon from "shared/assets/icons/theme-light.svg";

interface ThemeSwitcherProps {
  className?: string;
}

export function ThemeSwitcher({ className }: ThemeSwitcherProps) {
  const { theme, toggleTheme } = useTheme();
  const { themeSwitcher } = styles;

  return (
    <Button
      className={classNames(themeSwitcher, [className])}
      onClick={toggleTheme}
    >
      {theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon />}
    </Button>
  );
}
