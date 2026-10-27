import { forwardRef, type AnchorHTMLAttributes, type ButtonHTMLAttributes, type ReactNode, type Ref } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/cn';

export type ButtonVariant = 'gold' | 'outline' | 'ghost' | 'whatsapp';
export type ButtonSize = 'sm' | 'md' | 'lg';

const base =
  'tap-target group relative inline-flex items-center justify-center gap-2 rounded-xl font-medium tracking-tight transition-all duration-300 ease-out disabled:cursor-not-allowed disabled:opacity-60';

const variants: Record<ButtonVariant, string> = {
  gold:
    'bg-gold-sheen bg-[length:200%_100%] bg-left text-ink shadow-gold hover:bg-right hover:shadow-[0_14px_38px_-10px_rgba(215,174,85,0.6)] active:scale-[0.98]',
  outline:
    'border border-white/15 bg-white/[0.03] text-snow hover:border-gold/60 hover:bg-gold/[0.07] hover:text-gold-light active:scale-[0.98]',
  ghost: 'text-silver hover:text-gold-light',
  whatsapp:
    'border border-emerald-400/30 bg-emerald-400/[0.08] text-emerald-200 hover:border-emerald-400/60 hover:bg-emerald-400/[0.14] hover:text-emerald-100 active:scale-[0.98]',
};

const sizes: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-3 text-[0.95rem]',
  lg: 'px-7 py-3.5 text-base',
};

interface StyleProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
}

type NativeButtonProps = StyleProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'> & { as?: 'button' };

type ExternalLinkProps = StyleProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'className' | 'children'> & { as: 'a'; href: string };

type RouterLinkProps = StyleProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'className' | 'children' | 'href'> & {
    as: 'link';
    to: string;
  };

export type ButtonProps = NativeButtonProps | ExternalLinkProps | RouterLinkProps;

/**
 * One button for the whole site — rendered as a `<button>`, an `<a>` or a
 * router `<Link>` depending on where it points, so the semantics always match
 * the destination.
 */
export const Button = forwardRef<HTMLElement, ButtonProps>(function Button(props, ref) {
  const classes = cn(
    base,
    variants[props.variant ?? 'gold'],
    sizes[props.size ?? 'md'],
    props.className,
  );

  if (props.as === 'link') {
    const { as: _as, variant: _variant, size: _size, className: _className, children, ...rest } = props;
    return (
      <Link ref={ref as Ref<HTMLAnchorElement>} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  if (props.as === 'a') {
    const { as: _as, variant: _variant, size: _size, className: _className, children, ...rest } = props;
    return (
      <a ref={ref as Ref<HTMLAnchorElement>} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  const { as: _as, variant: _variant, size: _size, className: _className, children, ...rest } = props;
  return (
    <button ref={ref as Ref<HTMLButtonElement>} className={classes} {...rest}>
      {children}
    </button>
  );
});
