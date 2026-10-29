import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Styles/HeritageButton.css';

interface HeritageButtonProps {
  children: React.ReactNode;
  variant?: 'terracotta' | 'parchment' | 'outline';
  to?: string;
  onClick?: () => void;
  className?: string;
  icon?: boolean;
}

export const HeritageButton: React.FC<HeritageButtonProps> = ({
  children,
  variant = 'terracotta',
  to,
  onClick,
  className = '',
  icon = true,
}) => {
  const variantClass = `hbtn-${variant}`;
  const combinedClass = `hbtn1 ${variantClass} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {icon && (
        <ArrowRight className="hbtn2 w-4 h-4" strokeWidth={1.8} />
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClass}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} type="button" className={combinedClass}>
      {content}
    </button>
  );
};
