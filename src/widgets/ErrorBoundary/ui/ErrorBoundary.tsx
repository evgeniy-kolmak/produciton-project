import styles from './ErrorBoundary.module.scss';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { useRouteError } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';

export function ErrorBoundary() {
  const { errorboundary, message, button } = styles;
  const error = useRouteError() as Error;
  const { t } = useTranslation();

  const onReload = () => location.reload();

  return (
    <div className={classNames(errorboundary)}>
      <p>{t('Что-то пошло не так')}</p>
      <pre className={classNames(message)}>
        {error?.message ? error.message : t('Непредвиденная ошибка')}
      </pre>
      <Button className={classNames(button)} onClick={onReload}>
        {t('Попробуйте снова')}
      </Button>
    </div>
  );
}
