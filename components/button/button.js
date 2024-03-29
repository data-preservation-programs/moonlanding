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

  const getButtonDetail = () => {
    return (
      <svg 
        width="10" 
        height="51"
        viewBox="0 0 10 51"
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="button-detail">
        <path 
          d="M 1 0 V 16.1121 C 1.872 17.2016 2.114 18.223 2.761 19.1081 L 7.53 25.1001 C 8.177 25.9172 8.5 26.8705 8.5 27.9599 V 46.0721 C 8.5 48.5 7.5 49 5.5 49 H 0" 
          stroke="#D0DFDC"
          strokeWidth="3" />
      </svg>
    );
  }

  return (
    <div className={clsx(className, 'button', disabled ? 'disabled' : undefined, `variant__${variant}`)}>

      { variant === 'cta' && getButtonDetail() }

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

      { variant === 'cta-solid' && <div className="button-detail-after"></div> }

    </div>
  );
};

Button.defaultProps = {
  disabled: false,
  onClick: false
};

export default Button;
