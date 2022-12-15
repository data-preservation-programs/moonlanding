export default function Modal({}) {
  return (
    <div
      id="modal"
      className={ modal ? 'active' : ''}>

      <section id="modal-video">

        <div className="toolbar">
          <button className="close-button">
            Close
          </button>
        </div>

        { action === 'video' && url && getEmbedUrl() ?
          (
            <div className="video-wrapper">
              <iframe
                src={ getEmbedUrl() }
                className="video"
                allow="autoplay; encrypted-media"
                allowfullscreen>
              </iframe>
            </div>
          ) : (
            <></>
          )
        }

      </sction>

    </div>
  )
}
