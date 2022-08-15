// @ts-nocheck
import Link from 'next/link';
import clsx from 'clsx';

/**
 * @typedef {Object} ButtonProps
 * @prop {string} [className]
 * @prop { import('react').MouseEventHandler<HTMLButtonElement> } [onClick]
 * @prop {string} [href]
 * @prop {import('react').ButtonHTMLAttributes<HTMLButtonElement>["type"]} [type]
 * @prop {boolean} [disabled]
 * @prop {boolean} [openInNewWindow]
 * @prop {import('react').ReactNode | string} children
 */

/**
 *
 * @param {ButtonProps} props
 * @returns
 */
const Button = ({ className, onClick, href, type, disabled, openInNewWindow, children, variant = '' }) => {
  return (
    <div className={clsx(className, 'button', disabled ? 'disabled' : undefined, `variant__${variant}`)}>
      {href && !disabled ? (
        openInNewWindow ? (
          <a href={href} onClick={onClick} target="_blank" rel="noreferrer">
            {children}
          </a>
        ) : (
          <Link href={href} passHref>
            <a href="replace" tabIndex={0} onClick={onClick} className="button-contents">
              {children}
            </a>
          </Link>
        )
      ) : (
        <button className="button-contents" type={type} onClick={onClick} disabled={disabled}>
          {children}
        </button>
      )}
    </div>
  );
};

Button.defaultProps = {
  type: 'button',
  openInNewWindow: false,
  disabled: false,
};

export default Button;
