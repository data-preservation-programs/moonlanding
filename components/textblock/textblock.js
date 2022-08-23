// ===================================================================== Imports
import { useCallback } from 'react';
import { useRouter } from 'next/router';
import clsx from 'clsx';

import Button from '../button/button';
import EarthIcon from '../icons/earth-icon';

// ====================================================================== Params
/**
 * @param {Object} block
 */
// ====================================================================== Export
export default function TextBlock({ block }) {
  const router = useRouter();
  const format = block.format || 'medium';
  const theme = block.theme;
  const hasDescription = typeof block.description === 'string' || Array.isArray(block.description);
  const tracking = {};
  if (typeof block.cta === 'object') {
    if (block?.cta?.event) {
      tracking.event = countly.events[block.cta.event];
    }
    if (block?.cta?.ui) {
      tracking.ui = countly.ui[block.cta.ui];
    }
    if (block?.cta?.action) {
      tracking.action = block.cta.action;
    }
  }
  if (format === 'header') {

  }

  // ================================================================= Functions
  const formatDescription = text => {
    if (Array.isArray(text)) {
      return (
        <>
          {text.map(item => (
            <p key={item} dangerouslySetInnerHTML={{ __html: item }}></p>
          ))}
        </>
      );
    }
    return text;
  };

  // const getLabelWithIcon = label => {
  //   if (label) {
  //     const elements = label.split(/[oO]/gm);
  //     return elements.join('')
  //   }
  //   return false
  // }

  const getHeadingType = block => {
    switch (block?.format) {
      case 'header':
        return <h1 className={clsx('h1', 'heading')}>{block?.heading}</h1>;
      case 'small':
        return <h3 className={clsx('h3', 'heading')}>{block?.heading}</h3>;
      default:
        return <h2 className={clsx('h2', 'heading')}>{block?.heading}</h2>;
    }
  };

  const handleButtonClick = useCallback(
    cta => {
      if (cta?.url) {
        router.push(cta.url);
      }
    },
    [router]
  );

  // ==================================================================== Export
  // const label = block.format === 'header' ? getLabelWithIcon(block.label) : block.label
  return (
    <div className={clsx('block text-block', `format__${format}`, `theme__${theme}`)}>
      {block.label || block.format === 'header' && (
        <div className={'label'}>
          {block.format === 'header' ? (
            <div className="label-contents">
              <span>FILEC</span>
              <EarthIcon />
              <span>IN</span>
            </div>
          ) : (
            <span className="label-contents">{block.label}</span>
          )}
        </div>
      )}

      {typeof block?.heading === 'string' && getHeadingType(block)}

      {typeof block?.subheading === 'string' && (
        <div className={'subheading'} dangerouslySetInnerHTML={{ __html: block?.subheading }}></div>
      )}

      {hasDescription && <div className={'description'} dangerouslySetInnerHTML={{ __html: block?.description }}></div>}

      <div className="button-row">
        {Array.isArray(block?.cta) && (
          block.cta.map((cta) => (
            <Button
              key={cta.button.text}
              action={cta.button.action}
              url={cta.button.url}
              target={cta.button.target}
              variant={cta.button.theme}
              className={'cta'}>

              {cta.button.text}

            </Button>
          ))
        )}
      </div>

    </div>
  );
}
