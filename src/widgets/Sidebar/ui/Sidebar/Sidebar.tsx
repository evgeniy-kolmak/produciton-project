import styles from './Sidebar.module.scss';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { useState } from 'react';
import { Button } from 'shared/ui/Button/Button';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const { sidebar, collapsed, switchers } = styles;
  const [isCollapsed, setCollapsed] = useState(false);

  const onToggle = () => setCollapsed((prev) => !prev);

  return (
    <div
      data-testid="sidebar"
      className={classNames(sidebar, [className], {
        [collapsed]: isCollapsed,
      })}
    >
      <Button data-testid="sidebar-toggle" onClick={onToggle}>
        toggle
      </Button>
      <div className={switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
}
