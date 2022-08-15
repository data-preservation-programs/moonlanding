// ===================================================================== Imports
import Button from '../button/button'

// ====================================================================== Params
/**
 * @param {string} copyright
 */
// ====================================================================== Export
export default function Footer({ copyright = [] }) {
  return (
    <footer id="site-footer">
      <div className="grid">
        <div className="col-8" data-push-left="off-2">
          <div className="footer-content">
            <div className="footer-copyright">
              {copyright.map((item) => (
                <Button
                  key={item.button?.text}
                  variant={item.button?.theme}
                  target={item.button?.target}
                  onClick={() => handleButtonClick(item.button)}
                  onKeyPress={() => handleButtonClick(item.button)}>

                  {item.button?.text}

                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}