import { Button, ThemeButton } from 'shared/ui/Button/Button';
import styles from './Navbar.module.scss';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal/Modal';
import { useCallback, useState } from 'react';
import { LoginForm } from 'features/AuthByUsername/LoginForm/LoginForm';

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  const { navbar } = styles;
  const { t } = useTranslation();
  const [isOpenModal, setOpenModal] = useState(false);

  const handlerModal = useCallback(() => {
    setOpenModal((prev) => !prev);
  }, []);

  return (
    <div className={classNames(navbar, [className])}>
      <Modal isOpen={isOpenModal} onClose={handlerModal}>
        <LoginForm />
      </Modal>
      <Button onClick={handlerModal} theme={ThemeButton.DEFAULT}>
        {t('Войти')}
      </Button>
    </div>
  );
}
