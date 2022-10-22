// ===================================================================== Imports
import Button from '../button/button'
import ProtocolLabsIcon from '../icons/protocol-labs-icon.js'

// ====================================================================== Params
/**
 * @param {string} copyright
 */
// ====================================================================== Export
export default function Footer({ copyright = [] }) {
  return (
    <footer id="site-footer">
      <div className="grid-middle-noGutter footer-grid">
        <div className="col-10_sm-12" data-push-left="off-1_sm-0">
          <div className="footer-content">
            <div className="footer-copyright">
              {copyright.map((item, index) => (
                <Button
                  key={item.button?.text}
                  action={item.button?.action}
                  url={item.button?.url}
                  variant={item.button?.theme}
                  target={item.button?.target}>

                  {index === 0 ? (
                    <>
                      <ProtocolLabsIcon className="pl-logo" />
                      <span>{item.button?.text}</span>
                    </>
                  ) : (
                    item.button?.text
                  )}

                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
