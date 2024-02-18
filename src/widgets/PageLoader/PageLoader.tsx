import styles from './PageLoader.module.scss';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { Loader } from 'shared/ui/Loader/Loader';

interface PageLoaderProps {
  className?: string;
}

export function PageLoader({ className }: PageLoaderProps) {
  const { pageloader } = styles;

  return (
    <div className={classNames(pageloader, [className])}>
      <Loader />
    </div>
  );
}
