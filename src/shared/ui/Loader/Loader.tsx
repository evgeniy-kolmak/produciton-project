import styles from './Loader.module.scss';
import { classNames } from 'shared/lib/helpers/classNames/classNames';

interface LoaderProps {
  className?: string;
}

export function Loader({ className }: LoaderProps) {
  const { loader } = styles;

  return (
    <div className={classNames(loader, [className])}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
