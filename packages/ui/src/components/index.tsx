import React from 'react';

// ─── Button Component ─────────────────────────────────────────────────────────

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger' | 'outline';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-gradient-to-r from-brand-blue to-brand-violet text-white hover:opacity-90 shadow-glow',
  secondary:
    'bg-neutral-800 text-neutral-200 border border-neutral-700 hover:bg-neutral-700',
  ghost:
    'bg-transparent text-neutral-300 hover:bg-neutral-800 hover:text-white',
  danger:
    'bg-error text-white hover:bg-red-600',
  outline:
    'bg-transparent border border-brand-blue text-brand-blue hover:bg-brand-blue/10',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'h-8 px-3 text-sm rounded-md gap-1.5',
  md: 'h-10 px-4 text-sm rounded-lg gap-2',
  lg: 'h-12 px-6 text-base rounded-xl gap-2',
};

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  loading = false,
  icon,
  iconPosition = 'left',
  fullWidth = false,
  children,
  disabled,
  className = '',
  ...rest
}) => {
  const isDisabled = disabled || loading;

  return (
    <button
      {...rest}
      disabled={isDisabled}
      className={[
        'inline-flex items-center justify-center font-medium transition-all duration-200',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900',
        variantClasses[variant],
        sizeClasses[size],
        fullWidth ? 'w-full' : '',
        isDisabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {loading ? (
        <span className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
      ) : (
        iconPosition === 'left' && icon && <span>{icon}</span>
      )}
      {children}
      {!loading && iconPosition === 'right' && icon && <span>{icon}</span>}
    </button>
  );
};

// ─── Badge Component ──────────────────────────────────────────────────────────

export type BadgeVariant = 'default' | 'live' | 'success' | 'warning' | 'error' | 'info';

export interface BadgeProps {
  variant?: BadgeVariant;
  children: React.ReactNode;
  className?: string;
}

const badgeVariantClasses: Record<BadgeVariant, string> = {
  default:  'bg-neutral-700 text-neutral-200',
  live:     'bg-red-600 text-white live-badge',
  success:  'bg-success/20 text-success',
  warning:  'bg-warning/20 text-warning',
  error:    'bg-error/20 text-error',
  info:     'bg-brand-blue/20 text-brand-blue',
};

export const Badge: React.FC<BadgeProps> = ({ variant = 'default', children, className = '' }) => (
  <span
    className={`inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full ${badgeVariantClasses[variant]} ${className}`}
  >
    {variant === 'live' && <span className="w-1.5 h-1.5 bg-white rounded-full" />}
    {children}
  </span>
);

// ─── Card Component ───────────────────────────────────────────────────────────

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

const cardPaddingClasses = {
  none: '',
  sm: 'p-3',
  md: 'p-5',
  lg: 'p-8',
};

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = false,
  padding = 'md',
}) => (
  <div
    className={[
      'glass-card',
      cardPaddingClasses[padding],
      hover ? 'transition-all duration-300 hover:shadow-card-hover hover:border-neutral-600 cursor-pointer' : '',
      className,
    ]
      .filter(Boolean)
      .join(' ')}
  >
    {children}
  </div>
);

// ─── StatWidget Component ─────────────────────────────────────────────────────

export interface StatWidgetProps {
  label: string;
  value: string | number;
  change?: number;
  icon?: React.ReactNode;
  className?: string;
}

export const StatWidget: React.FC<StatWidgetProps> = ({ label, value, change, icon, className = '' }) => {
  const isPositive = change !== undefined && change >= 0;
  return (
    <Card className={className} padding="md">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-neutral-400 mb-1">{label}</p>
          <p className="text-2xl font-bold text-neutral-100">{value}</p>
          {change !== undefined && (
            <p className={`text-sm mt-1 ${isPositive ? 'text-success' : 'text-error'}`}>
              {isPositive ? '▲' : '▼'} {Math.abs(change)}%
            </p>
          )}
        </div>
        {icon && (
          <div className="p-2 bg-brand-blue/10 rounded-lg text-brand-blue">
            {icon}
          </div>
        )}
      </div>
    </Card>
  );
};

// ─── ChannelCard Component ────────────────────────────────────────────────────

export interface ChannelCardProps {
  name: string;
  category: string;
  logoUrl: string;
  isLive?: boolean;
  viewerCount?: number;
  onClick?: () => void;
  className?: string;
}

export const ChannelCard: React.FC<ChannelCardProps> = ({
  name,
  category,
  logoUrl,
  isLive,
  viewerCount,
  onClick,
  className = '',
}) => (
  <div
    onClick={onClick}
    className={`group glass-card p-4 transition-all duration-300 hover:shadow-card-hover hover:border-brand-blue/50 cursor-pointer ${className}`}
  >
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 rounded-lg bg-neutral-800 flex items-center justify-center overflow-hidden flex-shrink-0">
        <img src={logoUrl} alt={name} className="w-full h-full object-cover" onError={(e) => {
          (e.target as HTMLImageElement).style.display = 'none';
        }} />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <p className="font-semibold text-neutral-100 truncate group-hover:text-brand-blue transition-colors">
            {name}
          </p>
          {isLive && <Badge variant="live">LIVE</Badge>}
        </div>
        <p className="text-sm text-neutral-400">{category}</p>
        {viewerCount !== undefined && (
          <p className="text-xs text-neutral-500 mt-0.5">{viewerCount.toLocaleString()} watching</p>
        )}
      </div>
    </div>
  </div>
);
