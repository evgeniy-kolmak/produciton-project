import styles from './Navbar.module.scss';
import { classNames } from 'shared/lib/helpers/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  const { navbar, links } = styles;
  const { t } = useTranslation();

  return (
    <div className={classNames(navbar, [className])}>
      <div className={links}>
        <AppLink to="/">{t('Главная')}</AppLink>
        <AppLink to="/about">{t('О нас')}</AppLink>
      </div>
    </div>
  );
}
