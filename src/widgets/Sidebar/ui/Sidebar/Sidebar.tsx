import styles from './Sidebar.module.scss';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { useState } from 'react';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { routePath } from 'shared/config/routeConfig/routeConfig';
import MenuIcon from 'shared/assets/icons/menu.svg';
import ArrowIcon from 'shared/assets/icons/arrow-left.svg';
import { useTranslation } from 'react-i18next';
import MainIcon from 'shared/assets/icons/main.svg';
import AboutIcon from 'shared/assets/icons/about.svg';

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const { sidebar, collapsed, switchers, items, item, icon, button } = styles;
  const [isCollapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();

  const onToggle = () => setCollapsed((prev) => !prev);

  const itemsData = [
    {
      pathItem: routePath.main,
      iconItem: <MainIcon />,
      textItem: t('Главная'),
    },
    {
      pathItem: routePath.about,
      iconItem: <AboutIcon />,
      textItem: t('О нас'),
    },
  ];

  return (
    <div
      data-testid="sidebar"
      className={classNames(sidebar, [className], {
        [collapsed]: isCollapsed,
      })}
    >
      <Button
        theme={ThemeButton.ICON}
        data-testid="sidebar-toggle"
        onClick={onToggle}
        className={classNames(button)}
      >
        {isCollapsed ? (
          <MenuIcon className={classNames(icon)} />
        ) : (
          <ArrowIcon className={classNames(icon)} />
        )}
      </Button>
      <div className={items}>
        {itemsData.map(({ iconItem, pathItem, textItem }) => (
          <AppLink key={textItem} className={classNames(item)} to={pathItem}>
            {iconItem}
            <span>{textItem}</span>
          </AppLink>
        ))}
      </div>
      <div className={switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
}
