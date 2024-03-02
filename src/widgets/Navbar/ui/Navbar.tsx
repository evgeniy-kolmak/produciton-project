import styles from './Navbar.module.scss';
import { classNames } from 'shared/lib/helpers/classNames/classNames';

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  const { navbar } = styles;

  return <div className={classNames(navbar, [className])}></div>;
}
