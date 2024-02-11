import styles from './Sidebar.module.scss';
import { classNames } from 'shared/lib/helpers/classNames';
import { useState } from 'react';
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
      className={classNames(sidebar, [className], {
        [collapsed]: isCollapsed,
      })}
    >
      <button onClick={onToggle}>toggle</button>
      <div className={switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
}
