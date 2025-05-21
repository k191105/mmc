'use client';

import React, { useId } from 'react';
import styles from './Input.module.css';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  inputClassName?: string; // For styling the input element itself
  wrapperClassName?: string; // For styling the wrapper div
}

const Input = React.forwardRef<HTMLInputElement, InputProps>((
  {
    label,
    type = 'text',
    error,
    leftIcon,
    rightIcon,
    className, // This will be applied to the main wrapper
    inputClassName,
    wrapperClassName,
    id,
    ...props
  },
  ref
) => {
  const generatedId = useId();
  const inputId = id || generatedId;

  return (
    <div className={`${styles.inputContainer} ${className || ''}`}>
      {label && (
        <label htmlFor={inputId} className={styles.label}>
          {label}
        </label>
      )}
      <div className={`${styles.inputWrapper} ${leftIcon ? styles.hasLeftIcon : ''} ${rightIcon ? styles.hasRightIcon : ''} ${error ? styles.hasError : ''} ${wrapperClassName || ''}`}>
        {leftIcon && <span className={`${styles.icon} ${styles.leftIcon}`}>{leftIcon}</span>}
        <input
          type={type}
          id={inputId}
          ref={ref}
          className={`${styles.input} ${inputClassName || ''}`}
          aria-invalid={!!error}
          aria-describedby={error ? `${inputId}-error` : undefined}
          {...props}
        />
        {rightIcon && <span className={`${styles.icon} ${styles.rightIcon}`}>{rightIcon}</span>}
      </div>
      {error && (
        <p id={`${inputId}-error`} className={styles.errorMessage} role="alert">
          {error}
        </p>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
