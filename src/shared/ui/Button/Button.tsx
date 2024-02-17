import { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.scss';
import { classNames } from 'shared/lib/helpers/classNames';

export enum ThemeButton {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  DEFAULT = 'default',
  ERROR = 'error',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export function Button(props: ButtonProps) {
  const { button } = styles;
  const {
    theme = ThemeButton.PRIMARY,
    className,
    children,
    ...otherProps
  } = props;

  return (
    <button
      {...otherProps}
      className={classNames(button, [styles[theme], className])}
    >
      {children}
    </button>
  );
}
