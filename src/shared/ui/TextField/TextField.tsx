import { InputHTMLAttributes, forwardRef } from 'react';
import styles from './TextField.module.scss';
import { classNames } from 'shared/lib/helpers/classNames/classNames';

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  labelText: string;
}

export const TextFieldRef = forwardRef<HTMLInputElement, TextFieldProps>(
  function TextField(props: TextFieldProps, ref) {
    const { textfield, label, input } = styles;
    const { className, labelText, ...otherProps } = props;

    return (
      <div className={classNames(textfield, [className])}>
        <label className={classNames(label)}>{labelText}</label>
        <input {...otherProps} ref={ref} className={classNames(input)} />
      </div>
    );
  }
);
