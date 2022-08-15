// ===================================================================== Imports
import clsx from 'clsx';
import Image from 'next/image';
// ====================================================================== Params
/**
 * @param {Object} props.block
 */
// ====================================================================== Export
export default function ImageBlock({ block }) {
  const theme = block.theme && block.theme !== 'none' ? `theme__${block.theme}` : ''
  return (
    <>
      {block.src && (
        <div
          id={block.id}
          className={clsx('block', 'image-block', theme)}>

          <Image unoptimized alt={block.alt} src={block.src} layout="fill" />

          <div className={'image-label'}>{block.label}</div>

        </div>
      )}
    </>
  );
}
