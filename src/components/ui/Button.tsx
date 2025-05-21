'use client';

import React from 'react';
import Link from 'next/link';
import styles from './Button.module.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'small' | 'medium' | 'large';
  href?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((
  {
    variant = 'primary',
    size = 'medium',
    href,
    children,
    type = 'button',
    disabled = false,
    leftIcon,
    rightIcon,
    fullWidth = false,
    className,
    ...props
  },
  ref
) => {
  const buttonClasses = [
    styles.button,
    styles[variant],
    styles[size],
    fullWidth ? styles.fullWidth : '',
    disabled ? styles.disabled : '',
    className || '',
  ].join(' ').trim();

  const content = (
    <>
      {leftIcon && <span className={styles.iconWrapper}>{leftIcon}</span>}
      {children}
      {rightIcon && <span className={styles.iconWrapper}>{rightIcon}</span>}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={buttonClasses} ref={ref as any} {...(props as any)}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={buttonClasses}
      disabled={disabled}
      ref={ref}
      {...props}
    >
      {content}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
