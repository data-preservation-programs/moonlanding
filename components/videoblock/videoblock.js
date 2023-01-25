// ===================================================================== Imports
import { useDispatch } from 'react-redux'
import { setModal } from '../../app/modalSlice'
import clsx from 'clsx'
import Image from 'next/image'
import PlayIcon from '../icons/play-icon.js'
// ====================================================================== Params
/**
 * @param {Object} props.videolist
 */
// ====================================================================== Export
export default function VideoBlock({ videolist }) {
  const dispatch = useDispatch()
  const columns = videolist.videos_per_row ? videolist.videos_per_row : 1
  return (
    <div className={clsx('video-list-block', `columns-${columns}`)}>
      {videolist && videolist.videos.map((block, i) => (
        <div
          key={`video-${i}`}
          className="block video-block">
          {block && block.url && (
            <>
              <div
                className="video-preview-container"
                onClick={() => dispatch(setModal({ action: 'video', url: block.url }))}>

                <div className={clsx('video-overlay', block.tint ? 'video-overlay-tint' : '')}>
                  <PlayIcon className="video-play-icon" />
                </div>

                {block.preview_image && (
                  <div className="video-preview-image">
                    <Image unoptimized alt={block.alt} src={block.preview_image} layout="fill" />
                  </div>
                )}

              </div>

              <div className="video-subtext">
                { block.subtext }
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  )
}
