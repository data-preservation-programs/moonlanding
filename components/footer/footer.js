// ===================================================================== Imports
import Button from '../button/button'
import TextBlock from '../textblock/textblock'
import ImageBlock from '../imageblock/imageblock'
import ProtocolLabsIcon from '../icons/protocol-labs-icon.js'

// ====================================================================== Params
/**
 * @param {object} logo
 * @param {object} image
 * @param [object] links
 */
// ====================================================================== Export
export default function Footer({ logo = {}, image = {}, links = [] }) {

  const getFooterStyles = (image) => {
    return {
      backgroundImage: `url('${image.src}')`
    }
  }

  return (
    <footer 
      id="site-footer"
      style={getFooterStyles(image)}>
      <div className="footer-content">
        <div className="grid-middle">

          <div 
            className="col-4_sm-9_ti-10" 
            data-push-left="off-0_sm-0_ti-0"
            data-push-right="off-2_sm-3_ti-2">

            <TextBlock block={logo} />

            <ImageBlock block={image} />

          </div>
            
          <div
            className="col-4_sm-7_mi-8_ti-10"
            data-push-left="off-2_sm-0_mi-0_ti-0"
            data-push-right="off-0_sm-5_mi-4_ti-2">
            <div className="links-wrapper">
              <div className="footer-links">
                {links.map((item) => (
                  <Button
                    key={item.button?.text}
                    action={item.button?.action}
                    url={item.button?.url}
                    variant={item.button?.theme}
                    target={item.button?.target}
                    className="footer-link">
                    {item.button?.text}
                  </Button>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  )
}
