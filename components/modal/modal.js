// ====================================================================== Import
import { useSelector, useDispatch } from 'react-redux'
import { setModal } from '../../app/modalSlice'

// ====================================================================== Export
export default function Modal({}) {
  const modal = useSelector((state) => state.modal.modal)
  const dispatch = useDispatch()
  const action = modal ? modal.action : ''
  const link = modal ? modal.url : ''

  // /////////////////////////////////////////////////////////// Parse Video URL
  // ---------------------------------- https://gist.github.com/yangshun/9892961
  const parseVideoUrl = (url) => {
    const matched = url.match(/(https?:\/\/|\/\/|)(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|dailymotion.com)\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(&\S+)?/)
    if (!matched) { return { type: false, id: false, time: false } }
    const parsed = new URL(`https://placeholder-for-parsing.com/${url.split('/').pop()}`)
    const domain = matched[3]
    let type = ''
    if (domain.includes('youtu')) { type = 'youtube' }
    if (domain.includes('vimeo')) { type = 'vimeo' }
    if (domain.includes('dailymotion')) { type = 'dailymotion' }
    return { type, id: matched[6], time: parsed.searchParams.get('t') }
  }
  // ///////////////////////////////////////////////////// Generate an embed URL
  // ---------------------------------------------------------- Youtube or Vimeo
  const buildVideoEmbedUrl = (parsed) => {
    const type = parsed.type
    const id = parsed.id
    const time = parsed.time
    let url
    switch (type) {
      case 'youtube' : url = `//www.youtube.com/embed/${id}${(time ? `?start=${time}` : '')}`; break
      case 'vimeo' : url = `//player.vimeo.com/video/${id}${(time ? `/#=${time}` : '')}`; break
      default : url = false
    }
    return url
  }

  const getEmbedUrl = (url) => {
    return `${buildVideoEmbedUrl(parseVideoUrl(url))}?autoplay=1`
  }

  const handleModalClose = (e) => {
    if (e.type === 'click' || (e.type === 'keyup' && (e.key === 'Escape' || e.keyCode === 27))) {
      dispatch(setModal(false))
    }
  }

  return (
    <div
      id="site-modal"
      tabIndex="1"
      className={ modal ? 'active' : ''}
      onClick={handleModalClose}
      onKeyUp={handleModalClose}>

      <section id="site-modal-video">

        <div className="modal-toolbar">
          <button
            className="modal-close-button"
            onClick={handleModalClose}>
            Close
          </button>
        </div>

        { action === 'video' && link && getEmbedUrl(link) ?
          (
            <div className="modal-video-wrapper">
              <iframe
                src={ getEmbedUrl(link) }
                className="modal-video"
                allow="autoplay; encrypted-media"
                allowFullScreen>
              </iframe>
            </div>
          ) : (
            <></>
          )
        }

      </section>

    </div>
  )
}
