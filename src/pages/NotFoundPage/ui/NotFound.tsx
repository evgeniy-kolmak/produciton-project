import styles from './NotFound.module.scss';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { useTranslation } from 'react-i18next';

interface NotFoundProps {
  className?: string;
}

export function NotFound({ className }: NotFoundProps) {
  const { notfound } = styles;
  const { t } = useTranslation();

  return (
    <div className={classNames(notfound, [className])}>
      {t('Страница не существует')}
    </div>
  );
}
