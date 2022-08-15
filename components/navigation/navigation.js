// ===================================================================== Imports
import Button from '../button/button'

// ====================================================================== Params
/**
 * @param {any} logo
 * @param {Object[]} navItems
 */
// ====================================================================== Export
export default function Navigation({ logo = {}, navItems = [] }) {
  return (
    <header id="site-header">
      <div className="grid">
        <div className="col">
          <div className="header-content">

            <div className="site-logo">
              <Button
                key={logo.text}
                className={'site-logo-button'}
                variant={logo.theme}
                target={logo.target}
                onClick={() => handleButtonClick(logo)}
                onKeyPress={() => handleButtonClick(logo)}>

                {logo.children ? logo.children : logo.text}

              </Button>
            </div>

            <nav className="navigation">
              {navItems.map((item) => (
                <Button
                  key={item.button.text}
                  className={'nav-item'}
                  variant={item.button.theme}
                  target={item.button.target}
                  onClick={() => handleButtonClick(item.button)}
                  onKeyPress={() => handleButtonClick(item.button)}>

                  {item.button.text}

                </Button>
              ))}
            </nav>

          </div>
        </div>
      </div>
    </header>
  )
}
