import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  href?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  href, 
  onClick 
}) => {
  const baseStyles = 'inline-block font-medium rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantStyles = {
    primary: 'bg-flame text-white hover:bg-flame/90 focus:ring-flame',
    secondary: 'bg-navy text-white hover:bg-navy/90 focus:ring-navy',
    outline: 'bg-transparent border-2 border-flame text-flame hover:bg-flame/10 focus:ring-flame',
  };
  
  const sizeStyles = {
    sm: 'py-1 px-4 text-sm',
    md: 'py-2 px-6 text-base',
    lg: 'py-3 px-8 text-lg',
  };
  
  const styles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;
  
  // Button animation properties
  const buttonMotion = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.98 },
    transition: { type: "spring", stiffness: 400, damping: 17 }
  };
  
  if (href) {
    return (
      <motion.a 
        href={href} 
        className={styles}
        {...buttonMotion}
      >
        {children}
      </motion.a>
    );
  }
  
  return (
    <motion.button 
      onClick={onClick} 
      className={styles}
      {...buttonMotion}
    >
      {children}
    </motion.button>
  );
};

export default Button;