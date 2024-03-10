import { TextFieldRef as TextField } from 'shared/ui/TextField/TextField';
import styles from './LoginForm.module.scss';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { AppLink } from 'shared/ui/AppLink/AppLink';

interface LoginFormProps {
  className?: string;
}

type Inputs = {
  username: string;
  password: string;
};

export function LoginForm({ className }: LoginFormProps) {
  const { loginform, fields, links, error, button, title } = styles;
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={classNames(loginform, [className])}
    >
      <p className={classNames(title)}>{t('Вход в личный кабинет')}</p>
      <hr />
      <div className={classNames(fields)}>
        <TextField
          type="text"
          labelText={t('Логин')}
          placeholder={t('Логин')}
          {...register('username', {
            required: t('Обязательное поле'),
          })}
        />
        <ErrorMessage
          name="username"
          errors={errors}
          render={({ message }) => (
            <p className={classNames(error)}>{message}</p>
          )}
        />
        <TextField
          type="password"
          labelText={t('Пароль')}
          placeholder={t('Пароль')}
          {...register('password', {
            required: t('Обязательное поле'),
          })}
        />
        <ErrorMessage
          name="password"
          errors={errors}
          render={({ message }) => (
            <p className={classNames(error)}>{message}</p>
          )}
        />
      </div>
      <Button className={classNames(button)}>{t('Войти')}</Button>
      <div className={classNames(links)}>
        <AppLink to="">{t('Забыли пароль')}</AppLink>
        <AppLink to="">{t('Регистрация')}</AppLink>
      </div>
    </form>
  );
}
