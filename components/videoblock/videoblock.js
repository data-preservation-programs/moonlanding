// ===================================================================== Imports
import { useDispatch } from 'react-redux'
import { setModal } from '../../app/modalSlice'
import clsx from 'clsx'
import Image from 'next/image'
import PlayIcon from '../icons/play-icon.js'
// ====================================================================== Params
/**
 * @param {Object} props.block
 */
// ====================================================================== Export
export default function VideoBlock({ block }) {
  const dispatch = useDispatch()
  return (
    <div className="block video-block">
      {block.url && (
        <>
          <div
            className="video-preview-container"
            onClick={() => dispatch(setModal({ action: 'video', url: block.url }))}>

            <div className={clsx('video-overlay', block.tint ? 'video-overlay-tint' : '')}>
              <PlayIcon className="video-play-icon" />
            </div>

            <div className="video-preview-image">
              <Image unoptimized alt={block.alt} src={block.preview_image} layout="fill" />
            </div>

          </div>

          <div className="video-subtext">
            { block.subtext }
          </div>
        </>
      )}
    </div>
  )
}
