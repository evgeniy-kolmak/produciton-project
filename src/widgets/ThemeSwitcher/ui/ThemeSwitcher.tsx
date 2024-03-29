import styles from './ThemeSwitcher.module.scss';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { useTheme, Theme } from 'app/providers/ThemeProvider';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import LightIcon from 'shared/assets/icons/theme-light.svg';

interface ThemeSwitcherProps {
  className?: string;
}

export function ThemeSwitcher({ className }: ThemeSwitcherProps) {
  const { theme, toggleTheme } = useTheme();
  const { themeswitcher } = styles;

  return (
    <Button
      theme={ThemeButton.ICON}
      className={classNames(themeswitcher, [className])}
      onClick={toggleTheme}
    >
      {theme === Theme.DARK ? <LightIcon /> : <DarkIcon />}
    </Button>
  );
}
