// ===================================================================== Imports
// @ts-nocheck
import Link from 'next/link';
import clsx from 'clsx';
import { useDispatch } from 'react-redux'
import { setModal } from '../../app/modalSlice'

// ====================================================================== Params
/**
 * @typedef {Object} ButtonProps
 * @prop {string} [action]
 * @prop {string} [url]
 * @prop {string} [target]
 * @prop {string} [variant]
 * @prop {string} [className]
 * @prop {boolean} [disabled]
 * @prop { import('react').MouseEventHandler<HTMLButtonElement> } [onClick]
 * @prop {import('react').ReactNode | string} children
 */

/**
 *
 * @param {ButtonProps} props
 * @returns
 */
// ====================================================================== Export
const Button = ({ action, url, target, variant = '', className, disabled, onClick, children }) => {
  const dispatch = useDispatch()
  const components = {
    a: 'a',
    'next-link': Link,
    button: 'button',
    video: 'button'
  }
  const Action = components.hasOwnProperty(action) && url && !disabled ? components[action] : 'button'
  const attributes = { disabled }
  if (action === 'next-link') {
    attributes['passHref'] = true
  }
  if (onClick && action !== 'next-link') {
    attributes['onClick'] = onClick
  }
  if (action === 'video') {
    attributes['onClick'] = () => dispatch(setModal({ action: 'video', url }))
  }

  return (
    <div className={clsx(className, 'button', disabled ? 'disabled' : undefined, `variant__${variant}`)}>
      <Action
        href={url}
        target={target}
        className={clsx(action !== 'next-link' ? 'button-contents' : '')}
        {...attributes}>
        {action === 'next-link' ? (
          <a href="replace" className="button-contents" onClick={onClick}>
            {children}
          </a>
        ) : (
          children
        )}
      </Action>
    </div>
  );
};

Button.defaultProps = {
  disabled: false,
  onClick: false
};

export default Button;
