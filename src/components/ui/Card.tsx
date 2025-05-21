'use client';

import React from 'react';
import Link from 'next/link'; // Import NextLink for proper client-side routing if href is internal
import styles from './Card.module.css';

export interface CardPropsBase {
  variant?: 'default' | 'interactive' | 'flat';
  padding?: 'none' | 'small' | 'medium' | 'large';
  shadow?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  children?: React.ReactNode;
}

// Props for when Card is a div
export interface CardDivProps extends CardPropsBase, React.HTMLAttributes<HTMLDivElement> {
  href?: undefined;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

// Props for when Card is an anchor (using NextLink for internal links)
export interface CardLinkProps extends CardPropsBase, Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  href: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

type CardComponentProps = CardDivProps | CardLinkProps;

const Card = React.forwardRef<HTMLDivElement | HTMLAnchorElement, CardComponentProps>((
  {
    variant = 'default',
    padding = 'medium',
    shadow = 'md',
    href,
    onClick,
    className,
    children,
    ...props
  },
  ref
) => {
  const cardClasses = [
    styles.card,
    styles[variant],
    styles[`padding-${padding}`],
    shadow !== 'none' ? styles[`shadow-${shadow}`] : '',
    (href || onClick) ? styles.clickable : '',
    className || '',
  ].join(' ').trim();

  if (href) {
    // Check if it's an external link
    const isExternal = href.startsWith('http') || href.startsWith('//');
    const linkProps = {
      ref: ref as React.ForwardedRef<HTMLAnchorElement>,
      className: cardClasses,
      onClick: onClick as React.MouseEventHandler<HTMLAnchorElement> | undefined,
      ...props as Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>,
    };

    if (isExternal) {
      return (
        <a href={href} {...linkProps} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    }
    return (
      <Link href={href} {...linkProps}>
        {children}
      </Link>
    );
  }

  return (
    <div
      ref={ref as React.ForwardedRef<HTMLDivElement>}
      className={cardClasses}
      onClick={onClick as React.MouseEventHandler<HTMLDivElement> | undefined}
      role={onClick ? 'button' : undefined} // Add role button if clickable div
      tabIndex={onClick ? 0 : undefined} // Make clickable div focusable
      {...props as React.HTMLAttributes<HTMLDivElement>}
    >
      {children}
    </div>
  );
});

Card.displayName = 'Card';

export default Card;
