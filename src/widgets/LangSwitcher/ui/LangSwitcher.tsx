import styles from './LangSwitcher.module.scss';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';

interface LangSwitcherProps {
  className?: string;
}

export enum Lang {
  EN = 'en',
  RU = 'ru',
}

export function LangSwitcher({ className }: LangSwitcherProps) {
  const { langswitcher } = styles;

  const { t, i18n } = useTranslation();

  const toggleLang = async () => {
    await i18n.changeLanguage(i18n.language === Lang.RU ? Lang.EN : Lang.RU);
  };

  return (
    <Button
      theme={ThemeButton.ICON}
      onClick={toggleLang}
      className={classNames(langswitcher, [className])}
    >
      {t('Язык')}
    </Button>
  );
}
