import React from 'react';
import { ButtonProps } from '../../types';

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary', size = 'md', loading = false, children, disabled, ...props
}) => (
  <button role="button" aria-busy={loading} disabled={disabled || loading}
    data-variant={variant} data-size={size} {...props}>
    {loading ? <span aria-hidden>Loading...</span> : children}
  </button>
);
