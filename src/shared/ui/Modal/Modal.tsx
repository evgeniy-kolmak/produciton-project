import { ReactNode, useCallback, useEffect } from 'react';
import styles from './Modal.module.scss';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { Button, ThemeButton } from '../Button/Button';
import CloseIcon from 'shared/assets/icons/close.svg';

interface ModalProps {
  className?: string;
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export function Modal(props: ModalProps) {
  const { modal, overlay, content, opened, icon, button } = styles;
  const { className, children, isOpen, onClose } = props;

  const onContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }

    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onKeyDown]);

  return (
    <div className={classNames(modal, [className], { [opened]: isOpen })}>
      <div onClick={onClose} className={classNames(overlay)}>
        <div onClick={onContentClick} className={classNames(content)}>
          <Button className={classNames(button)} theme={ThemeButton.ICON}>
            <CloseIcon onClick={onClose} className={classNames(icon)} />
          </Button>
          {children}
        </div>
      </div>
    </div>
  );
}
